import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";

const Settings = () => {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage your account settings and preferences."
      />
      
      <div className="grid gap-4">
        {/* Settings content will go here */}
      </div>
    </DashboardShell>
  );
};

export default Settings;