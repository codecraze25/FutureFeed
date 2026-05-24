"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { StatusBadge } from "@/components/requirements/status-badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { DashboardStats } from "@/lib/types";

export function AuditReadiness({
  stats,
  blockingCount,
}: {
  stats: DashboardStats;
  blockingCount: number;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Audit Readiness</CardTitle>
        <CardDescription>
          Overall progress toward Q2 2026 audit preparation
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-4xl font-semibold tracking-tight">
              {stats.auditReadiness}%
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {stats.completed} of {stats.total} controls complete
            </p>
          </div>
          {blockingCount > 0 && (
            <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-right dark:border-amber-900/50 dark:bg-amber-950/30">
              <p className="text-lg font-semibold text-amber-700 dark:text-amber-400">
                {blockingCount}
              </p>
              <p className="text-xs text-amber-600 dark:text-amber-500">
                blocking readiness
              </p>
            </div>
          )}
        </div>
        <Progress value={stats.auditReadiness} className="h-2" />
        <div className="grid grid-cols-3 gap-3 pt-1 text-center text-sm">
          <div className="rounded-lg bg-muted/50 px-2 py-2">
            <p className="font-medium text-red-600 dark:text-red-400">
              {stats.missingEvidence}
            </p>
            <p className="text-xs text-muted-foreground">Missing evidence</p>
          </div>
          <div className="rounded-lg bg-muted/50 px-2 py-2">
            <p className="font-medium text-blue-600 dark:text-blue-400">
              {stats.inReview}
            </p>
            <p className="text-xs text-muted-foreground">In review</p>
          </div>
          <div className="rounded-lg bg-muted/50 px-2 py-2">
            <p className="font-medium text-muted-foreground">{stats.notStarted}</p>
            <p className="text-xs text-muted-foreground">Not started</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function AtRiskItems({
  items,
}: {
  items: { id: string; title: string; status: import("@/lib/types").RequirementStatus }[];
}) {
  if (items.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>At Risk</CardTitle>
          <CardDescription>Requirements blocking audit readiness</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            All requirements have evidence attached or are under review.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle>At Risk</CardTitle>
          <CardDescription>
            Requirements missing evidence or not yet started
          </CardDescription>
        </div>
        <Button variant="ghost" size="sm" render={<Link href="/requirements" />}>
          View all
          <ArrowRight className="size-3.5" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-2">
        {items.slice(0, 5).map((item) => (
          <Link
            key={item.id}
            href={`/requirements/${item.id}`}
            className="flex items-center justify-between rounded-lg border border-border px-3 py-2.5 transition-colors hover:bg-muted/50"
          >
            <div>
              <p className="text-sm font-medium">
                {item.id} · {item.title}
              </p>
            </div>
            <StatusBadge status={item.status} />
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}

export function RecentUpdates({
  items,
}: {
  items: {
    id: string;
    title: string;
    status: import("@/lib/types").RequirementStatus;
    lastUpdated: string;
  }[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recently Updated</CardTitle>
        <CardDescription>Latest activity across requirements</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/requirements/${item.id}`}
            className="flex items-center justify-between rounded-lg border border-border px-3 py-2.5 transition-colors hover:bg-muted/50"
          >
            <div>
              <p className="text-sm font-medium">
                {item.id} · {item.title}
              </p>
              <p className="text-xs text-muted-foreground">
                {new Intl.DateTimeFormat("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }).format(new Date(item.lastUpdated))}
              </p>
            </div>
            <StatusBadge status={item.status} />
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
