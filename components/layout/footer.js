import { Fragment } from "react";
import Link from 'next/link';

// import classes from './footer.module.css';

const Footer = () => {
    return (
        <Fragment>
            <section className="w-full bg-black py-8 font-ubuntu">
                <div className="w-10/12 mx-auto flex flex-wrap justify-between max-[768px]:w-11/12">
                    <div className="w-1/5 max-[480px]:w-full max-[480px]:mb-4">
                        <ul className="flex flex-wrap justify-center">
                            <li><a href="#"><img src="/images/fb.png" className="w-12" alt="FB Icon" /></a></li>
                            <li className="ml-3"><a href="#"><img src="/images/insta.png" className="w-12" alt="FB Icon" /></a></li>
                        </ul>
                    </div>
                    <div className="w-1/5 max-[768px]:w-2/5 max-[480px]:w-full max-[480px]:mb-4">
                        <p className="text-center text-white text-lg font-bold mb-1">Phone:
                            <a href="tel:01618600008" className="underline font-normal ml-2">22 44 44 37</a>
                        </p>
                        <p className="text-center text-white text-lg font-bold mb-1">Email:
                            <a href="mailto:post@skoyenbilpleie.no" className="underline font-normal ml-2">post@skoyenbilpleie.no</a>
                        </p>
                    </div>
                    <div className="w-1/5 max-[480px]:w-full max-[480px]:mb-4">
                        <p className="text-center text-white text-lg">
                            Skøyen Bilpleie AS</p>
                        <p className="text-center text-white text-lg">Bygdøy allé 119</p>
                        <p className="text-center text-white text-lg">0273 Oslo</p>
                    </div>
                    <div className="w-1/5 max-[480px]:w-full">
                        <ul className="text-white text-center">
                            <li className="mb-1">
                                <Link href="/" className="hover:text-red-600">Home</Link>
                            </li>
                            <li className="mb-1">
                                <Link href="/gallery" className="hover:text-red-600">Gallery</Link>
                            </li>
                            <li className="mb-1">
                                <Link href="/#contact" className="hover:text-red-600">Contact</Link>
                            </li>
                            <li className="mb-1">
                                <Link href="/signin" className="hover:text-red-600">Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-10/12 mx-auto max-[480px]:w-11/12">
                    <p className="text-white mt-4 text-center max-[480px]:text-justify">© 2023. The content on this website is owned by us and our licensors. Do not copy any content (including images) without our consent.</p>
                </div>
            </section>
        </Fragment>
    );
};

export default Footer;

