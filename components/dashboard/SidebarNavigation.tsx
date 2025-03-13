import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarHeader, SidebarFooter } from "@/components/ui/sidebar"
import { Home, BarChart3, Compass, TimerIcon as Timeline, History, Settings } from "lucide-react"

export default function SidebarNavigation({ activeTab, setActiveTab }) {
  return (
    <Sidebar variant="sidebar" collapsible="icon" className="border-r border-border bg-card">
      <SidebarHeader className="h-14 flex items-center px-4 border-b border-border">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">tear2drop</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Nawigacja</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeTab === "dashboard"} onClick={() => setActiveTab("dashboard")}>
                  <Home className="h-4 w-4" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeTab === "analysis"} onClick={() => setActiveTab("analysis")}>
                  <BarChart3 className="h-4 w-4" />
                  <span>Analiza</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeTab === "patterns"} onClick={() => setActiveTab("patterns")}>
                  <Compass className="h-4 w-4" />
                  <span>Eksploracja Wzorców</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeTab === "timeline"} onClick={() => setActiveTab("timeline")}>
                  <Timeline className="h-4 w-4" />
                  <span>Oś czasu</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeTab === "history"} onClick={() => setActiveTab("history")}>
                  <History className="h-4 w-4" />
                  <span>Historia analiz</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}