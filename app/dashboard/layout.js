import DashboardNav from "@/components/DashboardNav";

export const metadata = { title: "Dashboard" };

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard">
      <DashboardNav />
      <section className="dash-content">{children}</section>
    </div>
  );
}
