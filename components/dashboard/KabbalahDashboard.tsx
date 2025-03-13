"use client"

import { useState } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import SidebarNavigation from "@/components/dashboard/SidebarNavigation"
import TimelineSection from "@/components/sections/TimelineSection"
import HistorySection from "@/components/sections/HistorySection"
import DashboardSection from "@/components/sections/DashboardSection"
import NumbersAnalysisSection from "@/components/sections/NumbersAnalysisSection"
import SavedPatternsSection from "@/components/sections/SavedPatternsSection"
import SearchBar from "@/components/modules/SearchBar"
import QuickPreview from "@/components/modules/QuickPreview"

export function KabbalahDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        <SidebarNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 flex flex-col overflow-hidden bg-background">
          <SearchBar />
          <QuickPreview />
          <div className="flex-1 overflow-auto p-4">
            {activeTab === "dashboard" && <DashboardSection />}
            {activeTab === "analysis" && <NumbersAnalysisSection />}
            {activeTab === "patterns" && <SavedPatternsSection />}
            {activeTab === "timeline" && <TimelineSection searchQuery={""} />}
            {activeTab === "history" && <HistorySection recentAnalyses={undefined} setSearchQuery={undefined} setActiveTab={undefined} />}
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}