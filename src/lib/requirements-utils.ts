import type { DashboardStats, EvidenceType, Requirement, RequirementStatus } from "./types";

const MOCK_FILENAMES: Record<EvidenceType, string[]> = {
  pdf: [
    "Security_Policy_v2.pdf",
    "Access_Control_Standard.pdf",
    "Compliance_Procedure.pdf",
  ],
  screenshot: [
    "Admin_Console_Config.png",
    "Audit_Log_Settings.png",
    "MFA_Enrollment_Screen.png",
  ],
  report: [
    "Quarterly_Security_Assessment.pdf",
    "Vulnerability_Scan_Summary.pdf",
    "Penetration_Test_Report.pdf",
  ],
  export: [
    "User_Access_Review_Export.csv",
    "Audit_Log_Export_Q2.xlsx",
    "Firewall_Rules_Export.json",
  ],
};

export function inferEvidenceType(filename: string): EvidenceType {
  const ext = filename.split(".").pop()?.toLowerCase();
  if (ext === "png" || ext === "jpg" || ext === "jpeg") return "screenshot";
  if (ext === "csv" || ext === "xlsx" || ext === "json") return "export";
  if (filename.toLowerCase().includes("report")) return "report";
  return "pdf";
}

export function generateMockFilename(type?: EvidenceType): string {
  const evidenceType = type ?? (["pdf", "screenshot", "report", "export"] as const)[
    Math.floor(Math.random() * 4)
  ];
  const options = MOCK_FILENAMES[evidenceType];
  return options[Math.floor(Math.random() * options.length)];
}

export function computeDashboardStats(requirements: Requirement[]): DashboardStats {
  const total = requirements.length;
  const completed = requirements.filter((r) => r.status === "Complete").length;
  const missingEvidence = requirements.filter(
    (r) => r.status === "Missing Evidence"
  ).length;
  const inReview = requirements.filter((r) => r.status === "In Review").length;
  const notStarted = requirements.filter((r) => r.status === "Not Started").length;
  const needsAttention = missingEvidence + inReview + notStarted;

  return {
    total,
    completed,
    missingEvidence,
    inReview,
    notStarted,
    needsAttention,
    auditReadiness: total > 0 ? Math.round((completed / total) * 100) : 0,
  };
}

export function sortByAttention(requirements: Requirement[]): Requirement[] {
  const priority: Record<RequirementStatus, number> = {
    "Missing Evidence": 0,
    "Not Started": 1,
    "In Review": 2,
    Complete: 3,
  };

  return [...requirements].sort((a, b) => {
    const statusDiff = priority[a.status] - priority[b.status];
    if (statusDiff !== 0) return statusDiff;
    return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
  });
}

export function getRecentlyUpdated(
  requirements: Requirement[],
  limit = 5
): Requirement[] {
  return [...requirements]
    .sort(
      (a, b) =>
        new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
    )
    .slice(0, limit);
}

export function getAtRiskItems(requirements: Requirement[]): Requirement[] {
  return sortByAttention(
    requirements.filter(
      (r) => r.status === "Missing Evidence" || r.status === "Not Started"
    )
  );
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}

export function formatDateTime(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(iso));
}
