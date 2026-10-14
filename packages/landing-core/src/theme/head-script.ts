export const THEME_HEAD_SCRIPT = `(function(){var h=document.documentElement,t=h.getAttribute("data-build-theme")||"light",p=h.getAttribute("data-preview-override"),q=new URLSearchParams(window.location.search).get("tema");if(p==="true"&&q&&(q==="light"||q==="dark")){t=q}h.setAttribute("data-theme",t)})()`;

export const THEME_HEAD_SCRIPT_HASH = 'sha256-58eJVID/pZGmINNnhOk+tGBctiB2Uhkf7f/fv+r38wQ=';

export function getThemeHeadScriptElement(): string {
  return `<script>${THEME_HEAD_SCRIPT}</script>`;
}

export function generateCspScriptSrcHash(): string {
  return `'${THEME_HEAD_SCRIPT_HASH}'`;
}

export function getPreviewOverrideAttribute(isPreview: boolean): Record<string, string> {
  return isPreview ? { 'data-preview-override': 'true' } : {};
}

export function isPreviewEnvironment(): boolean {
  if (typeof process !== 'undefined' && process.env) {
    return (
      process.env.VERCEL_ENV === 'preview' ||
      process.env.POTENCIAPP_PREVIEW === 'true'
    );
  }
  return false;
}
