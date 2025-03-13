#!/bin/bash

# Tworzenie głównych katalogów
mkdir -p src/{components/{ui,base,modules,sections,dashboard},hooks,utils,styles,pages,lib}

# Tworzenie folderów dla komponentów UI (ShadCN)
touch src/components/ui/{button.tsx,card.tsx,input.tsx,table.tsx,modal.tsx,ui-provider.tsx,index.ts}

# Tworzenie folderów dla komponentów bazowych (atomowe)
mkdir -p src/components/base
touch src/components/base/{litera.tsx,liczba.tsx,symbol.tsx,permutacja.tsx}
touch src/components/base/{litera.module.css,liczba.module.css,symbol.module.css}

# Tworzenie folderów dla komponentów modularnych
mkdir -p src/components/modules
touch src/components/modules/{gematria.tsx,analiza-liczby.tsx,wizualizacja.tsx,kombinatoryka.tsx}
touch src/components/modules/{gematria.module.css,analiza-liczby.module.css,wizualizacja.module.css}

# Tworzenie folderów dla sekcji (większe komponenty)
mkdir -p src/components/sections
touch src/components/sections/{mapa-gematrii.tsx,cykle-czasu.tsx,dynamika-liter.tsx,archeografia.tsx}
touch src/components/sections/{mapa-gematrii.module.css,cykle-czasu.module.css,dynamika-liter.module.css}

# Tworzenie folderów dla głównych stron dashboardu
mkdir -p src/components/dashboard
touch src/components/dashboard/{index.tsx,layout.tsx,navigation.tsx,dashboard.module.css}

# Tworzenie folderów dla hooków
mkdir -p src/hooks
touch src/hooks/{useGematria.ts,usePermutacje.ts,useCykle.ts,useLayout.ts,index.ts}

# Tworzenie folderów dla funkcji pomocniczych
mkdir -p src/utils
touch src/utils/{gematria.ts,ceruf.ts,cykle.ts,symbols.ts,numbers.ts,index.ts}

# Tworzenie folderów dla stylów globalnych
mkdir -p src/styles
touch src/styles/{globals.css,tailwind.css,themes.css,shadcn-overrides.css}

# Tworzenie folderów dla stron Next.js (jeśli używasz Next.js)
mkdir -p src/pages/api
touch src/pages/{index.tsx,dashboard.tsx,settings.tsx}

# Tworzenie konfiguracji Tailwinda, Next.js i TypeScript
touch tailwind.config.ts next.config.js tsconfig.json postcss.config.js .eslintrc.js .prettierrc .gitignore README.md

echo "✅ Struktura projektu została pomyślnie utworzona!"
