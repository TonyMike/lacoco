import Image from 'next/image';
import styles from './slug.module.css';

const SingleBlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='https://images.pexels.com/photos/19632352/pexels-photo-19632352/free-photo-of-patterned-blankets-hanging-on-hooks-on-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' fill alt='single post image' />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.details}>
          <div className='rounded-full relative h-14 w-14 bg-red-300'>
            <Image className={styles.avatar} fill alt='avatar'
              src='https://images.pexels.com/photos/19632352/pexels-photo-19632352/free-photo-of-patterned-blankets-hanging-on-hooks-on-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae iste reiciendis, libero ea delectus atque praesentium hic dolorum illum repellendus impedit vitae, iure reprehenderit sed doloremque quas aut adipisci sunt?
        </div>
      </div>
    </div>
  );
}

export default SingleBlogPage;