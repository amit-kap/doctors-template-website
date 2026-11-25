import { site, type Lang, type TemplateId } from './site.config';
import he from './content/he';
import en from './content/en';
import type { Content } from './content/types';

export const content: Record<Lang, Content> = { he, en };

const RTL = new Set(['he', 'ar', 'yi', 'fa']);
export const dirOf = (lang: string) => (RTL.has(lang) ? 'rtl' : 'ltr');

export const PAGES = ['home', 'about', 'services', 'appointment', 'accessibility', 'privacy'] as const;
export type PageId = (typeof PAGES)[number];

export const TEMPLATES: TemplateId[] = ['clinic', 'editorial', 'warm', 'landing', 'journey'];

/** Everything a component needs to render in the right language and template. */
export interface Ctx {
  lang: Lang;
  template: TemplateId;
  /** '' for the configured template, '/t/<id>' for the other two in showcase mode. */
  prefix: string;
  page: PageId;
  t: Content;
}

export const prefixFor = (template: TemplateId) => (template === site.template ? '' : `/t/${template}`);

/** Build an internal link. Keeps the current template prefix; switches language if asked. */
export function href(ctx: Pick<Ctx, 'prefix' | 'lang'>, page: PageId, lang: Lang = ctx.lang, hash = '') {
  const langSeg = lang === site.languages[0] ? '' : `/${lang}`;
  const pageSeg = page === 'home' ? '/' : `/${page}/`;
  return `${ctx.prefix}${langSeg}${pageSeg}${hash}`;
}

/** The "book" target: the clinic's own booking system (new window) if set, else our request form. */
export function bookLink(ctx: Pick<Ctx, 'prefix' | 'lang'>): { href: string; external: boolean } {
  const url = site.contact.bookingUrl;
  return url ? { href: url, external: true } : { href: href(ctx, 'appointment'), external: false };
}

export const img = (key: string) => site.images[key];

export const whatsappHref = (text = '') =>
  site.contact.whatsapp ? `https://wa.me/${site.contact.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}` : '';

export const mapsHref = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.contact.mapsQuery)}`;
export const wazeHref = () => `https://waze.com/ul?q=${encodeURIComponent(site.contact.mapsQuery)}&navigate=yes`;
export const registerHref = () => 'https://www.gov.il/he/service/licensed-medical-practitioners';

/** Days with their hours, Sunday first (Israeli week). */
export function weekHours() {
  return [0, 1, 2, 3, 4, 5, 6].map((day) => {
    const h = site.hours.find((x) => x.day === day);
    return { day, open: h?.open, close: h?.close };
  });
}

export function formatDate(iso: string, lang: Lang) {
  return new Intl.DateTimeFormat(lang === 'he' ? 'he-IL' : 'en-GB', { dateStyle: 'long' }).format(new Date(iso));
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
/** Escape text and mark Latin-script runs as English inside Hebrew (WCAG 3.1.2). Use with set:html. */
export function latin(text: string, lang: string = 'he') {
  const safe = esc(text);
  if (lang !== 'he') return safe;
  return safe.replace(/[A-Za-z][A-Za-z0-9.\-\/' ]*[A-Za-z0-9.]/g, (m) => `<span class="lt" lang="en" dir="ltr">${m}</span>`);
}
