import Link from "next/link";

interface Props {
  id: string;
  name: string | null;
  image: string | null;
  age: number | null;
}

export default function UserCard({ id, name, image, age }: Props) {
  return (
    <div className="w-40 bg-gray-100">
      <img
        src={image ?? "/mememan.webp"}
        alt={`{name}'s profile`}
        className="w-40 h-32 mb-1 object-cover"
      />
      <div className="p-1">
        <h3 className=" text-center">
          <Link
            href={`/users/${id}`}
            className="font-semibold text-blue-500 text-lg hover:text-blue-600 mb-4 underline"
          >
            {name}
          </Link>
        </h3>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}
