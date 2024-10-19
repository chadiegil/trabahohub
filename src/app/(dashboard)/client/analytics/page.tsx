import DashboardLayout from "@/app/(dashboard)/client/components/DashboardLayout";
import { Button } from "@/components/ui/button";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Analytics</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no Analytics yet.
          </h3>
          <p className="text-sm text-muted-foreground">
            Start by adding new analytics.
          </p>
          <Button className="mt-4">Add Analytics</Button>
        </div>
      </div>
    </DashboardLayout>
  );
}