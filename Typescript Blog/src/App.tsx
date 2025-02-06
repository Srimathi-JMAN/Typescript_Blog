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
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quos ea praesentium magnam enim accusantium dolorem perspiciatis, iste ut labore voluptatem officiis ex error, eveniet harum architecto quidem. Sit inventore quas, a eos libero delectus, placeat deserunt quisquam quasi eum distinctio mollitia nemo qui enim cumque laborum est doloremque tempora iusto rem, nostrum voluptates repellendus? Cum quam numquam tempore cupiditate commodi pariatur ut, laudantium earum illum omnis rem temporibus quisquam ipsum necessitatibus molestias laboriosam blanditiis asperiores? Molestias necessitatibus amet laborum consectetur nesciunt inventore, sequi quisquam beatae dicta neque! Provident quod debitis consequuntur reiciendis rem quidem sunt ad adipisci impedit omnis!',
      comments: [{ description: 'Nice Blog' }, { description: 'Super Blog!' }],
    },
    {
      id: 2,
      title: 'My Second Blog',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quos ea praesentium magnam enim accusantium dolorem perspiciatis, iste ut labore voluptatem officiis ex error, eveniet harum architecto quidem. Sit inventore quas, a eos libero delectus, placeat deserunt quisquam quasi eum distinctio mollitia nemo qui enim cumque laborum est doloremque tempora iusto rem, nostrum voluptates repellendus? Cum quam numquam tempore cupiditate commodi pariatur ut, laudantium earum illum omnis rem temporibus quisquam ipsum necessitatibus molestias laboriosam blanditiis asperiores? Molestias necessitatibus amet laborum consectetur nesciunt inventore, sequi quisquam beatae dicta neque! Provident quod debitis consequuntur reiciendis rem quidem sunt ad adipisci impedit omnis!',
      comments: [{ description: 'Nice Blog!!' }, { description: 'Super Blog!!!' }],
    }
  ];

  const [blogs, setBlogs] = useState<BlogInterface[]>(sampleData);

  const handleSave = (blog: BlogInterface) => {
    // Generate a unique ID for the new blog
    const newBlog = { ...blog, id: blogs.length + 1 };
    setBlogs([...blogs, newBlog]);
  };

  const onSavingComment = (blogs:BlogInterface[]) => {
    setBlogs(blogs);
  }

  useEffect(() => {
    console.log("Updated blogs:", blogs); 
  }, [blogs]);

  return (
    <>
      <div className='flex'>
        <BlogList blogs={blogs} onSaveComment={onSavingComment}/>
        <div className='flex flex-col justify-center items-center'>
          <Header />
          <AddBlog onSave={handleSave} />
        </div>
      </div>
    </>
  );
};

export default App;