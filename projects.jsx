import React, { useState } from 'react';
import "./featuredProjects.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
   const Projects=()=>{
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
              {
                id:"7",
                name:"To-Do List",
              profileImg:"/todo-list.png",
              rating:"Html , CSS , JavaScript",
              liveLink:"https://mohithmalla.github.io/todo-list/",
              gitLink:"https://github.com/MohithMalla/todo-list",
              },
              {
                id:"8",
                name:"Sliding Image Gallery",
              profileImg:"/image-slider.png",
              rating:"Html , CSS , JavaScript",
              liveLink:"https://mohithmalla.github.io/imageslider/",
              gitLink:"https://github.com/MohithMalla/imageslider",
              },
              {
                id:"9",
                name:"Civica",
              profileImg:"/civica.png",
              rating:"React , AIML ,Python,Gemini AI,API",
              liveLink:"https://sites.google.com/view/civica6",
              gitLink:"https://sites.google.com/view/civica6",
              },
              {
                id:"10",
                profileImg:"/tiger-dragongame.png",
                rating:"Html , CSS , JavaScript",
                name:"Dragon - Tiger Game",
                liveLink:"https://github.com/MohithMalla/tiger-dragon-game",
                gitLink:"https://github.com/MohithMalla/tiger-dragon-game",
              },
              {
                id:"12",
                name:"Amazon HomePage",
              profileImg:"/amazon-homepage.png",
              rating:"Html , Css",
              liveLink:"https://mohithmalla.github.io/amazon-homepage/",
              gitLink:"https://github.com/MohithMalla/amazon-homepage",
              },
              {
                id:"11",
                profileImg:"/flipkart-homepage.png",
                rating:"Html , Css",
                name:"Flipkart HomePage ",
                liveLink:"https://mohithmalla.github.io/flipkart-homepage/",
                gitLink:"https://github.com/MohithMalla/flipkart-homepage",
              },
              
              {
                id:"12",
                name:'HomeWork Helper',
                profileImg:'https://npr.brightspotcdn.com/dims4/default/7adc660/2147483647/strip/true/crop/2048x858+0+0/resize/880x369!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fkmuw%2Ffiles%2F201804%2Fisle_of_dogs.jpg',
                rating:"React , AI/ML , Python , Gemini API ",
                liveLink:"#",
                gitLink:"#",
              },
              {
                id:"13",
                profileImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTecuXHyo4QwcRtPLMk8CXXMTlhukjcq352uA&s",
                rating:"Html , CSS , JavaScript",
                name:"QR Generator",
                liveLink:"#",
                gitLink:"#",
              },
              {
                id:"14",
                name:"Quiz Game",
              profileImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXOjDMNcLgrtKHZeBnYTn39eeTYv69y-O60Q&s",
              rating:"Html , CSS , JavaScript",
              liveLink:"#",
              gitLink:"#",
              },
              
        ]);
    
    return (
      <div className='container'>
        <h1 className='projecttitles'>All Projects</h1>
        <div className="underline"></div>
        <div className="featuredprojects">
          {data.map((eachObj, index) => {
            const { name, profileImg, rating, id,liveLink ,gitLink} = eachObj;
            return (
              <Movies
                name={name}
                profileImg={profileImg}
                rating={rating}
                key={id} // Use unique ID for key
                id={id}
                gitLink={gitLink}
                liveLink={liveLink}
              />
            );
          })}
        </div>
      </div>
    );
    };
    
    const Movies = ({ name, profileImg, rating,liveLink,gitLink}) => {
    return (
      <span className='movie_gallery'>
        <img className='image' src={profileImg} alt='img' />
        <h1>{name}</h1>
        <div className="stack">
        <h3 className='techstack'> Tech Stack :</h3>
        <p>{rating}</p></div>
        <div className="links">
            <div className="live">
        <h2> Live Link</h2>
        <a href={liveLink} target='blank'>
        <FontAwesomeIcon className='link' icon={faArrowUpRightFromSquare} />
        </a></div>
        <div className="github">
        <h2>Github Link</h2>
        <a href={gitLink} target='blank'>
        <FontAwesomeIcon className='link' icon={faArrowUpRightFromSquare} />
        </a></div>
        </div>
      </span>
    );
    };
    

export default Projects;