import { cn } from "@/lib/utils";
import { Sidebar } from "./sidebar";

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardShell({
  children,
  className,
  ...props
}: DashboardShellProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 px-6 py-6 bg-background">
          <div className={cn("mx-auto max-w-7xl", className)} {...props}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}