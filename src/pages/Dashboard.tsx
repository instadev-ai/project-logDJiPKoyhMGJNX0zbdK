import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Users,
  Building2,
  DollarSign,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    name: "Total Customers",
    value: "2,389",
    change: "+12.3%",
    changeType: "positive",
    icon: Users,
  },
  {
    name: "Total Companies",
    value: "389",
    change: "+8.2%",
    changeType: "positive",
    icon: Building2,
  },
  {
    name: "Total Revenue",
    value: "$42,389",
    change: "+16.4%",
    changeType: "positive",
    icon: DollarSign,
  },
  {
    name: "Growth Rate",
    value: "23.4%",
    change: "-2.1%",
    changeType: "negative",
    icon: TrendingUp,
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

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.name} className="relative overflow-hidden dark:bg-gray-800">
            <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-r from-transparent to-white/5" />
            <div className="p-6">
              <div className="flex items-center justify-between">
                <stat.icon className="h-5 w-5 text-muted dark:text-gray-400" />
                <span className={cn(
                  "text-sm font-medium",
                  stat.changeType === "positive" ? "text-accent-green" : "text-red-500"
                )}>
                  {stat.change}
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-medium text-muted dark:text-gray-400">
                  {stat.name}
                </h3>
                <p className="mt-2 text-3xl font-display font-medium text-primary dark:text-white">
                  {stat.value}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="dark:bg-gray-800">
          <div className="p-6">
            <h3 className="text-lg font-medium text-primary dark:text-white mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {/* Placeholder content */}
              <div className="h-12 bg-[#F0EFEA] dark:bg-gray-700 rounded-md animate-pulse" />
              <div className="h-12 bg-[#F0EFEA] dark:bg-gray-700 rounded-md animate-pulse" />
              <div className="h-12 bg-[#F0EFEA] dark:bg-gray-700 rounded-md animate-pulse" />
            </div>
          </div>
        </Card>

        <Card className="dark:bg-gray-800">
          <div className="p-6">
            <h3 className="text-lg font-medium text-primary dark:text-white mb-6">Top Deals</h3>
            <div className="space-y-4">
              {/* Placeholder content */}
              <div className="h-12 bg-[#F0EFEA] dark:bg-gray-700 rounded-md animate-pulse" />
              <div className="h-12 bg-[#F0EFEA] dark:bg-gray-700 rounded-md animate-pulse" />
              <div className="h-12 bg-[#F0EFEA] dark:bg-gray-700 rounded-md animate-pulse" />
            </div>
          </div>
        </Card>
      </div>
    </DashboardShell>
  );
}