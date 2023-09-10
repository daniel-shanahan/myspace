import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import PageHeader from "@/components/PageHeader";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="text-center p-4">
      <PageHeader title="Welcome to NextSpace!" />
      <p className="mb-4">
        A next-gen social media app to connect with friends inspired by MySpace
      </p>
      <p>To get started, sign up for an account</p>
    </div>
  );
}
