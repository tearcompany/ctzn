"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { HebrewLetterGrid } from "@/components/hebrew-letter-grid"
import { GematriaCalculator } from "@/components/gematria-calculator"
import { PatternVisualizer } from "@/components/pattern-visualizer"
import { NumericalAnalysis } from "@/components/numerical-analysis"
import { BiblicalSymbols } from "@/components/biblical-symbols"
import { LetterCombinatorics } from "@/components/letter-combinatorics"
import { PiCircleVisualizer } from "@/components/pi-circle-visualizer"
import { TimelineVisualizer } from "@/components/timeline-visualizer"
import { DataSummary } from "@/components/data-summary"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  BookOpen,
  Calculator,
  Search,
  BarChart3,
  Clock,
  Compass,
  Eye,
  Sparkles,
  Layers,
  CircleDot,
  Home,
  Settings,
  History,
  Save,
  Database,
  FileText,
  Maximize2,
  TimerIcon as Timeline,
  Droplets,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react"
import { QuickHelp } from "@/components/quick-help"

export function KabbalahDashboard() {
  const [inputText, setInputText] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [savedPatterns, setSavedPatterns] = useState<{ name: string; text: string }[]>([
    { name: "Creation Pattern", text: "בראשית" },
    { name: "Divine Name", text: "יהוה" },
    { name: "Messiah", text: "משיח" },
  ])
  const [previewText, setPreviewText] = useState("")
  const [showPreview, setShowPreview] = useState(false)
  const [recentAnalyses, setRecentAnalyses] = useState<{ text: string; timestamp: number }[]>([])
  const [toolsExpanded, setToolsExpanded] = useState<{ [key: string]: boolean }>({
    gematria: true,
    letters: true,
    patterns: true,
    numerical: true,
    biblical: true,
    pi: true,
  })

  const handleSearch = () => {
    if (!inputText.trim()) return

    setSearchQuery(inputText)
    setShowPreview(false)

    // Add to recent searches if not already there
    if (!recentSearches.includes(inputText)) {
      setRecentSearches((prev) => [inputText, ...prev].slice(0, 5))
    }

    // Add to recent analyses with timestamp
    setRecentAnalyses((prev) => [{ text: inputText, timestamp: Date.now() }, ...prev].slice(0, 10))
  }

  const handleSavePattern = () => {
    if (!searchQuery.trim()) return

    const patternName = prompt("Enter a name for this pattern:")
    if (patternName) {
      setSavedPatterns((prev) => [...prev, { name: patternName, text: searchQuery }])
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  const handleQuickPreview = (text: string) => {
    setPreviewText(text)
    setShowPreview(true)
  }

  const toggleTool = (tool: string) => {
    setToolsExpanded((prev) => ({
      ...prev,
      [tool]: !prev[tool],
    }))
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar variant="sidebar" collapsible="icon" className="border-r border-border bg-card">
          <SidebarHeader className="h-14 flex items-center px-4 border-b border-border">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Droplets className="h-5 w-5 text-primary" />
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

            <SidebarGroup>
              <SidebarGroupLabel>Tools</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => toggleTool("gematria")}>
                      <Calculator className="h-4 w-4" />
                      <span>Gematria</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => toggleTool("letters")}>
                      <Layers className="h-4 w-4" />
                      <span>Ceruf</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => toggleTool("patterns")}>
                      <CircleDot className="h-4 w-4" />
                      <span>Pi Relation</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => toggleTool("numerical")}>
                      <BookOpen className="h-4 w-4" />
                      <span>Letter Analysis</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => toggleTool("biblical")}>
                      <Clock className="h-4 w-4" />
                      <span>Biblical Symbolism</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Saved Patterns</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {savedPatterns.map((pattern, index) => (
                    <SidebarMenuItem key={index}>
                      <SidebarMenuButton
                        onClick={() => {
                          setInputText(pattern.text)
                          setSearchQuery(pattern.text)
                        }}
                      >
                        <Sparkles className="h-4 w-4" />
                        <span>{pattern.name}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
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

        <div className="flex-1 flex flex-col overflow-hidden bg-background">
          {/* Quick Preview Panel */}
          {showPreview && (
            <div className="border-b border-border bg-card p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Szybki podgląd: <span className="text-primary">{previewText}</span>
                </h3>
                <Button variant="ghost" size="sm" onClick={() => setShowPreview(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-background p-3 rounded-lg border border-border">
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                    <Calculator className="h-4 w-4 text-primary" />
                    Gematria
                  </h4>
                  <GematriaCalculator text={previewText} compact={true} />
                </div>

                <div className="bg-background p-3 rounded-lg border border-border">
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                    <BarChart3 className="h-4 w-4 text-primary" />
                    Analiza numeryczna
                  </h4>
                  <NumericalAnalysis text={previewText} compact={true} />
                </div>

                <div className="bg-background p-3 rounded-lg border border-border">
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Litery hebrajskie
                  </h4>
                  <HebrewLetterGrid text={previewText} compact={true} />
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <Button
                  onClick={() => {
                    setSearchQuery(previewText)
                    setShowPreview(false)
                    setRecentAnalyses((prev) => [{ text: previewText, timestamp: Date.now() }, ...prev].slice(0, 10))
                  }}
                >
                  Pełna analiza
                </Button>
              </div>
            </div>
          )}
          {/* Top header with search */}
          <header className="h-14 border-b border-border flex items-center justify-between px-4 bg-card">
            <div className="flex items-center">
              <SidebarTrigger className="mr-2" />
              <div className="text-lg font-semibold">Kabbalistyczna Analiza Wzorców</div>
            </div>

            <div className="flex items-center gap-2 w-1/3">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Wprowadź tekst hebrajski lub polski..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="pl-8 bg-background border-input"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSearch()
                    else if (e.key === "Tab" && e.ctrlKey) handleQuickPreview(inputText)
                  }}
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={handleSearch}>
                Analizuj
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuickPreview(inputText)}
                title="Szybki podgląd (Ctrl+Tab)"
                className="border-input"
              >
                <Eye className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={toggleFullscreen} className="border-input">
                <Maximize2 className="h-4 w-4" />
              </Button>
              <QuickHelp />
            </div>
          </header>

          {/* Main content area */}
          <div className="flex-1 overflow-auto p-4">
            {activeTab === "dashboard" && (
              <div className="grid grid-cols-12 gap-4">
                {/* Left column - 5/12 width */}
                <div className="col-span-5 space-y-4">
                  <Card className="bg-card border border-border shadow-sm relative overflow-hidden">
                    <div className="divine-light"></div>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-base">
                          <Calculator className="h-4 w-4 text-primary" />
                          <span>Analiza Gematrii</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0"
                          onClick={() => toggleTool("gematria")}
                        >
                          {toolsExpanded.gematria ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    {toolsExpanded.gematria && (
                      <CardContent className="pt-0">
                        <GematriaCalculator text={searchQuery} compact={true} />
                      </CardContent>
                    )}
                  </Card>

                  <Card className="bg-card border border-border shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-base">
                          <Layers className="h-4 w-4 text-primary" />
                          <span>Kombinatoryka Liter</span>
                        </div>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => toggleTool("letters")}>
                          {toolsExpanded.letters ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    {toolsExpanded.letters && (
                      <CardContent className="pt-0">
                        <LetterCombinatorics text={searchQuery} compact={true} />
                      </CardContent>
                    )}
                  </Card>

                  <Card className="bg-card border border-border shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-base">
                          <CircleDot className="h-4 w-4 text-primary" />
                          <span>Relacja Pi</span>
                        </div>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => toggleTool("pi")}>
                          {toolsExpanded.pi ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    {toolsExpanded.pi && (
                      <CardContent className="pt-0 h-[250px]">
                        <PiCircleVisualizer text={searchQuery} />
                      </CardContent>
                    )}
                  </Card>
                </div>

                {/* Middle column - 4/12 width */}
                <div className="col-span-4 space-y-4">
                  <Card className="bg-card border border-border shadow-sm relative overflow-hidden">
                    <div className="divine-light"></div>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-base">
                          <Compass className="h-4 w-4 text-primary" />
                          <span>Nawigator Wzorców</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0"
                          onClick={() => toggleTool("patterns")}
                        >
                          {toolsExpanded.patterns ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    {toolsExpanded.patterns && (
                      <CardContent className="pt-0 h-[300px]">
                        <PatternVisualizer text={searchQuery} />
                      </CardContent>
                    )}
                  </Card>

                  <Card className="bg-card border border-border shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-base">
                          <BarChart3 className="h-4 w-4 text-primary" />
                          <span>Analiza Numeryczna</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0"
                          onClick={() => toggleTool("numerical")}
                        >
                          {toolsExpanded.numerical ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    {toolsExpanded.numerical && (
                      <CardContent className="pt-0">
                        <NumericalAnalysis text={searchQuery} compact={true} />
                      </CardContent>
                    )}
                  </Card>

                  <Card className="bg-card border border-border shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-base">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>Symbolika Biblijna</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0"
                          onClick={() => toggleTool("biblical")}
                        >
                          {toolsExpanded.biblical ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    {toolsExpanded.biblical && (
                      <CardContent className="pt-0">
                        <BiblicalSymbols text={searchQuery} compact={true} />
                      </CardContent>
                    )}
                  </Card>
                </div>

                {/* Right column - 3/12 width */}
                <div className="col-span-3 space-y-4">
                  <Card className="bg-card border border-border shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-base">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span>Litery Hebrajskie</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <HebrewLetterGrid text={searchQuery} compact={true} />
                    </CardContent>
                  </Card>

                  <Card className="bg-card border border-border shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-base">
                        <Database className="h-4 w-4 text-primary" />
                        <span>Podsumowanie Danych</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <DataSummary text={searchQuery} />
                    </CardContent>
                  </Card>

                  <Card className="bg-card border border-border shadow-sm relative overflow-hidden">
                    <div className="divine-light"></div>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-base">
                        <History className="h-4 w-4 text-primary" />
                        <span>Ostatnie Wnioski</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2">
                        <div className="flex items-start gap-2 pb-2 border-b border-border">
                          <Sparkles className="h-3 w-3 text-primary mt-1" />
                          <div>
                            <div className="text-xs text-foreground">Pattern found in "בראשית"</div>
                            <div className="text-xs text-muted-foreground">Creation sequence</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 pb-2 border-b border-border">
                          <Sparkles className="h-3 w-3 text-primary mt-1" />
                          <div>
                            <div className="text-xs text-foreground">Perfect number 28 detected</div>
                            <div className="text-xs text-muted-foreground">Divine harmony</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Sparkles className="h-3 w-3 text-primary mt-1" />
                          <div>
                            <div className="text-xs text-foreground">Pi relation found</div>
                            <div className="text-xs text-muted-foreground">Cosmic balance</div>
                          </div>
                        </div>
                      </div>

                      {searchQuery && (
                        <div className="mt-4">
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full text-xs border-input"
                            onClick={handleSavePattern}
                          >
                            <Save className="h-3 w-3 mr-1" />
                            Zapisz Bieżący Wzorzec
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "analysis" && (
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-card border border-border shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="h-5 w-5 text-primary" />
                      <span>Analiza Gematrii</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <GematriaCalculator text={searchQuery} />
                  </CardContent>
                </Card>

                <Card className="bg-card border border-border shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span>Analiza Liter Hebrajskich</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <HebrewLetterGrid text={searchQuery} />
                  </CardContent>
                </Card>

                <Card className="bg-card border border-border shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Layers className="h-5 w-5 text-primary" />
                      <span>Kombinatoryka Liter</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <LetterCombinatorics text={searchQuery} />
                  </CardContent>
                </Card>

                <Card className="bg-card border border-border shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      <span>Analiza Numeryczna</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <NumericalAnalysis text={searchQuery} />
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "patterns" && (
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-card border border-border shadow-sm relative overflow-hidden">
                  <div className="divine-light"></div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Compass className="h-5 w-5 text-primary" />
                      <span>Nawigator Wzorców</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="h-[500px]">
                    <PatternVisualizer text={searchQuery} />
                  </CardContent>
                </Card>

                <Card className="bg-card border border-border shadow-sm relative overflow-hidden">
                  <div className="divine-light"></div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CircleDot className="h-5 w-5 text-primary" />
                      <span>Wizualizacja Koła Pi</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="h-[500px]">
                    <PiCircleVisualizer text={searchQuery} />
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "timeline" && (
              <Card className="bg-card border border-border shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Timeline className="h-5 w-5 text-primary" />
                    <span>Oś Czasowa Biblijna</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-[600px]">
                  <TimelineVisualizer text={searchQuery} />
                </CardContent>
              </Card>
            )}

            {activeTab === "history" && (
              <div className="p-4 space-y-4">
                <Card className="bg-card border border-border shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <History className="h-5 w-5 text-primary" />
                      <span>Historia analiz</span>
                    </CardTitle>
                    <CardDescription>Przeglądaj i wracaj do wcześniejszych analiz</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {recentAnalyses.length > 0 ? (
                      <div className="space-y-2">
                        {recentAnalyses.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-background rounded-lg border border-border"
                          >
                            <div className="flex items-center gap-3">
                              <div className="bg-primary/10 text-primary rounded-full p-2">
                                <FileText className="h-4 w-4" />
                              </div>
                              <div>
                                <div className="font-medium">{item.text}</div>
                                <div className="text-xs text-muted-foreground">
                                  {new Date(item.timestamp).toLocaleString()}
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" onClick={() => handleQuickPreview(item.text)}>
                                <Eye className="h-3 w-3 mr-1" />
                                Podgląd
                              </Button>
                              <Button
                                variant="default"
                                size="sm"
                                onClick={() => {
                                  setInputText(item.text)
                                  setSearchQuery(item.text)
                                  setActiveTab("dashboard")
                                }}
                              >
                                <Search className="h-3 w-3 mr-1" />
                                Analizuj
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
                        <History className="h-12 w-12 mb-2 opacity-20" />
                        <p>Brak historii analiz</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}

