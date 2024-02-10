import Image from 'next/image';
import Link from 'next/link';
import styles from './postCard.module.css';
const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src='https://images.pexels.com/photos/19632352/pexels-photo-19632352/free-photo-of-patterned-blankets-hanging-on-hooks-on-a-wall.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' alt='post' fill className={styles.img} />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eos laborum error officiis porro eaque aspernatur repellendus magnam delectus? Rem delectus vel quae perferendis facere natus, et porro numquam fugit?  </p>
        <Link href='/blog/post' className={styles.link}>READ MORE</Link>
      </div>
    </div>
  );
}

export default PostCard;