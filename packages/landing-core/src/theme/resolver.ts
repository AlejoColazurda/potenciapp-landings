export type Theme = 'light' | 'dark';

const ARGENTINA_TIMEZONE = 'America/Argentina/Buenos_Aires';

export function getArgentinaHour(date: Date = new Date()): number {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: ARGENTINA_TIMEZONE,
    hour: 'numeric',
    hour12: false,
  });
  return parseInt(formatter.format(date), 10);
}

export function resolveThemeByTime(date: Date = new Date()): Theme {
  const hour = getArgentinaHour(date);
  return hour >= 7 && hour < 19 ? 'light' : 'dark';
}

export function resolveBuildTheme(): Theme {
  return resolveThemeByTime(new Date());
}

export function getThemeDataAttribute(theme: Theme): string {
  return `data-theme="${theme}"`;
}

export function getHtmlAttributesForTheme(theme: Theme): Record<string, string> {
  return {
    'data-theme': theme,
    'data-build-theme': theme,
  };
}
