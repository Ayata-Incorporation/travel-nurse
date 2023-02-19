import React from 'react'
import "./style.css"

export default function InsideSuccessStory(props) {
  return (
    <section className='insidesuccessstory'>
      <p>One of the most important responsibilities of nurses is to provide care and support to patients. This includes monitoring vital signs, administering medications, dressing wounds, and assisting with basic needs such as bathing and feeding. Nurses may also educate patients and their families on managing their health conditions and making healthy lifestyle choices.</p>
      <div className='img_nurse'>
        <img src={props.img} alt="" />
        <h4> - {props.name}</h4>
      </div>
    </section>
  )
}
