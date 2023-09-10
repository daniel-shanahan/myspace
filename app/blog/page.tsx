import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default async function Blog() {
  const posts = await fetch("http://localhost:3000/api/content").then((res) =>
    res.json()
  );

  return (
    <div className="w-10/12 mx-auto">
      <PageHeader title="Blog" />
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug} className="mb-3">
            <Link
              href={`/blog/${post.slug}`}
              className="text-lg hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
