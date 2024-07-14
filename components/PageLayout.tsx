import Aside from "@/components/Aside";
import Header from "@/components/Header";

function OuterWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      {children}
    </div>
  );
}
function InnerWrapper({
  children,
  breadcrumb,
}: {
  children: React.ReactNode;
  breadcrumb: string[];
}) {
  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <Header breadcrumb={breadcrumb} />
      {children}
    </div>
  );
}

export default function PageLayout({
  children,
  breadcrumb,
}: {
  children: React.ReactNode,
  breadcrumb: string[]
}) {
  return (
    <OuterWrapper>
      <Aside />
      <InnerWrapper breadcrumb={breadcrumb}>{children}</InnerWrapper>
    </OuterWrapper>
  );
}
