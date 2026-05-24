"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { initialRequirements } from "./mock-data";
import { generateMockFilename, inferEvidenceType } from "./requirements-utils";
import type { Evidence, Requirement } from "./types";

interface RequirementsContextValue {
  requirements: Requirement[];
  getRequirement: (id: string) => Requirement | undefined;
  uploadEvidence: (requirementId: string, filename?: string) => void;
  markComplete: (requirementId: string) => void;
}

const RequirementsContext = createContext<RequirementsContextValue | null>(null);

function createId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export function RequirementsProvider({ children }: { children: ReactNode }) {
  const [requirements, setRequirements] = useState<Requirement[]>(initialRequirements);

  const getRequirement = useCallback(
    (id: string) => requirements.find((r) => r.id === id),
    [requirements]
  );

  const uploadEvidence = useCallback((requirementId: string, filename?: string) => {
    const now = new Date().toISOString();
    const resolvedFilename = filename?.trim() || generateMockFilename();
    const type = inferEvidenceType(resolvedFilename);

    const evidence: Evidence = {
      id: createId("ev"),
      filename: resolvedFilename,
      type,
      uploadedAt: now,
      uploadedBy: "Sarah Chen",
    };

    setRequirements((prev) =>
      prev.map((req) => {
        if (req.id !== requirementId) return req;

        const nextStatus =
          req.status === "Complete"
            ? "Complete"
            : req.status === "Missing Evidence" || req.status === "Not Started"
              ? "In Review"
              : req.status;

        return {
          ...req,
          status: nextStatus,
          evidence: [...req.evidence, evidence],
          lastUpdated: now,
          activity: [
            {
              id: createId("act"),
              timestamp: now,
              message: `Uploaded ${resolvedFilename}`,
              actor: "Sarah Chen",
            },
            ...(nextStatus !== req.status
              ? [
                  {
                    id: createId("act"),
                    timestamp: now,
                    message: `Status changed to ${nextStatus}`,
                    actor: "System",
                  },
                ]
              : []),
            ...req.activity,
          ],
        };
      })
    );
  }, []);

  const markComplete = useCallback((requirementId: string) => {
    const now = new Date().toISOString();

    setRequirements((prev) =>
      prev.map((req) => {
        if (req.id !== requirementId) return req;
        if (req.status === "Complete") return req;

        return {
          ...req,
          status: "Complete",
          lastUpdated: now,
          activity: [
            {
              id: createId("act"),
              timestamp: now,
              message: "Marked as Complete — all evidence verified",
              actor: "Sarah Chen",
            },
            ...req.activity,
          ],
        };
      })
    );
  }, []);

  const value = useMemo(
    () => ({
      requirements,
      getRequirement,
      uploadEvidence,
      markComplete,
    }),
    [requirements, getRequirement, uploadEvidence, markComplete]
  );

  return (
    <RequirementsContext.Provider value={value}>
      {children}
    </RequirementsContext.Provider>
  );
}

export function useRequirements() {
  const context = useContext(RequirementsContext);
  if (!context) {
    throw new Error("useRequirements must be used within RequirementsProvider");
  }
  return context;
}
