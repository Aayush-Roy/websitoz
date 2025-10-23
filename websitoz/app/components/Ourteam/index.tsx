import Image from "next/image";

const index = () => {
    return (
        <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 m-32'>
            <h2 className="text-4xl sm:text-5xl font-bold text-center">
                Our team believes you deserve <br /> only the best.
            </h2>
            <h3 className="text-2xl font-medium text-center pt-10 opacity-50">
                We are committed to delivering excellence in every project, ensuring your vision becomes reality with precision and care.
            </h3>
            <div className='grid grid-cols-1 my-16'>
                <Image  
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" 
                    alt="Our team at work" 
                    height={684} 
                    width={1296} 
                    className="rounded-2xl"
                />
            </div>
        </div>
    )
}

export default index;
