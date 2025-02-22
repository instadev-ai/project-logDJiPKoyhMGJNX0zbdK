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
    <div className="flex items-center justify-between pb-8">
      <div className="space-y-1">
        <h1 className="text-3xl font-display font-medium tracking-tight text-primary dark:text-white">
          {heading}
        </h1>
        {text && (
          <p className="text-base text-muted dark:text-gray-400">
            {text}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}