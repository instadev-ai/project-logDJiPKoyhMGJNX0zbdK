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
  SidebarRail,
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
      <div className="flex min-h-screen bg-[#FAFAF8]">
        <Sidebar className="border-r border-[#E6E4DD] bg-white">
          <SidebarHeader className="flex h-[70px] items-center border-b border-[#E6E4DD] px-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-display font-medium tracking-tight text-primary">CRM</span>
            </Link>
            <SidebarTrigger className="ml-auto text-muted hover:text-primary transition-colors" />
          </SidebarHeader>
          <SidebarContent className="px-2 py-4">
            <SidebarMenu>
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.name}
                      className={cn(
                        "h-10 px-3 text-sm font-medium transition-all",
                        isActive 
                          ? "bg-[#F0EFEA] text-primary" 
                          : "text-muted hover:bg-[#F0EFEA] hover:text-primary"
                      )}
                    >
                      <Link to={item.href} className="flex items-center gap-3">
                        <item.icon className={cn(
                          "h-[18px] w-[18px] transition-colors",
                          isActive ? "text-primary" : "text-muted"
                        )} />
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
            <SidebarMenu className="mt-auto border-t border-[#E6E4DD] pt-4">
              {secondaryNavigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.name}
                      className={cn(
                        "h-10 px-3 text-sm font-medium transition-all",
                        isActive 
                          ? "bg-[#F0EFEA] text-primary" 
                          : "text-muted hover:bg-[#F0EFEA] hover:text-primary"
                      )}
                    >
                      <Link to={item.href} className="flex items-center gap-3">
                        <item.icon className={cn(
                          "h-[18px] w-[18px] transition-colors",
                          isActive ? "text-primary" : "text-muted"
                        )} />
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarContent>
          <SidebarRail />
        </Sidebar>
        <main className="flex-1 overflow-y-auto">
          <div className={cn(
            "px-8 py-8",
            className
          )} {...props}>
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}