import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage?: string;
  category: string;
  publishedAt: string;
}

export function BlogSection() {
  const { data: blogPosts, isLoading } = useQuery({
    queryKey: ["/api/blog"],
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Latest from Our Blog
            </h2>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const posts = blogPosts?.posts || [];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Stay updated with the latest digital marketing insights and strategies
          </p>
        </div>

        {posts.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(0, 3).map((post: BlogPost) => (
                <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                  {post.featuredImage && (
                    <div className="aspect-video bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                      <img 
                        src={post.featuredImage} 
                        alt={post.title}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {post.excerpt}
                    </CardDescription>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/blog">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  View All Posts
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center">
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              No blog posts available yet. Check back soon for the latest insights!
            </p>
            <Link href="/admin">
              <Button variant="outline">
                Admin Panel
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}