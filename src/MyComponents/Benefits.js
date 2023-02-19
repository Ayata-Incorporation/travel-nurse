import React from 'react';
import BenifitsDetails from './BenifitsDetails';

export default function Benefits() {
  return (
    <div>
      <section className='benifits' id="benifits">
        <div className='insideBenifits'>
      <div className="Title">
          <span>
            <h3>Benifits</h3>
          </span>
    </div>
    <section className='features'>
    <BenifitsDetails img={"img/img1.png"} topic={"Experienced team"}/>
    <BenifitsDetails img={"img/img2.png"} topic={"High-quality solutions"}/>
    <BenifitsDetails img={"img/img3.png"} topic={"Customer satisfaction"}/>
    <BenifitsDetails img={"img/img4.png"} topic={"Flexibility"}/>
    </section>
        </div>
      </section>
      </div>
  )
}
