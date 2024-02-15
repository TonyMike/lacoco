import Image from 'next/image';
import Link from 'next/link';
import styles from './postCard.module.css';
/**
 * Renders a post card with title, author, image, and link
 *
 * @param {Object} props - The post data
 * @param {string} props.title - The title of the post
 * @param {string} props.author - The author of the post
 * @param {string} props.imgUrl - The image URL for the post
 * @param {string} props.slug - The slug to generate the post link
 */

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src={post.img ? post.img : 'https://images.pexels.com/photos/10313496/pexels-photo-10313496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt='post' fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body} </p>
        <Link href={`/blog/${post.slug}`} className={styles.link}>READ MORE</Link>
      </div>
    </div>
  );
}

export default PostCard;