import PostCard from '@/components/postCard/postCard';
import { getPosts } from '@/lib/data';
import styles from './blog.module.css';
/**
 * Renders the blog page by fetching posts from the data layer
 * and rendering PostCard components for each post.
*/

export const metadata = {
  title: 'Blog',
  description: 'This is the blog page'
}
const BlogPage = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};


export default BlogPage;