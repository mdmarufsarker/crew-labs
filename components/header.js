import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Home/Home.module.css'

export default function header() {
  return (
    <header className="container mx-auto bg-transparent top-0 z-30">
      <nav className='py-6'>
        <div className='flex justify-between'>
          <div className='logo'>
            <Image src='/logowithtext.svg' width={120} height={120} alt="" />
          </div>
          <ul className='flex items-center justify-center gap-8 text-gray-400'>
            <li>
              <Link href='#'>Home</Link>
            </li>
            <li>
              <Link href='#features'>Features</Link>
            </li>
            <li>
              <Link href='#services'>Services</Link>
            </li>
            <li>
              <Link href='#team-members'>Team Members</Link>
            </li>
            <li>
              <Link href='#contact'>Contact Us</Link>
            </li>
          </ul>
          <div>
            <button className={styles.btn}>
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}