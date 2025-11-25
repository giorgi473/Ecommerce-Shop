import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/data";

interface PageProps {
  params: Promise<{
    blogId: string;
  }>;
}

async function Page({ params }: PageProps) {
  const { blogId } = await params;
  const post = blogPosts.find((p) => p.id === parseInt(blogId));
  const relatedPosts = blogPosts
    .filter((p) => p.id !== parseInt(blogId))
    .slice(0, 4);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">
          ბლოგი ვერ მოიძებნა
        </h1>
        <Link href="/">
          <button className="flex items-center gap-2 text-red-500 hover:text-red-600 font-semibold">
            <ArrowLeft size={20} />
            უკან დაბრუნება
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 pt-35 lg:pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <article className="lg:col-span-8">
            <div className="relative aspect-4/3 w-full mb-5 overflow-hidden rounded-sm">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 75vw"
              />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed text-justify">
              <p className="text-sm md:text-lg">{post.description}</p>
            </div>
          </article>
          <aside className="lg:col-span-4">
            <div className="sticky top-45 space-y-2">
              {relatedPosts.map((relPost) => (
                <Link
                  key={relPost.id}
                  href={`/blog/${relPost.id}`}
                  className="block group"
                >
                  <div className="flex gap-4 hover:bg-gray-50 -mx-2 px-2 rounded-sm transition-all">
                    <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-sm">
                      <Image
                        src={relPost.image}
                        alt={relPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="font-semibold text-slate-900 transition-colors line-clamp-3 text-sm leading-tight">
                        {relPost.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Page;
