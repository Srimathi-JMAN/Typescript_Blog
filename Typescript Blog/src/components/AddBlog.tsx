import { useState } from "react";
import { BlogInterface } from "../types";

interface AddBlogProps {
  onSave: (blog: BlogInterface) => void;
}

const AddBlog: React.FC<AddBlogProps> = ({ onSave }) => {
  const [blog, setBlog] = useState<BlogInterface>({ id: -1, title: "", content: "", comments: [] });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    setBlog({ ...blog, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(blog); // Pass the blog to the parent (App)
    setBlog({ id: -1, title: "", content: "", comments: [] }); // Reset the form
  }

  return (
    <div className='h-full w-fit flex flex-col justify-center items-center'>
      <h1>Add Blog</h1>
      <form onSubmit={handleSubmit} className='p-5 flex flex-col justify-center items-center shadow-xl'>
        <label className="block">Title</label>
        <input type='text' name='title' placeholder="Enter the title" value={blog.title} onChange={handleChange} />
        <label className="block">Content</label>
        <textarea name='content' placeholder="Enter the content" value={blog.content} onChange={handleChange} />
        <input type='submit' className='text-white bg-black rounded-2xl px-4 py-1' value='Submit' />
      </form>
    </div>
  );
}

export default AddBlog;