import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { BarChart3, Users, Building2, TrendingUp } from "lucide-react";

const stats = [
  {
    name: "Total Customers",
    value: "2,389",
    change: "+12%",
    changeType: "positive",
    icon: Users,
  },
  {
    name: "Active Companies",
    value: "487",
    change: "+8%",
    changeType: "positive",
    icon: Building2,
  },
  {
    name: "Total Revenue",
    value: "$857,243",
    change: "+23.1%",
    changeType: "positive",
    icon: TrendingUp,
  },
  {
    name: "Active Deals",
    value: "89",
    change: "+4%",
    changeType: "positive",
    icon: BarChart3,
  },
];

export default function Dashboard() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dashboard"
        text="Overview of your business metrics"
      >
        <Button>Download Report</Button>
      </DashboardHeader>

      <div className="grid gap-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.name} className="relative overflow-hidden">
              <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-r from-transparent to-white/5" />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <stat.icon className="h-5 w-5 text-muted" />
                  <span className={cn(
                    "text-sm font-medium",
                    stat.changeType === "positive" ? "text-accent-green" : "text-red-500"
                  )}>
                    {stat.change}
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-sm font-medium text-muted">
                    {stat.name}
                  </h3>
                  <p className="mt-2 text-3xl font-display font-medium text-primary">
                    {stat.value}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <Card className="col-span-1">
            <div className="p-6">
              <h3 className="text-lg font-medium text-primary">Recent Activity</h3>
              <div className="mt-6">
                {/* Activity content will go here */}
              </div>
            </div>
          </Card>
          <Card className="col-span-1">
            <div className="p-6">
              <h3 className="text-lg font-medium text-primary">Top Deals</h3>
              <div className="mt-6">
                {/* Deals content will go here */}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}