import Card from './aboutCard'

export default function about() {
  return (
    <div>
        <div className='container mx-auto -mt-20'>
            <div className='flex justify-center items-center flex-row'>
                <div className='w-1/2 flex items-center'>
                    <div>
                        <Card src="/icons/bitcoin.svg" title="Fast Transactions" description=""/>
                        <Card src="/icons/brush.svg" title="Fast Transactions" description=""/>
                    </div>
                    <div>
                        <Card src="/icons/home.svg" title="Fast Transactions" description=""/>
                    </div>
                </div>
                <div className='w-1/2 ml-32'>
                    <h2 className='text-5xl font-black py-6'>The Fastest<br />Blockchain Technology</h2>
                    <p className='text-gray-400'>Lorem Ipsum is not simply random text. It has roots in a piece of classical. <br/> Lorem Ipsum is not simply random text. It has roots in a piece.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
