import { useEffect, useState } from "react";
import { BlogInterface } from "../types";

interface BlogListProps {
  blogs: BlogInterface[];
  onSaveComment: (blogData: BlogInterface[]) => void;
}

const BlogList: React.FC<BlogListProps> = ({ blogs, onSaveComment }) => {
  const [newComment, setNewComment] = useState<{ [key: number]: string }>({});

  const handleCommentChange = (blogId: number, value: string) => {
    setNewComment({ ...newComment, [blogId]: value });
  };

  useEffect(() => {
    // Reset comment state when new blogs are added
    const newCommentsState = blogs.reduce((acc, blog) => {
      if (!acc[blog.id]) acc[blog.id] = "";
      return acc;
    }, {} as { [key: number]: string });
    setNewComment(newCommentsState);
  }, [blogs]);

  const handleSubmit = (blogId: number) => {
    if (!newComment[blogId]) return; // Prevent empty comments

    const updatedBlogs = blogs.map((blog) =>
      blog.id === blogId
        ? {
            ...blog,
            comments: [
              ...(blog.comments || []),
              { description: newComment[blogId] },
            ],
          }
        : blog
    );

    onSaveComment(updatedBlogs); // Pass the updated blogs with new comment
    setNewComment((prevComments) => ({ ...prevComments, [blogId]: "" }));
  };

  return (
    <div className="shadow h-screen overflow-y-auto grid grid-cols-2 gap-4 bg-gray-400 items-center justify-center p-10">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="shadow p-5 flex flex-col bg-white rounded-2xl items-center justify-center"
        >
          <h1 className="text-2xl">{blog.title}</h1>
          <p className="text-lg">{blog.content.slice(0, 100)}...</p>

          <div className="mt-3 w-full flex items-center gap-4">
            <input
              type="text"
              placeholder="Write a comment..."
              value={newComment[blog.id] || ""}
              onChange={(e) => handleCommentChange(blog.id, e.target.value)}
              className="border p-2 w-full rounded"
            />
            <button
              onClick={() => handleSubmit(blog.id)}
              className="text-white bg-black rounded-2xl px-4 py-1"
            >
              Submit
            </button>
          </div>

          <div className="mt-3 w-full h-20 overflow-y-auto border p-2 rounded bg-gray-100">
            {blog.comments && blog.comments.length > 0 ? (
              blog.comments.map((comment, index) => (
                <p key={index} className="text-sm bg-white p-2 rounded mb-1">
                  {comment.description}
                </p>
              ))
            ) : (
              <p className="text-sm text-gray-500">No comments yet.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;