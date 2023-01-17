import Service from './servicesCard'

export default function services() {
    const bg = {
        backgroundImage: "url(/images/backgrounds/services.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    const bgsub = {
        backgroundImage: "url(/images/backgrounds/bluedot2.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 5%"
    }
    return (
        <>
            <div className='container mx-auto' style={bg}>
                <div className='flex justify-center items-center flex-col'>
                    <div className='w-full flex items-center justify-center gap-20'>
                        <Service src="/icons/pattern.svg" title="Protect Your Data" description="Lorem Ipsum is not simply random text. It has roots in a piece of classical."/>
                        <Service src="/icons/pattern.svg" title="Protect Your Data" description="Lorem Ipsum is not simply random text. It has roots in a piece of classical."/>
                        <Service src="/icons/pattern.svg" title="Protect Your Data" description="Lorem Ipsum is not simply random text. It has roots in a piece of classical."/>
                        <Service src="/icons/pattern.svg" title="Protect Your Data" description="Lorem Ipsum is not simply random text. It has roots in a piece of classical."/>
                    </div>
                    <div className='w-full flex items-center justify-center gap-20' style={bgsub}>
                        <Service src="/icons/pattern.svg" title="Protect Your Data" description="Lorem Ipsum is not simply random text. It has roots in a piece of classical."/>
                        <Service src="/icons/pattern.svg" title="Protect Your Data" description="Lorem Ipsum is not simply random text. It has roots in a piece of classical."/>
                        <Service src="/icons/pattern.svg" title="Protect Your Data" description="Lorem Ipsum is not simply random text. It has roots in a piece of classical."/>
                        <Service src="/icons/pattern.svg" title="Protect Your Data" description="Lorem Ipsum is not simply random text. It has roots in a piece of classical."/>
                    </div>
                </div>
            </div>
        </>
    )
}
