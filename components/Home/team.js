import Team from './teamCard'
import team1 from '../../db/Home/team1'
import team2 from '../../db/Home/team2'
import styles from '../../styles/Home/About.module.css'

export default function team({src, title, description}) {
    const DecorativeLine = {
        backgroundImage: "url(/images/backgrounds/DecorativeLine.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom"
    }
    return (
        <>
            <div className='container mx-auto gradient'>
                <div className='text-center py-32' style={DecorativeLine}>
                    <span className='uppercase block'>Who we are?</span>
                    <h3 className='text-5xl capitalize font-medium'>Meet our teams</h3>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <div className='w-full flex items-center justify-center gap-20'>
                        {
                            team1.map((team) => (
                                <Team key={team.id} profile={team.profile} name={team.name} designation={team.designation} twitter={team.twitter} instagram={team.instagram} linkedin={team.linkedin}/>
                            ))
                        }
                    </div>
                    <div className='w-full flex items-center justify-center gap-20'>
                        {
                            team2.map((team) => (
                                <Team key={team.id} profile={team.profile} name={team.name} designation={team.designation} twitter={team.twitter} instagram={team.instagram} linkedin={team.linkedin}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
