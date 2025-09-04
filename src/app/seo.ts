export interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

export function buildMeta(meta: Record<string, string>): MetaTag[] {
  return Object.entries(meta).map(([name, content]) => ({ name, content }));
}

export function websiteJsonLd(data: { name: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: data.name,
    url: data.url,
  };
}

export function localBusinessJsonLd(data: {
  name: string;
  url: string;
  address: string;
  telephone: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    ...data,
  };
}

export function articleJsonLd(article: {
  headline: string;
  datePublished: string;
  author: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    ...article,
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
