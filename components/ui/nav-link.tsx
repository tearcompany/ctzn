'use client';

import type * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface NavLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  isSidebarCollapsed?: boolean;
  tooltip?: string;
  onClick?: () => void;
}

export function NavLink({
  href,
  icon,
  isActive,
  isSidebarCollapsed,
  tooltip,
  onClick,
  className,
  children,
  ...props
}: NavLinkProps) {
  const content = (
    <Button
      variant={isActive ? 'secondary' : 'ghost'}
      className={cn(
        'w-full justify-start gap-2 font-normal',
        isActive && 'bg-secondary/20 text-primary hover:bg-secondary/30',
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {icon}
      <span className={cn('transition-opacity', isSidebarCollapsed && 'opacity-0 w-0 h-0 overflow-hidden')}>
        {children}
      </span>
    </Button>
  );

  if (isSidebarCollapsed && tooltip) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={href} className="block">
              {content}
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">{tooltip}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <Link href={href} className="block">
      {content}
    </Link>
  );
}
