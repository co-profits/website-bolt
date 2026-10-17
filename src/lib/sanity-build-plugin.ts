import type { Plugin } from 'vite';
import { createClient } from '@sanity/client';

const VIRTUAL_ID = 'virtual:sanity-data';
const RESOLVED_ID = '\0' + VIRTUAL_ID;

interface PostSummary {
  _id: string;
  title: string;
  slug: string;
  language: string;
  excerpt: string;
  keyTakeaway: string;
  publishedAt: string;
  _updatedAt: string;
  authorName: string;
  categories: string[];
  formats: string[];
  seoTitle: string;
  seoDescription: string;
  coverImage: { alt: string; url: string; lqip: string; width: number; height: number } | null;
}

interface PostDetail extends PostSummary {
  authorRole: string;
  body: unknown[];
  faqs: { question: string; answer: string }[];
  videoUrl: string;
  audioUrl: string;
  focusKeyword: string;
  canonicalOverride: string;
  seoNoIndex: boolean;
  ogImage: { url: string } | null;
  infographics: { alt: string; caption: string; url: string }[];
  pdfs: { title: string; url: string; originalFilename: string; size: number }[];
  translationOf: { slug: string; language: string; title: string } | null;
}

interface SanityData {
  posts: Record<string, PostDetail>;
  lists: { en: PostSummary[]; es: PostSummary[] };
}

const LIST_GROQ = `*[_type == "post"
  && language == $language
  && defined(slug.current)
  && seoNoIndex != true
  && defined(publishedAt)
  && publishedAt <= now()
] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  language,
  excerpt,
  keyTakeaway,
  publishedAt,
  _updatedAt,
  authorName,
  categories,
  formats,
  seoTitle,
  seoDescription,
  coverImage { alt, asset->{ url, metadata { lqip, dimensions } } }
}`;

const DETAIL_GROQ = `*[_type == "post"
  && language == $language
  && slug.current == $slug
  && seoNoIndex != true
  && defined(publishedAt)
  && publishedAt <= now()
][0]{
  _id,
  title,
  "slug": slug.current,
  language,
  excerpt,
  keyTakeaway,
  publishedAt,
  _updatedAt,
  authorName,
  authorRole,
  categories,
  formats,
  seoTitle,
  seoDescription,
  seoNoIndex,
  canonicalOverride,
  focusKeyword,
  videoUrl,
  audioUrl,
  coverImage { alt, asset->{ url, metadata { dimensions, lqip } } },
  ogImage { asset->{ url } },
  body[]{
    ...,
    _type == "image" => {
      ...,
      alt,
      caption,
      asset->{ url, metadata { dimensions } }
    }
  },
  faqs[]{ question, answer },
  infographics[]{ alt, caption, asset->{ url, metadata { dimensions } } },
  pdfs[]{ title, asset->{ url, originalFilename, size } },
  translationOf->{ "slug": slug.current, language, title }
}`;

function normalizeSummary(raw: Record<string, unknown>): PostSummary {
  const cover = raw.coverImage as { alt: string; asset?: { url: string; metadata?: { lqip: string; dimensions?: { width: number; height: number } } } } | null;
  return {
    _id: raw._id as string,
    title: raw.title as string,
    slug: raw.slug as string,
    language: raw.language as string,
    excerpt: (raw.excerpt as string) || '',
    keyTakeaway: (raw.keyTakeaway as string) || '',
    publishedAt: raw.publishedAt as string,
    _updatedAt: raw._updatedAt as string,
    authorName: (raw.authorName as string) || '',
    categories: (raw.categories as string[]) || [],
    formats: (raw.formats as string[]) || [],
    seoTitle: (raw.seoTitle as string) || '',
    seoDescription: (raw.seoDescription as string) || '',
    coverImage: cover?.asset ? {
      alt: cover.alt || '',
      url: cover.asset.url,
      lqip: cover.asset.metadata?.lqip || '',
      width: cover.asset.metadata?.dimensions?.width || 0,
      height: cover.asset.metadata?.dimensions?.height || 0,
    } : null,
  };
}

function normalizeDetail(raw: Record<string, unknown>): PostDetail {
  const base = normalizeSummary(raw);
  const og = raw.ogImage as { asset?: { url: string } } | null;
  const translation = raw.translationOf as { slug: string; language: string; title: string } | null;
  return {
    ...base,
    authorRole: (raw.authorRole as string) || '',
    body: (raw.body as unknown[]) || [],
    faqs: (raw.faqs as { question: string; answer: string }[]) || [],
    videoUrl: (raw.videoUrl as string) || '',
    audioUrl: (raw.audioUrl as string) || '',
    focusKeyword: (raw.focusKeyword as string) || '',
    canonicalOverride: (raw.canonicalOverride as string) || '',
    seoNoIndex: (raw.seoNoIndex as boolean) || false,
    ogImage: og?.asset ? { url: og.asset.url } : null,
    infographics: ((raw.infographics as { alt: string; caption: string; asset?: { url: string } }[]) || []).map((i) => ({
      alt: i.alt || '',
      caption: i.caption || '',
      url: i.asset?.url || '',
    })),
    pdfs: ((raw.pdfs as { title: string; asset?: { url: string; originalFilename: string; size: number } }[]) || []).map((p) => ({
      title: p.title || '',
      url: p.asset?.url || '',
      originalFilename: p.asset?.originalFilename || '',
      size: p.asset?.size || 0,
    })),
    translationOf: translation,
  };
}

async function fetchSanityData(): Promise<SanityData> {
  const projectId = process.env.SANITY_PROJECT_ID || 'tue7ygdx';
  const dataset = process.env.SANITY_DATASET || 'production';
  const apiVersion = process.env.SANITY_API_VERSION || '2025-02-19';

  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    perspective: 'published',
  });

  const posts: Record<string, PostDetail> = {};
  const lists: { en: PostSummary[]; es: PostSummary[] } = { en: [], es: [] };

  try {
    for (const language of ['en', 'es'] as const) {
      const rawList = await client.fetch(LIST_GROQ, { language });
      const summaries = (rawList as Record<string, unknown>[]).map(normalizeSummary);
      lists[language] = summaries;

      for (const summary of summaries) {
        try {
          const rawDetail = await client.fetch(DETAIL_GROQ, { language, slug: summary.slug });
          if (rawDetail) {
            const detail = normalizeDetail(rawDetail as Record<string, unknown>);
            posts[`${language}:${summary.slug}`] = detail;
          }
        } catch {
          // Skip individual article fetch failures
        }
      }
    }
  } catch {
    // Build without env or network failure — return empty data, site stays up
  }

  return { posts, lists };
}

export function sanityBuildPlugin(): Plugin {
  let cachedData: SanityData | null = null;

  return {
    name: 'sanity-build-data',
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID;
    },
    async load(id) {
      if (id !== RESOLVED_ID) return;
      if (!cachedData) {
        cachedData = await fetchSanityData();
      }
      return `export default ${JSON.stringify(cachedData)};`;
    },
  };
}
