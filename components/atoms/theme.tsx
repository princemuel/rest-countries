'use client';

import { MoonIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useCallback, useTransition } from 'react';

export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  const [_, startTransition] = useTransition();

  const isDarkTheme = resolvedTheme === 'dark';

  const updateTheme = useCallback(() => {
    startTransition(() => {
      setTheme(isDarkTheme ? 'light' : 'dark');
    });
  }, [isDarkTheme, setTheme]);

  return (
    <button
      data-theme='light'
      className='flex items-center gap-1 text-sm capitalize'
      onClick={updateTheme}
    >
      <MoonIcon fill='white' size={14} strokeWidth={2} />
      <span>{resolvedTheme} mode</span>
    </button>
  );
}
