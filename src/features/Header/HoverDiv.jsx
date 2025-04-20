import React from 'react'
import { Link } from 'react-router-dom'

function HoverDiv({hoverVarZero,hoverVarOne, hoverVarTwo}){

    // console.log(hoverVarZero)
    // console.log(hoverVarOne)
    // console.log(hoverVarTwo)
    
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
                     <Link className='navbox' to='services/api-pentesting'><li className='sublistbox p-1 d-flex justify-content-between' style={{  borderBottom:'1px solid black'}}>{hoverVarOne.apiPentesting}<i class="bi bi-arrow-right"></i></li></Link>
                     <Link className='navbox' to='services/cloud-pentesting'><li className='sublistbox p-1 d-flex justify-content-between' style={{  borderBottom:'1px solid black'}}>{hoverVarOne.cloudPentesting}<i class="bi bi-arrow-right"></i></li></Link>
                     <Link className='navbox' to='services/external-networking-pentesting'><li className='sublistbox p-1 d-flex justify-content-between' style={{  borderBottom:'1px solid black'}}>{hoverVarOne.externalNetworkPentesting}<i class="bi bi-arrow-right"></i></li></Link>
                     <Link className='navbox' to='services/source-code-review'><li className='sublistbox p-1 d-flex justify-content-between' style={{  borderBottom:'1px solid black'}}>{hoverVarOne.sourceCodeReview}<i class="bi bi-arrow-right"></i></li></Link>
                     <Link className='navbox' to='services/bug-bounty-management'><li className='sublistbox p-1 d-flex justify-content-between'>{hoverVarOne.bugBountyManagement}<i class="bi bi-arrow-right"></i></li></Link>
                  </>
           }

           {

            hoverVarTwo && 
                <>
                   <Link className='navbox' to='products'><li className='sublistbox p-1 d-flex justify-content-between'>{hoverVarTwo.vulnhut}<i class="bi bi-arrow-right"></i></li></Link>
                </>
           }
           

        </section>
    )
}

export default HoverDiv