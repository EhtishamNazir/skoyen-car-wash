import { Fragment } from "react";
import Link from 'next/link';

// import classes from './footer.module.css';

const Footer = () => {
    return (
        <Fragment>
            <section className="w-full bg-black py-8 font-ubuntu">
                <div className="w-10/12 mx-auto flex flex-wrap justify-between">
                    <div className="w-1/5">
                        <ul className="flex flex-wrap justify-center">
                            <li><a href="#"><img src="/images/fb.png" className="w-12" alt="FB Icon" /></a></li>
                            <li className="ml-3"><a href="#"><img src="/images/insta.png" className="w-12" alt="FB Icon" /></a></li>
                        </ul>
                    </div>
                    <div className="w-1/5">
                        <p className="text-center text-white text-lg font-bold mb-1">Phone:
                            <a href="tel:01618600008" className="underline font-normal ml-2">0161 860 0008</a>
                        </p>
                        <p className="text-center text-white text-lg font-bold mb-1">Email:
                            <a href="mailto:example@gmail.com" className="underline font-normal ml-2">example@gmail.com</a>
                        </p>
                    </div>
                    <div className="w-1/5">
                        <p className="text-center text-white text-lg">Skoyen Car SPA</p>
                        <p className="text-center text-white text-lg">302 Barlow Moor Road</p>
                        <p className="text-center text-white text-lg">M21 8AY</p>
                    </div>
                    <div className="w-1/5">
                        <ul className="text-white text-center">
                            <li className="mb-1">
                                <Link href="/" className="hover:text-red-600">Home</Link>
                            </li>
                            <li className="mb-1">
                                <Link href="/gallery" className="hover:text-red-600">Gallery</Link>
                            </li>
                            <li className="mb-1">
                                <Link href="/contact" className="hover:text-red-600">Contact</Link>
                            </li>
                            <li className="mb-1">
                                <Link href="/signin" className="hover:text-red-600">Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Footer;

