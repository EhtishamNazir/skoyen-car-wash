import { Fragment, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';

import classes from './navbar.module.css';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [flyer, setFlyer] = useState(false);
    const [flyerTwo, setFlyerTwo] = useState(false);

    return (
        <Fragment>
            <div className="bg-white w-11/12 mx-auto font-ubuntu max-[480px]:w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-0">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10 max-[768px]:py-4">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link href="/">
                                <span className="sr-only">Workflow</span>
                                <Image
                                    src="/logo.png"
                                    width={150}
                                    height={60}
                                    alt="Logo"
                                    className="max-[480px]:hidden"
                                />
                                <Image
                                    src="/logo.png"
                                    width={100}
                                    height={50}
                                    alt="Logo"
                                    className="hidden max-[480px]:block"
                                />
                            </Link>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <button
                                type="button"
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="sr-only">Open menu</span>
                                {/* Heroicon name: outline/menu */}
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                        <nav className="hidden md:flex space-x-10">
                            <Link
                                href="/"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                Home
                            </Link>
                            <div className="relative">
                                {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                                <button
                                    type="button"
                                    className="
                     group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 pb-8'
                    "
                                    onClick={() => (setFlyer(!flyer), setFlyerTwo(false))}
                                >
                                    <span>Services</span>
                                    {/*
                Heroicon name: solid/chevron-down
  
                Item active: "text-gray-600", Item inactive: "text-gray-400"
              */}
                                    <svg
                                        className={
                                            flyer === true
                                                ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                                                : "transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                        }
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                {/*
              'Solutions' flyout menu, show/hide based on flyout menu state.
  
              Entering: "transition ease-out duration-200"
                From: "opacity-0 translate-y-1"
                To: "opacity-100 translate-y-0"
              Leaving: "transition ease-in duration-150"
                From: "opacity-100 translate-y-0"
                To: "opacity-0 translate-y-1"
            */}

                                <div
                                    onMouseLeave={() => setFlyer(false)}
                                    className={
                                        flyer
                                            ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                            : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                    }
                                >
                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="relative grid gap-6 bg-white px-0 py-6 sm:gap-8 sm:p-8">
                                            <Link href="/services/s1" className="-m-3 py-1 px-2 flex items-start rounded-lg hover:bg-gray-50">FULLSHINE</Link>
                                            <Link href="/services/s2" className="-m-3 py-1 px-2 flex items-start rounded-lg hover:bg-gray-50">UTVENDIG VASK</Link>
                                            <Link href="/services/s3" className="-m-3 py-1 px-2 flex items-start rounded-lg hover:bg-gray-50">INNVENDIG VASK</Link>
                                            <Link href="/services/s4" className="-m-3 py-1 px-2 flex items-start rounded-lg hover:bg-gray-50">LAKKRENS / POLERING / LAKKFORSEGLING</Link>
                                            <Link href="/services/s5" className="-m-3 py-1 px-2 flex items-start rounded-lg hover:bg-gray-50">AROMATEK-BEHANDLING</Link>
                                            <Link href="/services/s6" className="-m-3 py-1 px-2 flex items-start rounded-lg hover:bg-gray-50">HJULSKIFT</Link>
                                            <Link href="/services/s7" className="-m-3 py-1 px-2 flex items-start rounded-lg hover:bg-gray-50">IMPREGNERING AV SKINNSETER</Link>
                                            <Link href="/services/s8" className="-m-3 py-1 px-2 flex items-start rounded-lg hover:bg-gray-50">HJULSKIFT</Link>
                                            <Link href="/services/s9" className="-m-3 py-1 px-2 flex items-start rounded-lg hover:bg-gray-50">ANDRE TJENESTER / PRISLISTE</Link>
                                            <Link href="/services/s10" className="-m-3 py-1 px-2 flex items-start rounded-lg hover:bg-gray-50">OM OSS</Link>
                                            <Link href="/services/s11" className="-m-3 py-1 px-2 flex items-start rounded-lg hover:bg-gray-50">INNVENDIG RENS</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/gallery"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                Gallery
                            </Link>
                            <Link
                                href="#contact"
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                Contact
                            </Link>
                        </nav>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <a
                                href="#"
                                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                Sign in
                            </a>
                            <a
                                href="#"
                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Sign up
                            </a>
                        </div>
                    </div>
                </div>

                <div className={
                    open
                        ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
                        : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                }>
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <button
                                        type="button"
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        {/* Heroicon name: outline/x */}
                                        <svg
                                            className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    <Link href="/services/s1" className="-m-3 py-1 px-2 flex items-start rounded-lg hover:bg-gray-50">FULLSHINE</Link>
                                    <Link href="/services/s2" className="-m-3 py-1 px-2 flex items-start rounded-lg hover:bg-gray-50">UTVENDIG VASK</Link>
                                    <Link href="/services/s3" className="-m-3 py-1 px-2 flex items-start rounded-lg hover:bg-gray-50">INNVENDIG VASK</Link>
                                    <Link href="/services/s4" className="-m-3 py-1 px-2 flex items-start rounded-lg hover:bg-gray-50">LAKKRENS / POLERING / LAKKFORSEGLING</Link>
                                    <Link href="/services/s5" className="-m-3 py-1 px-2 flex items-start rounded-lg hover:bg-gray-50">AROMATEK-BEHANDLING</Link>
                                    <Link href="/services/s6" className="-m-3 py-1 px-2 flex items-start rounded-lg hover:bg-gray-50">HJULSKIFT</Link>
                                    <Link href="/services/s7" className="-m-3 py-1 px-2 flex items-start rounded-lg hover:bg-gray-50">IMPREGNERING AV SKINNSETER</Link>
                                    <Link href="/services/s8" className="-m-3 py-1 px-2 flex items-start rounded-lg hover:bg-gray-50">HJULSKIFT</Link>
                                    <Link href="/services/s9" className="-m-3 py-1 px-2 flex items-start rounded-lg hover:bg-gray-50">ANDRE TJENESTER / PRISLISTE</Link>
                                    <Link href="/services/s10" className="-m-3 py-1 px-2 flex items-start rounded-lg hover:bg-gray-50">OM OSS</Link>
                                    <Link href="/services/s11" className="-m-3 py-1 px-2 flex items-start rounded-lg hover:bg-gray-50">INNVENDIG RENS</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default NavBar;

