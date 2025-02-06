import React, { useState } from "react";
import { Blog } from "./type";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";

const App: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [editBlog, setEditBlog] = useState<Blog | null>(null);

  const handleSave = (blog: Blog) => {
    if (editBlog) {
      setBlogs(blogs.map((b) => (b.id === blog.id ? blog : b)));
      setEditBlog(null);
    } else {
      setBlogs([...blogs, blog]);
    }
  };

  const handleEdit = (blog: Blog) => {
    setEditBlog(blog);
  };

  const handleDelete = (id: number) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Blog App</h1>
      <BlogForm onSave={handleSave} blogToEdit={editBlog} />
      <BlogList blogs={blogs} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
