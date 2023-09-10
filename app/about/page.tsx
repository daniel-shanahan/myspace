import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "About NextSpace",
};

export default function About() {
  return (
    <div className="p-4 text-center">
      <PageHeader title="About" />
      <p>
        We are a social media company that wants to bring a vintage experience
        using today's technology!
      </p>
    </div>
  );
}
