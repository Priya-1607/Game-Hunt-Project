import React, { useState, useEffect } from 'react';
import '../App.css';
import '../intlTelInput.css'
import '../bootstarp.css'
import '../skilthem.css'
import '../skil.css'
import '../user.css'
import logo from './assets/logo.png'

import Typography from '@mui/material/Typography';
import AspectRatio from 'react-aspect-ratio';

import axios from 'axios';
import ImageList from '@mui/material/ImageList';
import Carousel from 'react-grid-carousel'
import ImageListItem from '@mui/material/ImageListItem';
import regularLocation from './assets/my_location_regular_icon.png'
import UserHomeBanner from './assets/UserHomeBanner.png'
import cricket_ball_icon from './assets/cricket_ball_icon.png'
import Footall from './assets/Footall.png'
import table_tennis from './assets/table_tennis.png'
import Basketball from './assets/Basketball.png'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Appstore from './assets/Appstore .png'
import Googleplay from './assets/Googleplay.png'
import Countcoaches from './assets/Countcoaches.png'
import Countvenues from './assets/Countvenues.png'
import badminton from './assets/badminton.png'
import Countusers from './assets/Countusers.png'
import whychoose_icon1 from './assets/whychoose_icon1.png'
import whychoose_icon2 from './assets/whychoose_icon2.png'
import whychoose_icon3 from './assets/whychoose_icon3.png'
import whychoose_icon4 from './assets/whychoose_icon4.png'
import quete_red from './assets/quete_red.png'
import star from './assets/star.png'
import employe from './assets/employe.png'
function Main() {
    const [posts, setPosts] = useState([]);
    const [valueSportsData,setvalueSportsData]= useState([]);
    const [venueDataValue,setVenueDataValue]= useState([]);
    const [appBanners, setAppBanners] = useState([]);
    const [offersValue, setoffersValue] = useState([]);
    const [onlineSessionValue, setonlineSessionValue] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [slides, setSlides] = useState([]);
    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = appBanners.length;
    const reduceRecipes = (acc, cur, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) acc[groupIndex] = [];
        acc[groupIndex].push(cur);
        console.log(acc);
        return acc;
      };
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
  
    
    useEffect(() => {
        axios.get('http://13.233.104.251:8080/api/coach/homeScreen?longitude=&latitude=')
          .then(response => {
            setPosts(response.data.data);
            setVenueDataValue(response.data.data.venueData)
            setAppBanners(response.data.data.appBanners)
            setvalueSportsData(response.data.data.SportsData)
            setoffersValue(response.data.data.offers)
            setonlineSessionValue(response.data.data.onlineSession)
           console.log("posts,",posts);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
  return (
    <>
    <div id="root">
   
    <div className="Toastify"></div>
    <div className="bgImageset" id="home">
        <nav className="navbar navbar-expand-lg navbar-dark undefined" id="mainNav">
            <div className="container position-relative">
                <button className="navbar-toggler" type="button"><i className="fa fa-bars"></i></button><a className="navbar-brand" href="/"><img src={logo} alt="Game Hunt" title="Game Hunt" /></a>
                <div className="nav-item get-in-touch loginBtnMobileBlock">
                    <span className="nav-link login-b cursor-pointer" data-bs-toggle="modal" data-bs-target="#LoginModal"><img src="assets/img/userLogin.png" alt="" /> <img src="assets/img/userLogin.png" alt="" /> Login | Signup</span>
                </div>
                <div className="collapse navbar-collapse homePAgeMenu">
                    <form className="createEventForm nav-link locationFormDesk">
                        <div className="position-relative">
                            <div className=""><input placeholder="Current Location" className="form-control CurrentLocation" name="location" value="Current Location" /></div>
                            
                            <img src={regularLocation} className="input-img loactunRight" alt="" />
                        </div>
                    </form>
                    <ul className="navbar-nav py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#">gamehunt academy</a></li>
                        <li className="nav-item profile-drop cursor-pointer position-relative" data-bs-toggle="modal"  data-bs-target="#PartnerModal" ><span className="nav-link">partners</span></li>
                        <li className="nav-item get-in-touch loginBtnDstBlock">
                            <span className="nav-link login-b cursor-pointer"  data-bs-toggle="modal" data-bs-target="#LoginModal"><img src="assets/img/userLogin.png" alt="" /> <img src="assets/img/userLogin.png" alt="" /> Login | Signup</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <form className="createEventForm nav-link locationFormMobile">
            <div className="position-relative">
                <div className=""><input placeholder="Current Location" className="form-control CurrentLocation pac-target-input" name="location" value="Agra, Uttar Pradesh" autocomplete="off" /></div>
                <img src="assets/img/address.png" className="input-img loactun" alt="" /><img src="assets/img/my_location_regular_icon.png" className="input-img loactunRight" alt="" />
            </div>
        </form>
        <div className="d-none"><i className="fa fa-question-circle-o" aria-hidden="true"></i> Help</div>
        <header>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div id='carouselExampleInterval' className='carousel slide' data-ride='carousel'>
  <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {appBanners.map((step, index) => (
          <div key={step.image}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 600,
                  display: 'block',
                  maxWidth: "100%",
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.image}
                alt="img"
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>

    
    </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </header>
    </div>
   
    <section className="mt-4 pt-4" id="ourprograms">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 mb-3 text-center"><h3 className="sec-title">Venues near me</h3></div>
                <div className="col-sm-12 col-md-12 col-lg-12 mb-3 position-relative">
                    <ul className="nav nav-pills mb-3 justify-content-start justify-content-md-center tabsnew lineAlign" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-capitalize d-grid" type="button"><img src={cricket_ball_icon} alt="" className="sportTabImg" />cricket</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-capitalize d-grid" type="button"><img src={Footall} alt="" className="sportTabImg" />football</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-capitalize d-grid" type="button"><img src={Basketball} alt="" className="sportTabImg" />basketball</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-capitalize d-grid" type="button"><img src={table_tennis} alt="" className="sportTabImg" />table Tennis</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-capitalize d-grid" type="button"><img src={badminton} alt="" className="sportTabImg" />badminton</button>
                        </li>
                    </ul>
                    <div className="d-none">
                        <div className="position-relative filterDrop">
                            <img src="assets/img/filter.png" alt="" /><span className="filterText">Filter</span>
                            <div className="filterDropSelct">
                                <span className="me-2 fw-bold">Filter By:</span>
                                <select>
                                    <option value="">Select</option>
                                    <option value="1">My favourite</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* <ImageList sx={{ width: "100%", height: 450 }} cols={20} rows={1} >
      {venueDataValue.map((dataObj) => (
        <ImageListItem key={dataObj.img}>
         <div className="position-relative">
                                                            <a className="text-dark" href="#"><img src={dataObj.image[0].image} width={2rem}className="img-fluid tabImage" alt="" /></a>
                                                            <div className="venueBoxIcons">
                                                                <span className="votesRatingBg">{dataObj.rating} <img src="assets/img/star.png" alt="" className="start" /></span> {dataObj.review} votes
                                                            </div>
                                                            <img src="assets/img/Favoriteunselected.png" alt="" className="d-none" />
                                                        </div>
                                                        <div className="text-start mt-3">
                                                            <a className="text-dark" href="#">
                                                                <h5 className="ellips1Line w-100 fw-bold text-dark" title="Kaushik football Academy">{dataObj.name}</h5>
                                                                <p className="mb-0 text-dark">{dataObj.sports[0].sport}</p>
                                                            </a>
                                                            <p className="mb-0 ellips1Line w-100 text-dark">{dataObj.address}</p>
                                                            <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
                                                                <a href="https://www.google.com/maps/place/Malad, Malad West, Mumbai, Maharashtra, India" target="_blank" className="clubKMS box-shadow">
                                                                    <img src="assets/img/map_pins_icon.png" alt="" className="map_pins_icon" />1033.94Km
                                                                </a>
                                                            </div>
                                                        </div>
        </ImageListItem>
      ))}
    </ImageList> */}
                    <div className="tab-content" id="pills-tabContent">
                        <div id="dynamicDots" className="position-relative">
                            <div className="slider programIMages sportSlider">
                                <div>
                                <div className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                                {venueDataValue.map((dataObj, index) => {
          return (   <>
           <div className="position-relative">
                                                            <a className="text-dark" href="#"><img src={dataObj.image[0].image} className="img-fluid tabImage" alt="" /></a>
                                                            <div className="venueBoxIcons">
                                                                <span className="votesRatingBg">{dataObj.rating} <img src={star} alt="" className="start" /></span> {dataObj.review} votes
                                                            </div>
                                                            <img src="assets/img/Favoriteunselected.png" alt="" className="d-none" />
                                                        </div>
                                                        <div className="text-start mt-3">
                                                            <a className="text-dark" href="#">
                                                                <h5 className="ellips1Line w-100 fw-bold text-dark" title="Kaushik football Academy">{dataObj.name}</h5>
                                                                <p className="mb-0 text-dark">{dataObj.sports[0].sport}</p>
                                                            </a>
                                                            <p className="mb-0 ellips1Line w-100 text-dark">{dataObj.address}</p>
                                                            <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
                                                                <a href="https://www.google.com/maps/place/Malad, Malad West, Mumbai, Maharashtra, India" target="_blank" className="clubKMS box-shadow">
                                                                    <img src="assets/img/map_pins_icon.png" alt="" className="map_pins_icon" />1033.94Km
                                                                </a>
                                                            </div>
                                                        </div> </>  );
        })}
                                                    </div>
                                </div>
                                
                               
                            </div>
                            <a className="viewAll theme-color" href="/venues-listing">View All</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="pt-4" id="Offerevents">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 mb-3 text-center"><h3 className="sec-title">Sport Events and Offers</h3></div>
                <div>
                    <ul className="nav nav-pills mb-3 justify-content-center tabsnew lineAlign" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active text-capitalize d-grid" type="button" id="pills-offer-tab" data-bs-toggle="pill" data-bs-target="#pills-offer">offers</button></li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-capitalize d-grid" type="button" id="pills-events-tab" data-bs-toggle="pill" data-bs-target="#pills-events">events</button></li>
                    </ul>
                    <div className="row">
                <div>
                    <div className="slick-slider EventNewsSlider sportSlider slick-initialized">
                        <div className="slick-list">
                            <div className="slick-track">
                                <div data-index="0" className="slick-slide slick-active slick-current"  aria-hidden="false" >
                                <ImageList sx={{ width: "100%", height: 200 }} cols={4} rows={1} >
      {offersValue.map((dataObj) => (
        <ImageListItem key={dataObj.image}>
         <img
        src={`${dataObj.image}?w=300&h=164&fit=crop&auto=format`}
        srcSet={`${dataObj.image}?w=300&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt="dd"
        loading="lazy"
      />
        </ImageListItem>
      ))}
    </ImageList> 
                                </div>
                                {/* <div data-index="1" className="slick-slide slick-active" tabindex="-1" aria-hidden="false" style="outline: none; width: 432px;">
                                    <div>
                                        <div tabindex="-1" style="width: 100%; display: inline-block;">
                                            <a href="https://www.youtube.com/embed/qXcdq826f5Q" target="_blank" className="text-dark">
                                                <div className="">
                                                    <div className="eventGridFlex position-relative">
                                                        <iframe
                                                            src="https://www.youtube.com/embed/qXcdq826f5Q"
                                                            title="Use this three-letter word to Stop Trash-Talking to yourself! - Coach Amreen"
                                                            frameborder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowfullscreen=""
                                                        ></iframe>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div data-index="2" className="slick-slide slick-active" tabindex="-1" aria-hidden="false" style="outline: none; width: 432px;">
                                    <div>
                                        <div tabindex="-1" style="width: 100%; display: inline-block;">
                                            <a href="https://www.youtube.com/embed/jBs2RtZ1rDM" target="_blank" className="text-dark">
                                                <div className="">
                                                    <div className="eventGridFlex position-relative">
                                                        <iframe
                                                            src="https://www.youtube.com/embed/jBs2RtZ1rDM"
                                                            title="Use this three-letter word to Stop Trash-Talking to yourself! - Coach Amreen"
                                                            frameborder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowfullscreen=""
                                                        ></iframe>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>
    </section>
    {/* <section className="mt-4 pt-4" id="ourprograms">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 mb-3 text-center"><h3 className="sec-title">Training by Professionals</h3></div>
                <div className="col-sm-12 col-md-12 col-lg-12 mb-3 position-relative">
                    <ul className="nav nav-pills mb-3 justify-content-start justify-content-md-center tabsnew lineAlign" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-capitalize d-grid" type="button"><img src={cricket_ball_icon} alt="" className="sportTabImg" />cricket</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-capitalize d-grid" type="button"><img src={Footall} alt="" className="sportTabImg" />football</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-capitalize d-grid" type="button"><img src={Basketball} alt="" className="sportTabImg" />basketball</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-capitalize d-grid" type="button"><img src={table_tennis} alt="" className="sportTabImg" />table Tennis</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-capitalize d-grid" type="button"><img src={badminton} alt="" className="sportTabImg" />badminton</button>
                        </li>
                    </ul>
                    <div className="d-none">
                        <div className="position-relative filterDrop">
                            <img src="assets/img/filter.png" alt="" /><span className="filterText">Filter</span>
                            <div className="filterDropSelct">
                                <span className="me-2 fw-bold">Filter By:</span>
                                <select>
                                    <option value="">Select</option>
                                    <option value="1">My favourite</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content" id="pills-tabContent">
                        <div id="dynamicDots" className="position-relative">
                            <div className="slider programIMages sportSlider">
                                <div className="">
                                    <div className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                                                        <div className="position-relative">
                                                            <a className="text-dark" href="#">
                                                                <img src="https://gamehunt-data.s3.amazonaws.com/3fe6a755-8f7c-4be1-a75b-5dda9540292a.JPG" className="img-fluid tabImage" alt="" />
                                                            </a>
                                                            <div className="venueBoxIcons">
                                                                <span className="votesRatingBg">0 <img src="assets/img/star.png" alt="" className="start" /></span> 0 votes
                                                            </div>
                                                            <img src="assets/img/Favoriteunselected.png" alt="" className="d-none" />
                                                        </div>
                                                        <div className="text-start mt-3">
                                                            <a className="text-dark" href="#">
                                                                <h5 className="ellips1Line text-dark w-100 fw-bold" title="Gamehunt Football Academy">Gamehunt Football Academy</h5>
                                                                <p className="text-dark ellips1Line w-100 mb-3">football</p>
                                                            </a>
                                                            <div className="eventCreater">
                                                                <img src="https://gamehunt-data.s3.amazonaws.com/IMG-8455.jpg" className="rounded-circle eventCreaterIcon" alt="" />
                                                                <span><p className="mb-0 fw-bold ellips1Line w-100 text-dark">Prasad Bhosale</p></span>
                                                            </div>
                                                            <div className="d-flex justify-content-between align-items-center gap-2 mb-2">
                                                                <span className="ellips1Line w-100 text-dark">Kandivali, Kandivali West, Mumbai, Maharashtra, India</span>
                                                                <a href="https://www.google.com/maps/place/Kandivali, Kandivali West, Mumbai, Maharashtra, India" target="_blank" className="clubKMS box-shadow">
                                                                    <img src="assets/img/map_pins_icon.png" alt="" className="map_pins_icon" /> 1032.13Km
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                </div>
                                <div className="">
                                    <div className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                                                        <div className="position-relative">
                                                            <a className="text-dark" href="#">
                                                                <img src="https://gamehunt-data.s3.amazonaws.com/3fe6a755-8f7c-4be1-a75b-5dda9540292a.JPG" className="img-fluid tabImage" alt="" />
                                                            </a>
                                                            <div className="venueBoxIcons">
                                                                <span className="votesRatingBg">0 <img src="assets/img/star.png" alt="" className="start" /></span> 0 votes
                                                            </div>
                                                            <img src="assets/img/Favoriteunselected.png" alt="" className="d-none" />
                                                        </div>
                                                        <div className="text-start mt-3">
                                                            <a className="text-dark" href="#">
                                                                <h5 className="ellips1Line text-dark w-100 fw-bold" title="Gamehunt Football Academy">Gamehunt Football Academy</h5>
                                                                <p className="text-dark ellips1Line w-100 mb-3">football</p>
                                                            </a>
                                                            <div className="eventCreater">
                                                                <img src="https://gamehunt-data.s3.amazonaws.com/IMG-8455.jpg" className="rounded-circle eventCreaterIcon" alt="" />
                                                                <span><p className="mb-0 fw-bold ellips1Line w-100 text-dark">Prasad Bhosale</p></span>
                                                            </div>
                                                            <div className="d-flex justify-content-between align-items-center gap-2 mb-2">
                                                                <span className="ellips1Line w-100 text-dark">Kandivali, Kandivali West, Mumbai, Maharashtra, India</span>
                                                                <a href="https://www.google.com/maps/place/Kandivali, Kandivali West, Mumbai, Maharashtra, India" target="_blank" className="clubKMS box-shadow">
                                                                    <img src="assets/img/map_pins_icon.png" alt="" className="map_pins_icon" /> 1032.13Km
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                </div>
                                <div className="">
                                    <div className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                                                        <div className="position-relative">
                                                            <a className="text-dark" href="#">
                                                                <img src="https://gamehunt-data.s3.amazonaws.com/3fe6a755-8f7c-4be1-a75b-5dda9540292a.JPG" className="img-fluid tabImage" alt="" />
                                                            </a>
                                                            <div className="venueBoxIcons">
                                                                <span className="votesRatingBg">0 <img src="assets/img/star.png" alt="" className="start" /></span> 0 votes
                                                            </div>
                                                            <img src="assets/img/Favoriteunselected.png" alt="" className="d-none" />
                                                        </div>
                                                        <div className="text-start mt-3">
                                                            <a className="text-dark" href="#">
                                                                <h5 className="ellips1Line text-dark w-100 fw-bold" title="Gamehunt Football Academy">Gamehunt Football Academy</h5>
                                                                <p className="text-dark ellips1Line w-100 mb-3">football</p>
                                                            </a>
                                                            <div className="eventCreater">
                                                                <img src="https://gamehunt-data.s3.amazonaws.com/IMG-8455.jpg" className="rounded-circle eventCreaterIcon" alt="" />
                                                                <span><p className="mb-0 fw-bold ellips1Line w-100 text-dark">Prasad Bhosale</p></span>
                                                            </div>
                                                            <div className="d-flex justify-content-between align-items-center gap-2 mb-2">
                                                                <span className="ellips1Line w-100 text-dark">Kandivali, Kandivali West, Mumbai, Maharashtra, India</span>
                                                                <a href="https://www.google.com/maps/place/Kandivali, Kandivali West, Mumbai, Maharashtra, India" target="_blank" className="clubKMS box-shadow">
                                                                    <img src="assets/img/map_pins_icon.png" alt="" className="map_pins_icon" /> 1032.13Km
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                </div>
                                <div className="">
                                    <div className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                                                        <div className="position-relative">
                                                            <a className="text-dark" href="#">
                                                                <img src="https://gamehunt-data.s3.amazonaws.com/3fe6a755-8f7c-4be1-a75b-5dda9540292a.JPG" className="img-fluid tabImage" alt="" />
                                                            </a>
                                                            <div className="venueBoxIcons">
                                                                <span className="votesRatingBg">0 <img src="assets/img/star.png" alt="" className="start" /></span> 0 votes
                                                            </div>
                                                            <img src="assets/img/Favoriteunselected.png" alt="" className="d-none" />
                                                        </div>
                                                        <div className="text-start mt-3">
                                                            <a className="text-dark" href="#">
                                                                <h5 className="ellips1Line text-dark w-100 fw-bold" title="Gamehunt Football Academy">Gamehunt Football Academy</h5>
                                                                <p className="text-dark ellips1Line w-100 mb-3">football</p>
                                                            </a>
                                                            <div className="eventCreater">
                                                                <img src="https://gamehunt-data.s3.amazonaws.com/IMG-8455.jpg" className="rounded-circle eventCreaterIcon" alt="" />
                                                                <span><p className="mb-0 fw-bold ellips1Line w-100 text-dark">Prasad Bhosale</p></span>
                                                            </div>
                                                            <div className="d-flex justify-content-between align-items-center gap-2 mb-2">
                                                                <span className="ellips1Line w-100 text-dark">Kandivali, Kandivali West, Mumbai, Maharashtra, India</span>
                                                                <a href="https://www.google.com/maps/place/Kandivali, Kandivali West, Mumbai, Maharashtra, India" target="_blank" className="clubKMS box-shadow">
                                                                    <img src="assets/img/map_pins_icon.png" alt="" className="map_pins_icon" /> 1032.13Km
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                </div>
                                <div className="">
                                    <div className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                                                        <div className="position-relative">
                                                            <a className="text-dark" href="#">
                                                                <img src="https://gamehunt-data.s3.amazonaws.com/3fe6a755-8f7c-4be1-a75b-5dda9540292a.JPG" className="img-fluid tabImage" alt="" />
                                                            </a>
                                                            <div className="venueBoxIcons">
                                                                <span className="votesRatingBg">0 <img src="assets/img/star.png" alt="" className="start" /></span> 0 votes
                                                            </div>
                                                            <img src="assets/img/Favoriteunselected.png" alt="" className="d-none" />
                                                        </div>
                                                        <div className="text-start mt-3">
                                                            <a className="text-dark" href="#">
                                                                <h5 className="ellips1Line text-dark w-100 fw-bold" title="Gamehunt Football Academy">Gamehunt Football Academy</h5>
                                                                <p className="text-dark ellips1Line w-100 mb-3">football</p>
                                                            </a>
                                                            <div className="eventCreater">
                                                                <img src="https://gamehunt-data.s3.amazonaws.com/IMG-8455.jpg" className="rounded-circle eventCreaterIcon" alt="" />
                                                                <span><p className="mb-0 fw-bold ellips1Line w-100 text-dark">Prasad Bhosale</p></span>
                                                            </div>
                                                            <div className="d-flex justify-content-between align-items-center gap-2 mb-2">
                                                                <span className="ellips1Line w-100 text-dark">Kandivali, Kandivali West, Mumbai, Maharashtra, India</span>
                                                                <a href="https://www.google.com/maps/place/Kandivali, Kandivali West, Mumbai, Maharashtra, India" target="_blank" className="clubKMS box-shadow">
                                                                    <img src="assets/img/map_pins_icon.png" alt="" className="map_pins_icon" /> 1032.13Km
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                </div>
                            
                            </div>
                            <a className="viewAll theme-color" href="#">View All</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
     <section className="mt-4 pt-4" id="ourprograms">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 mb-3 text-center"><h3 className="sec-title">Training by Professionals</h3></div>
                <div className="col-sm-12 col-md-12 col-lg-12 mb-3 position-relative">
                    <ul className="nav nav-pills mb-3 justify-content-start justify-content-md-center tabsnew lineAlign" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-capitalize d-grid" type="button"><img src={cricket_ball_icon} alt="" className="sportTabImg" />cricket</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-capitalize d-grid" type="button"><img src={Footall} alt="" className="sportTabImg" />football</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-capitalize d-grid" type="button"><img src={Basketball} alt="" className="sportTabImg" />basketball</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-capitalize d-grid" type="button"><img src={table_tennis} alt="" className="sportTabImg" />table Tennis</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-capitalize d-grid" type="button"><img src={badminton} alt="" className="sportTabImg" />badminton</button>
                        </li>
                    </ul>
                    <div className="d-none">
                        <div className="position-relative filterDrop">
                            <img src="assets/img/filter.png" alt="" /><span className="filterText">Filter</span>
                            <div className="filterDropSelct">
                                <span className="me-2 fw-bold">Filter By:</span>
                                <select>
                                    <option value="">Select</option>
                                    <option value="1">My favourite</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* <ImageList sx={{ width: "100%", height: 450 }} cols={20} rows={1} >
      {venueDataValue.map((dataObj) => (
        <ImageListItem key={dataObj.img}>
         <div className="position-relative">
                                                            <a className="text-dark" href="#"><img src={dataObj.image[0].image} width={2rem}className="img-fluid tabImage" alt="" /></a>
                                                            <div className="venueBoxIcons">
                                                                <span className="votesRatingBg">{dataObj.rating} <img src="assets/img/star.png" alt="" className="start" /></span> {dataObj.review} votes
                                                            </div>
                                                            <img src="assets/img/Favoriteunselected.png" alt="" className="d-none" />
                                                        </div>
                                                        <div className="text-start mt-3">
                                                            <a className="text-dark" href="#">
                                                                <h5 className="ellips1Line w-100 fw-bold text-dark" title="Kaushik football Academy">{dataObj.name}</h5>
                                                                <p className="mb-0 text-dark">{dataObj.sports[0].sport}</p>
                                                            </a>
                                                            <p className="mb-0 ellips1Line w-100 text-dark">{dataObj.address}</p>
                                                            <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
                                                                <a href="https://www.google.com/maps/place/Malad, Malad West, Mumbai, Maharashtra, India" target="_blank" className="clubKMS box-shadow">
                                                                    <img src="assets/img/map_pins_icon.png" alt="" className="map_pins_icon" />1033.94Km
                                                                </a>
                                                            </div>
                                                        </div>
        </ImageListItem>
      ))}
    </ImageList> */}
                    <div className="tab-content" id="pills-tabContent">
                        <div id="dynamicDots" className="position-relative">
                            <div className="slider programIMages sportSlider">
                                <div>
                                <div className="bg-white p-2 text-capitalize programs-colles vanuesNearMeBox">
                                {venueDataValue.map((dataObj, index) => {
          return (   <>
           <div className="position-relative">
                                                            <a className="text-dark" href="#"><img src={dataObj.image[0].image} className="img-fluid tabImage" alt="" /></a>
                                                            <div className="venueBoxIcons">
                                                                <span className="votesRatingBg">{dataObj.rating} <img src={star} alt="" className="start" /></span> {dataObj.review} votes
                                                            </div>
                                                            <img src="assets/img/Favoriteunselected.png" alt="" className="d-none" />
                                                        </div>
                                                        <div className="text-start mt-3">
                                                            <a className="text-dark" href="#">
                                                                <h5 className="ellips1Line w-100 fw-bold text-dark" title="Kaushik football Academy">{dataObj.name}</h5>
                                                                <p className="mb-0 text-dark">{dataObj.sports[0].sport}</p>
                                                            </a>
                                                            <p className="mb-0 ellips1Line w-100 text-dark">{dataObj.address}</p>
                                                            <div className="d-flex justify-content-end align-items-center gap-2 mb-2">
                                                                <a href="https://www.google.com/maps/place/Malad, Malad West, Mumbai, Maharashtra, India" target="_blank" className="clubKMS box-shadow">
                                                                    <img src="assets/img/map_pins_icon.png" alt="" className="map_pins_icon" />1033.94Km
                                                                </a>
                                                            </div>
                                                        </div> </>  );
        })}
                                                    </div>
                                </div>
                                
                               
                            </div>
                            <a className="viewAll theme-color" href="/venues-listing">View All</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="WhyChooseUsBg">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 mb-5 text-center"><h3 className="sec-title text-white">Why Choose Us</h3></div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 mb-4 DesktopViewUs">
                    <div className="slick-slider ProgramSlider slick-initialized">
                        <div className="slick-list">
                            <div className="slick-track" style={{width: "1296px", opacity: 1,}}>
                                <div data-index="0" className="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" style={{width: "324px"}}>
                                    <div>
                                        <div tabindex="-1" style={{width: '100%', display: "inline-block"}}>
                                            <div className="text-center cursor-pointer whyChooseBox">
                                                <div className="eventGridFlex">
                                                    <img src={whychoose_icon1} className="img-fluid ChooseUsIcon" alt="" />
                                                    <div className="text-white mt-4">
                                                        <h5 className="text-capitalize">Sports venues at fingertips</h5>
                                                        <small className="ps-3">Heard anything better than a selection of sports venues that work with your schedule?</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-index="1" className="slick-slide slick-active" tabindex="-1" aria-hidden="false" style={{width: "324px"}}>
                                    <div>
                                        <div tabindex="-1" style={{width: "100%", display: "inline-block"}}>
                                            <div className="text-center cursor-pointer whyChooseBox">
                                                <div className="eventGridFlex">
                                                    <img src={whychoose_icon2} className="img-fluid ChooseUsIcon" alt="" />
                                                    <div className="text-white mt-4">
                                                        <h5 className="text-capitalize">Assertive Coaching camps for persistence.</h5>
                                                        <small className="ps-3">It may be difficult to locate quality coaching academies in your area. As a result,</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-index="2" className="slick-slide slick-active" tabindex="-1" aria-hidden="false" style={{width: "324px"}}>
                                    <div>
                                        <div tabindex="-1" style={{width: "100%", display: "inline-block"}}>
                                            <div className="text-center cursor-pointer whyChooseBox">
                                                <div className="eventGridFlex">
                                                    <img src={whychoose_icon3} className="img-fluid ChooseUsIcon" alt="" />
                                                    <div className="text-white mt-4">
                                                        <h5 className="text-capitalize">The GAMEHUNT ACADEMY</h5>
                                                        <small className="ps-3">The Gamehunt Academy is a one-stop shop for schools and students seeking sports and life skills.</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-index="3" className="slick-slide slick-active" tabindex="-1" aria-hidden="false" style={{width: "324px"}}>
                                    <div>
                                        <div tabindex="-1" style={{width: "100%", display: "inline-block"}}>
                                            <div className="text-center cursor-pointer whyChooseBox">
                                                <div className="eventGridFlex">
                                                    <img src={whychoose_icon4} className="img-fluid ChooseUsIcon" alt="" />
                                                    <div className="text-white mt-4">
                                                        <h5 className="text-capitalize">Events &amp; Tournaments</h5>
                                                        <small className="ps-3">The Gamehunt is d edicated to providing numerous opportunities for our young athletes to develop and showcase their skills at a competitive level.</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-sm-12 col-md-12 col-lg-12 mobirlViewUs">
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-3">
                            <div className="text-center cursor-pointer whyChooseBox">
                                <div className="eventGridFlex">
                                    <img src="assets/img/whychoose_icon1.png" className="img-fluid ChooseUsIcon" alt="" />
                                    <div className="text-white mt-4">
                                        <h5 className="text-capitalize">Sports venues at fingertips</h5>
                                        <small className="ps-3">Heard anything better than a selection of sports venues that work with your schedule?</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-3">
                            <div className="text-center cursor-pointer whyChooseBox">
                                <div className="eventGridFlex">
                                    <img src="assets/img/whychoose_icon2.png" className="img-fluid ChooseUsIcon" alt="" />
                                    <div className="text-white mt-4">
                                        <h5 className="text-capitalize">Assertive Coaching camps for persistence.</h5>
                                        <small className="ps-3">It may be difficult to locate quality coaching academies in your area. As a result,</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-3">
                            <div className="text-center cursor-pointer whyChooseBox">
                                <div className="eventGridFlex">
                                    <img src="assets/img/whychoose_icon3.png" className="img-fluid ChooseUsIcon" alt="" />
                                    <div className="text-white mt-4">
                                        <h5 className="text-capitalize">The GAMEHUNT ACADEMY</h5>
                                        <small className="ps-3">The Gamehunt Academy is a one-stop shop for schools and students seeking sports and life skills.</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-3">
                            <div className="text-center cursor-pointer whyChooseBox">
                                <div className="eventGridFlex">
                                    <img src="assets/img/whychoose_icon4.png" className="img-fluid ChooseUsIcon" alt="" />
                                    <div className="text-white mt-4">
                                        <h5 className="text-capitalize">Events &amp; Tournaments</h5>
                                        <small className="ps-3">The Gamehunt is dedicated to providing numerous opportunities for our young athletes to develop and showcase their skills at a competitive level.</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
    <section className="mt-4 pt-4">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 mb-2 mb-md-5 text-center"><h3 className="sec-title">Online Session</h3></div>
            </div>
          
            <div className="row">
                <div>
                    <div className="slick-slider EventNewsSlider sportSlider slick-initialized">
                        <div className="slick-list">
                            <div className="slick-track">
                                <div data-index="0" className="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" >
                                <ImageList sx={{ width: "100%", height: 450 }} cols={4} rows={1} >
      {onlineSessionValue.map((dataObj) => (
        <ImageListItem key={dataObj.link}>
         <div>
                                        <div tabindex="-1" style={{width: "100%", display: "inline-block"}}>
                                            <a href={dataObj.link} target="_blank" className="text-dark">
                                                <div className="">
                                                    <div className="eventGridFlex position-relative">
                                                        <iframe
                                                            src={dataObj.link}
                                                            title="Use this three-letter word to Stop Trash-Talking to yourself! - Coach Amreen"
                                                            frameborder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowfullscreen=""
                                                        ></iframe>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
        </ImageListItem>
      ))}
    </ImageList> 
                                </div>
                                {/* <div data-index="1" className="slick-slide slick-active" tabindex="-1" aria-hidden="false" style="outline: none; width: 432px;">
                                    <div>
                                        <div tabindex="-1" style="width: 100%; display: inline-block;">
                                            <a href="https://www.youtube.com/embed/qXcdq826f5Q" target="_blank" className="text-dark">
                                                <div className="">
                                                    <div className="eventGridFlex position-relative">
                                                        <iframe
                                                            src="https://www.youtube.com/embed/qXcdq826f5Q"
                                                            title="Use this three-letter word to Stop Trash-Talking to yourself! - Coach Amreen"
                                                            frameborder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowfullscreen=""
                                                        ></iframe>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div data-index="2" className="slick-slide slick-active" tabindex="-1" aria-hidden="false" style="outline: none; width: 432px;">
                                    <div>
                                        <div tabindex="-1" style="width: 100%; display: inline-block;">
                                            <a href="https://www.youtube.com/embed/jBs2RtZ1rDM" target="_blank" className="text-dark">
                                                <div className="">
                                                    <div className="eventGridFlex position-relative">
                                                        <iframe
                                                            src="https://www.youtube.com/embed/jBs2RtZ1rDM"
                                                            title="Use this three-letter word to Stop Trash-Talking to yourself! - Coach Amreen"
                                                            frameborder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowfullscreen=""
                                                        ></iframe>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="mt-4 pt-4">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-3 col-lg-3 mb-5">
                    <h3 className="sec-title Whatour">
                        What our customer are saying
                        <p className="quetePng"><img src={quete_red} className="mt-3" alt="" /></p>
                    </h3>
                </div>
                <div className="col-sm-12 col-md-9 col-lg-9 mb-0 mb-md-5 pe-0 quetePngMobileFlex">
                    <img src={quete_red} className="img-fluid quetePngMobile" alt="" />
                    <div className="customersayingBg">
                        <div className="slick-slider CustomerSlider sportSlider slick-initialized">
                            <div className="slick-list">
                                <div className="slick-track" style={{width: "100%"}}>
                                    <div data-index="0" className="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" style={{width: "360px"}}>
                                        <div>
                                            <div tabindex="-1" style={{width: "100%", display: "inline-block"}}>
                                                <div className="customerSaingBox">
                                                    <div className="eventGridFlex"><img src={employe} className="img-fluid coachImgCenetr" alt="" /></div>
                                                    <h5 className="text-uppercase mt-1">Arpit Narvekar</h5>
                                                    <p className="mb-0 mb-md-2"><img src={quete_red} width="20px" alt="" /></p>
                                                    <p>A step in the right direction, a much needed platform with a lot of transparency and great expertise to get our children ready to become the next big Athletes and sports person.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="1" className="slick-slide slick-active" tabindex="-1" aria-hidden="false" style={{width: "360px"}}>
                                        <div>
                                            <div tabindex="-1" style={{width: "100%", display: "inline-block"}}>
                                                <div className="customerSaingBox">
                                                    <div className="eventGridFlex"><img src={employe} className="img-fluid coachImgCenetr" alt="" /></div>
                                                    <h5 className="text-uppercase mt-1">Sandeep Patil</h5>
                                                    <p className="mb-0 mb-md-2"><img src={quete_red} width="20px" alt="" /></p>
                                                    <p>There was a need for such a platform that helps my child grow physically and makes him mentally strong.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-index="2" className="slick-slide slick-active" tabindex="-1" aria-hidden="false" style={{width: "360px"}}>
                                        <div>
                                            <div tabindex="-1" style={{width: "100%", display: "inline-block"}}>
                                                <div className="customerSaingBox">
                                                    <div className="eventGridFlex"><img src={employe} className="img-fluid coachImgCenetr" alt="" /></div>
                                                    <h5 className="text-uppercase mt-1">Tamrika Tyagi</h5>
                                                    <p className="mb-0 mb-md-2"><img src={quete_red} width="20px" alt="" /></p>
                                                    <p>Gamehunt Academy has taken away the worry of our child's security when he goes for his training outside school, very reliable and trustworthy.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="CounterBG">
        <div className="container">
            <div className="">
                <div className="counterGrid text-center align-items-center">
                    <div className="d-flex gap-3 align-items-center">
                        <img src={Countusers} alt="" className="" />
                        <div className="gapFlex">
                            <h2 className="mb-0 fw-bold"><span>2500</span></h2>
                            <h6><span className="numOfCounter">Users</span></h6>
                        </div>
                    </div>
                    <div className="d-flex gap-3 align-items-center">
                        <img src={Countvenues} alt="" className="" />
                        <div className="gapFlex">
                            <h2 className="mb-0 fw-bold"><span>489</span></h2>
                            <h6><span className="numOfCounter">Venues</span></h6>
                        </div>
                    </div>
                    <div className="d-flex gap-3 align-items-center">
                        <img src={Countcoaches} alt="" className="" />
                        <div className="gapFlex">
                            <h2 className="mb-0 fw-bold"><span>412</span></h2>
                            <h6><span className="numOfCounter">Coaches </span></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer className="footer position-relative">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="widget">
                        <h3>Useful Links</h3>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <ul className="footer-li">
                                    <li><a href="/">home</a></li>
                                    <li><a href="/faq">faq</a></li>
                                    <li><a href="/about-us">about us</a></li>
                                    <li><a href="/privacy-policy">privacy policy</a></li>
                                    <li><a href="/contact-us">contact us</a></li>
                                    <li><a href="/terms-conditions">terms &amp; conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="widget getAppFla">
                        <h3>Get Mobile App</h3>
                        <p><img src={Googleplay} alt="" className="mt-2 me-2 appIconImg" /><img src={Appstore} alt="" className="mt-2 appIconImg" /></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-2 text-center text-md-start fw-bold">© GameHunt 2022. All rights reserved</div>
                    <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                        <div className="linkSocial d-md-flex d-grid align-items-center justify-content-center justify-content-md-end gap-2">
                            <span>Follow Us:</span>
                            <ul className="Social-Links">
                                <li>
                                    <a href="https://www.facebook.com/gamehuntofficial" target="_blank"><img src="assets/img/facebook.png" className="img-fluid" alt="" /></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/gamehunt_india" target="_blank"><img src="assets/img/Twitter.png" className="img-fluid" alt="" /></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/gamehuntofficial" target="_blank"><img src="assets/img/linkedin.png" className="img-fluid" alt="" /></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/gamehuntofficial/" target="_blank"><img src="assets/img/Instagram.png" className="img-fluid" alt="" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>

      
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script type="text/javascript" src="assets/js/slick.min.js"></script>
        <script src="assets/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
      
        <script src="assets/js/scripts.js"></script>

<div className="modal fade" id="LoginModal" tabindex="-1" aria-labelledby="LoginModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-xl">
    <div className="modal-content">
      <div className="modal-body p-0">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <div className="row">
		  <div className="col-sm-12 col-md-6 col-lg-6 bgloginImgUser">
			  <div className="logo-bg position-relative">

			  </div>
		  </div>
		  {/* <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                    <div className="form-style mt-5 pe-2">
                  <form className="row">
			  <div className="form-group col-sm-12 col-md-12 text-center mb-4">
			  <h2 className="mdl-ttl">log in</h2>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                  <div className="input-container">
                  <input type="email" className="form-control ps-5" placeholder="Phone Number">
                      <img src="assets/img/mobile.png" className="input-img" alt="">
                  </div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                  <div className="input-container">
                  <div className="">
                    <input className="styled-checkbox" id="RememberMe" type="checkbox" name="RememberMe"/><label for="RememberMe" className="w-100">Remember Me</label>
                    </div>
                  </div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 text-center">
				  <a href="venues-listing.html" className="btn btn-submit w-75">Continue</a>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 text-center">
				  <div className="orLine"><span className="orLog">or</span></div>
			  </div>
                      
			  <div className="form-group col-sm-12 col-md-12 text-center">
				  <p className="loginwithEmailBtn btn w-75" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#LoginEmailModal"><img src="assets/img/EmailArrowRight.png" alt="" /> Login with Email</p>
			  </div>
                      
			  <div className="form-group col-sm-12 col-md-12 text-center">
				  <div className="orLine"><span className="orLog">or</span></div>
			  </div> 
			  <div className="form-group col-sm-12 col-md-12 text-center">
				  <div className="d-flex justify-content-center align-items-center gap-3 my-3">
                  <img src="assets/img/facebook.png" alt="" />
				  <img src="assets/img/Google.png" alt="" />
                  </div>
			  </div>
                      
                      
			  <div className="form-group col-sm-12 col-md-12 text-center mb-5">
				  Not register Yet ? <span className="theme-color cursor-pointer fw-bold" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#createAccountModal">Create an Account</span>
			  </div> 
			  </form>
                  </div>
		  </div> */}
		  </div>
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="LoginEmailModal" tabindex="-1" aria-labelledby="LoginEmailModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-xl">
    <div className="modal-content">
      <div className="modal-body p-0">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <div className="row">
		  <div className="col-sm-12 col-md-6 col-lg-6 bgloginImgUser">
			  <div className="logo-bg position-relative">
{/* <!--		          <img src="assets/img/gamehuntlogo.png" className="logo-icon" alt="logo">--> */}
			  </div>
		  </div>
		  {/* <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                    <div className="form-style pe-2">
                  <form className="row">
			  <div className="form-group col-sm-12 col-md-12 text-center mb-4">
			  <h2 className="mdl-ttl">log in</h2>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                  <div className="input-container">
                  <input type="email" className="form-control ps-5" placeholder="Email ID"/>
                      <img src="assets/img/email.png" className="input-img" alt=""/>
                  </div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                  <div className="input-container">
                  <input id="password-field" type="password" className="form-control ps-5" placeholder="Password"/>
				  <img src="assets/img/password.png" className="input-img pass" alt=""/>
				  <span toggle="#password-field" className="pass-view field-icon toggle-password"></span>
				  </div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-2 text-end">
                  <div className="input-container">
                  <p className="mb-0"><span className="theme-color cursor-pointer fw-bold" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#ForgotModal">Forgot Password?</span></p>
                  </div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                  <div className="input-container">
                  <div className=""><input className="styled-checkbox" id="EmailRememberMe" type="checkbox" name="RememberMe"/><label for="EmailRememberMe" className="w-100">Remember Me</label></div>
                  </div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 text-center">
				  <a href="curriculum-registered.html" className="btn btn-submit w-75">Continue</a>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 text-center">
				  <div className="orLine"><span className="orLog">or</span></div>
			  </div>
                      
			  <div className="form-group col-sm-12 col-md-12 text-center">
				  <p className="loginwithEmailBtn btn w-75" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#LoginModal">Login with Phone Number</p>
			  </div>
                      
			  <div className="form-group col-sm-12 col-md-12 text-center">
				  <div className="orLine"><span className="orLog">or</span></div>
			  </div> 
			  <div className="form-group col-sm-12 col-md-12 text-center">
				  <div className="d-flex justify-content-center align-items-center gap-3 my-3">
                  <img src="assets/img/facebook.png" alt="" />
				  <img src="assets/img/Google.png" alt="" />
                  </div>
			  </div>
                      
                      
			  <div className="form-group col-sm-12 col-md-12 text-center mb-5">
				  Not register Yet ? <span className="theme-color cursor-pointer fw-bold" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#createAccountModal">Create an Account</span>
			  </div> 
			  </form>
                  </div>
		  </div> */}
		  </div>
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="createAccountModal" tabindex="-1" aria-labelledby="createAccountModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-xl">
    <div className="modal-content">
      <div className="modal-body p-0">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <div className="row">
		  <div className="col-sm-12 col-md-6 col-lg-6 bgSignUpImgUser">
			  <div className="logo-bg position-relative">

			  </div>
		  </div>
		  <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                    {/* <div className="form-style pe-2">
                  <form className="row">
			  <div className="form-group col-sm-12 col-md-12 text-center mb-4">
			  <h2 className="mdl-ttl">sign up</h2>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                  <div className="input-container">
                  <input type="email" className="form-control ps-5" placeholder="First Name"/>
                      <img src="assets/img/userBlack.png" className="input-img" alt=""/>
                  </div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                  <div className="input-container">
                  <input type="email" className="form-control ps-5" placeholder="Last Name"/>
                      <img src="assets/img/userBlack.png" className="input-img" alt=""/>
                  </div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                  <div className="input-container">
                  <input type="email" className="form-control ps-5" placeholder="Email Address"/>
                      <img src="assets/img/email.png" className="input-img" alt=""/>
                  </div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                  <div className="input-container">
                  <input id="password-field" type="password" className="form-control ps-5" placeholder="Password"/>
				  <img src="assets/img/password.png" className="input-img pass" alt=""/>
				  <span toggle="#password-field" className="pass-view field-icon toggle-password"></span>
				  </div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                  <div className="input-container">
                  <input id="password-field" type="password" className="form-control ps-5" placeholder="Confirm Password"/>
				  <img src="assets/img/password.png" className="input-img pass" alt=""/>
				  <span toggle="#password-field" className="pass-view field-icon toggle-password"></span>
				  </div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 text-center">
				  <a href="curriculum-registered.html" className="btn btn-submit w-75">Sign up</a>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 text-center">
				  <div className="orLine"><span className="orLog">or</span></div>
			  </div>
                      
			  <div className="form-group col-sm-12 col-md-12 text-center">
				  <p className="loginwithEmailBtn btn w-75">Sign with Phone Number</p>
			  </div>
                      
			  <div className="form-group col-sm-12 col-md-12 text-center">
				  <div className="orLine"><span className="orLog signOr">or use one of these option</span></div>
			  </div> 
			  <div className="form-group col-sm-12 col-md-12 text-center">
				  <div className="d-flex justify-content-center align-items-center gap-3 my-3">
                  <img src="assets/img/facebook.png" alt="" />
				  <img src="assets/img/Google.png" alt="" />
                  </div>
			  </div>
                      
                      
			  <div className="form-group col-sm-12 col-md-12 text-center mb-5">
				  Already have an account ? <span className="theme-color cursor-pointer fw-bold" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#LoginModal">Login</span>
			  </div> 
			  </form>
                  </div> */}
		  </div>
		  </div>
      </div>
    </div>
  </div>
</div>
     
<div className="modal fade" id="ForgotModal" tabindex="-1" aria-labelledby="ForgotModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-xl">
    <div className="modal-content">
      <div className="modal-body p-0">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <div className="row">
		  <div className="col-sm-12 col-md-6 col-lg-6 bgloginImgUser">
			  <div className="logo-bg position-relative">
{/* <!--		          <img src="assets/img/gamehuntlogo.png" className="logo-icon" alt="logo"/>--> */}
			  </div>
		  </div>
		  {/* <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                <div className="form-style pe-2">
                  <form className="row">
			  <div className="form-group col-sm-12 col-md-12 text-center">
			  <h2 className="mdl-ttl">forgot password</h2>
                  <p>In order to retrieve your password, please enter registered email address</p>
			  </div>
                      
                      <div className="form-group col-sm-12 col-md-12 text-center mb-5">
			  <div className=""><img src="assets/img/Forgot.png" className="img-fluid" alt=""/></div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                  <div className="input-container">
                  <input type="email" className="form-control ps-5" placeholder="Email ID"/>
                      <img src="assets/img/email.png" className="input-img" alt=""/>
                  </div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 text-center mb-5">
                  <span className="btn btn-submit" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#OTPModal">Submit</span>
			  </div>
                        
                      
			  <div className="form-group col-sm-12 col-md-12 text-center mb-5">
				  Not register Yet ? <span className="theme-color cursor-pointer fw-bold" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#createAccountModal">Create an Account</span>
			  </div>
			  </form>
                  </div>
		  </div> */}
		  </div>
      </div>
    </div>
  </div>
</div>
    
     
<div className="modal fade" id="OTPModal" tabindex="-1" aria-labelledby="OTPModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-xl">
    <div className="modal-content">
      <div className="modal-body p-0">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <div className="row">
		  <div className="col-sm-12 col-md-6 col-lg-6 bgloginImgUser">
			  <div className="logo-bg position-relative">
{/* <!--		          <img src="assets/img/gamehuntlogo.png" className="logo-icon" alt="logo">--> */}
			  </div>
		  </div>
		  <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                <div className="form-style mt-5 pe-2">
                  <form className="row">
			  <div className="form-group col-sm-12 col-md-12 text-center">
			  <h2 className="mdl-ttl">OTP Verification</h2>
                  <p>Please enter 6 digit code which has been send on your registered email address.</p>
			  </div>
                      
                      <div className="form-group col-sm-12 col-md-12 text-center mb-5">
			  <div className=""><img src="assets/img/OTPVery.png" className="img-fluid" alt=""/></div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                  <div className="passcode-wrapper">
						<input id="codeBox1" type="number" maxlength="1" placeholder="0"/>
						<input id="codeBox2" type="number" maxlength="1" placeholder="0"/>
						<input id="codeBox3" type="number" maxlength="1" placeholder="0"/>
						<input id="codeBox4" type="number" maxlength="1" placeholder="0"/>
						<input id="codeBox5" type="number" maxlength="1" placeholder="0"/>
						<input id="codeBox6" type="number" maxlength="1" placeholder="0"/>
						</div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 text-center mb-3">
                  <p className="otp-timing">00:35</p>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 text-center">
                  <span className="btn btn-submit" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#ResetModal">Verify</span>
			  </div>
                      <div className="form-group col-sm-12 col-md-12 text-center mb-4">
				  <a href="#" className="forgot-pass theme-color">Resend Code</a>
			  </div>
			  </form>
                  </div>
		  </div>
		  </div>
      </div>
    </div>
  </div>
</div>
     
    
      
<div className="modal fade" id="ResetModal" tabindex="-1" aria-labelledby="ResetModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-xl">
    <div className="modal-content">
      <div className="modal-body p-0">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <div className="row">
		  <div className="col-sm-12 col-md-6 col-lg-6 bgloginImgUser">
			  <div className="logo-bg position-relative">
{/* <!--		          <img src="assets/img/gamehuntlogo.png" className="logo-icon" alt="logo">--> */}
			  </div>
		  </div>
		  <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                <div className="form-style mt-5 pe-2">
                    <form className="row">
			  <div className="form-group col-sm-12 col-md-12 text-center">
			  <h2 className="mdl-ttl">reset password</h2>
                  <p>Please reset your password here</p>
			  </div>
                        
			     <div className="form-group col-sm-12 col-md-12 text-center mb-5">
			  <div className=""><img src="assets/img/Password_graphic.png" className="img-fluid" alt=""/></div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                  <div className="input-container">
                  <input id="password-field" type="password" className="form-control ps-5" placeholder="Set New Password"/>
				  <img src="assets/img/password.png" className="input-img pass" alt=""/>
				  <span toggle="#password-field" className="pass-view field-icon toggle-password"></span>
                  </div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                  <div className="input-container">
                  <input id="password-field" type="password" className="form-control ps-5" placeholder="Set Confirm New Password"/>
                      <img src="assets/img/password.png" className="input-img" alt=""/>
                      <span toggle="#password-field" className="pass-view field-icon toggle-password"></span>
                  </div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 text-center">
				  <button className="btn btn-submit">Done</button>
			  </div>
			  </form>
                  </div>
		  </div>
		  </div>
      </div>
    </div>
  </div>
</div>
    
     
<div className="modal fade" id="PartnerModal" tabindex="-1" aria-labelledby="PartnerModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-xl">
    <div className="modal-content">
    <div className="modal-body p-0">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <div className="row fliprow">
            <div className="col-sm-12 col-md-12 col-lg-6 bgloginImgvenue pb-1">
                <div className="logo-bg position-relative"><img src="assets/img/gamehuntlogo.png" className="logo-icon" alt="logo" /></div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 mt-5">
                <ul className="nav nav-pills mb-2 justify-content-center tabsnew" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active text-capitalize" type="button" role="tab">
                            <img src="assets/img/venueName_red.png" className="selectIcon" alt="" /><img src="assets/img/venueName.png" className="UnselectIcon" alt="" />venues
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link text-capitalize" type="button" role="tab"><img src="assets/img/coachIcon_red.png" className="selectIcon" alt="" /><img src="assets/img/coachIcon.png" className="UnselectIcon" alt="" />coach</button>
                    </li>
                </ul>
                <div className="tab-content pe-2" id="pills-tabContent">
                    <div className="form-style mt-3 mt-md-5 px-4">
                        <form className="">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 text-center mb-3"><h2 className="mdl-ttl">Login</h2></div>
                                <div className="col-sm-12 col-md-12 mb-4">
                                    <div className="form-group">
                                        <div className="input-container"><input className="form-control ps-5" placeholder="Email Address" name="email" value="" /><img src="assets/img/email.png" className="input-img" alt="" /></div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 mb-1">
                                    <div className="form-group">
                                        <div className="input-container">
                                            <input id="password-field" type="password" name="password" className="form-control ps-5" placeholder="Password" value="" /><img src="assets/img/password.png" className="input-img" alt="" />
                                            <span className="pass-view field-icon toggle-password"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 text-end mb-1">
                                    <p className="mb-0"><span className="theme-color cursor-pointer fw-bold">Forgot Password?</span></p>
                                </div>
                                <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                                    <div className="input-container">
                                        <div className=""><input className="styled-checkbox" id="RememberMe" type="checkbox" name="RememberMe" /><label for="RememberMe" className="w-100">Remember Me</label></div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 text-center"><button type="submit" className="btn btn-submit mt-0">Login</button></div>
                                <div className="text-center my-5">Not register Yet ? <span className="theme-color cursor-pointer fw-bold">Create an Account</span></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  </div>
</div>
</>
  );
}

export default Main;
