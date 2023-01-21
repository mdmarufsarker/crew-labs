import Image from 'next/image'
// import db from '../../db/Home/aboutDB'

export default function aboutCard({src, title, description}) {
  return (
    <div className='flex items-center flex-col bg-[#171920] w-72 m-20 rounded-xl'>
        <div className='w-64 py-12 items-center flex flex-col'>
            <Image src={src} width={100} height={100} alt="" className="bg-[#34384C] rounded-full p-4"/>
            <h3 className='py-6 text-lg'>{title}</h3>
            <p className='text-center text-gray-400'>Lorem Ipsum is not simply <br/>random text. It has roots in a<br/> piece of classical.</p>
        </div>                    
    </div>
  )
}

/*
        {
            db.map((item, index) => (
                <div className='flex items-center flex-col bg-[#171920] w-72 m-4 rounded-xl' id={index}>
                    <div className='w-64 py-12 items-center flex flex-col'>
                        <Image src={item.src} width={100} height={100} className="bg-[#34384C] rounded-full p-4"/>
                        <h3 className='py-6 text-lg'>{item.title}</h3>
                        <p className='text-center text-gray-400'>{item.description}</p>
                    </div>
                </div>
            ))
        }

*/