import { Fragment } from "react";
import Link from "next/link";

import SlideShow from "../components/slideshow/slide-show";
import classes from '../styles/Home.module.css';
import Accordion from "../components/accordion/accordion";


export default function HomePage() {
  return <Fragment>
    <SlideShow />
    <section className={`font-ubuntu ${classes.services} + py-12 w-11/12 mx-auto max-[480px]:w-11/12`}>
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

    {/* About Section */}
    <section className={`${classes.about} `}>
      <div className="flex flex-wrap font-ubuntu">
        <div className={`${classes.aboutImage} w-2/4`}>
          <img src="/Images/about.jpg" />
        </div>
        <div className={`${classes.aboutText} flex flex-wrap justify-center justify-items-center flex-col w-2/4 bg-red-600 px-8`}>
          <h2 className="text-xl text-white font-bold mb-3">Who are Skoyen Car SPA?</h2>
          <p className="text-white mb-3">SQS - or Super Quick Shine! - are an outstanding car wash that offers a hand car wash service that gets the results every driver wants. We've been keeping cars looking great since 2001, and we've spent a lot of time and money making sure that every member of the team is highly trained and able to offer the service that you and your vehicle deserve.</p>
          <p className="text-white">Our results are so good that we've had some VIP clients over the years, including footballers Paul Pogba and Jesse Lingard, as well as well-known actors and other celebrities!</p>
        </div>
      </div>
    </section>

    {/* FAQ and Why Us */}
    <section className="flex flex-wrap w-11/12 py-12 mx-auto font-ubuntu">
      <div className="w-2/5 mx-auto">
        <Accordion />
      </div>
      <div className="w-2/5">
        <h1 className="font-bold text-2xl mb-4 text-red-600">Why choose the SQS team?</h1>
        <p className="text-normal mb-3">We'd like to think that there are a lot of great reasons to choose us for your vehicle's next valet, but here are just a few of the top reasons we hear from clients:</p>
        <ul className="list-disc list-inside mb-3">
          <li>We offer phenomenal results</li>
          <li>Our prices are competitive </li>
          <li>Our team are easy to deal with</li>
          <li>We're friendly and professional</li>
        </ul>
        <p>We'd love the chance to show you why people keep coming back to SQS, and hear your opinions. Bring your car to us today for a great car wash and valet.</p>
      </div>
    </section>

    {/* CTA Section */}
    <section class={`${classes.cta}`}>
      <img src="/images/cta-bg-img.webp" alt="CTA Image" />
      <div class={`${classes.overlay} font-ubuntu flex flex-col justify-center items-center`}>
        <h3 className="text-3xl text-white font-bold mb-4">Contact SQS Carwash today</h3>
        <p className="w-4/5 text-white">If your car isn't quite in the condition it was when you drove it of the dealer's forecourt, maybe it's time to get it hand washed and professionally valeted! Bring it down to SQS Carwash today or give us a call for further information.</p>
        <h3 className="text-3xl text-white font-bold mt-4">Call: <a href="tel:01618600008" className="underline">0161 860 0008</a></h3>
      </div>
    </section>

    {/* Contact Us */}
    <section className="py-12">
      <form className="w-4/5 mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-2/6">
            <div className="w-11/12">
              <label className="block mb-2">Name:</label>
              <input className="w-full border border-slate-500 p-2 outline-0" />
            </div>
          </div>
          <div className="w-2/6">
            <div className="w-11/12">
              <label className="block mb-2">Email:</label>
              <input className="w-full border border-slate-500 p-2 outline-0" />
            </div>
          </div>
          <div className="w-2/6">
            <div className="w-full">
              <label className="block mb-2">Phone:</label>
              <input className="w-full border border-slate-500 p-2 outline-0" />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <label className="block mb-2">Message:</label>
          <textarea className="w-full border border-slate-500 p-2 outline-0" rows="6">

          </textarea>
        </div>
        <div className="text-right mt-3">
          <button className="bg-red-600 text-white py-3 px-16">Send enquiry</button>
        </div>
      </form>
    </section>
  </Fragment>
}