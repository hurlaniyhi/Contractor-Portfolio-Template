import React from 'react'
import "./servicePage.css"
import {FaSearch} from "react-icons/fa"
import logo1 from "./logo-1.png"
import {VscLocation} from "react-icons/vsc"
import {GiSmartphone} from "react-icons/gi"
import {AiOutlineMail} from "react-icons/ai"
import image3 from "./image3.jpg"
import image4 from "./image4.jpg"
import image5 from "./image5.jpg"
import { BsFillForwardFill } from 'react-icons/bs'
import image19 from "./image19.png"
import { FaFacebookF } from 'react-icons/fa'
import {FaTwitter} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {GiHamburgerMenu} from "react-icons/gi"

class servicePage extends React.Component{

    homePage=()=>{
        this.props.history.push({
            pathname:"/"
        })
    }

    aboutPage=()=>{
        this.props.history.push({
            pathname:"./aboutPage"
        })
    }

    projectsPage = () =>{
        this.props.history.push({
            pathname:"/projectsPage"
        })
    }

    contactUsPage = () =>{
        this.props.history.push({
            pathname:"/contactUsPage"
        })
    }

    mouseDown = () =>{
        document.querySelector(".serviceheadTop3").id="margin"
    }

    render(){
        return(
            <div>
                <div className="serviceheadTop">
                    <div className="serviceheadTopText"><p className="serviceheadTopTextPara">WE HAVE MORE THAN 25 YEARS OF EXPERIENCES</p></div>
                    <p className="servicenav1">SITEMAP&nbsp;&nbsp;&nbsp;&nbsp;|</p>
                    <p className="servicenav2">&nbsp;&nbsp;&nbsp;&nbsp;QUICK LINKS&nbsp;&nbsp;&nbsp;&nbsp;|</p>
                    <p className="servicenav3">&nbsp;&nbsp;&nbsp;&nbsp;SUPPORT&nbsp;&nbsp;&nbsp;&nbsp;|</p>
                    <div className="servicenav4">&nbsp;&nbsp;&nbsp;&nbsp;<FaSearch style={{marginBottom:"0px"}} />&nbsp;&nbsp;&nbsp;&nbsp;</div>
                </div>
                <div className="serviceheadTop2">
                    <img className="servicelogo1" src={logo1} alt="" />
                    <div className="servicelogo2Box">
                        <VscLocation className="servicelogo" style={{opacity:"0.5"}} />
                        <p className="servicelogoText"><span className="servicelogoText1">FIND US</span><br/><span className="servicelogoText2">22B, LONDON</span></p>
                    </div>
                    <div className="servicelogo3Box">
                        <GiSmartphone className="servicelogo" style={{opacity:"0.5"}} />
                        <p className="servicelogoText"><span className="servicelogoText1">CALL US TODAY</span><br/><span className="servicelogoText2">+000-2415-145</span></p>
                    </div>
                    <div className="servicelogo4Box">
                        <AiOutlineMail className="servicelogo" style={{opacity:"0.5"}} />
                        <p className="servicelogoText"><span className="servicelogoText1">EMAIL US NOW</span><br/><span className="servicelogoText2">SITENAME@EMAIL.COM</span></p>
                    </div>
                </div>
                <div className="serviceNavContainer">
                    <div className="serviceheadTop3">
                        <div className="serviceheadTop31 serviceht3" onClick={()=>this.homePage()} ><p className="servicenavText1 servicenavText">HOME</p></div>
                        <div className="serviceheadTop32 serviceht3" onClick={()=>this.aboutPage()} ><p className="servicenavText2 servicenavText">ABOUT</p></div>
                        <div className="serviceheadTop33 serviceht3"><p className="servicenavText3 servicenavText">SERVICES</p></div>
                        <div className="serviceheadTop34 serviceht3" onClick={()=>this.projectsPage()} ><p className="servicenavText4 servicenavText">PROJECTS</p></div>
                        <div className="serviceheadTop35 serviceht3"><p className="servicenavText5 servicenavText">BLOG</p></div>
                        <div className="serviceheadTop36 serviceht3" onClick={()=>this.contactUsPage()} ><p className="servicenavText6 servicenavText">CONTACTS</p></div>
                        <div className="serviceheadTop37"><p className="servicenavText7">INQUERY TODAY</p></div>
                    </div>
                    <p className="serviceUs">OUR SERVICES</p>
                    <p className="serviceUsInfo">
                        Claritas est etiam processus dynamicus, qui sequitur<br/>
                        mutationem consuetudium lectorum.
                    </p>
                </div>
                <div className="servicerenovation">
                    <div className="servicerenovation1 servicerenovationBox" style={{textAlign:"center",boxSizing:"border-box",border:"1px solid rgb(224,224,224)"}} >
                        <img src={image3} className="servicerenovationImage serviceimg3" />
                        <p className="servicerenovationText1">BEST RENOVATION</p>
                        <p className="servicerenovationText2">Claritas est etiam processus dynamicus, qui sequitur<br/>mutationem</p>
                        <p className="servicerenovationText3">READ MORE</p>
                    </div>
                    <div className="servicerenovation2 servicerenovationBox" style={{textAlign:"center",boxSizing:"border-box",border:"1px solid rgb(224,224,224)"}} >
                        <img src={image4} className="servicerenovationImage serviceimg4"/>
                        <p className="servicerenovationText1">BEST RENOVATION</p>
                        <p className="servicerenovationText2">Claritas est etiam processus dynamicus, qui sequitur<br/>mutationem</p>
                        <p className="servicerenovationText3">READ MORE</p>
                    </div>
                    <div className="servicerenovation3 servicerenovationBox" style={{textAlign:"center",boxSizing:"border-box",border:"1px solid rgb(224,224,224)"}} >
                        <img src={image5} className="servicerenovationImage serviceimg5"/>
                        <p className="servicerenovationText1">BEST RENOVATION</p>
                        <p className="servicerenovationText2">Claritas est etiam processus dynamicus, qui sequitur<br/>mutationem</p>
                        <p className="servicerenovationText3">READ MORE</p>
                    </div>
                    <div className="servicerenovation4 servicerenovationBox" style={{textAlign:"center",boxSizing:"border-box",border:"1px solid rgb(224,224,224)"}} >
                        <img src={image5} className="servicerenovationImage serviceimg3" />
                        <p className="servicerenovationText1">BEST RENOVATION</p>
                        <p className="servicerenovationText2">Claritas est etiam processus dynamicus, qui sequitur<br/>mutationem</p>
                        <p className="servicerenovationText3">READ MORE</p>
                    </div>
                    <div className="servicerenovation5 servicerenovationBox" style={{textAlign:"center",boxSizing:"border-box",border:"1px solid rgb(224,224,224)"}} >
                        <img src={image3} className="servicerenovationImage serviceimg4"/>
                        <p className="servicerenovationText1">BEST RENOVATION</p>
                        <p className="servicerenovationText2">Claritas est etiam processus dynamicus, qui sequitur<br/>mutationem</p>
                        <p className="servicerenovationText3">READ MORE</p>
                    </div>
                    <div className="servicerenovation6 servicerenovationBox" style={{textAlign:"center",boxSizing:"border-box",border:"1px solid rgb(224,224,224)"}} >
                        <img src={image4} className="servicerenovationImage serviceimg5"/>
                        <p className="servicerenovationText1">BEST RENOVATION</p>
                        <p className="servicerenovationText2">Claritas est etiam processus dynamicus, qui sequitur<br/>mutationem</p>
                        <p className="servicerenovationText3">READ MORE</p>
                    </div>
                </div>
                <div className="servicefreeConsultant">
                    <div className="servicefreeConsultant1">

                    </div>
                    <div className="servicefreeConsultant2">
                        <p className="serviceconsultantText1">GET YOUR FREE CONSULTANT</p>
                        <p className="serviceconsultantText2">We are a company that offers design and build services for you from initial<br/>sketches to the final construction</p>
                        <div className="serviceconsultantBox">CONTACT US <BsFillForwardFill /></div>
                    </div>
                </div>
                <div className="servicebottom">
                    <div className="servicebottomFirst">
                        <div className="servicebottomFirst1">
                            <img src={image19} className="serviceimage19" />
                            <p className="serviceimage19Text">
                                Duis autem vel eum iriure dolor in<br/>
                                hendrerit in vulputate velit esse molestie<br/>
                                consequat, vel illum dolo re eu feugiat<br/>
                                nulla facilisis at vero eros et accumsan<br/>
                                et iusto odio.
                            </p>
                        </div>
                        <div className="servicebottomFirst2">
                            <p className="servicefirstBottomHead">IMPORTANT LINKS</p>
                            <div className="servicefirstBottomLinks">
                                <p className="servicefirstBottomLink1">Themeforest</p>
                                <p className="servicefirstBottomLink2">Videohive</p>
                                <p className="servicefirstBottomLink3">Graphicriver</p>
                                <p className="servicefirstBottomLink4">Audio Jungle</p>
                                <p className="servicefirstBottomLink5">Photodune</p>
                            </div>
                        </div>
                        <div className="servicebottomFirst3">
                            <p className="servicesecondBottomHead">QUICK LINKS</p>
                            <div className="servicesecondBottomLinks">
                                <p className="servicesecondBottomLink1">Faq</p>
                                <p className="servicesecondBottomLink2">Support</p>
                                <p className="servicesecondBottomLink3">Sitemap</p>
                                <p className="servicesecondBottomLink4">Blog</p>
                                <p className="servicesecondBottomLink5">Pricing</p>
                            </div>
                        </div>
                        <div className="servicebottomFirst4">
                            <p className="servicethirdBottomHead">ADDRESS</p>
                            <div className="servicethirdBottomLinks">
                                <p className="servicethirdBottomLink1"><span style={{fontWeight:"bold"}}>HEAD OFFICE:</span>&nbsp;&nbsp;22B, Becar Street<br/>London, UK</p>
                                <p className="servicethirdBottomLink2"><span style={{fontWeight:"bold"}}>PHONE:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+000-111-2222 +000-<br/>111-2223</p>
                                <div className="servicemediaIcons">
                                    <FaFacebookF className="serviceicon" />
                                    <FaTwitter className="serviceicon" />
                                    <FaInstagram className="serviceicon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="servicebottomSecond">
                        <p className="servicebottomSecondText">2021©All Rights Reserved by Themexriver</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default servicePage