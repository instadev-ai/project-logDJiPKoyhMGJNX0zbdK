import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const deals = [
  {
    name: "Enterprise Software Solution",
    company: "Tech Corp Inc.",
    value: "$150,000",
    stage: "Negotiation",
    probability: "80%",
  },
  {
    name: "Cloud Migration Project",
    company: "Global Systems Ltd.",
    value: "$95,000",
    stage: "Proposal",
    probability: "65%",
  },
  {
    name: "Security Infrastructure",
    company: "Secure Networks",
    value: "$78,000",
    stage: "Discovery",
    probability: "45%",
  },
  {
    name: "Digital Transformation",
    company: "Innovation Co.",
    value: "$220,000",
    stage: "Closing",
    probability: "90%",
  },
];

interface TopDealsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TopDeals({ className, ...props }: TopDealsProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Top Deals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {deals.map((deal) => (
            <div key={deal.name} className="flex flex-col space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium leading-none">{deal.name}</p>
                  <p className="text-sm text-muted">{deal.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium leading-none">{deal.value}</p>
                  <Badge 
                    variant="outline" 
                    className="mt-1"
                  >
                    {deal.probability}
                  </Badge>
                </div>
              </div>
              <div className="h-2 rounded-full bg-secondary">
                <div
                  className="h-2 rounded-full bg-primary"
                  style={{ width: deal.probability }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}