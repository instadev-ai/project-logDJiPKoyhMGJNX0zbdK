import { Button } from "@/components/ui/button";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";

const Customers = () => {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Customers"
        text="Manage your customer relationships."
      >
        <Button>Add Customer</Button>
      </DashboardHeader>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Customer content will go here */}
      </div>
    </DashboardShell>
  );
};

export default Customers;