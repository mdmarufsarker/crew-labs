import Link from 'next/link'
import Image from 'next/image'

export default function header() {
  return (
    <header className='container mx-auto bg-transparent'>
      <nav className='py-6'>
        <div className='flex justify-between'>
          <div className='logo'>
            <Image src='/logowithtext.svg' width={120} height={120} />
          </div>
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
          <div>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}