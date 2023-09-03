import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "About NextSpace",
};

export default function About() {
  return (
    <main className="flex flex-col gap-4 justify-center items-center p-4 text-center">
      <PageHeader title="About" />
      <p>
        We are a social media company that wants to bring a vintage experience
        using today's technology!
      </p>
    </main>
  );
}
