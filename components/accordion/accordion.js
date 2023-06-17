import { useState, useRef } from "react";

import AccordionItem from "./accordion-item";
import classes from './accordion.module.css';

const faqs = [
    {
        id: 1,
        header: "Har du spørsmål om tjenesten vår?",
        text: `Vi kan! I tillegg til å vaske og betjente kjøretøy kjøper vi også brukte biler - ta kontakt for mer informasjon.`
    },
    {
        id: 2,
        header: "Hvor lang tid tar en betjent service?",
        text: `For mini-betjenter er tiden som kreves ca. 25 minutter, men for en full betjent service, vennligst la det ta ca. 3 timer.`
    },
    {
        id: 3,
        header: "Hvor mye koster en betjent service?",
        text: `Dette varierer, og avhenger av en rekke ting:

        Kjøretøystørrelse
        Nivå på betjent service kreves
        Mengden arbeidskraft involvert (svært skitne kjøretøy koster mer å betjent fordi de tar lengre tid)`
    }
]

const Accordion = () => {

    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }

    return (
        <>
            <div className="mx-auto font-ubuntu">
                <div className="flex flex-wrap justify-center">
                    <div className="mt-2">
                        <h1 className="font-bold text-2xl text-center mb-4 text-red-600">Har du spørsmål om tjenesten vår?</h1>
                        {faqs.map((faq, index) => {
                            return (
                                <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Accordion;
