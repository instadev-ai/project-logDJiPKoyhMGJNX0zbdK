import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const customers = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    value: "$1,999.00",
    image: "/avatars/01.png",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    value: "$1,499.00",
    image: "/avatars/02.png",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    value: "$1,299.00",
    image: "/avatars/03.png",
  },
  {
    name: "William Kim",
    email: "will.kim@email.com",
    value: "$999.00",
    image: "/avatars/04.png",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    value: "$899.00",
    image: "/avatars/05.png",
  },
];

interface RecentCustomersProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RecentCustomers({ className, ...props }: RecentCustomersProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Recent Customers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {customers.map((customer) => (
            <div key={customer.email} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={customer.image} alt="Avatar" />
                <AvatarFallback>
                  {customer.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{customer.name}</p>
                <p className="text-sm text-muted">{customer.email}</p>
              </div>
              <div className="ml-auto font-medium">{customer.value}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}