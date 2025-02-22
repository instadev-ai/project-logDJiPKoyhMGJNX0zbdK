import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { 
  MoreHorizontal, 
  ArrowUpDown,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Customer {
  id: string
  name: string
  email: string
  status: "active" | "inactive"
  lastActive: string
  company: string
  avatar?: string
  phone?: string
}

const customers: Customer[] = [
  {
    id: "1",
    name: "Sarah Miller",
    email: "sarah.miller@company.com",
    status: "active",
    lastActive: "Just now",
    company: "Design Co.",
    avatar: "https://ui.shadcn.com/avatars/01.png",
    phone: "+1 (555) 123-4567",
  },
  {
    id: "2",
    name: "John Davis",
    email: "john.davis@tech.com",
    status: "active",
    lastActive: "2 hours ago",
    company: "Tech Solutions",
    avatar: "https://ui.shadcn.com/avatars/02.png",
    phone: "+1 (555) 234-5678",
  },
  {
    id: "3",
    name: "Emma Wilson",
    email: "emma.w@creative.io",
    status: "inactive",
    lastActive: "3 days ago",
    company: "Creative Labs",
    avatar: "https://ui.shadcn.com/avatars/03.png",
    phone: "+1 (555) 345-6789",
  },
  {
    id: "4",
    name: "Michael Chen",
    email: "m.chen@startup.co",
    status: "active",
    lastActive: "1 hour ago",
    company: "Startup Inc.",
    avatar: "https://ui.shadcn.com/avatars/04.png",
    phone: "+1 (555) 456-7890",
  },
  {
    id: "5",
    name: "Lisa Taylor",
    email: "lisa.t@design.studio",
    status: "active",
    lastActive: "5 mins ago",
    company: "Design Studio",
    avatar: "https://ui.shadcn.com/avatars/05.png",
    phone: "+1 (555) 567-8901",
  },
]

export function CustomerTable() {
  return (
    <div className="rounded-xl border bg-white dark:bg-gray-800">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[300px]">
              <Button variant="ghost" className="p-0 hover:bg-transparent">
                <span>Name</span>
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Last Active</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={customer.avatar} />
                    <AvatarFallback>{customer.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-primary dark:text-white">
                      {customer.name}
                    </span>
                    <span className="text-sm text-muted dark:text-gray-400">
                      {customer.email}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={customer.status === "active" ? "default" : "secondary"}
                  className={cn(
                    "capitalize",
                    customer.status === "active" 
                      ? "bg-green-50 text-green-700 hover:bg-green-50 dark:bg-green-500/10 dark:text-green-400" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-100 dark:bg-gray-500/10 dark:text-gray-400"
                  )}
                >
                  {customer.status}
                </Badge>
              </TableCell>
              <TableCell>{customer.company}</TableCell>
              <TableCell>{customer.lastActive}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[160px]">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Phone className="mr-2 h-4 w-4" />
                      Call
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Profile
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}