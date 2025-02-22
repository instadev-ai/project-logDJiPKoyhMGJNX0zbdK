import { Button } from "@/components/ui/button";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Overview } from "@/components/dashboard/overview";
import { RecentCustomers } from "@/components/dashboard/recent-customers";
import { TopDeals } from "@/components/dashboard/top-deals";
import { ActivityFeed } from "@/components/dashboard/activity-feed";

const Dashboard = () => {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dashboard"
        text="Manage your customers, deals, and activities."
      >
        <Button>Add Customer</Button>
      </DashboardHeader>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Overview className="col-span-4" />
        <TopDeals className="col-span-3" />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
        <RecentCustomers className="col-span-4" />
        <ActivityFeed className="col-span-3" />
      </div>
    </DashboardShell>
  );
};

export default Dashboard;