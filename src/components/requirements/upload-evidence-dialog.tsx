"use client";

import { useRef, useState } from "react";
import { FileUp, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { generateMockFilename } from "@/lib/requirements-utils";
import { useRequirements } from "@/lib/store";

export function UploadEvidenceDialog({ requirementId }: { requirementId: string }) {
  const { uploadEvidence } = useRequirements();
  const [open, setOpen] = useState(false);
  const [filename, setFilename] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleUpload(selectedFilename?: string) {
    uploadEvidence(requirementId, selectedFilename);
    setFilename("");
    setOpen(false);
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      handleUpload(file.name);
    }
    e.target.value = "";
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button />}>
        <Upload className="size-4" />
        Upload Evidence
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Evidence</DialogTitle>
          <DialogDescription>
            Attach compliance evidence for this requirement. Files are simulated
            for this prototype — no data is stored.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <div
            className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border px-6 py-10 transition-colors hover:border-primary/50 hover:bg-muted/30"
            onClick={() => fileInputRef.current?.click()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                fileInputRef.current?.click();
              }
            }}
            role="button"
            tabIndex={0}
          >
            <FileUp className="mb-3 size-8 text-muted-foreground" />
            <p className="text-sm font-medium">Click to select a file</p>
            <p className="mt-1 text-xs text-muted-foreground">
              PDF, screenshots, reports, or exports
            </p>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.png,.jpg,.jpeg,.csv,.xlsx,.json"
            />
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">or</span>
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="filename" className="text-sm font-medium">
              Use a mock filename
            </label>
            <Input
              id="filename"
              placeholder={generateMockFilename()}
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => handleUpload(filename || undefined)}>
            Attach Evidence
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
