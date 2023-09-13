import React from 'react'

const Footer = () => {
  const footerlinks=(element)=>{
 const allfooterlinks = document.querySelectorAll(".footerlinks")

 switch(element){
    case 0:
        allfooterlinks.forEach((item,index) => index=== 0 ? (item.style.opacity=1) : (item.style.opacity=0.2)  );
        break;
        case 1:
            allfooterlinks.forEach((item,index) => index=== 1 ? (item.style.opacity=1) : (item.style.opacity=0.2)  );
            break;
            case 2:
                allfooterlinks.forEach((item,index) => index=== 2 ? (item.style.opacity=1) : (item.style.opacity=0.2)  );
                break;
                case 3:
                    allfooterlinks.forEach((item,index) => index=== 3 ? (item.style.opacity=1) : (item.style.opacity=0.2)  );
                    break;
                    case 4:
                        allfooterlinks.forEach((item,index) => index=== 4 ? (item.style.opacity=1) : (item.style.opacity=0.2)  );
                        break;
                        case 5:
                            allfooterlinks.forEach((item,index) => index=== 5 ? (item.style.opacity=1) : (item.style.opacity=0.2)  );
                            break;
                                                            
        default:
            allfooterlinks.forEach((item) => (item.style.opacity=1));

        break;
 
 
 
    }
  };

  const linksbacktonormal=()=>{
    const allfooterlinks = document.querySelectorAll(".footerlinks")

    allfooterlinks.forEach((item) => (item.style.opacity=1));

  }
    return (
    <>
    <footer>
        <h1>
            let'
            <br/>
            #connectOnCutting?
        </h1>

        <aside  onMouseLeave={linksbacktonormal}>
            <a href="/" className="footerlinks" onMouseOver={()=>footerlinks(0)}>
                Home
            </a>
            <a href="/story" className="footerlinks" onMouseOver={()=>footerlinks(1)}>
                Story
            </a>
            <a href="/media" className="footerlinks" onMouseOver={()=>footerlinks(2)}>
                Media
            </a>
            <a href="/franchise" className="footerlinks" onMouseOver={()=>footerlinks(3)}>
                Franchise
            </a>
            <a href="/events" className="footerlinks" onMouseOver={()=>footerlinks(4)}>
                Events
            </a>
            <a href="/chaiwalacares" className="footerlinks" onMouseOver={()=>footerlinks(5)}>
                Chai Wala Cares
            </a>
        </aside>
        <div>
            <h5>Email</h5>
      <a href="mailto: Info@mbachaiwala.com">Info@mbachaiwala.com</a>
      <a href="mailto: franchise@mbachaiwala.com">franchise@mbachaiwala.com</a>
        </div>
        <div>
            <h5>Phone</h5>
      <a href="tel: +91722905222">+91722905222</a>
        </div>
        <p> COPYRIGHT 2022 MBA Pakistani CHAIWALA. MADE BY </p>
        </footer>
        <div className='footer'></div>
        </>
  )
}

export default Footer
