"use client";

import { AlertTriangle, CheckCircle2, ClipboardList, Target } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { DashboardStats } from "@/lib/types";

const cards = [
  {
    key: "total" as const,
    label: "Total Controls",
    icon: ClipboardList,
    description: "Requirements in scope",
  },
  {
    key: "completed" as const,
    label: "Completed",
    icon: CheckCircle2,
    description: "Evidence verified",
  },
  {
    key: "needsAttention" as const,
    label: "Needs Attention",
    icon: AlertTriangle,
    description: "Missing, in review, or not started",
  },
  {
    key: "auditReadiness" as const,
    label: "Audit Readiness",
    icon: Target,
    description: "Overall completion rate",
    suffix: "%",
  },
];

export function StatCards({ stats }: { stats: DashboardStats }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map(({ key, label, icon: Icon, description, suffix }) => (
        <Card key={key}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {label}
            </CardTitle>
            <Icon className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold tracking-tight">
              {stats[key]}
              {suffix ?? ""}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
