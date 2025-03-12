"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shuffle } from "lucide-react"

export function LetterCombinatorics({ text, compact = false }: { text: string; compact?: boolean }) {
  const [permutations, setPermutations] = useState<string[]>([])
  const [atbash, setAtbash] = useState<string>("")
  const [albam, setAlbam] = useState<string>("")

  // Hebrew alphabet for transformations
  const hebrewAlphabet = "אבגדהוזחטיכלמנסעפצקרשת"
  const hebrewReversed = "תשרקצפעסנמלכיטחזוהדגבא"
  const hebrewAlbam = "לכיטחזוהדגבאתשרקצפעסנמ"

  useEffect(() => {
    if (!text || text.length === 0) {
      setPermutations([])
      setAtbash("")
      setAlbam("")
      return
    }

    // Generate permutations (limited to avoid performance issues)
    if (text.length <= 4) {
      // For short strings, generate all permutations
      const allPermutations = generatePermutations(text)
      setPermutations(allPermutations.slice(0, 12)) // Limit to 12 permutations
    } else {
      // For longer strings, generate some meaningful transformations
      const transformations = [
        text
          .split("")
          .reverse()
          .join(""), // Reverse
        text
          .split("")
          .sort()
          .join(""), // Alphabetical
        // Shift each character by 1
        text
          .split("")
          .map((char) => {
            const code = char.charCodeAt(0)
            return String.fromCharCode(code + 1)
          })
          .join(""),
      ]
      setPermutations(transformations)
    }

    // Generate Atbash transformation (Hebrew letter substitution cipher)
    let atbashResult = ""
    for (const char of text) {
      const index = hebrewAlphabet.indexOf(char)
      if (index >= 0) {
        atbashResult += hebrewReversed[index]
      } else {
        atbashResult += char
      }
    }
    setAtbash(atbashResult)

    // Generate Albam transformation (another Hebrew substitution cipher)
    let albamResult = ""
    for (const char of text) {
      const index = hebrewAlphabet.indexOf(char)
      if (index >= 0) {
        albamResult += hebrewAlbam[index]
      } else {
        albamResult += char
      }
    }
    setAlbam(albamResult)
  }, [text])

  // Function to generate permutations
  const generatePermutations = (str: string): string[] => {
    if (str.length <= 1) return [str]

    const result: string[] = []
    for (let i = 0; i < str.length; i++) {
      const char = str[i]
      const remainingChars = str.slice(0, i) + str.slice(i + 1)
      const remainingPermutations = generatePermutations(remainingChars)

      for (const perm of remainingPermutations) {
        result.push(char + perm)
      }
    }

    return result
  }

  if (compact) {
    return (
      <div className="space-y-3">
        {text ? (
          <>
            <div className="bg-background p-2 rounded-lg border border-border">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="text-sm font-medium">{text}</div>
                <ArrowRight className="h-3 w-3 text-primary" />
                <div className="text-sm font-medium text-primary">
                  <Shuffle className="h-3 w-3 inline-block mr-1" />
                  Ceruf
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-background p-2 rounded-lg border border-border">
                <div className="text-xs font-medium mb-1 text-muted-foreground">AT-BaSh</div>
                <div className="flex items-center justify-center gap-1">
                  <div className="text-xs">{text}</div>
                  <ArrowRight className="h-3 w-3 text-primary" />
                  <div className="text-xs text-primary">{atbash}</div>
                </div>
              </div>

              <div className="bg-background p-2 rounded-lg border border-border">
                <div className="text-xs font-medium mb-1 text-muted-foreground">AL-BaM</div>
                <div className="flex items-center justify-center gap-1">
                  <div className="text-xs">{text}</div>
                  <ArrowRight className="h-3 w-3 text-primary" />
                  <div className="text-xs text-primary">{albam}</div>
                </div>
              </div>
            </div>

            {permutations.length > 0 && (
              <div>
                <div className="text-xs font-medium mb-1 text-muted-foreground">Permutations</div>
                <div className="grid grid-cols-4 gap-1">
                  {permutations.slice(0, 8).map((perm, index) => (
                    <div key={index} className="bg-background p-1 rounded border border-border text-center text-xs">
                      {perm}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="h-[100px] flex items-center justify-center text-muted-foreground text-sm">
            Enter text to analyze letter combinations
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {text ? (
        <div className="space-y-6">
          <div className="bg-background p-4 rounded-lg border border-border">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="text-xl font-medium">{text}</div>
              <ArrowRight className="h-5 w-5 text-primary" />
              <div className="text-xl font-medium text-primary">
                <Shuffle className="h-5 w-5 inline-block mr-1" />
                Ceruf
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Ceruf is the mystical practice of letter permutation to reveal hidden meanings
            </p>
          </div>

          {permutations.length > 0 && (
            <div>
              <h3 className="text-sm font-medium mb-3 text-foreground">Permutations</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {permutations.map((perm, index) => (
                  <div key={index} className="bg-background p-2 rounded border border-border text-center">
                    {perm}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-background p-4 rounded-lg border border-border">
              <h3 className="text-sm font-medium mb-3 text-foreground flex items-center gap-2">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  AT-BaSh
                </Badge>
              </h3>
              <div className="flex items-center justify-center gap-3">
                <div className="text-lg">{text}</div>
                <ArrowRight className="h-4 w-4 text-primary" />
                <div className="text-lg text-primary">{atbash}</div>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                AT-BaSh substitutes each letter with its opposite in the alphabet
              </p>
            </div>

            <div className="bg-background p-4 rounded-lg border border-border">
              <h3 className="text-sm font-medium mb-3 text-foreground flex items-center gap-2">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  AL-BaM
                </Badge>
              </h3>
              <div className="flex items-center justify-center gap-3">
                <div className="text-lg">{text}</div>
                <ArrowRight className="h-4 w-4 text-primary" />
                <div className="text-lg text-primary">{albam}</div>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                AL-BaM pairs the first half of the alphabet with the second half
              </p>
            </div>
          </div>

          <div className="bg-background p-4 rounded-lg border border-border">
            <h3 className="text-sm font-medium mb-3 text-foreground">Three Phases of Ceruf</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  Rafac
                </Badge>
                <span className="text-foreground">Breaking down the word into individual letters</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  Pacar
                </Badge>
                <span className="text-foreground">Reconstructing new meanings through permutation</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  Cipor
                </Badge>
                <span className="text-foreground">Final transformation into spiritual wisdom</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[200px] flex items-center justify-center text-muted-foreground">
          Enter text to analyze letter combinations
        </div>
      )}
    </div>
  )
}

