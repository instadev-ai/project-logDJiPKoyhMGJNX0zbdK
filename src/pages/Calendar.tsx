import { Button } from "@/components/ui/button";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";

const Calendar = () => {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Calendar"
        text="Schedule and manage your appointments."
      >
        <Button>Add Event</Button>
      </DashboardHeader>
      
      <div className="grid gap-4">
        {/* Calendar content will go here */}
      </div>
    </DashboardShell>
  );
};

export default Calendar;