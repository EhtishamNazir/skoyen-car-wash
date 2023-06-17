import React from "react";
import Image from 'next/image';
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

import classes from './slide-show.module.css';

const Slideshow = () => {
	//Array of Images
	const images = [
		"images/Image1.webp",
		"images/Image2.webp",
		"images/Image3.webp",
		"images/Image4.webp",
		"images/Image5.webp",
		"images/Image6.webp",
	];

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		scale: 1,
		duration: 5000,
		transitionDuration: 300,
		infinite: true,
		prevArrow: (
			<div className="ml-10 top-64 max-[768px]:top-48">
				<ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer z-50 max-[480px]:invisible" />
			</div>
		),
		nextArrow: (
			<div className="mr-10 top-64 max-[768px]:top-48">
				<ArrowRightIcon className="h-8 w-8 text-white cursor-pointer z-50 max-[480px]:invisible" />
			</div>
		),
	};
	return (
		<div className="relative w-full h-screen max-[1024px]:h-2/5">
			<Zoom {...zoomInProperties}>
				{images.map((each, index) => (
					<div key={index} className="flex justify-center md:items-center items-start w-screen h-screen relative max-[1024px]:h-fit">
						<Image
							src={`/${each}`}
							alt="Slide Image"
							width={0}
							height={0}
							className="w-screen"
							sizes="100vw"
							style={{ width: '100%', height: 'auto' }}
						/>
						<div className="w-full absolute top-1/3 text-center z-40 max-[768px]:top-1/4 max-[480px]:top-4/6">
							<h1 className="text-white text-center text-5xl font-bold font-ubuntu max-[480px]:text-3xl">En kvalitets bilvask<br /> <span className="font-normal">i Oslo, Norge</span></h1>
							<p className="text-white mx-auto mt-4 w-3/5 font-ubuntu max-[768px]:w-3/5 max-[768px]:text-xl max-[480px]:invisible">Ser du etter en lokal bilvask som gir gode resultater? Skøyen Bilpleie AS i Bygdøy allé 119 0273 Oslo Norge, får de resultatene du ønsker - kom og se selv.</p>
						</div>
						<div className={`${classes.overlay} z-30`}></div>
					</div>
				))}
			</Zoom>
		</div>
	);
};

export default Slideshow;