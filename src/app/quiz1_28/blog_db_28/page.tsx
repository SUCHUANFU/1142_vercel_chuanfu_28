import Blog2_xx from '../_components/Blog2_xx';
import Wrapper from '../_assets/wrapper/Blog2_xx';
import { fetchBlog_28 } from '@/actions/blog.action_28';
import DeleteAllBlogs_28 from '../_components/DeleteAllBlogs_28';
import SeedAllBlogs_28 from '../_components/SeedBlogs_28';

const P1_xx = async () => {
  const blogs_28 = await fetchBlog_28();
  console.log('blogs_28:', blogs_28);

  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>blogs from local PosgreSQL -- Chuanfu Su, 213410128</h2>
        </div>
        <div className='blogs-center2'>
          {blogs_28?.map((blog) => {
            return (
              <Blog2_xx
                key={blog.id}
                id={blog.id}
                title={blog.title}
                descrip={blog.descrip}
                category={blog.category}
                img={blog.img}
              />
            );
          })}
        </div>
        <div className='flex justify-center items-center gap-8 mt-8'>
          <DeleteAllBlogs_28 />
          <SeedAllBlogs_28 />
        </div>
      </section>
    </Wrapper>
  );
};

export default P1_xx;
