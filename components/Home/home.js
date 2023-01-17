import Hero from './hero'
import Sponsors from './sponsors'
import About from './about'

export default function home() {
    const bgmain = {
        backgroundImage: "url(/images/backgrounds/heroBackground.png)",
        backgroundRepeat: "no-repeat"
    }
    const bgsub = {
        backgroundImage: "url(/images/backgrounds/bluedot2.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom left"
    }
    return (
        <div style={bgmain}>
            <div style={bgsub}>
                <Hero/>
                <Sponsors />
                <About />
            </div>
        </div>
    )
}
