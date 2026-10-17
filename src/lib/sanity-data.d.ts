declare module 'virtual:sanity-data' {
  export interface PostSummary {
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

  export interface PostDetail extends PostSummary {
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

  export interface SanityData {
    posts: Record<string, PostDetail>;
    lists: { en: PostSummary[]; es: PostSummary[] };
  }

  const data: SanityData;
  export default data;
}
