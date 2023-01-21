import Image from 'next/image'

export default function sponsors() {
  return (
    <>
        <section className="sponsors pb-40">
            <div className="container mx-auto">
                <div className="flex justify-center items-center">
                    <Image src="/icons/sponsors/sponsors.svg" width={1000} height={100} alt="" />
                </div>
            </div>
        </section>
    </>
  )
}
