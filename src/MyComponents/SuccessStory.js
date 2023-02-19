import React from 'react'
import InsideSuccessStory from './InsideSuccessStory'
import "./style.css"

export default function SuccessStory() {
  return (
    <>
      <section className='successstory'>
        <div className='bordertitle'>
        <hr />
            <h1>OUR SUCCESS STORY</h1>
        <hr />
        </div>
        <div className='successStoryContent'>
        <InsideSuccessStory img={"img/img1.png"} name={"Florence Nightingale"}/>
        <InsideSuccessStory img={"img/img2.png"} name={"Clara Barton"}/>
        <InsideSuccessStory img={"img/img3.png"} name={"Mary Eliza Mahoney "}/>
        <InsideSuccessStory img={"img/img4.png"} name={"Edith Cavell"}/>
        </div>
      </section>
    </>
  )
}
