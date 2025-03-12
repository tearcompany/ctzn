"use client"

import { useState, useEffect } from "react"
import { FileText } from "lucide-react"

export function DataSummary({ text }: { text: string }) {
  const [summary, setSummary] = useState<{
    characters: number
    words: number
    uniqueLetters: number
    hebrewLetters: number
    numericalValue: number
    patterns: string[]
  }>({
    characters: 0,
    words: 0,
    uniqueLetters: 0,
    hebrewLetters: 0,
    numericalValue: 0,
    patterns: [],
  })

  useEffect(() => {
    if (!text) {
      setSummary({
        characters: 0,
        words: 0,
        uniqueLetters: 0,
        hebrewLetters: 0,
        numericalValue: 0,
        patterns: [],
      })
      return
    }

    // Count characters
    const characters = text.length

    // Count words
    const words = text.split(/\s+/).filter(Boolean).length

    // Count unique letters
    const uniqueLetters = new Set(text.split("")).size

    // Count Hebrew letters
    const hebrewLetterRegex = /[\u0590-\u05FF]/g
    const hebrewLetters = (text.match(hebrewLetterRegex) || []).length

    // Calculate numerical value
    let numericalValue = 0
    for (const char of text) {
      numericalValue += char.charCodeAt(0)
    }

    // Detect patterns
    const patterns: string[] = []

    // Check for palindrome
    const normalized = text.toLowerCase().replace(/[^a-z0-9א-ת]/g, "")
    const reversed = normalized.split("").reverse().join("")
    if (normalized === reversed && normalized.length > 1) {
      patterns.push("Palindrome detected")
    }

    // Check for repeating sequences
    const repeatingRegex = /(.{2,}).*\1/
    if (repeatingRegex.test(text)) {
      patterns.push("Repeating sequence detected")
    }

    // Check for numerical patterns
    if (text.length % 7 === 0) {
      patterns.push("Length divisible by 7 (completion)")
    } else if (text.length % 12 === 0) {
      patterns.push("Length divisible by 12 (governmental perfection)")
    }

    // Check for golden ratio
    const words1 = Math.round(words * 0.618)
    const words2 = words - words1
    if (Math.abs(words1 / words2 - 0.618) < 0.01) {
      patterns.push("Word count approximates golden ratio")
    }

    setSummary({
      characters,
      words,
      uniqueLetters,
      hebrewLetters,
      numericalValue,
      patterns,
    })
  }, [text])

  return (
    <div className="space-y-3">
      {text ? (
        <>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-background p-2 rounded-lg border border-border flex flex-col items-center">
              <div className="text-xs text-muted-foreground">Characters</div>
              <div className="text-lg font-bold text-primary">{summary.characters}</div>
            </div>
            <div className="bg-background p-2 rounded-lg border border-border flex flex-col items-center">
              <div className="text-xs text-muted-foreground">Words</div>
              <div className="text-lg font-bold text-primary">{summary.words}</div>
            </div>
            <div className="bg-background p-2 rounded-lg border border-border flex flex-col items-center">
              <div className="text-xs text-muted-foreground">Unique Letters</div>
              <div className="text-lg font-bold text-primary">{summary.uniqueLetters}</div>
            </div>
            <div className="bg-background p-2 rounded-lg border border-border flex flex-col items-center">
              <div className="text-xs text-muted-foreground">Hebrew Letters</div>
              <div className="text-lg font-bold text-primary">{summary.hebrewLetters}</div>
            </div>
          </div>

          <div className="bg-background p-2 rounded-lg border border-border">
            <div className="text-xs text-muted-foreground mb-1">Numerical Value</div>
            <div className="text-lg font-bold text-center text-primary">{summary.numericalValue}</div>
          </div>

          {summary.patterns.length > 0 && (
            <div>
              <div className="text-xs font-medium mb-1 text-muted-foreground flex items-center gap-1">
                <FileText className="h-3 w-3 text-primary" />
                Detected Patterns
              </div>
              <div className="space-y-1">
                {summary.patterns.map((pattern, index) => (
                  <div
                    key={index}
                    className="bg-background p-1.5 rounded-lg border border-border text-xs text-foreground"
                  >
                    {pattern}
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="h-[150px] flex items-center justify-center text-muted-foreground text-sm">
          Enter text to generate data summary
        </div>
      )}
    </div>
  )
}

