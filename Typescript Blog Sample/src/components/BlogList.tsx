import React from "react";
import { Blog } from "../type";

interface BlogListProps {
  blogs: Blog[];
  onEdit: (blog: Blog) => void;
  onDelete: (id: number) => void;
}

const BlogList: React.FC<BlogListProps> = ({ blogs, onEdit, onDelete }) => {
  return (
    <div className="space-y-4 mt-8">
      {blogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs found.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold">{blog.title}</h3>
            <p className="text-gray-700">{blog.content}</p>
            <div className="mt-4 space-x-2">
              <button
                onClick={() => onEdit(blog)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(blog.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
