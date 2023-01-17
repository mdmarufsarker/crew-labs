import Link from 'next/link'
import Image from 'next/image'
import ScrollToTop from "react-scroll-up";
import { TbArrowBigTop } from "react-icons/tb";

export default function footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-gray-400">
        <div>
          <div className="container mx-auto flex flex-row justify-between items-center py-12">
            <div className="flex items-center justify-center gap-8">
              <Link href="/" className="text-3xl font-bold">
                <Image src='/logowithtext.svg' width={150} height={150} />
              </Link>
              <p className='mt-2'>© {year} @ Crew Labs — All Rights Reserved</p>
            </div>
            <nav>
                <ul className='flex items-center justify-center gap-8 text-gray-400'>
                  <li>
                    <Link href='/'>Cloud</Link>
                  </li>
                  <li>
                    <Link href='/enterprise'>Enterprise</Link>
                  </li>
                  <li>
                    <Link href='/pricing'>Pricing</Link>
                  </li>
                  <li>
                    <Link href='/apiandconsole'>API & Console</Link>
                  </li>
                  <li>
                    <Link href='/support'>Support</Link>
                  </li>
              </ul>
            </nav>
            <ScrollToTop showUnder={160}>
                <span><TbArrowBigTop className="text-5xl p-2 text-black bg-green-400 rounded-full"/></span>
            </ScrollToTop>
          </div>
        </div>
      </footer>
  )
}