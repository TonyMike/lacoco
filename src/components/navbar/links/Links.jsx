"use client"
import Image from "next/image";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
const Links = () => {
  const [open, setOpen] = useState(false)

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    }
  ]
  // *! Temporary data
  const session = true;
  const isAdmin = true
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {
          links.map(link => (
            <NavLink item={link} key={link.title} />
          ))
        }
        {
          session ? (
            <>
              {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
              <button className="p-2 rounded-sm bg-pou cursor-pointer  font-bold">Logout</button>
            </>
          ) : (
            <NavLink item={{ title: 'Login', path: '/login' }} />
          )
        }
      </div>
      <button className={styles.menuButton} onClick={() => setOpen(prev => !prev)} >
        <Image src='/menu.png' width={30} height={30} alt="menu icon" /></button>
      <div>

        {
          open && <div className={styles.mobileLinks}>
            {links.map((link) => (<NavLink item={link} key={link.title} />))}
          </div>
        }
      </div>
      {
        open && <div className="relative">
          <div className={styles.mobileLinks}>
            <button onClick={() => setOpen(prev => !prev)} className=" absolute top-[35px] right-5  font-extrabold">
              <Image src='/menu.png' width={30} height={30} alt="menu icon" />
            </button>
            {links.map((link) => (<NavLink item={link} key={link.title} />))}
          </div>
        </div>
      }
    </div>
  );
}

export default Links;