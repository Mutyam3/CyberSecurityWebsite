import React from 'react'
import { Link } from 'react-router-dom'
import HoverDiv from './HoverDiv'


function Navbar(){

    const subNavDiv = [
                      {
                          ourStory :'Our Story',
                          ourStoryPath : 'aboutus/ourstory',
                          career : 'Career',
                          careerPath : 'aboutus/carry'
                      },
                      {  
                          webAppPenTesting : 'Web App Pentesting',
                          webAppPenTestingPath : 'services/web-app-pentesting',
                          mobileAppPenTesting : 'Mobile App Pentesting',
                          mobileAppPenTestingPath : 'services/mobile-app-pentesting',
                          bugBountyManagement : 'Bug Bounty Management',
                          bugBountyManagementPath : 'services/bug-bounty-management'
                      },
                    
                    ]


    return (
        <section className='border border-dark p-2  rounded d-flex justify-content-around align-items-center sideMargin' style={{position : 'sticky', top:'0%'}}>
                
              <div className='m-3'>
                <Link to='/home' className='navbox'><h3>Pentax</h3></Link>

              </div>

              <div className='d-flex justify-content-between align-items-center w-50 ' >
                    <li type='none' className='fs-5 navbox hoverDiv'>About Us <HoverDiv  hoverVarZero = {subNavDiv[0]}/></li>
                    <li type='none' className='fs-5 navbox hoverDiv'>Services <HoverDiv hoverVarOne = {subNavDiv[1]}/></li>
                    <Link to='/our-work' className='navbox'><li type='none' className='fs-5'>Our Work</li></Link>
              </div>

              <div className=''>

                  <Link to='/contactus' className='navbox m-2 p-2 border border-dark rounded navbutton'>Contact Us</Link>

              </div>

        </section>
    )
}

export default Navbar