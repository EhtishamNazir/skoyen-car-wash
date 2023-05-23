import { useRef } from "react";

import classes from './accordion.module.css';

const AccordionItem = (props) => {
    const contentEl = useRef();
    const { handleToggle, active, faq } = props;
    const { header, id, text } = faq;

    return (
        <div className={classes.rcAccordionCard}>
            <div className={classes.rcAccordionHeader}>
                <div className={`${classes.rcAccordionToggle} p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                    <h5 className={classes.rcAccordionTitle}>{header}</h5>
                    <i className="fa fa-chevron-down rc-accordion-icon bg-black text-white p-2 rounded-full"></i>
                </div>
            </div>
            <div ref={contentEl} className={`${classes.rcCollapse} ${active === id ? 'show' : ''}`} style={
                active === id
                    ? { height: contentEl.current.scrollHeight }
                    : { height: "0px" }
            }>
                <div className={classes.rcAccordionBody}>
                    <p className='mb-0'>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default AccordionItem;