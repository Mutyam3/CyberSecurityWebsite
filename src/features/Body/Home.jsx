import React from 'react'
import hero from '../../assets/hero.gif'
import { useGetcyberSecurityServicesQuery, useGetTeamsLogosQuery } from '../../services/HomeApi'

function Home(){

    const {isLoading:TeamsLogoLoading, data : TeamsLogoData} = useGetTeamsLogosQuery()

    const {isLoading: servicesLoading, data : servicesData} = useGetcyberSecurityServicesQuery()

    const boxdata = [{
       name : 'Comprehensive Protection',
       description : 'Full-spectrum security analysis'
       },

       {
        name : 'Rapid Response',
        description : 'Swift identification and mitigation of threats'
       },
       {
        name : 'Precision Testing',
        description : 'Tailored strategies for your unique infrastructure'
       },

       {name : 'Insightful Reporting',
        description : 'Clear, actionable intelligence for decision-makers'
       }]

    const counterData = [
        {
            logo:'',
            count : 10,
            name : 'Clients'

        },
        {
            logo : '',
            count : 450,
            name : 'Application Secured'
        },
        {
            logo : '',
            count : 2,
            name : 'Patners'
        },
        {
            logo : '',
            count: 100,
            name : 'Client Satisfaction'
        }
    ]

    return (
        <>
        <section className = 'border border-2 d-flex justify-content-between sideMargin rounded' style={{backgroundColor:'#00509d'}}>
               <div className='text-white d-flex flex-column justify-content-evenly header'>

                  <h6>Beyond the Ordinary</h6>

                  <h1>Our Unique Penetration Testing Services for your Business</h1>
                     
                   <h5>Schedule a call with our expert to discuss your specific security needs and how we can help.</h5>

                   <button className='w-50 border border-0 rounded p-2'>Talk to an Expert</button>
               </div>

               <img src={hero} height='500px'/>
             
               
        </section>

        {/* second Section  */}

        <section className=' p-3 ' style={{margin:'0px 50px 0px 50px'}}>

            <h3 className='fs-2 text-center'>Our team has helped in securing</h3>

            <div className='overflow-hidden d-flex h-50  logoMainDiv m-3'>
            <div className='p-3 rounded LogoDiv d-flex'>
                    
                    {
                        !TeamsLogoLoading && TeamsLogoData.map((el)=>{
                            return <img src = {el}  width='175px' height='70px' className =' p-2 m-3 '></img>
                        })
                    }

                    
            </div>

            <div className='p-3 LogoDiv d-flex'>
                    
                    {
                        !TeamsLogoLoading && TeamsLogoData.map((el)=>{
                            return <img src = {el}  width='175px' height='70px' className =' p-2 m-3 '></img>
                        })
                    }

                    
            </div>
            </div>

        </section>


           {/* Third Section */}


        <section className='sideMargin' style={{margin:'0px 50px 0px 50px', padding:'50px'}}>

               <h2 className='text-center'>How Can We Help You?</h2>

               <p className='fs-5 text-center'>Explore our comprehensive cybersecurity services</p>


             <div className='d-flex ' style={{flexWrap:'wrap'}} >
               {
                   !servicesLoading && servicesData.map((el)=>{
                            return (
                                <div className='border border-2 m-3 p-4 rounded' style={{width:'400px'}}>
                                    <div className='d-flex gap-5 align-items-center'>
                                         <div className='border border-2 text-center bg-primary fs-3' style={{borderRadius:'100%', width:'45px' ,height:'45px'}}><i className={el.icon} ></i></div>
                                         <h5>{el.name}</h5>
                                    </div>
                                    <div className='w-100'>
                                         <p>{el.description}</p>
                                    </div>
                                </div>
                            )
                   })
               }

             </div>

        </section>

          {/* Fourth Section */}

        <section className='sideMargin text-center'>

                <div className='text-center'>

                    <h1>About Pentax</h1>
                    <p>Redefining Penetration Testing for the Modern Digital Landscape</p>

                </div>

                <div className='d-flex  p-5 gap-2  align-items-center'>
                    <div className='d-flex flex-column gap-4'>
                       <h6 className='fs-5 p-2 w-75'>At Pentax, we go beyond the ordinary in cybersecurity. Our mission is to provide unparalleled penetration testing services that empower businesses to stay ahead of evolving digital threats. </h6>

                       <h6 className=' fs-5 p-2 w-75'>With a blend of cutting-edge technology and human expertise, we deliver comprehensive security assessments that not only identify vulnerabilities but also provide actionable.</h6> 

                       <h6 className=' fs-5 p-2 w-75'>Our unique approach ensures that your systems are tested against the most sophisticated attack vectors</h6>
                    </div>

                    <div className='border border-1 p-3 rounded text-center' style={{width:'1700px'}}>
                        <h3>Our Approach</h3>

                        <div className='w-100 d-flex ' style={{flexWrap:'wrap'}}>{

                            boxdata.map((el)=>{
                                return (
                                    <div className='d-flex align-items-center p-2 m-2' style={{width:'300px'}}>
                                         <i class="bi bi-shield"></i>
                                         <div className='m-2'>
                                              <h4>{el.name}</h4>
                                              <p>{el.description}</p>
                                         </div>
                                    </div>
                                )
                            })

                        }</div>
                    </div>

                </div>

                <div className = 'p-5'> 

                    <h4 className=' text-center ' style={{margin:'20px 200px 20px 200px'}}>Partner with Farchase to transform your cybersecurity strategy. Let us help you build a resilient defense against the threats of today and tomorrow.</h4>

                    <button className='border border-0 rounded' style={{padding:'15px 40px 15px 40px'}}>Discover Our Services</button>
                </div>


        </section>

        {/* Fifth Section */}


        <section className='sideMargin '>

            <div className='text-center m-5'>
                   <h3>Why Choose Farchase</h3>

                   <h5 className='m-5'>Discover the Farchase difference and see <br/>why leading organizations trust us with their cybersecurity needs.</h5> 

            </div>

            <div className='d-flex justify-content-evenly m-3 p-4 '>

             <div className='p-2 fs-5'>

                <p>Expert team of certified ethical hackers</p>
                <p>Customized testing methodologies</p>
                <p>Comprehensive and actionable reports</p>

             </div>

             <div className='p-2 fs-5'>

                <p>Continuous learning and adaptation to new threats</p>
                <p>Excellent customer support and communication</p>
                <p>Proven track record with satisfied clients</p>

             </div>

            </div>

            <div className='d-flex justify-content-evenly text-center m-5'>

                   {
                      counterData.map((el)=>{
                             return(
                            <div className='border border-2 rounded p-3 m-3 w-75'>
                                <i class="bi bi-people-fill fs-2"></i>
                                {el.count !== 100 && <h2>{el.count}+</h2>}
                                {el.count == 100 && <h2>{el.count} %</h2>}
                                <h4>{el.name}</h4>
                             </div>
             
                             )
                      })
                   }
               
               

            </div>
                
                

                

                

                

               

                

        </section>

        <section>

        </section>

        <section>

        </section>
        </>

    )
}

export default Home