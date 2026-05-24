"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClipboardCheck, LayoutDashboard, Shield } from "lucide-react";

import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/requirements", label: "Requirements", icon: ClipboardCheck },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-full shrink-0 flex-col border-b border-border bg-sidebar lg:w-60 lg:border-r lg:border-b-0">
      <div className="flex items-center gap-2.5 border-b border-sidebar-border px-4 py-4">
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Shield className="size-4" />
        </div>
        <div>
          <p className="text-sm font-semibold text-sidebar-foreground">FutureFeed</p>
          <p className="text-xs text-muted-foreground">Compliance Evidence</p>
        </div>
      </div>
      <nav className="flex flex-row gap-1 p-3 lg:flex-col">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon className="size-4 shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>
      <footer className="hidden border-t border-sidebar-border p-4 lg:block">
        <p className="text-xs text-muted-foreground">Q2 2026 Audit Cycle</p>
        <p className="mt-0.5 text-xs font-medium text-sidebar-foreground">
          Sarah Chen · Compliance Manager
        </p>
      </footer>
    </aside>
  );
}
