import {
  Building2,
  Calendar,
  HelpCircle,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  Sun,
  Users2,
  Wallet,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: Building2 },
  { name: "Customers", href: "/customers", icon: Users2 },
  { name: "Companies", href: "/companies", icon: Building2 },
  { name: "Deals", href: "/deals", icon: Wallet },
  { name: "Calendar", href: "/calendar", icon: Calendar },
];

const secondaryNavigation = [
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Help", href: "/help", icon: HelpCircle },
];

export function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="flex min-h-screen bg-[#FAFAF8] dark:bg-gray-900">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen border-r border-[#E6E4DD] dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300",
          sidebarOpen ? "w-64" : "w-20"
        )}
      >
        {/* Collapse Button - At the very top */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute top-2 right-2 p-2 rounded-md hover:bg-[#F0EFEA] dark:hover:bg-gray-700 text-muted hover:text-primary dark:hover:text-white transition-colors z-50"
          title={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          {sidebarOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
        </button>

        {/* Logo/Title Section */}
        <div className="px-6 pt-6 pb-4 border-b border-[#E6E4DD] dark:border-gray-800">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
            {sidebarOpen && (
              <span className="ml-3 text-lg font-semibold text-[#141413] dark:text-white">
                Dashboard
              </span>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col h-[calc(100vh-5rem)] px-4 pb-4">
          <div className="flex-1 space-y-1 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                  location.pathname === item.href
                    ? "bg-[#F0EFEA] dark:bg-gray-800 text-[#141413] dark:text-white"
                    : "text-muted hover:text-primary dark:text-gray-300 dark:hover:text-white hover:bg-[#F0EFEA] dark:hover:bg-gray-700"
                )}
              >
                <item.icon className="h-5 w-5" />
                {sidebarOpen && <span>{item.name}</span>}
              </Link>
            ))}
          </div>

          <div className="mt-auto space-y-1">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                "text-muted hover:text-primary dark:text-gray-300 dark:hover:text-white hover:bg-[#F0EFEA] dark:hover:bg-gray-700"
              )}
            >
              {isDark ? (
                <>
                  <Sun className="h-5 w-5" />
                  {sidebarOpen && <span>Light Mode</span>}
                </>
              ) : (
                <>
                  <Moon className="h-5 w-5" />
                  {sidebarOpen && <span>Dark Mode</span>}
                </>
              )}
            </button>

            {secondaryNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                  location.pathname === item.href
                    ? "bg-[#F0EFEA] dark:bg-gray-800 text-[#141413] dark:text-white"
                    : "text-muted hover:text-primary dark:text-gray-300 dark:hover:text-white hover:bg-[#F0EFEA] dark:hover:bg-gray-700"
                )}
              >
                <item.icon className="h-5 w-5" />
                {sidebarOpen && <span>{item.name}</span>}
              </Link>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={cn(
          "flex-1 transition-all duration-300",
          sidebarOpen ? "ml-64" : "ml-20"
        )}
      >
        {children}
      </main>
    </div>
  );
}