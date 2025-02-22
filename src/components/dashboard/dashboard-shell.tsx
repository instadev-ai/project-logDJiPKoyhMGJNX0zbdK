import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Users,
  Building2,
  BarChart3,
  Calendar,
  Settings,
  HelpCircle,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {}

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Companies", href: "/companies", icon: Building2 },
  { name: "Deals", href: "/deals", icon: BarChart3 },
  { name: "Calendar", href: "/calendar", icon: Calendar },
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

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen">
        <Sidebar className="border-r">
          <SidebarHeader className="flex h-16 items-center border-b px-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">CRM</span>
            </Link>
            <SidebarTrigger className="ml-auto" />
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.href}
                    tooltip={item.name}
                  >
                    <Link to={item.href} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <SidebarMenu className="mt-auto">
              {secondaryNavigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.href}
                    tooltip={item.name}
                  >
                    <Link to={item.href} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 overflow-y-auto">
          <div className={cn("container py-6", className)} {...props}>
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}