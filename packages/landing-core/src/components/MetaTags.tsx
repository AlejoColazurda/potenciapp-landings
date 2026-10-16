import React from 'react';
import type { Seo } from '../schemas/base';

export interface MetaTagsProps extends Seo {
  noIndex?: boolean;
}

export function MetaTags({ title, description, ogImage, noIndex = true }: MetaTagsProps): React.JSX.Element {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </>
  );
}

export function generateMetaTagsHtml(props: MetaTagsProps): string {
  const { title, description, ogImage, noIndex = true } = props;
  
  let html = `<title>${title}</title>\n`;
  html += `<meta name="description" content="${description}" />\n`;
  
  if (noIndex) {
    html += `<meta name="robots" content="noindex, nofollow" />\n`;
  }
  
  html += `<meta property="og:title" content="${title}" />\n`;
  html += `<meta property="og:description" content="${description}" />\n`;
  
  if (ogImage) {
    html += `<meta property="og:image" content="${ogImage}" />\n`;
  }
  
  html += `<meta property="og:type" content="website" />\n`;
  html += `<meta name="twitter:card" content="summary_large_image" />\n`;
  html += `<meta name="twitter:title" content="${title}" />\n`;
  html += `<meta name="twitter:description" content="${description}" />\n`;
  
  if (ogImage) {
    html += `<meta name="twitter:image" content="${ogImage}" />\n`;
  }
  
  return html;
}
