import React from 'react'
import { Link } from "react-router-dom";

const Pricing = () => {
    const pricing=[
      {  imgUrl:"/pricing.jpg",
        title: "QUARTERLY",
        price: 24000,
        length: 3
        
      },

      {  imgUrl:"/pricing.jpg",
        title: "HEAL_YEARLY",
        price: 35000,
        length: 6
        
      },
      {  imgUrl:"/pricing.jpg",
        title: "YEARLY",
        price: 64000,
        length: 12
      },


    ]
  return (
    <section className='pricing'>
        <h1>ELITE EGDE FITNESS PLANS</h1> 
        <div className="wrapper">
            {
                pricing.map(element=>{

return(
    <div className="card" key={element.title}> 
    <img src={element.imgUrl} alt={element.title}/>
    <div className="title"> 
        <h1>{element.title}</h1>
        <h1>PACKAGE</h1>
        <h3>Rs {element.price} </h3>
        <p> For {element.length} Months</p>
        </div>
        <div className="description">
<p>
    <check/> Equipment
</p>
<p>
    <check/> All Day Free Training
</p>
<p>
    <check/> Free Restroom
</p>
<p>
    <check/> 24/7 Skilled Support
</p>
<p>
    <check/> 20 Days Freezing Option
</p>
<Link to={"/"}>Join Now</Link>
        </div>
    </div>
)


                })




                
            }
        </div>
    </section>
  )
}

export default Pricing