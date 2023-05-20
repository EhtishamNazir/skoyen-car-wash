import { Fragment } from "react";
import SlideShow from "../components/slideshow/slide-show";
import classes from '../styles/Home.module.css';
import Link from "next/link";


export default function HomePage() {
  return <Fragment>
    <SlideShow />
    <section className={`font-ubuntu ${classes.services} + py-12 w-4/5 mx-auto max-[480px]:w-11/12`}>
      <h1 className="font-ubuntu font-bold text-5xl text-center mb-12 text-red-600 max-[480px]:text-4xl">Services</h1>
      <div className={`${classes.servicesItems} flex flex-wrap justify-between`}>
        <div className={`${classes.servicesItem} border-2 rounded-lg`}>
          <img src="/images/full-shine.jpg" />
          <div className="services-item-text px-4 py-6">
            <h3 className="text-center text-2xl font-bold text-red-600 mb-2">Full Shine</h3>
            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
            <p className="text-center mt-6">
              <Link href="#" className="bg-red-600 py-3 px-8 text-white rounded">Learn More</Link>
            </p>
          </div>
        </div>
        <div className={`${classes.servicesItem} border-2 rounded-lg`}>
          <img src="/images/utvending-vask.jpg" />
          <div className="services-item-text px-4 py-6">
            <h3 className="text-center text-2xl font-bold text-red-600 mb-2">Utvending Vask</h3>
            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
            <p className="text-center mt-6">
              <Link href="#" className="bg-red-600 py-3 px-8 text-white rounded">Learn More</Link>
            </p>
          </div>
        </div>
        <div className={`${classes.servicesItem} border-2 rounded-lg`}>
          <img src="/images/invending-vask.jpg" />
          <div className="services-item-text px-4 py-6">
            <h3 className="text-center text-2xl font-bold text-red-600 mb-2">Innvending Vask</h3>
            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <p className="text-center mt-6">
              <Link href="#" className="bg-red-600 py-3 px-8 text-white rounded">Learn More</Link>
            </p>
          </div>
        </div>
      </div>
      <div className={`${classes.servicesItems} flex flex-wrap justify-between mt-8`}>
        <div className={`${classes.servicesItem} border-2 rounded-lg`}>
          <img src="/images/lakkrens-polering.jpg" />
          <div className="services-item-text px-4 py-6">
            <h3 className="text-center text-2xl font-bold text-red-600 mb-2">Lakkrens Polering</h3>
            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
            <p className="text-center mt-6">
              <Link href="#" className="bg-red-600 py-3 px-8 text-white rounded">Learn More</Link>
            </p>
          </div>
        </div>
        <div className={`${classes.servicesItem} border-2 rounded-lg`}>
          <img src="/images/aromatek-behandling.jpg" />
          <div className="services-item-text px-4 py-6">
            <h3 className="text-center text-2xl font-bold text-red-600 mb-2">Aromatek Behandling</h3>
            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
            <p className="text-center mt-6">
              <Link href="#" className="bg-red-600 py-3 px-8 text-white rounded">Learn More</Link>
            </p>
          </div>
        </div>
        <div className={`${classes.servicesItem} border-2 rounded-lg`}>
          <img src="/images/hjulskift.jpg" />
          <div className="services-item-text px-4 py-6">
            <h3 className="text-center text-2xl font-bold text-red-600 mb-2">Hjulskift</h3>
            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <p className="text-center mt-6">
              <Link href="#" className="bg-red-600 py-3 px-8 text-white rounded">Learn More</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
}