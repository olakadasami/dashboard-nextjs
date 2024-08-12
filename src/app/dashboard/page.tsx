import { DashboardChart } from "@/components/DashboardComponents/AreaChart";
import { DoubleBarChart } from "@/components/DashboardComponents/DoubleBarChart";
import { TableDashboard } from "@/components/DashboardComponents/Table";
import { SingleBarChart } from "@/components/DashboardComponents/SingleBarChart";
import { PieChartDashboard } from "@/components/DashboardComponents/PieChart";
import CalendarDashboard from "@/components/DashboardComponents/Calender";
import DataTableDashboard from "@/components/DashboardComponents/DataTable";
import { CardDashboard } from "@/components/DashboardComponents/Card";
import SmallCard from "@/components/DashboardComponents/SmallCard";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="space-y-4 sm:py-4 px-6 relative">
      <h1>Dashboard</h1>
      <main className=" space-y-4">
        {/* Top containers */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <SmallCard key={i} />
          ))}
        </div>
        {/* Dashboard containers */}
        <div className="flex flex-col gap-4">
          {/* First Row: Two Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className=" border rounded-lg overflow-hidden">
              <DashboardChart />
            </Card>
            <Card className=" border rounded-lg overflow-hidden">
              <DoubleBarChart />
            </Card>
          </div>

          {/* Second Row: First Column Full, Second Column Shared */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className=" border rounded-lg overflow-hidden">
              <DataTableDashboard />
            </Card>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className=" border rounded-lg overflow-hidden">
                <SingleBarChart />
              </Card>
              <Card className=" border rounded-lg overflow-hidden">
                <PieChartDashboard />
              </Card>
            </div>
          </div>

          {/* Third Row: Same as Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className=" border rounded-lg overflow-hidden p-4">
              <TableDashboard />
            </Card>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className=" border rounded-lg overflow-hidden"></Card>
              <Card className=" border rounded-lg overflow-hidden grid place-items-center">
                <CalendarDashboard />
              </Card>
            </div>
          </div>

          {/* Fourth Row: Shared by Four Components */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 col-span-2">
            <Card className="border rounded-lg overflow-hidden">
              <CardDashboard />
            </Card>
            <Card className="border rounded-lg overflow-hidden">
              <CardDashboard />
            </Card>
            <Card className="border rounded-lg overflow-hidden">
              <CardDashboard />
            </Card>
            <Card className="border rounded-lg overflow-hidden">
              <CardDashboard />
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
