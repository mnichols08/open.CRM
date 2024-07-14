import PageLayout from "@/components/PageLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout breadcrumb={["Orders", "All Orders"]}>{children}</PageLayout>
  );
}
