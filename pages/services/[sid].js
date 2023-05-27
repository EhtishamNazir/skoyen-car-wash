import React, { Fragment, useState } from "react";
import path from 'path';
import fs from 'fs/promises';
import { useRouter } from "next/router";


import classes from './service.module.css';

function ServiceDetailPage(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');
    const [maker, setMaker] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [extras, setExtras] = useState('');
    const [notes, setNotes] = useState('');

    const router = useRouter();

    const { loadedService } = props;
    const sName = loadedService.name;

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send the form data to the server
        const response = await fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone, model, color, maker, sName, date, time, extras, notes }),
        });

        if (response.ok) {
            // Form data successfully submitted
            console.log('Form submitted successfully!');

            // Reset the form fields
            setName('');
            setEmail('');
            setPhone('');
            setModel('');
            setColor('');
            setMaker('');
            setDate('');
            setTime('');
            setNotes('');

            alert("Your service has been booked!");

            router.push('/');
        } else {
            // Error submitting the form
            console.error('Error submitting form data');
        }
    };

    // Fallback State for using fallback: true
    if (!loadedService) {
        return <p>Loading...</p>
    }

    return <Fragment>
        <section className='w-11/12 mx-auto flex flex-wrap justify-between py-12 font-ubuntu'>
            <div className="w-[48%] max-[480px]:w-full max-[480px]:mb-4 ">
                <h1 className="text-3xl text-red-600 font-bold">{loadedService.name}</h1>
                {loadedService.desc.length === 0 ? <ul className="my-3 text-slate-700 list-disc list-inside">
                    {loadedService.points.map((point) => (<li>{point}</li>))}
                </ul> : <p className="my-3 text-slate-700">{loadedService.desc}</p>}
                <img src={loadedService.image} />
                <h1 className="text-3xl text-red-600 font-bold mt-3">Pris</h1>
                <ul className="list-disc list-inside my-3 text-slate-700">
                    {loadedService.price.map(price => (<li>{price}</li>))}
                </ul>
            </div>
            <div className="w-[48%] max-[480px]:w-full">
                <form className="w-4/5 mx-auto max-[768px]:w-full" onSubmit={handleSubmit}>
                    <h1 className="text-3xl text-center mb-4 text-red-600 font-bold">Bestill {loadedService.name}</h1>
                    <div className="mb-3">
                        <label className="block text-lg mb-1">Name:</label>
                        <input type="text" className="w-full border border-slate-500 rounded px-2 py-1 outline-none z-50" value={name}
                            onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="block text-lg mb-1">Email:</label>
                        <input type="email" className="w-full border border-slate-500 rounded px-2 py-1 outline-none" value={email}
                            onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="block text-lg mb-1">Contact:</label>
                        <input type="phone" className="w-full border border-slate-500 rounded px-2 py-1 outline-none" value={phone}
                            onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div className="mb-3 flex flex-wrap justify-between">
                        <div className="w-[30%]">
                            <label className="block text-lg mb-1">Model:</label>
                            <input type="text" className="w-full border border-slate-500 rounded px-2 py-1 outline-none" value={model}
                                onChange={(e) => setModel(e.target.value)} required />
                        </div>
                        <div className="w-[30%]">
                            <label className="block text-lg mb-1">Color:</label>
                            <input type="text" className="w-full border border-slate-500 rounded px-2 py-1 outline-none" value={color}
                                onChange={(e) => setColor(e.target.value)} required />
                        </div>
                        <div className="w-[30%]">
                            <label className="block text-lg mb-1">Maker:</label>
                            <input type="text" className="w-full border border-slate-500 rounded px-2 py-1 outline-none" value={maker}
                                onChange={(e) => setMaker(e.target.value)} required />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="block text-lg mb-1">Service Required:</label>
                        <input type="text" className="w-full border border-slate-500 rounded px-2 py-1 outline-none" value={loadedService.name} required />
                    </div>
                    <div className="mb-3">
                        <label className="block text-lg mb-1">Date:</label>
                        <input type="date" className="w-full border border-slate-500 rounded px-2 py-1 outline-none" value={date}
                            onChange={(e) => setDate(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="block text-lg mb-1">Time In:</label>
                        <input type="time" className="w-full border border-slate-500 rounded px-2 py-1 outline-none" value={time}
                            onChange={(e) => setTime(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="block text-lg mb-1">Extras:</label>
                        <input type="text" className="w-full border border-slate-500 rounded px-2 py-1 outline-none" value={extras}
                            onChange={(e) => setExtras(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="block text-lg mb-1">Notes:</label>
                        <textarea className="w-full border border-slate-500 rounded px-2 py-1 outline-none" value={notes}
                            onChange={(e) => setNotes(e.target.value)} required></textarea>
                    </div>
                    <div className="mb-3">
                        <button className="w-full py-3 bg-red-600 rounded text-white" type="submit">Book Service</button>
                    </div>
                </form>
            </div>
        </section>
    </Fragment>
}

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'services-data.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    return data;
}

export async function getStaticProps(context) {
    const { params } = context;
    const serviceId = params.sid;

    const data = await getData();
    const service = data.services.find(service => service.id === serviceId);

    if (!service) {
        return { notFound: true };
    }

    return {
        props: {
            loadedService: service
        }
    }
}

export async function getStaticPaths() {
    const data = await getData();

    const ids = data.services.map((service) => service.id);

    const pathsWithParams = ids.map((id) => ({ params: { sid: id } }));

    return {
        paths: pathsWithParams,
        // fallback: false
        fallback: true
        // fallback: 'blocking'
    }
}

export default ServiceDetailPage;
