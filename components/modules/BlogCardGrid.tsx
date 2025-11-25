import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/data/data";

function BlogCardGrid() {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-lg font-bold text-slate-700 uppercase">
            From The Blog
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="group overflow-hidden border-0 rounded-md py-0"
            >
              <div className="relative overflow-hidden bg-slate-200 h-40 w-full">
                <Link href={`/blog/${post.id}`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </Link>
                <div className="absolute bottom-3 right-3 bg-red-400 text-white px-3 py-1 rounded-sm flex items-center gap-1 text-xs font-semibold shadow-lg z-10">
                  <Calendar size={12} />
                  {post.date}
                </div>
              </div>
              <CardContent className="pt-2">
                <h3 className="font-bold text-sm text-slate-900 line-clamp-2 group-hover:text-red-500 transition-colors">
                  {post.title}
                </h3>
                <CardDescription className="text-xs pt-3 text-slate-600 line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="border-t border-slate-100 py-4 px-6">
                <Link href={`/blog/${post.id}`}>
                  <button className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-red-500 transition-colors group/btn cursor-pointer">
                    Read More
                    <ArrowRight size={14} className="mt-0.5" />
                  </button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogCardGrid;
