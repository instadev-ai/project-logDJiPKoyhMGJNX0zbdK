import { Button } from "@/components/ui/button";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";

const Companies = () => {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Companies"
        text="Manage your business relationships."
      >
        <Button>Add Company</Button>
      </DashboardHeader>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Companies content will go here */}
      </div>
    </DashboardShell>
  );
};

export default Companies;