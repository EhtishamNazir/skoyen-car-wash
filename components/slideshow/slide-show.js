import React from "react";
import Image from "next/image";
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
	];

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		scale: 1,
		duration: 5000,
		transitionDuration: 300,
		infinite: true,
		prevArrow: (
			<div className="ml-10 top-40 md:top-72">
				<ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />
			</div>
		),
		nextArrow: (
			<div className="mr-10 top-40 md:top-72">
				<ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" />
			</div>
		),
	};
	return (
		<div className="w-full h-screen">
			<Zoom {...zoomInProperties}>
				{images.map((each, index) => (
					<div key={index} className="flex justify-center md:items-center items-start w-screen h-screen relative">
						<Image
							className="w-screen"
							src={each}
						/>
						<h1 className="absolute md:top-60 top-24 text-center z-10 md:text-6xl text-4xl bold text-white bg-black w-3/5 p-4">A quality car wash
							in Norway</h1>
						<p className="absolute md:top-80 top-40 text-center z-10 md:text-2xl text-xl bold text-white w-3/5">"Looking for a local car wash that offers great results? SQS Carwash in Chorlton, Manchester gets the results you want - come and see for yourself."</p>
					</div>
				))}
			</Zoom>
		</div>
	);
};

export default Slideshow;