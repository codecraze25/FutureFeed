import type { Requirement } from "./types";

export const initialRequirements: Requirement[] = [
  {
    id: "AC-2",
    title: "Account Management",
    description:
      "Manage system accounts including establishing, activating, modifying, disabling, and removing accounts. Ensure account lifecycle aligns with organizational personnel actions.",
    status: "Missing Evidence",
    evidence: [],
    activity: [
      {
        id: "a1",
        timestamp: "2026-05-20T14:30:00Z",
        message: "Requirement assigned for Q2 audit cycle",
        actor: "Sarah Chen",
      },
      {
        id: "a2",
        timestamp: "2026-05-22T09:15:00Z",
        message: "Status changed to Missing Evidence — no access review export attached",
        actor: "System",
      },
    ],
    lastUpdated: "2026-05-22T09:15:00Z",
  },
  {
    id: "IA-5",
    title: "Authenticator Management",
    description:
      "Manage system authenticators by verifying, as part of initial authenticator distribution, the identity of the individual receiving the authenticator.",
    status: "In Review",
    evidence: [
      {
        id: "e1",
        filename: "MFA_Policy_v3.pdf",
        type: "pdf",
        uploadedAt: "2026-05-18T11:00:00Z",
        uploadedBy: "Sarah Chen",
      },
      {
        id: "e2",
        filename: "Authenticator_Config_Screenshot.png",
        type: "screenshot",
        uploadedAt: "2026-05-19T16:45:00Z",
        uploadedBy: "Sarah Chen",
      },
    ],
    activity: [
      {
        id: "a3",
        timestamp: "2026-05-18T11:00:00Z",
        message: "Uploaded MFA_Policy_v3.pdf",
        actor: "Sarah Chen",
      },
      {
        id: "a4",
        timestamp: "2026-05-19T16:45:00Z",
        message: "Uploaded Authenticator_Config_Screenshot.png",
        actor: "Sarah Chen",
      },
      {
        id: "a5",
        timestamp: "2026-05-19T16:46:00Z",
        message: "Status changed to In Review",
        actor: "System",
      },
    ],
    lastUpdated: "2026-05-19T16:46:00Z",
  },
  {
    id: "SC-7",
    title: "Boundary Protection",
    description:
      "Monitor and control communications at the external managed interfaces to the system and key internal managed interfaces within the system.",
    status: "Complete",
    evidence: [
      {
        id: "e3",
        filename: "Firewall_Rules_Export_Q1.xlsx",
        type: "export",
        uploadedAt: "2026-05-10T08:30:00Z",
        uploadedBy: "Mike Torres",
      },
      {
        id: "e4",
        filename: "Network_Diagram_2026.pdf",
        type: "pdf",
        uploadedAt: "2026-05-10T08:35:00Z",
        uploadedBy: "Mike Torres",
      },
      {
        id: "e5",
        filename: "Pen_Test_Summary_Report.pdf",
        type: "report",
        uploadedAt: "2026-05-12T14:00:00Z",
        uploadedBy: "Mike Torres",
      },
    ],
    activity: [
      {
        id: "a6",
        timestamp: "2026-05-12T14:00:00Z",
        message: "Marked as Complete — all evidence verified",
        actor: "Sarah Chen",
      },
    ],
    lastUpdated: "2026-05-12T14:00:00Z",
  },
  {
    id: "AU-2",
    title: "Audit Events",
    description:
      "Identify the types of events that the system is capable of logging in support of the audit function.",
    status: "Missing Evidence",
    evidence: [],
    activity: [
      {
        id: "a7",
        timestamp: "2026-05-21T10:00:00Z",
        message: "Audit event configuration review initiated",
        actor: "Sarah Chen",
      },
    ],
    lastUpdated: "2026-05-21T10:00:00Z",
  },
  {
    id: "CM-6",
    title: "Configuration Settings",
    description:
      "Establish and document configuration settings for IT products employed within the system using security configuration checklists.",
    status: "Not Started",
    evidence: [],
    activity: [
      {
        id: "a8",
        timestamp: "2026-05-01T09:00:00Z",
        message: "Requirement added to compliance scope",
        actor: "System",
      },
    ],
    lastUpdated: "2026-05-01T09:00:00Z",
  },
  {
    id: "IR-4",
    title: "Incident Handling",
    description:
      "Implement an incident handling capability for incidents that includes preparation, detection, analysis, containment, recovery, and user response activities.",
    status: "In Review",
    evidence: [
      {
        id: "e6",
        filename: "Incident_Response_Plan.pdf",
        type: "pdf",
        uploadedAt: "2026-05-15T13:20:00Z",
        uploadedBy: "Mike Torres",
      },
    ],
    activity: [
      {
        id: "a9",
        timestamp: "2026-05-15T13:20:00Z",
        message: "Uploaded Incident_Response_Plan.pdf",
        actor: "Mike Torres",
      },
      {
        id: "a10",
        timestamp: "2026-05-15T13:21:00Z",
        message: "Status changed to In Review",
        actor: "System",
      },
    ],
    lastUpdated: "2026-05-15T13:21:00Z",
  },
  {
    id: "PE-3",
    title: "Physical Access Control",
    description:
      "Enforce physical access authorizations at entry and exit points to the facility where the system resides.",
    status: "Complete",
    evidence: [
      {
        id: "e7",
        filename: "Badge_Access_Log_Export.csv",
        type: "export",
        uploadedAt: "2026-05-08T10:00:00Z",
        uploadedBy: "Sarah Chen",
      },
    ],
    activity: [
      {
        id: "a11",
        timestamp: "2026-05-08T10:30:00Z",
        message: "Marked as Complete",
        actor: "Sarah Chen",
      },
    ],
    lastUpdated: "2026-05-08T10:30:00Z",
  },
  {
    id: "SI-4",
    title: "System Monitoring",
    description:
      "Monitor the system to detect attacks and indicators of potential attacks, and unauthorized local, network, and remote connections.",
    status: "Missing Evidence",
    evidence: [],
    activity: [
      {
        id: "a12",
        timestamp: "2026-05-23T08:00:00Z",
        message: "Monitoring tool screenshots requested from IT ops",
        actor: "Sarah Chen",
      },
    ],
    lastUpdated: "2026-05-23T08:00:00Z",
  },
  {
    id: "RA-5",
    title: "Vulnerability Scanning",
    description:
      "Scan for vulnerabilities in the system and hosted applications and when new vulnerabilities potentially affecting the system are identified.",
    status: "Not Started",
    evidence: [],
    activity: [
      {
        id: "a13",
        timestamp: "2026-05-01T09:00:00Z",
        message: "Requirement added to compliance scope",
        actor: "System",
      },
    ],
    lastUpdated: "2026-05-01T09:00:00Z",
  },
  {
    id: "CP-9",
    title: "System Backup",
    description:
      "Conduct backups of user-level and system-level information contained in the system at organization-defined frequency.",
    status: "Complete",
    evidence: [
      {
        id: "e8",
        filename: "Backup_Policy_2026.pdf",
        type: "pdf",
        uploadedAt: "2026-05-05T11:00:00Z",
        uploadedBy: "Mike Torres",
      },
      {
        id: "e9",
        filename: "Backup_Verification_Report.pdf",
        type: "report",
        uploadedAt: "2026-05-06T09:00:00Z",
        uploadedBy: "Mike Torres",
      },
    ],
    activity: [
      {
        id: "a14",
        timestamp: "2026-05-06T09:30:00Z",
        message: "Marked as Complete",
        actor: "Sarah Chen",
      },
    ],
    lastUpdated: "2026-05-06T09:30:00Z",
  },
  {
    id: "AC-6",
    title: "Least Privilege",
    description:
      "Employ the principle of least privilege, allowing only authorized accesses for users which are necessary to accomplish assigned tasks.",
    status: "In Review",
    evidence: [
      {
        id: "e10",
        filename: "Access_Review_Q1_2026.pdf",
        type: "pdf",
        uploadedAt: "2026-05-17T15:00:00Z",
        uploadedBy: "Sarah Chen",
      },
    ],
    activity: [
      {
        id: "a15",
        timestamp: "2026-05-17T15:00:00Z",
        message: "Uploaded Access_Review_Q1_2026.pdf",
        actor: "Sarah Chen",
      },
    ],
    lastUpdated: "2026-05-17T15:00:00Z",
  },
  {
    id: "PL-2",
    title: "System Security Plan",
    description:
      "Develop, document, and update a system security plan that describes system boundaries, operational environment, and security requirements.",
    status: "Missing Evidence",
    evidence: [],
    activity: [
      {
        id: "a16",
        timestamp: "2026-05-24T07:00:00Z",
        message: "SSP draft pending final review from CISO",
        actor: "Sarah Chen",
      },
    ],
    lastUpdated: "2026-05-24T07:00:00Z",
  },
];
