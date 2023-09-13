import React from 'react'

const Section = ({h3,text, imgsize="70%" ,
backgroundcolor,headingcolor,btncolor,textcolor,btnbcolor,hasbtn=true, btntext,Imgsrc}) => {
  return (
    <section className="section" style={{background:backgroundcolor,}}>
      <div>
        <h3 style={{color:headingcolor,}}>{h3}</h3>

        <p style={{color:textcolor,}}>{text}</p>

        {hasbtn && <button style={{color:btncolor, background:btnbcolor}} >{btntext}</button>}

      <div>
<img src={Imgsrc} alt="imgsrc" style={{width: imgsize,}}/>
      </div>
      </div>
    </section>
  )
}

export default Section 
