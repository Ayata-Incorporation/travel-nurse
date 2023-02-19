import React from 'react'

export default function BenifitsDetails(props) {
  return (
    <section className='benifitsdetails'>
     <div className='insidebenifitsdetails'>
        <img src={props.img} alt="" />
        <h4>{props.topic}</h4>
        <p>Veridian TechSolutions has an experienced team of software developers who have expertise in a variety of technologies and programming languages.</p>
    </div> 
    </section>
  )
}
