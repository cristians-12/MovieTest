'use client';
export function changeLanguage(lang: string) {
  document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000`;
  window.location.reload();
}