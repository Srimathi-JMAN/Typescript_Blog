import React, { useState } from "react";
import { Blog } from "../type";

interface BlogFormProps {
  onSave: (blog: Blog) => void;
  blogToEdit?: Blog | null;
}

const BlogForm: React.FC<BlogFormProps> = ({ onSave, blogToEdit }) => {
  const [blog, setBlog] = useState<Blog>(
    blogToEdit || { id: Date.now(), title: "", content: "" }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (blog.title && blog.content) {
      onSave(blog);
      setBlog({ id: Date.now(), title: "", content: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">{blogToEdit ? "Edit Blog" : "Create Blog"}</h2>
      <div className="mb-4">
        <input 
          type="text" 
          name="title" 
          value={blog.title} 
          onChange={handleChange} 
          placeholder="Title" 
          className="w-full p-2 border border-gray-300 rounded-md" 
          required 
        />
      </div>
      <div className="mb-4">
        <textarea 
          name="content" 
          value={blog.content} 
          onChange={handleChange} 
          placeholder="Content" 
          className="w-full p-2 border border-gray-300 rounded-md" 
          required 
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        {blogToEdit ? "Update" : "Add"} Blog
      </button>
    </form>
  );
};

export default BlogForm;
