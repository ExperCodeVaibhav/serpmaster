import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Plus, Edit, Trash2, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  category: string;
  tags: string[];
  published: boolean;
  publishedAt?: string;
  createdAt: string;
}

export default function AdminPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featuredImage: "",
    category: "",
    tags: "",
    published: false,
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: blogPosts, isLoading } = useQuery({
    queryKey: ["/api/admin/blog"],
  });

  const createMutation = useMutation({
    mutationFn: (data: any) => apiRequest("/api/admin/blog", "POST", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog"] });
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      resetForm();
      toast({ title: "Blog post created successfully!" });
    },
    onError: () => {
      toast({ title: "Error creating blog post", variant: "destructive" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: any }) => 
      apiRequest(`/api/admin/blog/${id}`, "PUT", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog"] });
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      resetForm();
      toast({ title: "Blog post updated successfully!" });
    },
    onError: () => {
      toast({ title: "Error updating blog post", variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => apiRequest(`/api/admin/blog/${id}`, "DELETE"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog"] });
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      toast({ title: "Blog post deleted successfully!" });
    },
    onError: () => {
      toast({ title: "Error deleting blog post", variant: "destructive" });
    },
  });

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      featuredImage: "",
      category: "",
      tags: "",
      published: false,
    });
    setIsEditing(false);
    setEditingPost(null);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      featuredImage: post.featuredImage || "",
      category: post.category,
      tags: post.tags.join(", "),
      published: post.published,
    });
    setIsEditing(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const submitData = {
      ...formData,
      tags: formData.tags.split(",").map(tag => tag.trim()).filter(Boolean),
    };

    if (editingPost) {
      updateMutation.mutate({ id: editingPost.id, data: submitData });
    } else {
      createMutation.mutate(submitData);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title),
    }));
  };

  const posts = blogPosts?.posts || [];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      
      <section className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Blog Admin Panel
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Create and manage blog posts
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Blog Post Form */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Plus className="w-5 h-5 mr-2" />
                    {isEditing ? "Edit Post" : "Create New Post"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => handleTitleChange(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="slug">Slug</Label>
                      <Input
                        id="slug"
                        value={formData.slug}
                        onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="excerpt">Excerpt</Label>
                      <Textarea
                        id="excerpt"
                        value={formData.excerpt}
                        onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                        rows={3}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="content">Content</Label>
                      <Textarea
                        id="content"
                        value={formData.content}
                        onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                        rows={8}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="featuredImage">Featured Image URL</Label>
                      <Input
                        id="featuredImage"
                        type="url"
                        value={formData.featuredImage}
                        onChange={(e) => setFormData(prev => ({ ...prev, featuredImage: e.target.value }))}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>

                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="SEO">SEO</SelectItem>
                          <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                          <SelectItem value="Social Media">Social Media</SelectItem>
                          <SelectItem value="Web Development">Web Development</SelectItem>
                          <SelectItem value="PPC">PPC</SelectItem>
                          <SelectItem value="Content Marketing">Content Marketing</SelectItem>
                          <SelectItem value="AI Tools">AI Tools</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="tags">Tags (comma separated)</Label>
                      <Input
                        id="tags"
                        value={formData.tags}
                        onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                        placeholder="seo, marketing, tips"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        id="published"
                        checked={formData.published}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, published: checked }))}
                      />
                      <Label htmlFor="published">Publish immediately</Label>
                    </div>

                    <div className="flex space-x-2">
                      <Button 
                        type="submit" 
                        disabled={createMutation.isPending || updateMutation.isPending}
                        className="flex-1"
                      >
                        {isEditing ? "Update" : "Create"} Post
                      </Button>
                      {isEditing && (
                        <Button type="button" variant="outline" onClick={resetForm}>
                          Cancel
                        </Button>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Blog Posts List */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>All Blog Posts</CardTitle>
                  <CardDescription>
                    {posts.length} posts total
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="flex justify-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    </div>
                  ) : posts.length > 0 ? (
                    <div className="space-y-4">
                      {posts.map((post: BlogPost) => (
                        <div key={post.id} className="border rounded-lg p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <h3 className="font-semibold text-lg">{post.title}</h3>
                                <Badge variant={post.published ? "default" : "secondary"}>
                                  {post.published ? "Published" : "Draft"}
                                </Badge>
                              </div>
                              <p className="text-slate-600 dark:text-slate-400 mb-2">
                                {post.excerpt}
                              </p>
                              <div className="flex items-center text-sm text-slate-500 space-x-4">
                                <span className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {new Date(post.createdAt).toLocaleDateString()}
                                </span>
                                <Badge variant="outline">{post.category}</Badge>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleEdit(post)}
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => deleteMutation.mutate(post.id)}
                                disabled={deleteMutation.isPending}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-slate-600 dark:text-slate-400">
                        No blog posts yet. Create your first post!
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}