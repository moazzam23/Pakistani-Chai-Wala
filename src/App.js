import Introvedio from "./Components/Introvedio";
import Section from "./Components/Section";
import Footer from "./Components/Footer"
import data from "./Data/data.json"

import freshTopicImg from "./Assets/academy.png"
import freshTopic2Img from "./Assets/story.png"
import tedTalksimg from "./Assets/in-the-news.gif"
import franchiseimg from "./Assets/franchise.gif"
import albumimg from "./Assets/mba-cares.gif"
import chaiwalaimg from "./Assets/image3.png"
import baratimg from "./Assets/image1.png"
import coursesimg from "./Assets/image2.png"
import mapimg from "./Assets/locations.png"


import "./styles/App.scss"
import "./styles/intro.scss"
import "./styles/section.scss"
import "./styles/Footer.scss"

const yellow = "#fff100",pink = "#ed1e79", white= "#fff" ,brown="#6d310e";

function App() {

  const {freshTopic, freshTopic2, tedTalks,franchise,album,barat,chaiwala,courses,map}= data;


  return (
    <>
     <Introvedio/>   
    
          {/* fresh Topic */}
     <Section h3={freshTopic.heading} 
     text={freshTopic.text} 
     btntext={freshTopic.btn}
     Imgsrc={freshTopicImg} 
     backgroundcolor={pink}
     headingcolor={yellow}
     btncolor={pink}
     textcolor={yellow}
     btnbcolor={yellow}
     
     />

         {/* fresh Topic 2*/}
<Section h3={freshTopic2.heading} 
     text={freshTopic2.text} 
     btntext={freshTopic2.btn}
     Imgsrc={freshTopic2Img} 
     backgroundcolor={pink}
     headingcolor={yellow}
     btncolor={pink}
     textcolor={yellow}
     btnbcolor={yellow}
     />

             {/* ted talks */}
<Section h3={tedTalks.heading} 
     text={tedTalks.text} 
     btntext={tedTalks.btn}
     Imgsrc={tedTalksimg}  
     backgroundcolor={yellow}
     headingcolor={pink}
     btncolor={yellow}
     textcolor={pink}
     btnbcolor={pink}
     />
     
       {/* franchice */}
<Section h3={franchise.heading} 
     text={franchise.text} 
     btntext={franchise.btn}
     Imgsrc={franchiseimg}  
     backgroundcolor={white}
     headingcolor={pink}
     btncolor={brown}
     textcolor={brown}
     btnbcolor={pink}
     />
 
  {/* map */}
  <Section h3={map.heading} 
     text={map.text} 
     Imgsrc={mapimg}  
     backgroundcolor={pink}
     headingcolor={yellow}
     btncolor={pink}
     textcolor={yellow}
     hasbtn={false} 
     btnbcolor={yellow}
     />

     {/* course */}
<Section h3={courses.heading} 
     text={courses.text} 
     btntext={courses.btn}
     Imgsrc={coursesimg}  
     imgsize={"30%"}
     backgroundcolor={yellow}
     headingcolor={pink}
     btncolor={yellow}
     textcolor={pink}
     btnbcolor={pink}
     />

       {/* album */}
<Section h3={album.heading} 
     text={album.text} 
     btntext={album.btn}
     Imgsrc={albumimg}  
     backgroundcolor={white}
     headingcolor={pink}
     btncolor={yellow}
     textcolor={brown}
     btnbcolor={brown}
     />

       
{/* barat */}
  <Section h3={barat.heading} 
     text={barat.text} 
     btntext={barat.btn}
     Imgsrc={baratimg}  
     backgroundcolor={pink}
     headingcolor={yellow}
     btncolor={pink}
     textcolor={yellow}
     btnbcolor={yellow}
     />
   
   
     {/* chai wala */}
<Section h3={chaiwala.heading} 
     text={chaiwala.text} 
     btntext={chaiwala.btn}
     Imgsrc={chaiwalaimg}  
     backgroundcolor={white}
     headingcolor={pink}
     btncolor={yellow}
     textcolor={brown}
     btnbcolor={brown}
     />

 <Footer/>
     
    </>
  );
}

export default App;
