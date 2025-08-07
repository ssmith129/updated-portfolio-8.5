import React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const themes = [
    { value: 'light' as const, label: 'Light', icon: Sun },
    { value: 'dark' as const, label: 'Dark', icon: Moon },
    { value: 'system' as const, label: 'System', icon: Monitor },
  ];

  return (
    <div className={cn("flex items-center gap-1 p-1 rounded-lg bg-muted", className)}>
      {themes.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
            "hover:bg-background/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            "min-h-[44px] min-w-[44px]", // Ensure minimum touch target size
            theme === value
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-pressed={theme === value}
          aria-label={`Switch to ${label.toLowerCase()} theme${theme === value ? ' (current)' : ''}`}
          title={`Switch to ${label.toLowerCase()} theme`}
        >
          <Icon 
            className="h-4 w-4 transition-transform duration-200 hover:scale-110" 
            aria-hidden="true"
          />
          {showLabel && (
            <span className="hidden sm:inline">{label}</span>
          )}
        </button>
      ))}
      
      {/* Screen reader only status */}
      <span className="sr-only">
        Current theme: {theme === 'system' ? `System (${resolvedTheme})` : theme}
      </span>
    </div>
  );
}

export function SimpleThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-all duration-200",
        "hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "min-h-[44px] min-w-[44px]", // Ensure minimum touch target size
        className
      )}
      aria-label={`Switch to ${resolvedTheme === 'light' ? 'dark' : 'light'} theme`}
      title={`Switch to ${resolvedTheme === 'light' ? 'dark' : 'light'} theme`}
    >
      <Sun className="h-5 w-5 transition-all duration-300 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}