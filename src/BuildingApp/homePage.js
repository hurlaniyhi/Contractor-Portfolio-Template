import React from 'react'
import "./homePage.css"
import {FaSearch} from "react-icons/fa"
import logo1 from "./logo-1.png"
import {VscLocation} from "react-icons/vsc"
import {GiSmartphone} from "react-icons/gi"
import {AiOutlineMail} from "react-icons/ai"
import {BsFillForwardFill} from "react-icons/bs"
import image1 from "./image1.png"
import image2 from "./image2.jpg"
import image3 from "./image3.jpg"
import image4 from "./image4.jpg"
import image5 from "./image5.jpg"
import image6 from "./image6.jpg"
import image7 from "./image7.jpg"
import image8 from "./image8.jpg"
import image9 from "./image9.jpg"
import image10 from "./image10.jpg"
import image11 from "./image11.jpg"
import image12 from "./image12.png"
import image13 from "./image13.png"
import image14 from "./image14.png"
import {Link} from "react-router-dom"
import {BsPerson} from "react-icons/bs"
import {BiShoppingBag} from "react-icons/bi"
import image15 from "./image15.png"
import image16 from "./image16.jpg"
import image17 from "./image17.jpg"
import image18 from "./image18.jpg"
import image19 from "./image19.png"
import { FaFacebookF } from 'react-icons/fa'
import {FaTwitter} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {AiOutlineCopyright} from "react-icons/ai"
import image20 from "./image20.jpg"
import image21 from "./image21.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import ReactDOM from "react-dom"
import {GrMoney} from "react-icons/gr"
import {SiTimescale} from "react-icons/si"
import Slider from "infinite-react-carousel"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {GiClawHammer} from "react-icons/gi"
import {RiPencilRuler2Fill} from "react-icons/ri"
import {BsTriangle} from "react-icons/bs"
import {GiLargePaintBrush} from "react-icons/gi"
import {RiHammerLine} from "react-icons/ri"

