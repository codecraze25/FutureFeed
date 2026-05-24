"use client";

import {
  AtRiskItems,
  AuditReadiness,
  RecentUpdates,
} from "@/components/dashboard/dashboard-sections";
import { StatCards } from "@/components/dashboard/stat-cards";
import { PageHeader } from "@/components/layout/page-header";
import {
  computeDashboardStats,
  getAtRiskItems,
  getRecentlyUpdated,
} from "@/lib/requirements-utils";
import { useRequirements } from "@/lib/store";

export function DashboardContent() {
  const { requirements } = useRequirements();
  const stats = computeDashboardStats(requirements);
  const recent = getRecentlyUpdated(requirements);
  const atRisk = getAtRiskItems(requirements);
  const blockingCount = stats.missingEvidence + stats.notStarted;

  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Audit readiness overview for Q2 2026 compliance cycle"
      />
      <div className="space-y-6 p-6">
        <StatCards stats={stats} />
        <div className="grid gap-6 lg:grid-cols-2">
          <AuditReadiness stats={stats} blockingCount={blockingCount} />
          <AtRiskItems items={atRisk} />
        </div>
        <RecentUpdates items={recent} />
      </div>
    </>
  );
}
