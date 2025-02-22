import {
  Calendar,
  Users,
  Building2,
  Settings,
  HelpCircle,
  DollarSign,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: Building2 },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Companies", href: "/companies", icon: Building2 },
  { name: "Deals", href: "/deals", icon: DollarSign },
  { name: "Calendar", href: "/calendar", icon: Calendar },
];

const secondaryNavigation = [
  { name: "Help", href: "/help", icon: HelpCircle },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={cn(
          "bg-white border-r border-[#E6E4DD] transition-all duration-300 relative",
          sidebarOpen ? "w-64" : "w-20"
        )}
      >
        {/* Collapse Button - Now at the very top */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute top-2 right-2 p-2 rounded-md hover:bg-[#F0EFEA] text-muted hover:text-primary transition-colors z-50"
          title={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          {sidebarOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
        </button>

        {/* Logo/Title Section */}
        <div className="px-6 pt-6 pb-4 border-b border-[#E6E4DD]">
          {sidebarOpen && (
            <Link to="/" className="flex items-center">
              <span className="text-xl font-display font-medium text-primary">
                Dashboard
              </span>
            </Link>
          )}
        </div>

        <nav className="flex flex-col flex-1 p-4">
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                  location.pathname === item.href
                    ? "bg-[#F0EFEA] text-primary"
                    : "text-muted hover:text-primary hover:bg-[#F0EFEA]"
                )}
              >
                <item.icon className="h-5 w-5" />
                {sidebarOpen && <span>{item.name}</span>}
              </Link>
            ))}
          </div>

          <div className="mt-auto space-y-1">
            {secondaryNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                  location.pathname === item.href
                    ? "bg-[#F0EFEA] text-primary"
                    : "text-muted hover:text-primary hover:bg-[#F0EFEA]"
                )}
              >
                <item.icon className="h-5 w-5" />
                {sidebarOpen && <span>{item.name}</span>}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 min-w-0 overflow-auto">
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}