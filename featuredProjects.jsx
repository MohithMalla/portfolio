import React, { useState } from 'react';
import "./featuredProjects.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
   const FeaturedProjects=()=>{
    const [data]=useState([
      {
        id:"1",
        profileImg:"/mohithportfolio2.png",
        rating:"React , Styled Components",
        name:"Mohith Portfolio",
        liveLink:"#",
        gitLink:"#",
      },
    {
        id:"2",
        name:'Service-market place',
        profileImg:'/service-marketplace.png',
        rating:'React , SupaBase',
        liveLink:"https://service-marketplace-mallamohith.netlify.app/",
        gitLink:"https://service-market.netlify.app/",
      },
      {
        id:"3",
        profileImg:"/resume-generator.png",
        rating:"React , JavaScript",
        name:"Resume Generator",
        liveLink:"https://resume-generator-mallamohith.netlify.app/",
        gitLink:"https://github.com/MohithMalla/resume-generator",
      },
      {
        id:"4",
        name:"Course Navigator",
      profileImg:"/course-navigator.png",
      rating:"Html , CSS , JavaScript",
      liveLink:"https://course-navigator-mallamohith.netlify.app/",
      gitLink:"https://github.com/MohithMalla/Course-Navigator",
      },
      {
        id:"5",
        name:'Weather App',
        profileImg:'/weather-app.png',
        rating:"Html , CSS , JavaScript , API Calls",
        liveLink:"https://weatherapp-mallamohith.netlify.app/",
        gitLink:"https://github.com/MohithMalla/weather",
      },
      {
        id:"6",
        profileImg:"/ppt-generator.png",
        rating:"React , JavaScript , CSS",
        name:"PPT Generator",
        liveLink:"https://pptmaker-mallamohith.netlify.app/",
        gitLink:"https://github.com/MohithMalla/ppt-generator",
      },
          
    ]);

return (
  <div className='container'>
    <h1 className='projecttitles'>Featured Projects</h1>
    <div className="unline"></div>
    <div className="featuredprojects">
      {data.map((eachObj, index) => {
        const { name, profileImg, rating, id,liveLink,gitLink } = eachObj;
        return (
          <Movies
            name={name}
            profileImg={profileImg}
            rating={rating}
            key={id} // Use unique ID for key
            id={id}
            liveLink={liveLink}
            gitLink={gitLink}

          />
        );
      })}
    </div>
    <Link  to='/projects'><button className='allprojects'>All Projects</button></Link>

  </div>
);
};

const Movies = ({ name, profileImg, rating,liveLink,gitLink}) => {
return (
  <span className='movie_gallery'>
  <div className="pro">
    <img className='image' src={profileImg} alt='img' />
    <h1>{name}</h1>
    <div className="stack">
    <h3 className='techstack'> Tech Stack :</h3>
    <p>{rating}</p></div>
    <div className="links">
        <div className="live">
        <a href={liveLink} className='link'  target='blank'><h2> Live Link</h2></a>
    <a href={liveLink} target='blank'>
    <FontAwesomeIcon className='link' icon={faArrowUpRightFromSquare} />
    </a></div>
    <div className="github">
    <a href={gitLink} className='link'  target='blank'><h2>Github Link</h2></a>
    <a href={gitLink} target='blank'>
    <FontAwesomeIcon className='link' icon={faArrowUpRightFromSquare} />
    </a></div>
    </div>
    </div>
    <div className="allpro">
    
    </div>
    </span>
    
);
};

export default FeaturedProjects;