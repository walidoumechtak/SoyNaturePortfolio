import './BestOffer.css'

function BestOffer() {
    return (
        <div className="container flex flex-col md:flex-row items-center justify-around w-full mx-auto mb-20">
            <div className='offer1 mb-5 pt-12 pl-12 pr-8 pb-8 z-20 md:mb-0 relative backgroundImage sm:w-[500px] w-[300px] h-[300px] sm:h-[400px]'>
            <div className="overlay2"></div>
                <h2 className='text-white font-bold text-[2em]'>intensive Glow C+ Serum</h2>
                <p className='text-white'>The most beautifull products to buy</p>
                <button className='bg-purple-700 text-white font-bold px-5 py-2 mt-5'>Shop Now</button>
            </div>
            {/* ----------------------------------- */}
            <div className='offer2 pt-12 pl-12 z-20 pr-8 pb-8  relative backgroundImage sm:w-[500px] w-[300px] h-[300px] sm:h-[400px]'>
                <div className="overlay2"></div>
                <h2 className='text-white font-bold text-[2em]'>25% of Everything</h2>
                <p className='text-white'>Don't miss this Change</p>
                <button className='bg-purple-700 text-white font-bold px-5 py-2 mt-5'>Shop Now</button>
            </div>
        </div>
    );
}

export default BestOffer;