import Image from "next/image";

const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl my-6 sm:my-10 py-4 sm:py-10 px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 my-8 sm:my-12 lg:my-16 items-center'>

                {/* COLUMN-1 */}
                <div className="mx-auto sm:mx-0 w-full">
                    {/* Button Badge */}
                    <div className='py-2 sm:py-3 text-center lg:text-start'>
                        <button className='text-blue bg-lightblue hover:shadow-xl text-xs sm:text-sm md:text-base lg:text-lg font-bold px-4 sm:px-6 py-1.5 sm:py-2 rounded-3xl tracking-wider hover:text-white hover:bg-black transition-all duration-300'>
                            INNOVATION STUDIO
                        </button>
                    </div>

                    {/* Heading */}
                    <div className="py-3 sm:py-4 text-center lg:text-start">
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-darkpurple leading-tight'>
                            Transforming <br /> your vision <br /> into reality.
                        </h1>
                    </div>

                    {/* CTA Button */}
                    <div className='my-6 sm:my-7 text-center lg:text-start'>
                        <button className='text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:shadow-xl bg-blue text-white py-2.5 px-6 sm:py-3 sm:px-8 md:py-4 md:px-12 lg:py-5 lg:px-14 rounded-full hover:bg-hoblue transition-all duration-300'>
                            Start Your Journey
                        </button>
                    </div>
                </div>

                {/* COLUMN-2 */}
                <div className='relative w-full h-64 sm:h-80 md:h-96 lg:h-auto lg:-m-24 lg:pt-20'>
                    <div className='relative w-full h-full lg:w-auto lg:h-auto'>
                        <Image 
                            src="/images/banner/banner2.svg" 
                            alt="hero-image" 
                            width={800} 
                            height={642}
                            className='object-contain w-full h-full'
                            priority
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Banner;