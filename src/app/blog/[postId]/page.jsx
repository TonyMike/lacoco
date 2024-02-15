
import PostUser from '@/components/postUser/postUser';
import { getPost } from '@/lib/data';
import dayjs from 'dayjs';
import Image from 'next/image';
import styles from './slug.module.css';

/**
 * Renders the post page.
 *
 * Fetches the post data from the API and displays the post title, content,
 * author info and image. Uses PostUser and Image components.
 * Applies styles from slug.module.css.
 */

export const generateMeta = async ({ params }) => {
  const post = await getPost(params.postId);
  return {
    title: post.title,
    description: post.body.slice(0, 100)
  }
}

const SingleBlogPage = async ({ params }) => {
  const post = await getPost(params.postId);
  return (
    <div className={styles.container}>

      <div className={styles.imgContainer}>
        <Image src={post?.img ? post?.img : 'https://images.pexels.com/photos/19632352/pexels-photo-19632352/free-photo-of-patterned-blankets-hanging-on-hooks-on-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fill alt='single post image' />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.details}>

          <PostUser userId={post?.userId} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{dayjs(post.createdAt).format('DD-MM-YYYY')}</span>
          </div>
        </div>
        <div className={styles.content}>
          {post?.desc}
        </div>
      </div>
    </div>
  );
}

export default SingleBlogPage;