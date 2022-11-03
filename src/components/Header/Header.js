
import "./style.css"
import logo from './IMG-20220203-WA0001-removebg-preview.png';
import { motion } from "framer-motion"
import { useTypewriter, Cursor} from 'react-simple-typewriter'

export default function Header (){
      const [text] = useTypewriter({
        words: ['Web Developer.', 'UI/UX Designer.'], 
        loop:0
      })

    function switchc(){
        const theme= document.getElementById("theme").value;
        document.getElementByTagName("meta")[2].content=theme;
    }
    return (
        <header  id="header" className="col-lg-12">
            <div className="row justify-content-center"> 
                <div className="col-lg-12">
                     <div className="row justify-content-center"> 
                        <div className="col-lg-12">
                            <section className="row justify-content-start   position-relative" >
                                <div className="col-lg-7 mt-5 p-5">
                                    <div className="row mt-5">
                                        <div className="col-lg-12" id="header02">
                                            <h1>I'm <br/>
                                             <span> {text} </span>  <Cursor cursorColor="red"/> </h1>
                                        </div>
                                         <div className="col-lg-12" id="header002">
                                            <h1>I'm <br/>
                                            Web Developer & UI/UX Designer.
                                            </h1>
                                        </div>
                                        <div className="col-lg-12">
                                            <p>
                                            I'm an <strong>IT</strong> live in Kigali, RWANDA, and It's been around 5 years  working in the field of website development and UI/UX Design. </p>
                                        </div> 
                                        <div className="col-lg-12 " id="header03">
                                            <div className="row gap-2 justify-content-start">
                                                <div className="col-lg-5 col-md-5">
                                                    <a className="mylink rounded btn" target="__blank" href="https://docs.google.com/document/d/1bdT9rovpozXALigFuT3Kr6ZlgkPDTywPiIDNY3R_Na8/edit?usp=sharing">View my CV</a>
                                                </div>
                                                <div className="col-lg-5  col-md-5">
                                                    <a className="mylink2 rounded btn" href="https://wa.me/250780809031" target="__blank">Send me message</a>
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div> 
                                </div>
                                <div className="col-lg-4 col-md-4 imgcontent">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-12 text-end">
                                            <img src={logo} className="img-fluid" />
                                        </div>
                                    </div> 
                                </div> 
                            </section>
                        </div> 
                     </div>  
                </div>  
            </div>
        </header>
    )
}
