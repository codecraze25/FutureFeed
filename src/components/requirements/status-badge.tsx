import type { RequirementStatus } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const statusConfig: Record<
  RequirementStatus,
  { variant: "default" | "secondary" | "destructive" | "outline"; className?: string }
> = {
  Complete: {
    variant: "default",
    className: "bg-emerald-600/10 text-emerald-700 dark:text-emerald-400 border-emerald-600/20",
  },
  "Missing Evidence": {
    variant: "destructive",
    className: "bg-red-600/10 text-red-700 dark:text-red-400 border-red-600/20",
  },
  "In Review": {
    variant: "secondary",
    className: "bg-blue-600/10 text-blue-700 dark:text-blue-400 border-blue-600/20",
  },
  "Not Started": {
    variant: "outline",
    className: "text-muted-foreground",
  },
};

export function StatusBadge({ status }: { status: RequirementStatus }) {
  const config = statusConfig[status];

  return (
    <Badge variant={config.variant} className={cn(config.className)}>
      {status}
    </Badge>
  );
}
