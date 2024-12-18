import React from 'react';
import "./intro.css";
import { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
 .introname,.iam{
    font-family: 'Kaushan Script', cursive;
  }
    .info{
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
`;

function Intro() {
  return (
    <section id='intro'>
      <GlobalStyle />
      <div className="introhead">
        <div className="introcontent">
          <span className="introtext"><span className="iam">I'm </span><span className="introname">Mohith</span><br />
            <div className='role'>Website Developer</div>
          </span><br />
          <div className='info'>
            Skilled web developer creating visually appealing, functional websites. Specialized in responsive design for seamless user experiences.
          </div>
          <div className="socialmedia">
            <div className="sm">
              <a target='blank' href='http://www.linkedin.com/in/mohithmalla'>
                <img className='smimg' src='/linkedinicon-removebg-preview.png' alt='LinkedIn profile' />
              </a>
            </div>
            <div className="sm">
              <a href='https://github.com/MohithMalla' target='blank'>
                <img className='smimg' src='/githubicon-removebg-preview.png' alt='GitHub profile' />
              </a>
            </div>
            <div className="sm">
              <a target='blank' href='https://www.instagram.com/_malla_.mohith/'>
                <img className='smimg' src='/instaicon-removebg-preview.png' alt='Instagram profile' />
              </a>
            </div>
          </div>
          <Link to='/about'><button className='aboutme'>More About Mohith</button></Link>
        </div>
        <div className="profile">
          <img className='profileimg' src='/newremovedbgprofile.png' alt='profile' />
        </div>
      </div>
    </section>
  );
}

export default Intro;
