import React from 'react';
import { useAppRouter } from './RouterContext';

interface AppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const AppLink: React.FC<AppLinkProps> = ({
  href,
  onClick,
  target,
  rel,
  children,
  ...rest
}) => {
  const { navigate } = useAppRouter();
  const isExternal = href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (
      e.defaultPrevented ||
      isExternal ||
      target === '_blank' ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0
    ) {
      return;
    }

    e.preventDefault();
    navigate(href);
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel ?? (isExternal && target === '_blank' ? 'noopener noreferrer' : undefined)}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </a>
  );
};
