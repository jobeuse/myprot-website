
import "./style.css"
import logo from './IMG-20220909-WA0013-removebg-preview.png';
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
        <header  id="header" class="col-lg-12">
            <div classname="row"> 
                <div class="col-lg-12">
                     <div class="row justify-content-center">
                        <div class="col-lg-12 p-3" id="header01">
                            <div class="d-flex flex-row">
                                <div class="flex-fill">
                                    <h4> Yobu Ira..</h4> 
                                </div>
                                <div>
                                    <div class="d-flex">
                                        <div class="flex-fill">Twitter</div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="col-lg-12">
                            <section class="row justify-content-centert   position-relative" >
                                <div class="col-lg-6 mt-5 p-5">
                                    <div class="row mt-5">
                                        <div class="col-lg-12" id="header02">
                                            <h1 class="position-absolute">I'm br/>
                                             <span> {text} </span>  <Cursor cursorColor="red"/> </h1>
                                        </div>
                                        <div class="col-lg-12">
                                            <p>
                                            I'm an <strong>IT</strong> live in Kigali, RWANDA, and It's been around 5 years  working in the field of website development and UI/UX Design. </p>
                                        </div> 
                                        <div class="col-lg-12 " id="header03">
                                            <div class="d-flex ">
                                                <div class="flex-fill">
                                                    <a class="mylink rounded btn" href="#">Download my CV</a>
                                                </div>
                                                <div class="flex-fill">
                                                    <a class="mylink2 rounded btn" href="#">Send me message</a>
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div> 
                                </div>
                                <div class="col-lg-6 ">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <img src={logo} class="img-fluid" />
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
