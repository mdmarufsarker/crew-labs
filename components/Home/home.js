import Hero from './hero'
import Sponsors from './sponsors'
import About from './about'
import Services from './services'

export default function home() {
    const bgmain = {
        backgroundImage: "url(/images/backgrounds/heroBackground.png)",
        backgroundRepeat: "no-repeat"
    }
    const bgsub = {
        backgroundImage: "url(/images/backgrounds/bluedot2.png)",
        // backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top 50% left 0"
    }
    return (
        <div style={bgmain}>
            <Hero/>
            <Sponsors />
            <div style={bgsub}><About/></div>
            <Services />
        </div>
    )
}
