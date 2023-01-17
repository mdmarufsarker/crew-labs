import Image from "next/image"

export default function teamCard({profile, name, designation, twitter, instagram, linkedin}) {
  return (
    <>
        <div className='w-80 py-12 items-center flex flex-col'>
            <Image src={profile} width={150} height={150} className="rounded-full"/>
            <h3 className='pt-6 text-lg'>{name}</h3>
            <p className='text-gray-400'>{designation}</p>
            <div className='flex gap-4 pt-6'>
                <a href={twitter} target="_blank" rel="noreferrer">
                    <Image src="/icons/social-media/twitter.svg" width={20} height={20}/>
                </a>
                <a href={instagram} target="_blank" rel="noreferrer">
                    <Image src="/icons/social-media/instagram.svg" width={20} height={20}/>
                </a>
                <a href={linkedin} target="_blank" rel="noreferrer">
                    <Image src="/icons/social-media/linkedin.svg" width={20} height={20}/>
                </a>
            </div>
        </div>  
    </>
  )
}
