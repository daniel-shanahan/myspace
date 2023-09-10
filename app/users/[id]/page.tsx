import PageHeader from "@/components/PageHeader";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });
  return {
    title: `User profile of ${user?.name}`,
  };
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });
  const { name, bio, image, age } = user ?? {};

  return (
    <div className="w-10/12 mx-auto">
      <PageHeader title={name ?? ""} />
      <img
        src={image ?? "/mememan.webp"}
        alt={`${name}'s profile picture`}
        width={300}
        className="mb-5"
      />
      <h3 className="text-xl font-semibold mb-1">Bio</h3>
      <p className="mb-5">{bio}</p>
      <h3 className="text-xl font-semibold mb-1">Age</h3>
      <p className="mb-5">{age}</p>
    </div>
  );
}
