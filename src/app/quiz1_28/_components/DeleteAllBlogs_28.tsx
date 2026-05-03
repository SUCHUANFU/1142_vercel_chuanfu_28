'use client';
import { deleteAllBlog_28 } from '@/actions/blog.action_28';

const DeleteAllBlogs_28 = () => {
  return (
    <button
      className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition'
      onClick={() => deleteAllBlog_28()}
    >
      Delete All Blogs
    </button>
  );
};

export default DeleteAllBlogs_28;