class homePage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            interval:null
        }
    }

    componentWillUnmount(){
        this.state.interval=clearInterval(this.state.interval)
    }
    componentDidMount(){ 
        var slideIndex=0

        this.state.interval=setInterval(
            ()=>{
                var slides=document.getElementsByClassName("mySlides")
                for(var i=0;i<slides.length;i++){
                    slides[i].id="notDisplayed"
                }
                slideIndex++
                if(slideIndex > slides.length){
                    slideIndex=1
                }
                slides[slideIndex-1].id="displayed"
            },
            6000
        ) 
        const callback = function(entries){
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add("atImgAnimate")
                }
                else{
                    entry.target.classList.remove("atImgAnimate")
                }
            })
        }

        const observer = new IntersectionObserver(callback);

        const targets = document.querySelectorAll(".atImg");
        targets.forEach(target =>{
            observer.observe(target)
        })
    }

    categories = (first,second,third,fourth,fifth,sixth,seventh,eighth,ninth,tenth) =>{
        document.querySelector(".categoriesMain1").id=first
        document.querySelector(".categoriesMain2").id=second
        document.querySelector(".categoriesMain3").id=third
        document.querySelector(".categoriesMain4").id=fourth
        document.querySelector(".categoriesMain5").id=fifth
        document.querySelector(".buildCategories1").id=sixth
        document.querySelector(".buildCategories2").id=seventh
        document.querySelector(".buildCategories3").id=eighth
        document.querySelector(".buildCategories4").id=ninth
        document.querySelector(".buildCategories5").id=tenth
    }

    aboutPage = () =>{
        this.props.history.push({
            pathname:"/aboutPage"
        })
    }

    servicePage = () =>{
        this.props.history.push({
            pathname:"/servicePage"
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

    render(){

        return(
            <div>
                <div className="headTop">
                    <div className="headTopText"><p className="headTopTextPara">WE HAVE MORE THAN 25 YEARS OF EXPERIENCES</p></div>
                    <p className="nav1">SITEMAP&nbsp;&nbsp;&nbsp;&nbsp;|</p>
                    <p className="nav2">&nbsp;&nbsp;&nbsp;&nbsp;QUICK LINKS&nbsp;&nbsp;&nbsp;&nbsp;|</p>
                    <p className="nav3">&nbsp;&nbsp;&nbsp;&nbsp;SUPPORT&nbsp;&nbsp;&nbsp;&nbsp;|</p>
                    <div className="nav4">&nbsp;&nbsp;&nbsp;&nbsp;<FaSearch style={{marginBottom:"0px"}} />&nbsp;&nbsp;&nbsp;&nbsp;</div>
                </div>
                <div className="headTop2">
                    <img className="logo1" src={logo1} />
                    <div className="logo2Box">
                        <VscLocation style={{opacity:"0.5"}} className="logo" />
                        <p className="logoText"><span className="logoText1">FIND US</span><br/><span className="logoText2">22B, LONDON</span></p>
                    </div>
                    <div className="logo3Box">
                        <GiSmartphone style={{opacity:"0.5"}} className="logo" />
                        <p className="logoText"><span className="logoText1">CALL US TODAY</span><br/><span className="logoText2">+000-2415-145</span></p>
                    </div>
                    <div className="logo4Box">
                        <AiOutlineMail style={{opacity:"0.5"}} className="logo" />
                        <p className="logoText"><span className="logoText1">EMAIL US NOW</span><br/><span className="logoText2">SITENAME@EMAIL.COM</span></p>
                    </div>
                </div>
                <div className="slidesContainer"  >
                    <div className="mySlides headTop3Top">
                        <div className="headTop3">
                            <div className="headTop31 ht3"><p className="navText1 navText">HOME</p></div>
                            <div className="headTop32 ht3" onClick={()=>this.aboutPage()} ><p className="navText2 navText">ABOUT</p></div>
                            <div className="headTop33 ht3" onClick={()=>this.servicePage()} ><p className="navText3 navText">SERVICES</p></div>
                            <div className="headTop34 ht3" onClick={()=>this.projectsPage()} ><p className="navText4 navText">PROJECTS</p></div>
                            <div className="headTop35 ht3"><p className="navText5 navText">BLOG</p></div>
                            <div className="headTop36 ht3" onClick={()=>this.contactUsPage()} ><p className="navText6 navText">CONTACTS</p></div>
                            <div className="headTop37"><p className="navText7">INQUERY TODAY</p></div>
                        </div>
                        <p className="buildHouse1">WE BUILD YOUR</p>
                        <p className="buildHouse"><span className="buildHouse2">DREAM </span><span className="buildHouse3">HOUSE</span></p>
                        <p className="buildHouse4">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat vel ilium dolore eu feugiat nulla facilisis at vero eros.</p>
                        <div className="readMore">READ MORE <BsFillForwardFill /></div>
                        <img src={image1} className="image1" />
                    </div>
                    <div className="mySlides headTop4Top">
                        <div className="headTop3">
                            <div className="headTop31 ht3"><p className="navText1 navText">HOME</p></div>
                            <div className="headTop32 ht3"onClick={()=>this.aboutPage()} ><p className="navText2 navText">ABOUT</p></div>
                            <div className="headTop33 ht3"><p className="navText3 navText">SERVICES</p></div>
                            <div className="headTop34 ht3"><p className="navText4 navText">PROJECTS</p></div>
                            <div className="headTop35 ht3"><p className="navText5 navText">BLOG</p></div>
                            <div className="headTop36 ht3"><p className="navText6 navText">CONTACTS</p></div>
                            <div className="headTop37"><p className="navText7">INQUERY TODAY</p></div>
                        </div>
                        <p className="buildHouse12">WE BUILD YOUR</p>
                        <p className="buildHouse0"><span className="buildHouse22">DREAM </span><span className="buildHouse32">HOUSE</span></p>
                        <p className="buildHouse42">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat vel ilium dolore eu feugiat nulla facilisis at vero eros.</p>
                        <div className="readMore2">READ MORE <BsFillForwardFill /></div>
                    </div>
                </div>
                <div className="ourServices">
                    <p className="ourServices1"><span style={{color:"rgb(32,46,49)"}}>OUR</span> <span style={{color:"rgb(253,194,54)"}}> SERVICES</span></p>
                    <p className="ourServices2">Claritas est etiam processus dynamicus,qui sequitur<br/>
                    mutationem consuetudium lectorum</p>
                </div>
                <div className="renovation">
                    <div className="renovation1 renovationBox" style={{textAlign:"center",boxSizing:"border-box",border:"1px solid rgb(224,224,224)"}} >
                        <img src={image3} className="renovationImage img3" />
                        <p className="renovationText1">BEST RENOVATION</p>
                        <p className="renovationText2">Claritas est etiam processus dynamicus, qui sequitur<br/>mutationem</p>
                        <p className="renovationText3">READ MORE</p>
                    </div>
                    <div className="renovation2 renovationBox" style={{textAlign:"center",boxSizing:"border-box",border:"1px solid rgb(224,224,224)"}} >
                        <img src={image4} className="renovationImage img4"/>
                        <p className="renovationText1">BEST RENOVATION</p>
                        <p className="renovationText2">Claritas est etiam processus dynamicus, qui sequitur<br/>mutationem</p>
                        <p className="renovationText3">READ MORE</p>
                    </div>
                    <div className="renovation3 renovationBox" style={{textAlign:"center",boxSizing:"border-box",border:"1px solid rgb(224,224,224)"}} >
                        <img src={image5} className="renovationImage img5"/>
                        <p className="renovationText1">BEST RENOVATION</p>
                        <p className="renovationText2">Claritas est etiam processus dynamicus, qui sequitur<br/>mutationem</p>
                        <p className="renovationText3">READ MORE</p>
                    </div>
                </div>
                <div className="freeConsultant">
                    <div className="freeConsultant1">

                    </div>
                    <div className="freeConsultant2">
                        <p className="consultantText1">GET YOUR FREE CONSULTANT</p>
                        <p className="consultantText2">We are a company that offers design and build services for you from initial sketches to the final construction</p>
                        <div className="consultantBox">CONTACT US <BsFillForwardFill /></div>
                    </div>
                </div>
                <div className="whatWeDo"> 
                    <p className="whatWeDo1"><span style={{color:"rgb(32,46,49)"}}>WHAT</span> <span style={{color:"rgb(253,194,54)"}}>WE DO</span></p>
                    <p className="whatWeDo2">Claritas est etiam processus dynamicus, qui sequitur<br/>mutationem consuetudium lectorum</p>
                </div>
                <div className="buildCategories">
                    <div className="buildCategories1 categories" onClick={()=>this.categories("visible","notVisible","notVisible","notVisible","notVisible","colored","notColored","notColored","notColored","notColored")} ><p className="buildText"><GiClawHammer/>&nbsp;&nbsp;RENOVATION</p></div>
                    <div className="buildCategories2 categories" onClick={()=>this.categories("notVisible","visible","notVisible","notVisible","notVisible","notColored","colored","notColored","notColored","notColored")} ><p className="buildText"><RiPencilRuler2Fill/>&nbsp;&nbsp;ARCHITECT</p></div>
                    <div className="buildCategories3 categories" onClick={()=>this.categories("notVisible","notVisible","visible","notVisible","notVisible","notColored","notColored","colored","notColored","notColored")} ><p className="buildText"><BsTriangle/>&nbsp;&nbsp;ROOFING</p></div>
                    <div className="buildCategories4 categories" onClick={()=>this.categories("notVisible","notVisible","notVisible","visible","notVisible","notColored","notColored","notColored","colored","notColored")} ><p className="buildText"><GiLargePaintBrush/>&nbsp;&nbsp;PAINTING</p></div>
                    <div className="buildCategories5 categories" onClick={()=>this.categories("notVisible","notVisible","notVisible","notVisible","visible","notColored","notColored","notColored","notColored","colored")} ><p className="buildText"><RiHammerLine/>&nbsp;&nbsp;PLUMBING</p></div>
                </div>
                <div className="categoriesMain1">
                    <div className="categoriesMain12">
                        <img src={image6} className="image6" />
                    </div>
                    <div className="categoriesMain13">
                        <p className="categoriesMain13Heading">RENOVATION SERVICES</p>
                        <p className="categoriesMain13Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nstrud exercitation ullamco laboris nisi ut aliquip</p>
                        <div className="skill1">
                            <div className="skill1Box">
                                <p className="skill1Text">SKILL 1</p>
                            </div>
                        </div>
                        <div className="skill2">
                            <div className="skill2Box">
                               <p className="skill2Text">SKILL 2</p>
                            </div>
                        </div>
                        <div className="skill3">
                            <div className="skill3Box">
                                <p className="skill3Text">SKILL 3</p>
                            </div>
                        </div>
                    </div>
                    <div className="categoriesMain14">
                        <p className="categoriesMain141">HOW IT WORKS</p>
                        <div className="categoriesMain14Box">
                            <p className="categoriesMain14BoxText1">1</p>
                            <p className="categoriesMain14BoxText2"><span className="cSpan1">FIELD</span><br/><span className="cSpan2">ANALYSIS</span></p>
                        </div>
                        <div className="categoriesMain14Box">
                            <p className="categoriesMain14BoxText1">2</p>
                            <p className="categoriesMain14BoxText2"><span className="cSpan1">CONDITION</span><br/><span className="cSpan2">EXPERIMENT</span></p>
                        </div>
                        <div className="categoriesMain14Box" style={{border:"none"}} >
                            <p className="categoriesMain14BoxText1">3</p>
                            <p className="categoriesMain14BoxText2"><span className="cSpan1">FINAL</span><br/><span className="cSpan2">OUTPUT</span></p>
                        </div>
                    </div>
                </div>
                <div className="categoriesMain2">
                    <div className="categoriesMain12">
                        <img src={image6} className="image6" />
                    </div>
                    <div className="categoriesMain13">
                        <p className="categoriesMain13Heading">ACHITECT SERVICES</p>
                        <p className="categoriesMain13Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nstrud exercitation ullamco laboris nisi ut aliquip</p>
                        <div className="skill1">
                            <div className="skill1Box">
                                <p className="skill1Text">SKILL 1</p>
                            </div>
                        </div>
                        <div className="skill2">
                            <div className="skill2Box">
                               <p className="skill2Text">SKILL 2</p>
                            </div>
                        </div>
                        <div className="skill3">
                            <div className="skill3Box">
                                <p className="skill3Text">SKILL 3</p>
                            </div>
                        </div>
                    </div>
                    <div className="categoriesMain14">
                        <p className="categoriesMain141">HOW IT WORKS</p>
                        <div className="categoriesMain14Box">
                            <p className="categoriesMain14BoxText1">1</p>
                            <p className="categoriesMain14BoxText2"><span className="cSpan1">FIELD</span><br/><span className="cSpan2">ANALYSIS</span></p>
                        </div>
                        <div className="categoriesMain14Box">
                            <p className="categoriesMain14BoxText1">2</p>
                            <p className="categoriesMain14BoxText2"><span className="cSpan1">CONDITION</span><br/><span className="cSpan2">EXPERIMENT</span></p>
                        </div>
                        <div className="categoriesMain14Box" style={{border:"none"}} >
                            <p className="categoriesMain14BoxText1">3</p>
                            <p className="categoriesMain14BoxText2"><span className="cSpan1">FINAL</span><br/><span className="cSpan2">OUTPUT</span></p>
                        </div>
                    </div>
                </div>
                <div className="categoriesMain3">
                    <div className="categoriesMain12">
                        <img src={image6} className="image6" />
                    </div>
                    <div className="categoriesMain13">
                        <p className="categoriesMain13Heading">ROOFING SERVICES</p>
                        <p className="categoriesMain13Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nstrud exercitation ullamco laboris nisi ut aliquip</p>
                        <div className="skill1">
                            <div className="skill1Box">
                                <p className="skill1Text">SKILL 1</p>
                            </div>
                        </div>
                        <div className="skill2">
                            <div className="skill2Box">
                               <p className="skill2Text">SKILL 2</p>
                            </div>
                        </div>
                        <div className="skill3">
                            <div className="skill3Box">
                                <p className="skill3Text">SKILL 3</p>
                            </div>
                        </div>
                    </div>
                    <div className="categoriesMain14">
                        <p className="categoriesMain141">HOW IT WORKS</p>
                        <div className="categoriesMain14Box">
                            <p className="categoriesMain14BoxText1">1</p>
                            <p className="categoriesMain14BoxText2"><span className="cSpan1">FIELD</span><br/><span className="cSpan2">ANALYSIS</span></p>
                        </div>
                        <div className="categoriesMain14Box">
                            <p className="categoriesMain14BoxText1">2</p>
                            <p className="categoriesMain14BoxText2"><span className="cSpan1">CONDITION</span><br/><span className="cSpan2">EXPERIMENT</span></p>
                        </div>
                        <div className="categoriesMain14Box" style={{border:"none"}} >
                            <p className="categoriesMain14BoxText1">3</p>
                            <p className="categoriesMain14BoxText2"><span className="cSpan1">FINAL</span><br/><span className="cSpan2">OUTPUT</span></p>
                        </div>
                    </div>
                </div>
                <div className="categoriesMain4">
                    <div className="categoriesMain12">
                        <img src={image6} className="image6" />
                    </div>
                    <div className="categoriesMain13">
                        <p className="categoriesMain13Heading">PAINTING SERVICES</p>
                        <p className="categoriesMain13Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nstrud exercitation ullamco laboris nisi ut aliquip</p>
                        <div className="skill1">
                            <div className="skill1Box">
                                <p className="skill1Text">SKILL 1</p>
                            </div>
                        </div>
                        <div className="skill2">
                            <div className="skill2Box">
                               <p className="skill2Text">SKILL 2</p>
                            </div>
                        </div>
                        <div className="skill3">
                            <div className="skill3Box">
                                <p className="skill3Text">SKILL 3</p>
                            </div>
                        </div>
                    </div>
                    <div className="categoriesMain14">
                        <p className="categoriesMain141">HOW IT WORKS</p>
                        <div className="categoriesMain14Box">
                            <p className="categoriesMain14BoxText1">1</p>
                            <p className="categoriesMain14BoxText2"><span className="cSpan1">FIELD</span><br/><span className="cSpan2">ANALYSIS</span></p>
                        </div>
                        <div className="categoriesMain14Box">
                            <p className="categoriesMain14BoxText1">2</p>
                            <p className="categoriesMain14BoxText2"><span className="cSpan1">CONDITION</span><br/><span className="cSpan2">EXPERIMENT</span></p>
                        </div>
                        <div className="categoriesMain14Box" style={{border:"none"}} >
                            <p className="categoriesMain14BoxText1">3</p>
                            <p className="categoriesMain14BoxText2"><span className="cSpan1">FINAL</span><br/><span className="cSpan2">OUTPUT</span></p>
                        </div>
                    </div>
                </div>
                <div className="categoriesMain5">
                    <div className="categoriesMain12">
                        <img src={image6} className="image6" />
                    </div>
                    <div className="categoriesMain13">
                        <p className="categoriesMain13Heading">PLUMBING SERVICES</p>
                        <p className="categoriesMain13Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nstrud exercitation ullamco laboris nisi ut aliquip</p>
                        <div className="skill1">
                            <div className="skill1Box">
                                <p className="skill1Text">SKILL 1</p>
                            </div>
                        </div>
                        <div className="skill2">
                            <div className="skill2Box">
                               <p className="skill2Text">SKILL 2</p>
                            </div>
                        </div>
                        <div className="skill3">
                            <div className="skill3Box">
                                <p className="skill3Text">SKILL 3</p>
                            </div>
                        </div>
                    </div>
                    <div className="categoriesMain14">
                        <p className="categoriesMain141">HOW IT WORKS</p>
                        <div className="categoriesMain14Box">
                            <p className="categoriesMain14BoxText1">1</p>
                            <p className="categoriesMain14BoxText2"><span className="cSpan1">FIELD</span><br/><span className="cSpan2">ANALYSIS</span></p>
                        </div>
                        <div className="categoriesMain14Box">
                            <p className="categoriesMain14BoxText1">2</p>
                            <p className="categoriesMain14BoxText2"><span className="cSpan1">CONDITION</span><br/><span className="cSpan2">EXPERIMENT</span></p>
                        </div>
                        <div className="categoriesMain14Box" style={{border:"none"}} >
                            <p className="categoriesMain14BoxText1">3</p>
                            <p className="categoriesMain14BoxText2"><span className="cSpan1">FINAL</span><br/><span className="cSpan2">OUTPUT</span></p>
                        </div>
                    </div>
                </div>
                <div className="categoriesMain"></div>
                <div className="latestWorks">
                    <p className="latestWorks1"><span style={{color:"rgb(32,46,49)"}}>LATEST</span> <span style={{color:"rgb(253,194,54)"}}>WORKS</span></p>
                    <p className="latestWorks2">Claritas est etiam processus dynamicus, qui sequitur<br/>mutationem consuetudium lectorum</p>
                </div>
                <Slider arrows={false} className="imagesPallete pallete1" centerPadding="0" centerMode slidesToShow="3" dots slidesPerRow="1" autoplay>
                    <div className="imageBox">
                        <img src={image7} className="img" />
                        <div className="image7SideBox1">
                            <p className="image7Text1">ROOFING WORKS</p>
                            <p className="image7Text2">PRE WORK</p>
                            <div className="image7SideBox2">
                                <p className="budget"><GrMoney/>&nbsp;&nbsp;<span className="budgetText">BUDGET: $10 000</span></p>
                                <p className="duration"><SiTimescale/>&nbsp;&nbsp;<span className="durationText">DURATION: 2 MONTHS</span></p>
                            </div>
                        </div>
                        <div className="transparentBox">
                            +
                        </div>
                    </div>
                    <div className="imageBox">
                        <img src={image8} className="img"/>
                        <div className="image7SideBox1">
                            <p className="image7Text1">CONSTRUCTON WORKS</p>
                            <p className="image7Text2">PRE WORK</p>
                            <div className="image7SideBox2">
                                <p className="budget"><GrMoney/>&nbsp;&nbsp;<span className="budgetText">BUDGET: $10 000</span></p>
                                <p className="duration"><SiTimescale/>&nbsp;&nbsp;<span className="durationText">DURATION: 2 MONTHS</span></p>
                            </div>
                        </div>
                        <div className="transparentBox">
                            +
                        </div>
                    </div>
                    <div className="imageBox" >
                        <img src={image9} className="img" />
                        <div className="image7SideBox1">
                            <p className="image7Text1">RENOVATION WORKS</p>
                            <p className="image7Text2">PRE WORK</p>
                            <div className="image7SideBox2">
                                <p className="budget"><GrMoney/>&nbsp;&nbsp;<span className="budgetText">BUDGET: $10 000</span></p>
                                <p className="duration"><SiTimescale/>&nbsp;&nbsp;<span className="durationText">DURATION: 2 MONTHS</span></p>
                            </div>
                        </div>
                        <div className="transparentBox">
                            +
                        </div>
                    </div>
                    <div className="imageBox">
                        <img src={image10} className="img" />
                        <div className="image7SideBox1">
                            <p className="image7Text1">BUILDING WORKS</p>
                            <p className="image7Text2">PRE WORK</p>
                            <div className="image7SideBox2">
                                <p className="budget"><GrMoney/>&nbsp;&nbsp;<span className="budgetText">BUDGET: $10 000</span></p>
                                <p className="duration"><SiTimescale/>&nbsp;&nbsp;<span className="durationText">DURATION: 2 MONTHS</span></p>
                            </div>
                        </div>
                        <div className="transparentBox">
                            +
                        </div>
                    </div>
                    <div className="imageBox">
                        <img src={image11} className="img" />
                        <div className="image7SideBox1">
                            <p className="image7Text1">ACHITECT WORKS</p>
                            <p className="image7Text2">PRE WORK</p>
                            <div className="image7SideBox2">
                                <p className="budget"><GrMoney/>&nbsp;&nbsp;<span className="budgetText">BUDGET: $10 000</span></p>
                                <p className="duration"><SiTimescale/>&nbsp;&nbsp;<span className="durationText">DURATION: 2 MONTHS</span></p>
                            </div>
                        </div>
                        <div className="transparentBox">
                            +
                        </div>
                    </div>
                </Slider>
                <Slider arrows={false} className="imagesPallete pallete2" centerPadding="0" centerMode slidesToShow="2" dots slidesPerRow="1" autoplay>
                    <div className="imageBox">
                        <img src={image7} className="img" />
                        <div className="image7SideBox1">
                            <p className="image7Text1">ROOFING WORKS</p>
                            <p className="image7Text2">PRE WORK</p>
                            <div className="image7SideBox2">
                                <p className="budget"><GrMoney/>&nbsp;&nbsp;<span className="budgetText">BUDGET: $10 000</span></p>
                                <p className="duration"><SiTimescale/>&nbsp;&nbsp;<span className="durationText">DURATION: 2 MONTHS</span></p>
                            </div>
                        </div>
                        <div className="transparentBox">
                            +
                        </div>
                    </div>
                    <div className="imageBox">
                        <img src={image8} className="img"/>
                        <div className="image7SideBox1">
                            <p className="image7Text1">CONSTRUCTON WORKS</p>
                            <p className="image7Text2">PRE WORK</p>
                            <div className="image7SideBox2">
                                <p className="budget"><GrMoney/>&nbsp;&nbsp;<span className="budgetText">BUDGET: $10 000</span></p>
                                <p className="duration"><SiTimescale/>&nbsp;&nbsp;<span className="durationText">DURATION: 2 MONTHS</span></p>
                            </div>
                        </div>
                        <div className="transparentBox">
                            +
                        </div>
                    </div>
                    <div className="imageBox" >
                        <img src={image9} className="img" />
                        <div className="image7SideBox1">
                            <p className="image7Text1">RENOVATION WORKS</p>
                            <p className="image7Text2">PRE WORK</p>
                            <div className="image7SideBox2">
                                <p className="budget"><GrMoney/>&nbsp;&nbsp;<span className="budgetText">BUDGET: $10 000</span></p>
                                <p className="duration"><SiTimescale/>&nbsp;&nbsp;<span className="durationText">DURATION: 2 MONTHS</span></p>
                            </div>
                        </div>
                        <div className="transparentBox">
                            +
                        </div>
                    </div>
                    <div className="imageBox">
                        <img src={image10} className="img" />
                        <div className="image7SideBox1">
                            <p className="image7Text1">BUILDING WORKS</p>
                            <p className="image7Text2">PRE WORK</p>
                            <div className="image7SideBox2">
                                <p className="budget"><GrMoney/>&nbsp;&nbsp;<span className="budgetText">BUDGET: $10 000</span></p>
                                <p className="duration"><SiTimescale/>&nbsp;&nbsp;<span className="durationText">DURATION: 2 MONTHS</span></p>
                            </div>
                        </div>
                        <div className="transparentBox">
                            +
                        </div>
                    </div>
                    <div className="imageBox">
                        <img src={image11} className="img" />
                        <div className="image7SideBox1">
                            <p className="image7Text1">ACHITECT WORKS</p>
                            <p className="image7Text2">PRE WORK</p>
                            <div className="image7SideBox2">
                                <p className="budget"><GrMoney/>&nbsp;&nbsp;<span className="budgetText">BUDGET: $10 000</span></p>
                                <p className="duration"><SiTimescale/>&nbsp;&nbsp;<span className="durationText">DURATION: 2 MONTHS</span></p>
                            </div>
                        </div>
                        <div className="transparentBox">
                            +
                        </div>
                    </div>
                </Slider>
                <Slider arrows={false} className="imagesPallete pallete3" centerPadding="0" centerMode slidesToShow="1" dots slidesPerRow="1" autoplay>
                    <div className="imageBox">
                        <img src={image7} className="img" />
                        <div className="image7SideBox1">
                            <p className="image7Text1">ROOFING WORKS</p>
                            <p className="image7Text2">PRE WORK</p>
                            <div className="image7SideBox2">
                                <p className="budget"><GrMoney/>&nbsp;&nbsp;<span className="budgetText">BUDGET: $10 000</span></p>
                                <p className="duration"><SiTimescale/>&nbsp;&nbsp;<span className="durationText">DURATION: 2 MONTHS</span></p>
                            </div>
                        </div>
                        <div className="transparentBox">
                            +
                        </div>
                    </div>
                    <div className="imageBox">
                        <img src={image8} className="img"/>
                        <div className="image7SideBox1">
                            <p className="image7Text1">CONSTRUCTON WORKS</p>
                            <p className="image7Text2">PRE WORK</p>
                            <div className="image7SideBox2">
                                <p className="budget"><GrMoney/>&nbsp;&nbsp;<span className="budgetText">BUDGET: $10 000</span></p>
                                <p className="duration"><SiTimescale/>&nbsp;&nbsp;<span className="durationText">DURATION: 2 MONTHS</span></p>
                            </div>
                        </div>
                        <div className="transparentBox">
                            +
                        </div>
                    </div>
                    <div className="imageBox" >
                        <img src={image9} className="img" />
                        <div className="image7SideBox1">
                            <p className="image7Text1">RENOVATION WORKS</p>
                            <p className="image7Text2">PRE WORK</p>
                            <div className="image7SideBox2">
                                <p className="budget"><GrMoney/>&nbsp;&nbsp;<span className="budgetText">BUDGET: $10 000</span></p>
                                <p className="duration"><SiTimescale/>&nbsp;&nbsp;<span className="durationText">DURATION: 2 MONTHS</span></p>
                            </div>
                        </div>
                        <div className="transparentBox">
                            +
                        </div>
                    </div>
                    <div className="imageBox">
                        <img src={image10} className="img" />
                        <div className="image7SideBox1">
                            <p className="image7Text1">BUILDING WORKS</p>
                            <p className="image7Text2">PRE WORK</p>
                            <div className="image7SideBox2">
                                <p className="budget"><GrMoney/>&nbsp;&nbsp;<span className="budgetText">BUDGET: $10 000</span></p>
                                <p className="duration"><SiTimescale/>&nbsp;&nbsp;<span className="durationText">DURATION: 2 MONTHS</span></p>
                            </div>
                        </div>
                        <div className="transparentBox">
                            +
                        </div>
                    </div>
                    <div className="imageBox">
                        <img src={image11} className="img" />
                        <div className="image7SideBox1">
                            <p className="image7Text1">ACHITECT WORKS</p>
                            <p className="image7Text2">PRE WORK</p>
                            <div className="image7SideBox2">
                                <p className="budget"><GrMoney/>&nbsp;&nbsp;<span className="budgetText">BUDGET: $10 000</span></p>
                                <p className="duration"><SiTimescale/>&nbsp;&nbsp;<span className="durationText">DURATION: 2 MONTHS</span></p>
                            </div>
                        </div>
                        <div className="transparentBox">
                            +
                        </div>
                    </div>
                </Slider>
                <p className="moreWorksLink"><Link style={{color:"black"}} >SEE MORE WORKS</Link> </p>
                <div className="awesomeTeamBox">
                    <p className="awesomeTeamText1"><span style={{color:"white"}}>AWESOME</span> <span style={{color:"rgb(253,194,54)"}}>TEAM</span></p>
                    <p className="awesomeTeamText2">Claritas est etiam processus dynamicus, qui sequitur<br/>mutationem consuetudium lectorum</p>
                    <div className="awesomeTeamPictures">
                        <div className="awesomeTeamImg awesomeTeamImg1">
                            <div className="at1 at11"></div>
                            <img src={image12} className="image12 atImg" />
                            <div className="at2">
                                <p className="txt1">HASIB SHARIF</p>
                                <p className="txt2">CHIEF ACHITECT</p>
                                <div className="at2Box">
                                    <p className="experience"><BiShoppingBag /> 3 YEARS OF EXPERIENCE</p>
                                    <p className="age"><BsPerson /> AGE: 24 YEARS</p>
                                </div>
                            </div>
                        </div>
                        <div className="awesomeTeamImg awesomeTeamImg2">
                            <div className="at1 at12"></div>
                            <img src={image13} className="image13 atImg" />
                            <div className="at2">
                                <p className="txt1">TAHIRATUZZOHORA</p>
                                <p className="txt2">CHIEF ACHITECT</p>
                                <div className="at2Box">
                                    <p className="experience"><BiShoppingBag /> 3 YEARS OF EXPERIENCE</p>
                                    <p className="age"><BsPerson /> AGE: 24 YEARS</p>
                                </div>
                            </div>
                        </div>
                        <div className="awesomeTeamImg awesomeTeamImg3">
                            <div className="at1 at13"></div>
                            <img src={image14} className="image14 atImg" />
                            <div className="at2">
                                <p className="txt1">DAVID MAMAN</p>
                                <p className="txt2">CHIEF ACHITECT</p>
                                <div className="at2Box">
                                    <p className="experience"><BiShoppingBag /> 3 YEARS OF EXPERIENCE</p>
                                    <p className="age"><BsPerson /> AGE: 24 YEARS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clientSay">
                    <p className="latestWorks1"><span style={{color:"rgb(32,46,49)"}}>WHAT</span> <span style={{color:"rgb(253,194,54)"}}>OUR CLIENTS</span><span style={{color:"rgb(32,46,49)"}}> SAY</span> </p>
                    <p className="latestWorks2">Claritas est etiam processus dynamicus, qui sequitur<br/>mutationem consuetudium lectorum</p>
                </div>
                <Slider arrows={false}  className="authorsBox authorsBox1" centerPadding="0" centerMode slidesToShow="2" slidesPerRow="1" autoplay>
                    <div className="author1Box authorBox">
                        <div className="image20Box">
                            <img src={image20} className="image20" />
                            <div className="author1Name">JENNY DUREN</div>
                        </div>
                        <div className="comment1">
                            <i>Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                            esse molestie consequat, vel ilium dolor eu feugiat nulla
                            facilisis at vero eros et accumsan et iusto odio dignisim qui
                            blandit praesent luptatum zzril delenit augue duis dolore te
                            feugiat nulia facilisi.</i>
                        </div>
                    </div>
                    <div className="author2Box authorBox">
                        <div className="image21Box">
                            <img src={image21} className="image21" />
                            <div className="author2Name">ALBERT EISTIEN</div>
                        </div>
                        <div className="comment2">
                            <i>Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                            esse molestie consequat, vel ilium dolor eu feugiat nulla
                            facilisis at vero eros et accumsan et iusto odio dignisim qui
                            blandit praesent luptatum zzril delenit augue duis dolore te
                            feugiat nulia facilisi.</i>
                        </div>
                    </div>
                    <div className="author1Box authorBox">
                        <div className="image20Box">
                            <img src={image20} className="image20" />
                            <div className="author1Name">JENNY DUREN</div>
                        </div>
                        <div className="comment1">
                            <i>Duis autem vel eum iriure dolor in hendrerit in vulputate velit<br/>
                            esse molestie consequat, vel ilium dolor eu feugiat nulla<br/>
                            facilisis at vero eros et accumsan et iusto odio dignisim qui<br/>
                            blandit praesent luptatum zzril delenit augue duis dolore te<br/>
                            feugiat nulia facilisi.</i>
                        </div>
                    </div>
                    <div className="author2Box authorBox">
                        <div className="image21Box">
                            <img src={image21} className="image21" />
                            <div className="author2Name">ALBERT EISTIEN</div>
                        </div>
                        <div className="comment2">
                            <i>Duis autem vel eum iriure dolor in hendrerit in vulputate velit<br/>
                            esse molestie consequat, vel ilium dolor eu feugiat nulla<br/>
                            facilisis at vero eros et accumsan et iusto odio dignisim qui<br/>
                            blandit praesent luptatum zzril delenit augue duis dolore te<br/>
                            feugiat nulia facilisi.</i>
                        </div>
                    </div>
                </Slider>
                <Slider arrows={false}  className="authorsBox authorsBox2" centerPadding="0" centerMode slidesToShow="1" slidesPerRow="1" autoplay>
                    <div className="author1Box authorBox">
                        <div className="image20Box">
                            <img src={image20} className="image20" />
                            <div className="author1Name">JENNY DUREN</div>
                        </div>
                        <div className="comment1">
                            <i>Duis autem vel eum iriure dolor in hendrerit in vulputate velit<br/>
                            esse molestie consequat, vel ilium dolor eu feugiat nulla<br/>
                            facilisis at vero eros et accumsan et iusto odio dignisim qui<br/>
                            blandit praesent luptatum zzril delenit augue duis dolore te<br/>
                            feugiat nulia facilisi.</i>
                        </div>
                    </div>
                    <div className="author2Box authorBox">
                        <div className="image21Box">
                            <img src={image21} className="image21" />
                            <div className="author2Name">ALBERT EISTIEN</div>
                        </div>
                        <div className="comment2">
                            <i>Duis autem vel eum iriure dolor in hendrerit in vulputate velit<br/>
                            esse molestie consequat, vel ilium dolor eu feugiat nulla<br/>
                            facilisis at vero eros et accumsan et iusto odio dignisim qui<br/>
                            blandit praesent luptatum zzril delenit augue duis dolore te<br/>
                            feugiat nulia facilisi.</i>
                        </div>
                    </div>
                    <div className="author1Box authorBox">
                        <div className="image20Box">
                            <img src={image20} className="image20" />
                            <div className="author1Name">JENNY DUREN</div>
                        </div>
                        <div className="comment1">
                            <i>Duis autem vel eum iriure dolor in hendrerit in vulputate velit<br/>
                            esse molestie consequat, vel ilium dolor eu feugiat nulla<br/>
                            facilisis at vero eros et accumsan et iusto odio dignisim qui<br/>
                            blandit praesent luptatum zzril delenit augue duis dolore te<br/>
                            feugiat nulia facilisi.</i>
                        </div>
                    </div>
                    <div className="author2Box authorBox">
                        <div className="image21Box">
                            <img src={image21} className="image21" />
                            <div className="author2Name">ALBERT EISTIEN</div>
                        </div>
                        <div className="comment2">
                            <i>Duis autem vel eum iriure dolor in hendrerit in vulputate velit<br/>
                            esse molestie consequat, vel ilium dolor eu feugiat nulla<br/>
                            facilisis at vero eros et accumsan et iusto odio dignisim qui<br/>
                            blandit praesent luptatum zzril delenit augue duis dolore te<br/>
                            feugiat nulia facilisi.</i>
                        </div>
                    </div>
                </Slider>
                <div className="latestNews">
                    <img src={image15} className="image15" />
                    <div className="latestNewsBox">
                        <p className="latestNewsTxt1"><span style={{color:"white"}}>LATEST</span> <span style={{color:"rgb(253,194,54)"}}>NEWS</span></p>
                        <p className="latestNewsTxt2">Claritas est etiam processus dynamicus, qui sequitur<br/>mutationem consuetudium lectorum.</p>
                        <div className="latestImageBox">
                            <div className="latestImageBox1">
                                <img src={image16} className="latestImage" />
                                <p className="latestImageTxt1"><span className="latestImageTxt2">CLARITAS EST ETIAM<br/>PROCESSUS DYNAMICUS</span><br/><span className="latestDate">28 04, 2016</span> </p>
                            </div>
                            <div className="latestImageBox1">
                                <img src={image17} className="latestImage" />
                                <p className="latestImageTxt1"><span className="latestImageTxt2">CLARITAS EST ETIAM<br/>PROCESSUS DYNAMICUS</span><br/><span className="latestDate">28 04, 2016</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="retroBox">
                    <Slider arrows={false} className="retrostyle retrostyle1" centerMode centerPadding="0" slidesToShow="7" slidesPerRow="1" autoplay>
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                    </Slider>
                    <Slider arrows={false} className="retrostyle retrostyle2" centerMode centerPadding="0" slidesToShow="3" slidesPerRow="1" autoplay>
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                    </Slider>
                    <Slider arrows={false} className="retrostyle3" centerMode centerPadding="0" slidesToShow="2" slidesPerRow="1" autoplay>
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                        <img src={image18} className="image18" />
                    </Slider>
                </div>
                <div className="bottom">
                    <div className="bottomFirst">
                        <div className="bottomFirst1">
                            <img src={image19} className="image19" />
                            <p className="image19Text">
                                Duis autem vel eum iriure dolor in<br/>
                                hendrerit in vulputate velit esse molestie<br/>
                                consequat, vel illum dolo re eu feugiat<br/>
                                nulla facilisis at vero eros et accumsan<br/>
                                et iusto odio.
                            </p>
                        </div>
                        <div className="bottomFirst2">
                            <p className="firstBottomHead">IMPORTANT LINKS</p>
                            <div className="firstBottomLinks">
                                <p className="firstBottomLink1">Themeforest</p>
                                <p className="firstBottomLink2">Videohive</p>
                                <p className="firstBottomLink3">Graphicriver</p>
                                <p className="firstBottomLink4">Audio Jungle</p>
                                <p className="firstBottomLink5">Photodune</p>
                            </div>
                        </div>
                        <div className="bottomFirst3">
                            <p className="secondBottomHead">QUICK LINKS</p>
                            <div className="secondBottomLinks">
                                <p className="secondBottomLink1">Faq</p>
                                <p className="secondBottomLink2">Support</p>
                                <p className="secondBottomLink3">Sitemap</p>
                                <p className="secondBottomLink4">Blog</p>
                                <p className="secondBottomLink5">Pricing</p>
                            </div>
                        </div>
                        <div className="bottomFirst4">
                            <p className="thirdBottomHead">ADDRESS</p>
                            <div className="thirdBottomLinks">
                                <p className="thirdBottomLink1"><span style={{fontWeight:"bold"}}>HEAD OFFICE:</span>&nbsp;&nbsp;22B, Becar Street<br/>London, UK</p>
                                <p className="thirdBottomLink2"><span style={{fontWeight:"bold"}}>PHONE:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+000-111-2222 +000-<br/>111-2223</p>
                                <div className="mediaIcons">
                                    <FaFacebookF className="icon" />
                                    <FaTwitter className="icon" />
                                    <FaInstagram className="icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottomSecond">
                        <p className="bottomSecondText">2021©All Rights Reserved by Themexriver</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default homePage