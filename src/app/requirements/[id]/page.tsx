import { RequirementDetail } from "@/components/requirements/requirement-detail";

export default async function RequirementDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <RequirementDetail id={id} />;
}
