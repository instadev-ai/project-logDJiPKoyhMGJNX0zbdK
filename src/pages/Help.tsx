import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";

const Help = () => {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Help & Support"
        text="Get help and learn how to use the platform."
      />
      
      <div className="grid gap-4">
        {/* Help content will go here */}
      </div>
    </DashboardShell>
  );
};

export default Help;