import Service from './servicesCard'
import services1 from '../../db/Home/services1'
import services2 from '../../db/Home/services2'

export default function services() {
    const bg = {
        backgroundImage: "url(/images/backgrounds/services.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    return (
        <section id="services">
            <div className='container mx-auto' style={bg}>
                <div className='flex justify-center items-center flex-col'>
                    <div className='w-full flex flex-wrap items-center justify-center gap-2 md:gap-10 lg:gap-20'>
                        {
                            services1.map((service) => (
                                <Service key={service.id} src={service.src} title={service.title} description={service.description}/>
                            ))
                        }
                    </div>
                    <div className='w-full flex flex-wrap items-center justify-center gap-2 md:gap-10 lg:gap-20'>
                        {
                            services2.map((service) => (
                                <Service key={service.id} src={service.src} title={service.title} description={service.description}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
