// import React,{useState} from 'react';

// export default function about() {
  
  
//   const[mystyle,setmystyle]= useState({
//     color:'white',
//     backgroundColor:'black'

//   })
//   const[bntext,setntext]= useState(['enable dark'])
//   setntext('enable dark')
//   const toggleStyle =()=>{
//     if(mystyle.color === 'white'){
//       setmystyle({
//         color:'black',
//         backgroundColor:'white'
//       })
//     }
    
  
//       else{ 
//         setmystyle({
//           color:'white',
//           backgroundColor:'black'
//         })
//     }
//   }
  
//   return (
     
    
//      <div classNameName="container my-5 " style = {mystyle}>
//        <h1> About us</h1>
//          <div className="accordion" id="accordionExample">
//   <div className="accordion-item">
//     <h2 className="accordion-header">
//       <button className="accordion-button" type="button" data-bs-toggle="collapse" style = {mystyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//         Accordion Item #1
//       </button>
//     </h2>
//     <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample"style = {mystyle}>
//       <div className="accordion-body" style = {mystyle}>
//         <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//       </div>
//     </div>
//   </div>
//   <div className="accordion-item">
//     <h2 className="accordion-header">
//       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style = {mystyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//         Accordion Item #2
//       </button>
//     </h2>
//     <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//       <div className="accordion-body">
//         <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//       </div>
//     </div>
//   </div>
//   <div className="accordion-item">
//     <h2 className="accordion-header">
//       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style = {mystyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//         Accordion Item #3
//       </button>
//     </h2>
//     <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//       <div className="accordion-body">
//         <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//       </div>
//     </div>
//   </div>
// </div>

//         <button type="button"  onClick= {toggleStyle} className="btn btn-dark my-3 mx-2">{setmystyle}</button>


//      </div>
//     );
//  }