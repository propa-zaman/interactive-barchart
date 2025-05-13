"use client"

import { useState, useEffect } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

// Define the data types
interface MonthData {
  month: string
  sales: number
}

// Sales data from the assignment
const salesData: MonthData[] = [
  { month: "January", sales: 100000 },
  { month: "February", sales: 200000 },
  { month: "March", sales: 312000 },
  { month: "April", sales: 400000 },
  { month: "May", sales: 500000 },
  { month: "June", sales: 600000 },
  { month: "July", sales: 700000 },
  { month: "August", sales: 800000 },
  { month: "September", sales: 900000 },
  { month: "October", sales: 1000000 },
  { month: "November", sales: 5100000 },
  { month: "December", sales: 10000000 },
]

// Define category thresholds
const LOW_THRESHOLD = 3000000
const MEDIUM_THRESHOLD = 7000000

// Get category based on sales value
const getCategory = (sales: number): string => {
  if (sales <= LOW_THRESHOLD) return "Low"
  if (sales < MEDIUM_THRESHOLD) return "Medium"
  return "High"
}

// Format sales value for display
const formatSales = (sales: number): string => {
  if (sales >= 1000000) {
    return `${(sales / 1000000).toFixed(1)}m`
  } else if (sales >= 1000) {
    return `${(sales / 1000).toFixed(1)}k`
  }
  return sales.toString()
}

export default function GaugeChart() {
  const [selectedMonth, setSelectedMonth] = useState<MonthData | null>(null)
  const [needleAngle, setNeedleAngle] = useState<number>(-135) // Start at -135 degrees (pointing to 0)

  // Update needle angle when selected month changes - ADJUSTED FOR 3/4 CIRCLE
  useEffect(() => {
    if (selectedMonth) {
      const MAX_VALUE = 10000000 // 10m
      const percentage = Math.min(selectedMonth.sales / MAX_VALUE, 1)
      // Adjusted angle calculation for 3/4 circle: -135 is pointing to the left (low), 135 is pointing to the right (high)
      const angle = -135 + 270 * percentage
      setNeedleAngle(angle)
    } else {
      setNeedleAngle(-135) // Default position (pointing to the left/low)
    }
  }, [selectedMonth])

  // Gauge chart data - exact colors from screenshot
  const gaugeData = [
    { name: "Low", value: 30, color: "#FF4D4F" }, // Red section (0-3m)
    { name: "Medium", value: 40, color: "#FAAD14" }, // Yellow/Orange section (3m-7m)
    { name: "High", value: 30, color: "#4096FF" }, // Blue section (7m-10m)
  ]

  return (
    <div className="relative w-full">
      {/* Status indicator in top right corner */}
      <div className="absolute top-0 right-0 flex items-center">
        <div className="bg-blue-500 text-white px-4 py-2 rounded-md">Status:</div>
        <div className="ml-2 px-4 py-2 text-gray-700 font-medium">
          {selectedMonth ? getCategory(selectedMonth.sales) : "Select a month to view the status"}
        </div>
      </div>

      <div className="flex flex-row gap-8 p-4 w-full mt-16">
        {/* Month selection buttons */}
        <div className="flex flex-col gap-2 w-48">
          {salesData.map((data) => (
            <button
              key={data.month}
              className={`py-3 px-4 rounded-md text-center transition-colors ${
                selectedMonth?.month === data.month ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedMonth(data)}
            >
              {data.month}
            </button>
          ))}
        </div>

        {/* Gauge chart */}
        <div className="flex-grow flex flex-col items-center">
          <div className="h-[400px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={gaugeData}
                  cx="50%"
                  cy="80%"
                  startAngle={225} // Changed from 180 to 225 for 3/4 circle
                  endAngle={-45} // Changed from 0 to -45 for 3/4 circle
                  innerRadius={120}
                  outerRadius={140} // Thinner gauge (20px thickness instead of 40px)
                  paddingAngle={1} // Added padding between sections
                  dataKey="value"
                  isAnimationActive={false}
                  cornerRadius={8} // Increased corner radius for more rounded corners
                >
                  {gaugeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>

                {/* Gauge labels - positioned at the start and end of colored sections */}
                <text x="50%" y="35%" textAnchor="middle" fill="#999" fontSize="12">
                  5.0m
                </text>
                <text x="32%" y="42%" textAnchor="middle" fill="#999" fontSize="12">
                  3.0m
                </text>
                <text x="68%" y="42%" textAnchor="middle" fill="#999" fontSize="12">
                  7.0m
                </text>
                <text x="22%" y="62%" textAnchor="middle" fill="#999" fontSize="12">
                  1.0m
                </text>
                <text x="78%" y="62%" textAnchor="middle" fill="#999" fontSize="12">
                  9.0m
                </text>
                <text x="17%" y="77%" textAnchor="middle" fill="#999" fontSize="12">
                  10.0k
                </text>
                <text x="83%" y="77%" textAnchor="middle" fill="#999" fontSize="12">
                  10.0m
                </text>
              </PieChart>
            </ResponsiveContainer>

            {/* Thinner needle matching the image */}
            <svg
              className="absolute"
              style={{
                top: "calc(80% - 100px)",
                left: "calc(50% - 100px)",
                width: "200px",
                height: "200px",
                transform: `rotate(${needleAngle}deg)`,
                transformOrigin: "center center",
                zIndex: 10,
              }}
            >
              {/* Thinner needle matching the image */}
              <path d="M 100,100 Q 103,98 102,55 L 100,30 L 98,55 Q 97,98 100,100 Z" fill="#464646" stroke="none" />
            </svg>

            {/* Value display centered below the needle */}
            <div
              className="absolute text-4xl font-bold text-center"
              style={{
                top: "calc(80% + 40px)", // Below the center of the gauge
                left: "50%",
                transform: "translateX(-50%)",
                width: "150px",
              }}
            >
              {selectedMonth ? formatSales(selectedMonth.sales) : "0"}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
