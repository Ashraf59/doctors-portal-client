import React from 'react';
import treatment from '../../../../assets/images/treatment.png'

const ServiceSection = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 mt-28">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={treatment} alt="" className="object-contain h-72 sm:h-80 lg:h-[34rem] xl:h-112 2xl:h-128 rounded-md" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-4xl">
            Exceptional Dental Care, on Your Terms
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
				
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button className="btn bg-gradient-to-r from-secondary to-primary text-white border-0">Get Started</button>
			</div>
		</div>
	</div>
</section>
    );
};

export default ServiceSection;