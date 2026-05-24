"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { StatusBadge } from "@/components/requirements/status-badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate, sortByAttention } from "@/lib/requirements-utils";
import { useRequirements } from "@/lib/store";

const ALL_STATUSES = "all";

export function RequirementsList() {
  const { requirements } = useRequirements();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>(ALL_STATUSES);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    let result = sortByAttention(requirements);

    if (statusFilter !== ALL_STATUSES) {
      result = result.filter((r) => r.status === statusFilter);
    }

    if (query) {
      result = result.filter(
        (r) =>
          r.id.toLowerCase().includes(query) ||
          r.title.toLowerCase().includes(query)
      );
    }

    return result;
  }, [requirements, search, statusFilter]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by ID or title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select
          value={statusFilter}
          onValueChange={(value) => setStatusFilter(value ?? ALL_STATUSES)}
        >
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL_STATUSES}>All statuses</SelectItem>
            <SelectItem value="Complete">Complete</SelectItem>
            <SelectItem value="Missing Evidence">Missing Evidence</SelectItem>
            <SelectItem value="In Review">In Review</SelectItem>
            <SelectItem value="Not Started">Not Started</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-24">ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-center">Evidence</TableHead>
              <TableHead className="text-right">Last Updated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                  No requirements match your search.
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((req) => (
                <TableRow key={req.id} className="cursor-pointer">
                  <TableCell className="font-mono text-sm font-medium">
                    <Link
                      href={`/requirements/${req.id}`}
                      className="hover:underline"
                    >
                      {req.id}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link
                      href={`/requirements/${req.id}`}
                      className="font-medium hover:underline"
                    >
                      {req.title}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={req.status} />
                  </TableCell>
                  <TableCell className="text-center">{req.evidence.length}</TableCell>
                  <TableCell className="text-right text-muted-foreground">
                    {formatDate(req.lastUpdated)}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}