
import "./Skills.css" 
import { motion } from "framer-motion"
export default function Projects (){

    return (
        <section  id="Skills" className="col-lg-10 mt-5 pt-5 skills">
            <div className="row justify-content-start">
                <div className="col-lg-12">
                    <div className="row justify-content-start">
                        <div className="col-lg-12  title justify-content-center">
                            <h1>My Skills</h1> 
                            <hr/>
                        </div> 
                        <div className="col-lg-12">
                          <div className="row justify-content-end">
                              <div className="col-lg-9 col-md-9">
                                <div className="row justify-content-center">
                                   <div className="col-lg-6">
                                      <ul className="parentContent">
                                        <li className="parent"> 
                                          <h3>
                                              Front-end
                                          </h3>
                                            <ul>
                                              <li>HTML</li>
                                              <li>CSS</li>
                                              <li>Javascript</li>
                                              <li>React</li>
                                              <li>Bootstrap</li>
                                              <li>Tailwind css</li>
                                            </ul>
                                        </li>
                                      </ul>
                                   </div> 
                                  <div className="col-lg-6">
                                      <ul className="parentContent">
                                        <li className="parent"> 
                                          <h3>
                                             Back-end
                                          </h3>
                                            <ul>
                                              <li>PHP</li>
                                              <li>Laravel</li>
                                              <li>Python</li>
                                              <li>Django</li> 
                                            </ul>
                                        </li>
                                      </ul>
                                   </div>
                                   <div className="col-lg-6">
                                      <ul className="parentContent">
                                        <li className="parent"> 
                                          <h3>
                                             Other skills
                                          </h3>
                                            <ul>
                                              <li>Github</li>
                                              <li>Worpress</li>
                                              <li>Communication</li>
                                              <li>Heroku</li>
                                              <li>Etc...</li> 
                                            </ul>
                                        </li>
                                      </ul>
                                   </div>

                                </div> 
                              </div>
                          </div>
                        </div>
                    </div> 
                </div> 
            </div>
        </section>
            )
    }