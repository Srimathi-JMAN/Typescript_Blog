import React, { useState } from 'react'
import './App.css'
import { BlogInterface } from './types'
import BlogList from './components/BlogList'
import AddBlog from './components/AddBlog'

const App:React.FC = () => {
  const sampleData : BlogInterface[] = [
    {
    id:1,
    title:'My First Blog',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed excepturi similique saepe rem, et sit ratione eveniet. Eaque voluptates neque consectetur rem vitae officiis quis est laudantium suscipit, exercitationem totam quo inventore, maxime incidunt voluptatem obcaecati eius eligendi quam sit. Placeat voluptatum necessitatibus illum corrupti rerum sint ut laboriosam expedita, dolorum excepturi dolores, quas numquam facilis quisquam maiores veritatis? Eius atque voluptas, officiis repellat voluptatum amet? Hic ut minus, dicta totam quos quod voluptates nulla cumque aliquid est voluptate impedit! Recusandae non, aperiam aliquam et molestias ipsa mollitia cupiditate eos ex iusto temporibus obcaecati fuga consequatur iste hic! Vero, repudiandae?',
    comments:[{ description: 'Nice Blog' }, { description: 'Super Blog!' }],
  },
  {
    id:2,
    title:'My Second Blog',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed excepturi similique saepe rem, et sit ratione eveniet. Eaque voluptates neque consectetur rem vitae officiis quis est laudantium suscipit, exercitationem totam quo inventore, maxime incidunt voluptatem obcaecati eius eligendi quam sit. Placeat voluptatum necessitatibus illum corrupti rerum sint ut laboriosam expedita, dolorum excepturi dolores, quas numquam facilis quisquam maiores veritatis? Eius atque voluptas, officiis repellat voluptatum amet? Hic ut minus, dicta totam quos quod voluptates nulla cumque aliquid est voluptate impedit! Recusandae non, aperiam aliquam et molestias ipsa mollitia cupiditate eos ex iusto temporibus obcaecati fuga consequatur iste hic! Vero, repudiandae?',
    comments:[{ description: 'Nice Blog!!' }, { description: 'Super Blog!!!' }],
  }
]
  const [blogs,setBlogs] = useState<BlogInterface[]>(sampleData);
 
  return (
    <>
      <AddBlog setBlogs={setBlogs}/>
      <BlogList blogs={blogs}/>
    </>
  )
}

export default App
