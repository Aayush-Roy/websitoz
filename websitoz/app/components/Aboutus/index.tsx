import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "About us.",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
        link: 'Learn more'
    },
    {
        heading: "Services.",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
        link: 'Learn more'
    },
    {
        heading: "Our Works.",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
        link: 'Learn more'
    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section" className="relative">
            <div className='mx-auto max-w-7xl px-4 py-20 my-24 lg:px-10 bg-gradient-to-br from-lightgrey to-white rounded-[2rem] relative overflow-hidden border border-gray-100'>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-200/30 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                    <div className="inline-block mx-auto">
                        <span className='block text-center text-blue text-sm font-semibold tracking-wider uppercase bg-blue/10 px-4 py-2 rounded-full'>About Us</span>
                    </div>
                    <h4 className='text-center text-4xl lg:text-6xl font-bold mt-4 mb-16 text-darkpurple'>Discover what we offer.</h4>
                    
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                        {Aboutdata.map((item, i) => (
                            <div 
                                key={i} 
                                className='group relative bg-white hover:bg-navyblue rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2'
                            >
                                <div className="mb-6 relative inline-block">
                                    <div className="absolute inset-0 bg-blue/20 rounded-xl blur-xl group-hover:bg-white/20 transition-all"></div>
                                    <Image 
                                        src={item.imgSrc} 
                                        alt={item.imgSrc} 
                                        width={80} 
                                        height={80} 
                                        className="relative"
                                    />
                                </div>
                                
                                <h4 className='text-3xl font-bold text-black group-hover:text-white mb-4 transition-colors'>
                                    {item.heading}
                                </h4>
                                
                                <p className='text-base font-normal text-gray-600 group-hover:text-gray-200 mb-6 transition-colors leading-relaxed'>
                                    {item.paragraph}
                                </p>
                                
                                <Link 
                                    href="#" 
                                    className='inline-flex items-center gap-2 text-base font-semibold text-blue group-hover:text-white transition-all group-hover:gap-3'
                                >
                                    {item.link}
                                    <ArrowRightIcon className="w-5 h-5" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Aboutus;