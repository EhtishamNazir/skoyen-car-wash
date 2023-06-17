import fs from 'fs/promises';
import path from 'path';
import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import toast, { Toaster } from 'react-hot-toast';

import SlideShow from "../components/slideshow/slide-show";
import classes from '../styles/Home.module.css';
import Accordion from "../components/accordion/accordion";


export default function HomePage(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const { services } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the form data to the server
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, message }),
    });

    if (response.ok) {
      // Form data successfully submitted
      console.log('Form submitted successfully!');
      // Reset the form fields
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      toast.success("Email Sent to Service Provider");
    } else {
      // Error submitting the form
      toast.error('Error submitting form data');
    }
  };

  return <Fragment>
    <SlideShow />

    {/* Services */}
    <section className={`font-ubuntu ${classes.services} + py-12 w-11/12 mx-auto max-[480px]:w-11/12`}>
      <h1 className="font-ubuntu font-bold text-5xl text-center mb-12 text-red-600 max-[480px]:text-4xl">Tjenester</h1>
      <div className={`${classes.servicesItems} flex flex-wrap justify-between`}>
        {services.slice(0, 6).map(service => (
          <div className={`${classes.servicesItem} border-2 rounded-lg`} key={service.id}>
            <Image src={service.image} alt='Service Image' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            <div className="services-item-text px-4 py-6">
              <h3 className="text-center text-2xl font-bold text-red-600 mb-2">{service.name}</h3>
              {service.desc.length === 0 ? <ul className='text-center'>
                {service.points.slice(0, 3).map((point) => (<li key={point}>{point}</li>))}
              </ul> : <p className="text-center">{service.desc.substring(0, 100)}</p>}
              <p className="text-center mt-6">
                <Link href={`/services/${service.id}`} className="bg-red-600 py-3 px-8 text-white rounded">Lære mer</Link>
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>

    {/* About Section */}
    <section className={`${classes.about} `}>
      <div className="flex flex-wrap font-ubuntu">
        <div className={`${classes.aboutImage}`}>
          <Image src="/images/about.webp" width={0} height={0} alt='About Image' sizes="100vw" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className={`${classes.aboutText} flex flex-wrap justify-center justify-items-center flex-col bg-red-600 px-8`}>
          <h2 className="text-xl text-white font-bold mb-3">Hvem er Skøyen Bilpleie AS?</h2>
          <p className="text-white mb-3">
            Skøyen Bilpleie AS - er en fremragende bilvask som tilbyr en håndvasktjeneste som får resultatene enhver sjåfør ønsker. Vi har holdt bilene flotte siden 2001, og vi har brukt mye tid og penger på å sørge for at hvert medlem av teamet er høyt trent og i stand til å tilby den servicen du og kjøretøyet ditt fortjener.</p>
          <p className="text-white">Resultatene våre er så gode at vi har hatt noen VIP-kunder gjennom årene, inkludert fotballspillerne Paul Pogba og Jesse Lingard, samt kjente skuespillere og andre kjendiser!</p>
        </div>
      </div>
    </section>

    {/* FAQ and Why Us */}
    <section className="flex flex-wrap w-11/12 py-12 mx-auto font-ubuntu">
      <div className={`${classes.faqItem} mx-auto`}>
        <Accordion />
      </div>
      <div className={`${classes.faqItem}`}>
        <h1 className="font-bold text-2xl mb-4 text-red-600 max-[480px]:text-center">Hvorfor velge Skøyen Bilpleie AS-teamet?</h1>
        <p className="text-normal mb-3">Vi vil gjerne tro at det er mange gode grunner til å velge oss for kjøretøyets neste betjent, men her er bare noen av de viktigste grunnene vi hører fra kunder:</p>
        <ul className="list-disc list-inside mb-3">
          <li>Vi tilbyr fenomenale resultater</li>
          <li>Våre priser er konkurransedyktige</li>
          <li>Teamet vårt er enkelt å ha med å gjøre</li>
          <li>Vi er vennlige og profesjonelle</li>
        </ul>
        <p>Vi vil gjerne ha sjansen til å vise deg hvorfor folk stadig vender tilbake til
          Skøyen Bilpleie AS, og hør dine meninger. Ta med bilen din til oss i dag for en flott bilvask og betjent.</p>
      </div>
    </section>

    {/* CTA Section */}
    <section className={`${classes.cta}`}>
      <Image src="/images/cta-bg-img.webp" alt="CTA Image" width={0} height={0} sizes="100vw" style={{ width: '100%' }} />
      <div className={`${classes.overlay} font-ubuntu flex flex-col justify-center items-center max-[480px]:px-4`}>
        <h3 className="text-3xl text-white font-bold mb-4 max-[480px]:text-2xl">Kontakt Skøyen Bilpleie AS i dag</h3>
        <p className="w-4/5 text-white max-[480px]:w-full">If your car isn't quite in the condition it was when you drove it of the dealer's forecourt, maybe it's time to get it hand washed and professionally valeted! Bring it down to Skøyen Bilpleie AS today or give us a call for further information.</p>
        <h3 className="text-3xl text-white font-bold mt-4 max-[480px]:text-2xl">Anrop: <a href="tel:01618600008" className="underline">22 44 44 37</a></h3>
      </div>
    </section>

    {/* Contact Us */}
    <section className="py-12" id='contact'>
      <form className="w-4/5 mx-auto max-[768px]:w-11/12" onSubmit={handleSubmit}>
        <div className="flex flex-wrap justify-between">
          <div className="w-2/6 max-[480px]:w-full">
            <div className="w-11/12 max-[480px]:w-full">
              <label className="block mb-2">Navn:</label>
              <input className="w-full border border-slate-500 p-2 outline-0" value={name}
                onChange={(e) => setName(e.target.value)} required />
            </div>
          </div>
          <div className="w-2/6 max-[480px]:w-full">
            <div className="w-11/12 max-[480px]:w-full">
              <label className="block mb-2">E-post:</label>
              <input className="w-full border border-slate-500 p-2 outline-0" type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>
          <div className="w-2/6 max-[480px]:w-full">
            <div className="w-full">
              <label className="block mb-2">Telefon:</label>
              <input className="w-full border border-slate-500 p-2 outline-0" type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)} required />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <label className="block mb-2">Beskjed:</label>
          <textarea className="w-full border border-slate-500 p-2 outline-0" rows="6" value={message}
            onChange={(e) => setMessage(e.target.value)} required>

          </textarea>
        </div>
        <div className="text-right mt-3">
          <button className="bg-red-600 text-white py-3 px-16" type='submit'>Send forespørsel</button>
        </div>
      </form>
    </section>
    <Toaster />
  </Fragment>
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), 'data', 'services-data.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  // This is used to redirect to another page
  if (!data) {
    return {
      redirect: {
        destination: '/no-found'
      }
    }
  }

  // This is used to show page not found
  if (data.services.length === 0) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      services: data.services,
    },
    revalidate: 10,
  }
}