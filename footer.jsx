import React from 'react'
import { Link } from 'react-router-dom';
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
function Footer() {
  return (
    <div className='foot'>
      <div className="footnavbar">
          <Link to="/" >Home</Link>
          <Link to="/about" >About</Link>
          <Link to="/projects" >Projects</Link>
          <Link to="/articles" >Articles</Link>
      </div>
     <div className="socmedia">
              <div className="sm">
                <a target='blank' href=' www.linkedin.com/in/mohithmalla'><img className='smimg' src='/linkedinicon-removebg-preview.png' alt='profile-image'/></a>
              </div>
              <div className="sm">
                <a href='https://github.com/MohithMalla ' target='blank'><img className='smimg' src='/githubicon-removebg-preview.png' alt='profile-image'/></a>
              </div>
              <div className="sm">
                <a target='blank' href='https://www.instagram.com/_malla_.mohith/'><img className='smimg' src='/instaicon-removebg-preview.png' alt='profile-image'/></a>
              </div>
      </div>
           <pre className='copyright'> <p className='copyrights'>Copyright <FontAwesomeIcon icon={faCopyright} />2024 - 2028 <a href="www.linkedin.com/in/mohithmalla" className="mohithmalla">MohithSai Malla</a> , Inc. All rigths reserved.</p></pre>
  </div>
    
  )
}

export default Footer;