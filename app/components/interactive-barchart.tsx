"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Label } from "recharts"

// Define the data type
interface DataItem {
  Product: string
  TotalValue: number
  TotalSales: number
}

// Sample data from the assignment
const data: DataItem[] = [
  { Product: "aaa", TotalValue: 10, TotalSales: 10 },
  { Product: "ooo", TotalValue: 17, TotalSales: 8 },
  { Product: "rtt", TotalValue: 23, TotalSales: 4 },
  { Product: "ghh", TotalValue: 40, TotalSales: 15 },
  { Product: "dww", TotalValue: 30, TotalSales: 10 },
  { Product: "ytt", TotalValue: 26, TotalSales: 7 },
  { Product: "eee", TotalValue: 15, TotalSales: 7 },
  { Product: "qyy", TotalValue: 18, TotalSales: 7 },
  { Product: "prp", TotalValue: 20, TotalSales: 7 },
  { Product: "hgt", TotalValue: 40, TotalSales: 7 },
]

// Sort data by TotalSales in descending order
const sortedData = [...data].sort((a, b) => b.TotalSales - a.TotalSales)

// Custom tooltip component
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 shadow-md text-xs">
        <p className="text-gray-600">{`Product=${payload[0].payload.Product}`}</p>
        <p className="text-gray-600">{`TotalSales=${payload[0].value}`}</p>
        <p className="text-gray-600">{`TotalValue=${payload[0].payload.TotalValue}`}</p>
      </div>
    )
  }
  return null
}

export default function InteractiveBarChart() {
  // Find min and max values for color scaling
  const minValue = Math.min(...data.map((item) => item.TotalValue))
  const maxValue = Math.max(...data.map((item) => item.TotalValue))

  // Update the getColor function to match the exact color palette from the image
  const getColor = (value: number) => {
    // Calculate a value between 0 and 1
    const normalizedValue = (value - minValue) / (maxValue - minValue)

    // Create a brown-orange-cream color gradient matching the image exactly
    if (normalizedValue > 0.8) {
      // Dark brown for highest values (like ghh and hgt with value 40)
      return "#8B2500"
    } else if (normalizedValue > 0.6) {
      // Orange for high values (like dww with value 30)
      return "#E25822"
    } else if (normalizedValue > 0.4) {
      // Light orange for medium values (like ytt with value 26)
      return "#F28C28"
    } else if (normalizedValue > 0.2) {
      // Light peach for lower-medium values (like prp, qyy with values around 18-20)
      return "#FFCBA4"
    } else {
      // Cream/beige for lowest values (like aaa with value 10)
      return "#FFF8DC"
    }
  }

  return (
    <div className="w-full h-[600px] p-4 flex">
      {/* Main chart */}
      <div className="flex-grow h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={sortedData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis dataKey="Product">
              <Label value="Product" position="bottom" offset={0} />
            </XAxis>
            <YAxis>
              <Label value="TotalSales" position="left" angle={-90} offset={-10} style={{ textAnchor: "middle" }} />
            </YAxis>
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="TotalSales" fill="#8884d8">
              {sortedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getColor(entry.TotalValue)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Vertical color legend */}
      <div className="w-24 flex flex-col items-center justify-center ml-8">
        <div className="text-xs mb-8 text-center">TotalValue</div>
        <div className="h-64 w-8 relative">
          <div
            className="absolute inset-0 rounded-sm"
            style={{
              background: `linear-gradient(to bottom, #8B2500, #E25822, #F28C28, #FFCBA4, #FFF8DC)`,
            }}
          />
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs">{maxValue}</div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs">{minValue}</div>
        </div>
      </div>
    </div>
  )
}
