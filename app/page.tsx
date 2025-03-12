import { KabbalahDashboard } from "@/components/kabbalah-dashboard";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden font-sans">
      <div className="layout-background absolute inset-0"></div>
      <KabbalahDashboard />
    </main>
  );
}
