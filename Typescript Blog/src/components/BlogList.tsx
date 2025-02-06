import { BlogInterface, BlogListInterface } from "../types"

const BlogList:React.FC<BlogListInterface> = ({blogs}) => {
  return (
    <div>
      <div className='shadow flex flex-col items-center justify-center p-4'>
        {
            blogs && blogs.length>0 && blogs.map((blog:BlogInterface)=>(
          <div className='shadow p-5 flex flex-col items-center justify-center' key={blog.id}>
            <h1 className='text-2xl'>{blog.title}</h1>
            <p className='text-lg'>{blog.content.slice(0,100)}</p>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default BlogList
