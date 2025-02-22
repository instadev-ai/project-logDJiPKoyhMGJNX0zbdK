import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Building2,
  CalendarDays,
  Settings,
  HelpCircle,
  DollarSign,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {}

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Companies", href: "/companies", icon: Building2 },
  { name: "Deals", href: "/deals", icon: DollarSign },
  { name: "Calendar", href: "/calendar", icon: CalendarDays },
];

const secondaryNavigation = [
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Help", href: "/help", icon: HelpCircle },
];

export function DashboardShell({
  children,
  className,
  ...props
}: DashboardShellProps) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#FAFAF8]">
      {/* Sidebar */}
      <div
        className={cn(
          "bg-white border-r border-[#E6E4DD] transition-all duration-300 relative",
          sidebarOpen ? "w-64" : "w-20"
        )}
      >
        {/* Logo */}
        <div className="h-[60px] border-b border-[#E6E4DD] flex items-center px-6">
          <Link to="/" className="flex items-center gap-2">
            <span className={cn(
              "text-xl font-display font-medium text-primary transition-all duration-300",
              !sidebarOpen && "opacity-0"
            )}>
              CRM
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <div className="p-4">
          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-[#F0EFEA] text-primary"
                      : "text-muted hover:bg-[#F0EFEA] hover:text-primary"
                  )}
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  <span className={cn(
                    "transition-all duration-300",
                    !sidebarOpen && "opacity-0 w-0"
                  )}>
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Secondary Navigation */}
          <nav className="mt-auto pt-4 border-t border-[#E6E4DD] space-y-1">
            {secondaryNavigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-[#F0EFEA] text-primary"
                      : "text-muted hover:bg-[#F0EFEA] hover:text-primary"
                  )}
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  <span className={cn(
                    "transition-all duration-300",
                    !sidebarOpen && "opacity-0 w-0"
                  )}>
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute bottom-4 left-4 p-2 rounded-md hover:bg-[#F0EFEA] text-muted hover:text-primary transition-colors"
          title={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          {sidebarOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8 w-full" {...props}>
          {children}
        </div>
      </div>
    </div>
  );
}