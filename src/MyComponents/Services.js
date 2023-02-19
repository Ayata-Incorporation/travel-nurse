import React from "react";
import ServiceDetails2 from "./ServiceDetails2";
import ServicesDetails from "./ServicesDetails";
import "./style.css";

export default function Services() {
  return (
    <div>
      <section className="services" id="services">
        <div className="Title">
          <span>
            <h3>Services</h3>
          </span>
        </div>
        <ServicesDetails title={"Green Card Sponsorship"}  img={"img/img1.png"}/>
        <ServiceDetails2 title={"Employment"} img={"img/img2.png"}/>
        <ServicesDetails title={"NCLEX Course and US License"} img={"img/img3.png"}/>
        <ServiceDetails2 title={"Arrival and pre-employment orientation services"} img={"img/img4.png"}/>
      </section>
    </div>
  );
}
