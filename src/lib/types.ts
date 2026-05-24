export type RequirementStatus =
  | "Complete"
  | "Missing Evidence"
  | "In Review"
  | "Not Started";

export type EvidenceType = "pdf" | "screenshot" | "report" | "export";

export interface Evidence {
  id: string;
  filename: string;
  type: EvidenceType;
  uploadedAt: string;
  uploadedBy: string;
}

export interface ActivityEntry {
  id: string;
  timestamp: string;
  message: string;
  actor: string;
}

export interface Requirement {
  id: string;
  title: string;
  description: string;
  status: RequirementStatus;
  evidence: Evidence[];
  activity: ActivityEntry[];
  lastUpdated: string;
  notes?: string;
}

export interface DashboardStats {
  total: number;
  completed: number;
  missingEvidence: number;
  inReview: number;
  notStarted: number;
  needsAttention: number;
  auditReadiness: number;
}
