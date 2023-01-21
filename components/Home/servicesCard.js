import Image from "next/image"

export default function servicesCard({src, title, description}) {
  return (
    <>
        <div className='w-80 py-4 md:py-8 lg:py-12 items-start flex flex-col'>
            <Image src={src} width={50} height={50} alt=""/>
            <h3 className='py-6 text-lg'>{title}</h3>
            <hr className="bg-gray-700 w-20 h-1 rounded border-none outline-none mb-6"/>
            <p className='text-gray-400'>Lorem Ipsum is not simply random text. It has roots in a piece of classical.</p>
        </div>  
    </>
  )
}
