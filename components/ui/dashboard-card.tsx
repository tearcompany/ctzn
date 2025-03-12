'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Expand, Minimize } from 'lucide-react';

interface DashboardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  badge?: string;
  badgeVariant?: 'default' | 'secondary' | 'outline' | 'destructive';
  footer?: React.ReactNode;
  isExpandable?: boolean;
  isLoading?: boolean;
  className?: string;
  contentClassName?: string;
  children: React.ReactNode;
}

export function DashboardCard({
  title,
  description,
  icon,
  badge,
  badgeVariant = 'secondary',
  footer,
  isExpandable = false,
  isLoading = false,
  className,
  contentClassName,
  children,
  ...props
}: DashboardCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <Card
      className={cn(
        'mystic-card transition-all duration-300 overflow-hidden',
        isExpanded ? 'fixed inset-4 z-50 overflow-auto' : 'relative',
        className,
      )}
      {...props}
    >
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && <span className="text-primary">{icon}</span>}
          <div>
            <CardTitle className="text-base font-medium">{title}</CardTitle>
            {description && <CardDescription className="text-xs mt-0.5">{description}</CardDescription>}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {badge && (
            <Badge variant={badgeVariant} className="text-xs font-normal">
              {badge}
            </Badge>
          )}
          {isExpandable && (
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? <Minimize className="h-4 w-4" /> : <Expand className="h-4 w-4" />}
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className={cn('pt-0', contentClassName)}>
        {isLoading ? (
          <div className="flex items-center justify-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : (
          children
        )}
      </CardContent>
      {footer && <CardFooter className="pt-0">{footer}</CardFooter>}
    </Card>
  );
}
