type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(eventName: string, params?: EventParams): void {
  const w = window as Window & { dataLayer?: unknown[] };
  if (!w.dataLayer) return;
  w.dataLayer.push({ event: eventName, ...params });
}
