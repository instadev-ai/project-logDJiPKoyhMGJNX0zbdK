interface DashboardHeaderProps {
  heading: string;
  text?: string;
  children?: React.ReactNode;
}

export function DashboardHeader({
  heading,
  text,
  children,
}: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between px-2 mb-8">
      <div className="grid gap-1">
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          {heading}
        </h1>
        {text && (
          <p className="text-lg text-muted">
            {text}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}