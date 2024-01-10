import React from 'react';

function PriceCard({ planInfo = {} }){

    return (
        <div className="main">

       <div className="container mt-3">
       <div className="price-card">
       <div className="price-information">
        
          <h4> {planInfo.plan}</h4>
         <h1>${planInfo.price}/month</h1> 
         <div class="custom-line"></div>
         <p>{planInfo.features.user}</p>
<p>{planInfo.features.storage}</p>
<p>{planInfo.features.publicProjects}</p>
 <p>{planInfo.features.access}</p>        
<p>{planInfo.features.privateProjects}</p>    
<p>{planInfo.features.phoneSupport}</p>    
<p>{planInfo.features.subdomain}</p>        
 <p> {planInfo.features. monthlyReports}</p> 
    
        
        </div>
       <button className='button'>Buy</button>
       </div>
       
</div>
</div>
    );
}
export default PriceCard;
