'use client';
import { SeedBlog_28 } from '@/actions/blog.action_28';

const SeedBlogs_28 = () => {
  return (
    <button
      className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
      onClick={() => SeedBlog_28()}
    >
      Seed Blogs
    </button>
  );
};

export default SeedBlogs_28;
