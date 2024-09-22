import react, {useState} from 'react';

export default function Testform(props) {
    const handleUpclick =  ()=>{
      // console.log("Upclick"+count)
      let newCount = count.toUpperCase();
      setCount(newCount)
    }
    const handleLowerClick =  ()=>{
      // console.log("Upclick"+count)
      let newCount = count.toLowerCase();
      setCount(newCount)
    }
    const textclear =  ()=>{
      // console.log("Upclick"+count)
      let newCount ='';
      setCount(newCount)
    }
    
 
    const handleOnChange =  (event)=>{
      console.log("Upper case invocked" )
      setCount(event.target.value) 
    }
    const [count, setCount] = useState("");
    // setcount = "nsd" //wrong way to change the state
    // setcount("");  //right way to change the state
   return (
     <>
     <h1>{props.heading}</h1>
        
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" value ={count} onChange = {handleOnChange}  id="exampleFormControlTextarea1" rows="10"></textarea>
</div> 

      <button className="convert uppercase"   style={{ margin: "8px 5px" }}
 onClick= {handleUpclick}>
              ConvertUpperCase 
            </button>
            <button className="convert lowercase mx-3" onClick= {handleLowerClick}>
              ConvertLowercase 
            </button>
            <button className="textclear mx-1" onClick= {textclear}>
            textclear 
            </button>
    <div className="container my3">
      <h3>
        your text count here
       </h3> 
       <p>{count.split(" ").length} words and {count.length}  character</p>
       <li>{0.006 * count.split(" ").length} minutes needed</li>
    </div>
    <h3>
      preview
      </h3>
      <p>
        {count}
      </p>
     </>


   );
}