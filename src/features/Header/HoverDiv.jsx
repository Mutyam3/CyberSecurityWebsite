import React from 'react'
import { Link } from 'react-router-dom'

function HoverDiv({hoverVarZero,hoverVarOne}){

    // console.log(hoverVarZero)
    // console.log(hoverVarOne)
    console.log(hoverVarTwo)
    
    return(
        <section className='navboxLi navbox border border-2 rounded'>

            
           {hoverVarZero && 
                <>
                  <Link className='navbox' to='aboutus/ourstory'><li className='sublistbox p-1 d-flex justify-content-between' style={{  borderBottom:'1px solid black'}}>{hoverVarZero.ourStory} <i class="bi bi-arrow-right"></i></li></Link> 
                  <Link className='navbox' to='aboutus/carry'><li className='sublistbox p-1 d-flex justify-content-between'>{hoverVarZero.career}<i class="bi bi-arrow-right"></i></li></Link>
               </>         
           }

           {

            hoverVarOne && 
                  <>
                     <Link className='navbox' to='services/web-app-pentesting'><li className='sublistbox p-1 d-flex justify-content-between' style={{  borderBottom:'1px solid black'}}>{hoverVarOne.webAppPenTesting} <i class="bi bi-arrow-right"></i></li></Link>
                     <Link className='navbox' to='services/mobile-app-pentesting'><li className='sublistbox p-1 d-flex justify-content-between' style={{  borderBottom:'1px solid black'}}>{hoverVarOne.mobileAppPenTesting}<i class="bi bi-arrow-right"></i></li></Link>
                     <Link className='navbox' to='services/bug-bounty-management'><li className='sublistbox p-1 d-flex justify-content-between'>{hoverVarOne.bugBountyManagement}<i class="bi bi-arrow-right"></i></li></Link>
                  </>
           }

           

        </section>
    )
}

export default HoverDiv