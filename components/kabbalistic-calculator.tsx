
'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { GematriaCalculator } from './gematria-calculator'
import { NumericalAnalysis } from './numerical-analysis'

export function KabbalisticCalculator() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    motherName: '',
    hebrewName: ''
  })

  const handleCalculate = () => {
    // Tu będziemy dodawać kolejne obliczenia
    console.log("Calculating for:", formData)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Kalkulator Kabalistyczny</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder="Imię"
            value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          />
          <Input
            placeholder="Nazwisko"
            value={formData.lastName}
            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          />
        </div>
        <Input
          type="date"
          value={formData.birthDate}
          onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
        />
        <Input
          placeholder="Imię matki"
          value={formData.motherName}
          onChange={(e) => setFormData({...formData, motherName: e.target.value})}
        />
        <Input
          placeholder="Imię hebrajskie (opcjonalnie)"
          value={formData.hebrewName}
          onChange={(e) => setFormData({...formData, hebrewName: e.target.value})}
        />
        <Button onClick={handleCalculate} className="w-full">
          Oblicz portret kabalistyczny
        </Button>

        {formData.hebrewName && (
          <div className="mt-4">
            <GematriaCalculator text={formData.hebrewName} />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
