import React, { useEffect, useState } from "react";
import './App.css';
import { BlogInterface, BlogListInterface } from './types';
import BlogList from './components/BlogList';
import AddBlog from './components/AddBlog';
import Header from './components/Header';

const App: React.FC = () => {
  const sampleData: BlogInterface[] = [
    {
      id: 1,
      title: 'My First Blog',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, dolore eius. Accusantium suscipit voluptate natus officiis molestias necessitatibus amet, doloremque maxime magnam autem vero corporis sequi pariatur nam distinctio, vitae quis. Doloribus, atque. Fugiat harum, quisquam eveniet deserunt architecto et rem natus iure atque hic nihil labore fugit! Porro dignissimos praesentium nostrum sapiente distinctio esse qui error nam, nulla, architecto iure molestiae, quisquam vitae soluta facere provident cumque. Excepturi alias quia minima voluptate nemo suscipit repellendus voluptatibus voluptates hic, reprehenderit sint laborum necessitatibus, eos magnam earum repudiandae fugiat cupiditate ab a quod. Libero facere cumque, quos eligendi doloribus laboriosam explicabo? ipsum dolor sit amet',
      comments: [{ description: 'Nice Blog' }, { description: 'Super Blog!' }],
    },
    {
      id: 2,
      title: 'My Second Blog',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, dolore eius. Accusantium suscipit voluptate natus officiis molestias necessitatibus amet, doloremque maxime magnam autem vero corporis sequi pariatur nam distinctio, vitae quis. Doloribus, atque. Fugiat harum, quisquam eveniet deserunt architecto et rem natus iure atque hic nihil labore fugit! Porro dignissimos praesentium nostrum sapiente distinctio esse qui error nam, nulla, architecto iure molestiae, quisquam vitae soluta facere provident cumque. Excepturi alias quia minima voluptate nemo suscipit repellendus voluptatibus voluptates hic, reprehenderit sint laborum necessitatibus, eos magnam earum repudiandae fugiat cupiditate ab a quod. Libero facere cumque, quos eligendi doloribus laboriosam explicabo? ipsum dolor sit amet',
      comments: [{ description: 'Nice Blog!!' }, { description: 'Super Blog!!!' }],
    }
  ];

  const [blogs, setBlogs] = useState<BlogInterface[]>(sampleData);

  const handleSave = (blog: BlogInterface) => {
    const newBlog = { ...blog, id: blogs.length + 1 };
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]); // Append the new blog without resetting the entire list
  };

  const onSavingComment = (updatedBlogs: BlogInterface[]) => {
    setBlogs(updatedBlogs); // Update the state with the new list of blogs
  };

  useEffect(() => {
    console.log("Updated blogs:", blogs);
  }, [blogs]);

  return (
    <div className='flex'>
      <BlogList blogs={blogs} onSaveComment={onSavingComment} />
      <div className='flex flex-col justify-center items-center'>
        <Header />
        <AddBlog onSave={handleSave} />
      </div>
    </div>
  );
};

export default App;