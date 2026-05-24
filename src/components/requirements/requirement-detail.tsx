"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, FileText, Image, Table2 } from "lucide-react";

import { UploadEvidenceDialog } from "@/components/requirements/upload-evidence-dialog";
import { StatusBadge } from "@/components/requirements/status-badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatDate, formatDateTime } from "@/lib/requirements-utils";
import { useRequirements } from "@/lib/store";
import type { EvidenceType } from "@/lib/types";
import { cn } from "@/lib/utils";

const evidenceIcons: Record<EvidenceType, typeof FileText> = {
  pdf: FileText,
  screenshot: Image,
  report: FileText,
  export: Table2,
};

export function RequirementDetail({ id }: { id: string }) {
  const { getRequirement, markComplete } = useRequirements();
  const requirement = getRequirement(id);

  if (!requirement) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 p-12">
        <p className="text-muted-foreground">Requirement not found.</p>
        <Link
          href="/requirements"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <ArrowLeft className="size-4" />
          Back to Requirements
        </Link>
      </div>
    );
  }

  const canMarkComplete =
    requirement.status !== "Complete" && requirement.evidence.length > 0;
  const isBlocking =
    requirement.status === "Missing Evidence" ||
    requirement.status === "Not Started";

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link
            href="/requirements"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "-ml-2 mb-2"
            )}
          >
            <ArrowLeft className="size-4" />
            Requirements
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-xl font-semibold">
              {requirement.id} · {requirement.title}
            </h2>
            <StatusBadge status={requirement.status} />
          </div>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            {requirement.description}
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <UploadEvidenceDialog requirementId={requirement.id} />
          <Button
            disabled={!canMarkComplete}
            onClick={() => markComplete(requirement.id)}
          >
            <CheckCircle2 className="size-4" />
            Mark Complete
          </Button>
        </div>
      </div>

      {isBlocking && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 dark:border-amber-900/50 dark:bg-amber-950/30">
          <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
            This requirement is blocking audit readiness
          </p>
          <p className="mt-0.5 text-sm text-amber-700 dark:text-amber-400">
            Upload evidence to move this requirement forward in the audit prep
            workflow.
          </p>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Attached Evidence</CardTitle>
            <CardDescription>
              {requirement.evidence.length} file
              {requirement.evidence.length !== 1 ? "s" : ""} attached
            </CardDescription>
          </CardHeader>
          <CardContent>
            {requirement.evidence.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No evidence attached yet. Upload a file to begin review.
              </p>
            ) : (
              <ul className="space-y-2">
                {requirement.evidence.map((item) => {
                  const Icon = evidenceIcons[item.type];
                  return (
                    <li
                      key={item.id}
                      className="flex items-center gap-3 rounded-lg border border-border px-3 py-2.5"
                    >
                      <Icon className="size-4 shrink-0 text-muted-foreground" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">
                          {item.filename}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(item.uploadedAt)} · {item.uploadedBy}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activity</CardTitle>
            <CardDescription>Recent changes and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {requirement.activity.map((entry, index) => (
                <li key={entry.id}>
                  <div className="flex gap-3">
                    <div className="mt-1.5 size-2 shrink-0 rounded-full bg-muted-foreground/40" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm">{entry.message}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {entry.actor} · {formatDateTime(entry.timestamp)}
                      </p>
                    </div>
                  </div>
                  {index < requirement.activity.length - 1 && (
                    <Separator className="mt-4" />
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}