
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
                        <div className="col-lg-12 p-3" id="header01">
                            <div className="d-flex flex-row">
                                <div className="flex-fill Logo">
                                    <h4> <span className="span1">R</span><span className="span2">Y</span> </h4> 
                                </div>
                                <div>
                                    <div className="d-flex p-5 pl-0 pt-0 pb-0 gap-3">
                                        <div className="flex-fill">
                                            <a href="https://twitter.com/job10236901" target="__blank">
                                                <svg className="svg-icon" viewBox="0 0 20 20">
                                                    <path fill="none" d="M14.467,6.707c-0.34,0.198-0.715,0.342-1.115,0.419c-0.318-0.335-0.775-0.545-1.279-0.545c-0.969,0-1.754,0.773-1.754,1.727c0,0.135,0.015,0.267,0.045,0.394C8.905,8.628,7.612,7.94,6.747,6.896C6.596,7.151,6.509,7.448,6.509,7.764c0,0.599,0.31,1.128,0.78,1.438C7.002,9.192,6.732,9.115,6.495,8.985c0,0.007,0,0.014,0,0.021c0,0.837,0.605,1.535,1.408,1.694c-0.147,0.04-0.302,0.06-0.462,0.06c-0.113,0-0.223-0.011-0.33-0.031c0.223,0.687,0.871,1.186,1.638,1.199c-0.6,0.464-1.356,0.739-2.179,0.739c-0.142,0-0.281-0.007-0.418-0.023c0.777,0.489,1.699,0.775,2.689,0.775c3.228,0,4.991-2.63,4.991-4.913c0-0.075-0.002-0.149-0.004-0.223c0.342-0.244,0.639-0.547,0.875-0.894c-0.316,0.137-0.652,0.23-1.008,0.272C14.057,7.448,14.336,7.11,14.467,6.707 M10,0.594c-5.195,0-9.406,4.211-9.406,9.406c0,5.195,4.211,9.406,9.406,9.406c5.196,0,9.407-4.211,9.407-9.406C19.406,4.805,15.195,0.594,10,0.594 M10,18.552c-4.723,0-8.551-3.829-8.551-8.552S5.277,1.449,10,1.449c4.723,0,8.551,3.829,8.551,8.551S14.723,18.552,10,18.552"></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="flex-fill">
                                            <a href="https://www.instagram.com/ira_yobu/" target="__blank">
                                                <svg className="svg-icon" viewBox="0 0 20 20">
                                                    <path fill="none" d="M9.969,0.594c-5.195,0-9.406,4.211-9.406,9.406c0,5.195,4.211,9.406,9.406,9.406c5.195,0,9.406-4.211,9.406-9.406C19.375,4.805,15.164,0.594,9.969,0.594 M9.969,18.552c-4.723,0-8.551-3.829-8.551-8.552s3.829-8.551,8.551-8.551S18.521,5.277,18.521,10S14.691,18.552,9.969,18.552 M12.534,5.724H7.403c-0.944,0-1.71,0.766-1.71,1.71v5.131c0,0.944,0.766,1.71,1.71,1.71h5.131c0.944,0,1.71-0.766,1.71-1.71V7.435C14.244,6.49,13.479,5.724,12.534,5.724M11.679,7.007h1.283V8.29h-1.283V7.007z M9.969,8.29c0.944,0,1.71,0.766,1.71,1.71s-0.766,1.71-1.71,1.71s-1.71-0.766-1.71-1.71S9.024,8.29,9.969,8.29 M13.39,12.565c0,0.472-0.384,0.854-0.855,0.854H7.403c-0.472,0-0.855-0.383-0.855-0.854V9.573h0.898C7.423,9.712,7.403,9.854,7.403,10c0,1.417,1.149,2.565,2.565,2.565c1.416,0,2.565-1.148,2.565-2.565c0-0.146-0.02-0.288-0.043-0.427h0.898V12.565z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="flex-fill">
                                            <a href="https://www.linkedin.com/in/yobu/"target="__blank">
                                                <svg className="svg-icon" viewBox="0 0 20 20">
                                                    <path fill="none" d="M10,4.784C7.12,4.784,4.784,7.12,4.784,10c0,2.881,2.335,5.216,5.216,5.216c2.881,0,5.216-2.335,5.216-5.216C15.216,7.12,12.881,4.784,10,4.784 M10,5.653c1.034,0,1.983,0.362,2.729,0.966c-0.705,0.566-1.475,1.056-2.303,1.442C9.94,7.257,9.356,6.52,8.702,5.852C9.111,5.723,9.548,5.653,10,5.653 M7.837,6.233c0.672,0.649,1.271,1.375,1.767,2.173c-1.205,0.451-2.503,0.709-3.863,0.72C5.994,7.888,6.775,6.844,7.837,6.233 M5.653,10c1.549,0,3.03-0.292,4.392-0.821c0.146,0.282,0.283,0.568,0.405,0.863c-1.5,0.563-2.761,1.603-3.616,2.93C6.104,12.194,5.653,11.151,5.653,10 M10,14.347c-0.934,0-1.796-0.298-2.504-0.798c0.753-1.221,1.892-2.179,3.253-2.691c0.338,1.04,0.527,2.145,0.547,3.292C10.887,14.277,10.452,14.347,10,14.347 M12.147,13.776c-0.051-1.102-0.238-2.166-0.562-3.172c0.47-0.107,0.956-0.169,1.458-0.169c0.434,0,0.852,0.059,1.261,0.141C14.122,11.949,13.302,13.118,12.147,13.776 M13.043,9.565c-0.606,0-1.193,0.082-1.757,0.22c-0.131-0.324-0.276-0.64-0.434-0.95c0.903-0.427,1.74-0.969,2.505-1.595c0.558,0.677,0.909,1.527,0.974,2.456C13.912,9.62,13.485,9.565,13.043,9.565 M10,0.438c-5.281,0-9.562,4.281-9.562,9.562S4.719,19.562,10,19.562c5.281,0,9.562-4.281,9.562-9.562S15.281,0.438,10,0.438 M10,18.693c-4.801,0-8.693-3.892-8.693-8.693c0-4.801,3.892-8.693,8.693-8.693c4.802,0,8.693,3.892,8.693,8.693C18.693,14.802,14.802,18.693,10,18.693"></path>
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="flex-fill">
                                            <a href="https://www.facebook.com/i.job.5" target="__blank">
                                                <svg className="svg-icon" viewBox="0 0 20 20">
                                                    <path fill="none" d="M10,0.5c-5.247,0-9.5,4.253-9.5,9.5c0,5.247,4.253,9.5,9.5,9.5c5.247,0,9.5-4.253,9.5-9.5C19.5,4.753,15.247,0.5,10,0.5 M10,18.637c-4.77,0-8.636-3.867-8.636-8.637S5.23,1.364,10,1.364S18.637,5.23,18.637,10S14.77,18.637,10,18.637 M10.858,7.949c0-0.349,0.036-0.536,0.573-0.536h0.719v-1.3H11c-1.38,0-1.866,0.65-1.866,1.743v0.845h-0.86V10h0.86v3.887h1.723V10h1.149l0.152-1.299h-1.302L10.858,7.949z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="col-lg-12">
                            <section className="row justify-content-start   position-relative" >
                                <div className="col-lg-6 mt-5 p-5">
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
                                <div className="col-lg-6 col-md-6 imgcontent">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-12">
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
