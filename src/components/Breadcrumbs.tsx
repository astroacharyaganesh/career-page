import React from 'react';
import { ChevronRight } from 'lucide-react';
import { AppLink } from './AppLink';
import { BreadcrumbItem } from '../data/seoRoutes';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark';
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, variant = 'light' }) => {
  const isDark = variant === 'dark';

  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-[13px]">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${item.href}-${idx}`} className="inline-flex items-center gap-1.5">
              {idx > 0 && (
                <ChevronRight
                  className={`w-3.5 h-3.5 shrink-0 ${
                    isDark ? 'text-[#e3b963]/75' : 'text-[#9e6b16]/75'
                  }`}
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span
                  aria-current="page"
                  className={`font-semibold ${
                    isDark ? 'text-[#f9e1a0]' : 'text-[#6e121b]'
                  }`}
                >
                  {item.label}
                </span>
              ) : (
                <AppLink
                  href={item.href}
                  className={`transition-colors underline-offset-4 hover:underline ${
                    isDark
                      ? 'text-white/80 hover:text-[#f9e1a0]'
                      : 'text-[#6a5a4a] hover:text-[#6e121b]'
                  }`}
                >
                  {item.label}
                </AppLink>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
