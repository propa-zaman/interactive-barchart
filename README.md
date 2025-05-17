
# Interactive Data Visualization Project

A Next.js application featuring interactive data visualization components including a color-coded bar chart and a dynamic gauge chart.

![Bar Chart Preview](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-09dOw23ljR5rtRNQMJmILp4xdri82a.png)
![Gauge Chart Preview](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-G9FXETbuxrHqfPTwndNDSc9VUi0SIx.png)

## Features

### Interactive Bar Chart
- Color-coded bars based on TotalValue
- Responsive design that works on all screen sizes
- Interactive tooltips showing Product, TotalValue, and TotalSales
- Vertical color legend showing the value scale
- Automatic sorting of data by TotalSales

### Interactive Gauge Chart
- Dynamic 3/4 circle gauge with three color-coded sections (Low, Medium, High)
- Interactive month selection with real-time updates
- Animated needle that points to the current value
- Status indicator showing the current category (Low, Medium, High)
- Value display showing the current sales figure
- Properly positioned value labels around the gauge

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/interactive-charts.git
cd interactive-charts
```
2. Install dependencies:
```bash
npm install
# or
yarn install
```
3. Run the development server:
```bash
npm run dev
# or
yarn dev
```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.
## Usage

### Importing Components

To use the chart components in your own pages or components:

```jsx
import InteractiveBarChart from "@/app/components/interactive-barchart";
import GaugeChart from "@/app/components/gauge-chart";

export default function MyPage() {
  return (
    <div>
      <h2>Product Analysis</h2>
      <InteractiveBarChart />
      
      <h2>Sales Performance</h2>
      <GaugeChart />
    </div>
  );
}
```
## Tech Stack

This project is built with modern web technologies:

### Core Technologies

- **[Next.js](https://nextjs.org/)** (v14+) - React framework with App Router for server components, routing, and API
- **[React](https://reactjs.org/)** (v18+) - JavaScript library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Typed JavaScript for better developer experience and code quality

### Data Visualization

- **[Recharts](https://recharts.org/)** - Composable charting library built on React components
  - Used for both the interactive bar chart and gauge chart visualizations
  - Provides responsive containers, tooltips, and interactive elements

### Styling and UI

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development
- **[Geist Font](https://vercel.com/font)** - Modern sans-serif and monospace fonts by Vercel
  - Geist Sans - Used for general text
  - Geist Mono - Used for monospaced content

### Development Tools

- **ESLint** - Linting utility for JavaScript and TypeScript
- **Prettier** - Code formatter to maintain consistent code style
- **Next.js App Router** - File-system based routing with support for layouts and server components

### Project Structure

The project follows the Next.js App Router convention:

```bash
├── app/                  # Main application code
│   ├── components/       # React components
│   │   ├── interactive-barchart.tsx  # Bar chart visualization
│   │   └── gauge-chart.tsx           # Gauge chart visualization
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout with font configuration
│   └── page.tsx          # Main page component
├── public/               # Static assets
│   └── favicon.ico       # Site favicon
└── README.md             # Project documentation
```
## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)
---

## Contact

Your Name - propazaman12@gmailcom

Project Link: [https://github.com/propa-zaman/interactive-barchart](https://github.com/propa-zaman/interactive-barchart)