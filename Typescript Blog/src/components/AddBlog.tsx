import { BlogInterface } from "../types"

interface AddBlogProps{
  setBlogs:(blog:BlogInterface)=>void
}

const AddBlog:React.FC<> = ({setBlogs}) => {
  return (
    <>
      <div className='h-screen flex jsutify-center items-center'>
        <h1>
          Add Blog
        </h1>
        <form className='p-5 flex flex-col justify-center items-center'>
          <label className="block">Title</label>
          <input type='text'/>
          <label className="block">Content</label>
          <input type='text-area'/>
          <input type='submit'>Submit</input>
        </form>
      </div>
    </>
  )
}

export default AddBlog
