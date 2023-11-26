import React, { useState } from "react";
import "./Value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

// Accordion'Styles'.
import "react-accessible-accordion/dist/fancy-example.css";

import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";



const Value = () => {
  // Move the useState call to the top level of your component
  const [className, setClassName] = useState(null);



  return (

    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./Images/value.png" alt="v-image" />
          </div>
        </div>



        {/* Right Side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better
          </span>



          {/* Accordion Section */}
         <Accordion allowMultipleExpanded={false} preExpanded={[0]} className="accordion">
            {data.map((item, i) => {
             
              return (
                
            <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i} >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">


                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>


                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>

                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20}></MdOutlineArrowDropDown>
                      </div>

                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                  
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
