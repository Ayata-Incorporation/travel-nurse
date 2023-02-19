import React from 'react'
import InsideDestination from './InsideDestionation'

export default function Destination() {
  const images = [
    "img/image1.jpg",
    "img/image2.jfif",
    "img/image3.jpg",
    "img/image4.jfif"
];
  return (
    <section className='destination'>
      <div className='bordertitle'>
        <hr />
            <h1>DESTIONATIONS FOR JOBS</h1>
        <hr />
        </div>
        <InsideDestination/>
        <div className='totaldestinationimg'>
        {images.map((img, index) => (
          <div className="destinationimage" key={index}>
            <img src={img} alt={`img-${index}`} />
            <p><i class="fa-solid fa-square-plus"></i>Travell nurse </p>
            <h5><i class="fa-solid fa-location-dot"></i>America </h5>
          </div>
        ))}
        </div>
    </section>
  )
}
