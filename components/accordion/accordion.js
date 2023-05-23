import { useState, useRef } from "react";

import AccordionItem from "./accordion-item";
import classes from './accordion.module.css';

const faqs = [
    {
        id: 1,
        header: "I'm looking to sell my car - can you help?",
        text: `We can! As well as washing and valeting vehicles, we also buy used cars - get in touch for more information.`
    },
    {
        id: 2,
        header: "How long does a valet service take?",
        text: `For mini-valets, the time required is approximately 25 minutes, but for a full valet service please allow approximately 3 hours.`
    },
    {
        id: 3,
        header: "How much does a valet service cost?",
        text: `This varies, and depends on a number of things:

        Vehicle size
        Level of valet service required
        Amount of labour involved (very dirty vehicles cost more to valet because they take longer)`
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
                        <h1 className="font-bold text-2xl text-center mb-4 text-red-600">Got questions about our service?</h1>
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
