import { Button } from "@/components/ui/button";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";

const Deals = () => {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Deals"
        text="Track and manage your sales pipeline."
      >
        <Button>Add Deal</Button>
      </DashboardHeader>
      
      <div className="grid gap-4">
        {/* Deals content will go here */}
      </div>
    </DashboardShell>
  );
};

export default Deals;