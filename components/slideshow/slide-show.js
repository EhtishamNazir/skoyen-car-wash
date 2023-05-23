import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const Slideshow = () => {
	//Array of Images
	const images = [
		"images/Image1.jpg",
		"images/Image2.jpg",
		"images/Image3.jpg",
		"images/Image4.jpg",
		"images/Image5.jpg",
		"images/Image6.jpg",
	];

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		scale: 1,
		duration: 5000,
		transitionDuration: 300,
		infinite: true,
		prevArrow: (
			<div className="ml-10 top-40 md:top-72">
				<ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer max-[480px]:invisible" />
			</div>
		),
		nextArrow: (
			<div className="mr-10 top-40 md:top-72">
				<ArrowRightIcon className="h-8 w-8 text-white cursor-pointer max-[480px]:invisible" />
			</div>
		),
	};
	return (
		<div className="w-full h-screen max-[480px]:h-2/5">
			<Zoom {...zoomInProperties}>
				{images.map((each, index) => (
					<div key={index} className="flex justify-center md:items-center items-start w-screen h-screen relative max-[480px]:h-fit">
						<img
							className="w-screen"
							src={each}
							alt="Slide Image"
						/>
						<div className="w-4/5 absolute top-2/4 text-center max-[480px]:invisible">
							<h1 className="text-white text-center text-5xl font-bold font-ubuntu">A quality car wash <br /> <span className="font-normal">in Location, Norway</span></h1>
							<p className="text-white mx-auto mt-4 w-3/5 font-ubuntu">Looking for a local car wash that offers great results? SQS Carwash in Chorlton, Manchester gets the results you want - come and see for yourself.</p>
						</div>
					</div>
				))}
			</Zoom>
		</div>
	);
};

export default Slideshow;