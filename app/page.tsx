import GaugeChart from "./components/gauge-chart"
import InteractiveBarChart from "./components/interactive-barchart"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="w-full max-w-6xl">
        <h1 className="text-2xl font-bold mb-6">Product Sales and Value Analysis</h1>
        <InteractiveBarChart />
        <h1 className="text-2xl font-bold mb-6">Monthly Sales Gauge Chart</h1>
        <GaugeChart />
      </div>
    </main>
  )
}
