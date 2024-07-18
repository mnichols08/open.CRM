import { auth } from "@/auth";
import { redirect } from "next/navigation";
import PageLayout from "@/components/PageLayout";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) return redirect("/");

  return <PageLayout>{children}</PageLayout>;
}
