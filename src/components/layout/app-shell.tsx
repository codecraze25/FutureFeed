import { Sidebar } from "@/components/layout/sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-background lg:flex-row">
      <Sidebar />
      <main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
