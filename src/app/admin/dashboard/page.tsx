import { OverviewCards } from "@/components/admin/overview-cards";
import { PasswordAllocationPanel } from "@/components/admin/password-allocation-panel";
import { TeacherRequestsPanel } from "@/components/admin/teacher-requests-panel";
import { Header } from "@/components/layout/header";

export default function AdminDashboard() {
  return (
    <div className="flex flex-col min-h-dvh bg-muted/30">
      <Header />
      <main className="flex-1 p-4 sm:px-6 sm:py-0">
        <div className="container mx-auto max-w-7xl py-8 space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Welcome, Arham. Manage the platform here.</p>
          </div>
          
          <OverviewCards />

          <div className="grid gap-8 lg:grid-cols-5">
             <div className="lg:col-span-3">
                <TeacherRequestsPanel />
             </div>
             <div className="lg:col-span-2">
                <PasswordAllocationPanel />
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
