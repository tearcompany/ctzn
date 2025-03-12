"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { NavLink } from "@/components/ui/nav-link"
import {
  LayoutDashboard,
  BarChart3,
  Compass,
  Clock,
  History,
  BookOpen,
  Settings,
  ChevronLeft,
  Calculator,
  Layers,
  CircleDot,
  Sparkles,
  HelpCircle,
  LogOut,
} from "lucide-react"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div
      className={cn(
        "flex flex-col border-r bg-card transition-all duration-300",
        isCollapsed ? "w-[70px]" : "w-[240px]",
        className,
      )}
    >
      <div className="flex h-14 items-center px-3 border-b">
        <div
          className={cn("flex items-center gap-2 transition-opacity", isCollapsed && "opacity-0 w-0 overflow-hidden")}
        >
          <div className="h-7 w-7 rounded-full bg-secondary/20 flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-secondary" />
          </div>
          <span className="font-semibold text-lg">Kabbalah</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className={cn("h-7 w-7 ml-auto", !isCollapsed && "rotate-180")}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="flex-1 px-3 py-2">
        <div className="space-y-1">
          <NavLink
            href="/dashboard"
            icon={<LayoutDashboard className="h-4 w-4" />}
            isActive={pathname === "/dashboard"}
            isSidebarCollapsed={isCollapsed}
            tooltip="Dashboard"
          >
            Dashboard
          </NavLink>
          <NavLink
            href="/analysis"
            icon={<BarChart3 className="h-4 w-4" />}
            isActive={pathname === "/analysis"}
            isSidebarCollapsed={isCollapsed}
            tooltip="Analysis"
          >
            Analysis
          </NavLink>
          <NavLink
            href="/patterns"
            icon={<Compass className="h-4 w-4" />}
            isActive={pathname === "/patterns"}
            isSidebarCollapsed={isCollapsed}
            tooltip="Patterns"
          >
            Pattern Explorer
          </NavLink>
          <NavLink
            href="/timeline"
            icon={<Clock className="h-4 w-4" />}
            isActive={pathname === "/timeline"}
            isSidebarCollapsed={isCollapsed}
            tooltip="Timeline"
          >
            Time Axis
          </NavLink>
          <NavLink
            href="/history"
            icon={<History className="h-4 w-4" />}
            isActive={pathname === "/history"}
            isSidebarCollapsed={isCollapsed}
            tooltip="History"
          >
            Analysis History
          </NavLink>
        </div>

        <Separator className="my-4" />

        <div
          className={cn(
            "text-xs font-medium text-muted-foreground mb-2 transition-opacity",
            isCollapsed && "opacity-0 h-0 overflow-hidden",
          )}
        >
          Tools
        </div>
        <div className="space-y-1">
          <NavLink
            href="/tools/gematria"
            icon={<Calculator className="h-4 w-4" />}
            isActive={pathname === "/tools/gematria"}
            isSidebarCollapsed={isCollapsed}
            tooltip="Gematria"
          >
            Gematria
          </NavLink>
          <NavLink
            href="/tools/letters"
            icon={<BookOpen className="h-4 w-4" />}
            isActive={pathname === "/tools/letters"}
            isSidebarCollapsed={isCollapsed}
            tooltip="Letters"
          >
            Hebrew Letters
          </NavLink>
          <NavLink
            href="/tools/combinations"
            icon={<Layers className="h-4 w-4" />}
            isActive={pathname === "/tools/combinations"}
            isSidebarCollapsed={isCollapsed}
            tooltip="Combinations"
          >
            Letter Combinations
          </NavLink>
          <NavLink
            href="/tools/pi"
            icon={<CircleDot className="h-4 w-4" />}
            isActive={pathname === "/tools/pi"}
            isSidebarCollapsed={isCollapsed}
            tooltip="Pi Relation"
          >
            Pi Relation
          </NavLink>
        </div>

        <Separator className="my-4" />

        <div className="space-y-1">
          <NavLink
            href="/settings"
            icon={<Settings className="h-4 w-4" />}
            isActive={pathname === "/settings"}
            isSidebarCollapsed={isCollapsed}
            tooltip="Settings"
          >
            Settings
          </NavLink>
          <NavLink
            href="/help"
            icon={<HelpCircle className="h-4 w-4" />}
            isActive={pathname === "/help"}
            isSidebarCollapsed={isCollapsed}
            tooltip="Help & Documentation"
          >
            Help
          </NavLink>
        </div>
      </ScrollArea>
      <div className="p-3 border-t">
        <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground">
          <LogOut className="h-4 w-4" />
          <span className={cn("transition-opacity", isCollapsed && "opacity-0 w-0 overflow-hidden")}>Log out</span>
        </Button>
      </div>
    </div>
  )
}

