import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const activities = [
  {
    user: {
      name: "John Smith",
      image: "/avatars/06.png",
    },
    action: "added a new contact",
    target: "Sarah Wilson",
    time: "2 hours ago",
  },
  {
    user: {
      name: "Emily Davis",
      image: "/avatars/07.png",
    },
    action: "closed a deal with",
    target: "Tech Solutions Inc.",
    time: "4 hours ago",
  },
  {
    user: {
      name: "Michael Chen",
      image: "/avatars/08.png",
    },
    action: "scheduled a meeting with",
    target: "David Miller",
    time: "6 hours ago",
  },
  {
    user: {
      name: "Jessica Taylor",
      image: "/avatars/09.png",
    },
    action: "updated the status of",
    target: "Cloud Migration Project",
    time: "8 hours ago",
  },
  {
    user: {
      name: "Ryan Wilson",
      image: "/avatars/10.png",
    },
    action: "created a new opportunity for",
    target: "Global Systems Ltd.",
    time: "12 hours ago",
  },
];

interface ActivityFeedProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ActivityFeed({ className, ...props }: ActivityFeedProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Activity Feed</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src={activity.user.image} alt="Avatar" />
                <AvatarFallback>
                  {activity.user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.user.name}</span>
                  {" "}
                  {activity.action}
                  {" "}
                  <span className="font-medium">{activity.target}</span>
                </p>
                <p className="text-sm text-muted">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}