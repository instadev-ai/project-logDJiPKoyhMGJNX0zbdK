import {
  Calendar,
  Users,
  Building2,
  Settings,
  HelpCircle,
  DollarSign,
  PanelLeftClose,
  PanelLeftOpen,
  Sun,
  Moon,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  // Initialize dark mode based on system preference or stored preference
  useEffect(() => {
    const isDarkStored = localStorage.getItem('darkMode') === 'true';
    if (isDarkStored) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="flex min-h-screen bg-[#FAFAF8] dark:bg-gray-900">
      {/* Sidebar */}
      <div
        className={cn(
          "bg-white dark:bg-gray-800 border-r border-[#E6E4DD] dark:border-gray-700 transition-all duration-300 relative",
          sidebarOpen ? "w-64" : "w-20"
        )}
      >
        {/* Top Controls */}
        <div className="absolute top-2 right-2 flex items-center gap-2 z-50">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-md hover:bg-[#F0EFEA] dark:hover:bg-gray-700 text-muted hover:text-primary dark:hover:text-white"
            onClick={toggleDarkMode}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-md hover:bg-[#F0EFEA] dark:hover:bg-gray-700 text-muted hover:text-primary dark:hover:text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            title={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            {sidebarOpen ? (
              <PanelLeftClose className="h-5 w-5" />
            ) : (
              <PanelLeftOpen className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Logo/Title Section */}
        <div className="px-6 pt-6 pb-4 border-b border-[#E6E4DD] dark:border-gray-700">
          {sidebarOpen && (
            <Link to="/" className="flex items-center">
              <span className="text-xl font-display font-medium text-primary dark:text-white">
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
                    ? "bg-[#F0EFEA] dark:bg-gray-700 text-primary dark:text-white"
                    : "text-muted hover:text-primary dark:text-gray-300 dark:hover:text-white hover:bg-[#F0EFEA] dark:hover:bg-gray-700"
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
                    ? "bg-[#F0EFEA] dark:bg-gray-700 text-primary dark:text-white"
                    : "text-muted hover:text-primary dark:text-gray-300 dark:hover:text-white hover:bg-[#F0EFEA] dark:hover:bg-gray-700"
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