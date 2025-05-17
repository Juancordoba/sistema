'use client'
import { SidebarTrigger } from "@/components/ui/sidebar"

export function AppNavbar() {
  return (
    <nav className="w-full h-16 bg-white border-b px-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="hover:cursor-pointer" />
        <span className="text-lg font-semibold">Mi App</span>
      </div>

      <div className="text-sm text-muted-foreground">
        Usuario
      </div>
    </nav>
  );
}