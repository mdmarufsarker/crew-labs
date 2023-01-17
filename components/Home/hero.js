import styles from '../../styles/Home/Home.module.css'

export default function hero() {
    return (
        <>
            <section className={styles.hero}>
                <div className="heading py-12 flex flex-col justify-center items-center">
                    <h1 className={`${styles.blockchain}`}>Blockchain is <span className="text-blue-700">Fastest</span></h1>
                    <p className="text-center py-8 text-xl font-regular">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                    <br />
                    piece of classical Latin literature from 45 BC, making it over 2000 years.
                    </p>
                    <div className={`flex gap-5 ${styles.btngroup}`}>
                        <button className={styles.btn}>Get Started</button>
                        <button>Developer guides</button>
                    </div>
                    <p className='uppercase pt-20 text-center font-bold text-sm text-gray-400'>Thousands of projects worldwide are using Crew Labs</p>
                </div>
            </section>
        </>
    )
}
