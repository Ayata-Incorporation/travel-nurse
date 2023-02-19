import React from 'react'
import "./style.css"
export default function ServiceDetails2(props) {
  return (
    <div>
      <section className='servicesdetails'>
        <div className='right rightImg'>
            <img src={props.img} alt="" />
        </div>
        <div className='left'>
            <h2>{props.title}</h2>
            <h4>{props.title} is a process through which a person or an organization sponsors a foreign national to become a permanent resident of the United States. A green card, also known as a permanent resident card, allows the holder to live and work in the United States permanently.</h4>
            <p>Learn more  <i class="fa-solid fa-arrow-right"></i></p>
        </div>
      </section>
    </div>
  )
}
