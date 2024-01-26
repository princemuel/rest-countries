"use client";

import { MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [_, startTransition] = React.useTransition();
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => setHasMounted(true), []);

  const isDarkTheme = resolvedTheme === "dark";

  const updateTheme = React.useCallback(() => {
    startTransition(() => {
      setTheme(isDarkTheme ? "light" : "dark");
    });
  }, [isDarkTheme, setTheme]);

  const text = isDarkTheme ? "dark mode" : "light mode";

  if (!hasMounted) return null;

  return (
    <button
      data-theme="light"
      className="flex items-center gap-1 text-sm capitalize"
      onClick={updateTheme}
    >
      <MoonIcon fill="white" size={14} strokeWidth={2} />
      <span>{text}</span>
    </button>
  );
}
