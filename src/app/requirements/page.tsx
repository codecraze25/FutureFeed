import { RequirementsList } from "@/components/requirements/requirements-list";
import { PageHeader } from "@/components/layout/page-header";

export default function RequirementsPage() {
  return (
    <>
      <PageHeader
        title="Requirements"
        description="Track compliance controls, evidence, and audit status"
      />
      <div className="p-6">
        <RequirementsList />
      </div>
    </>
  );
}
