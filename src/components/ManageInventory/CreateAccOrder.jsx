import React from 'react'
import "./createAccess.scss";
import Sidebar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';

const CreateAccOrder = () => {
  return (
    <div>
     
         <div className="card border-primary col-11 " style={{marginLeft:"50px"}}>
  <div  className="card-header">  
  <h5 className="card-title">CREATE ACCESSORY ORDER LIST</h5>
  <div style={{marginLeft:"600px"}} class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary"><Link to="/createAccorder">Accessory list</Link></button>
  <button type="button" class="btn btn-outline-primary">Create Accessory</button>
 
</div>
</div>
  <div className="card-body ">
    
   
<div className="container">

  <div className='row'>
    
  <div class="col input-wrapper">
    <label>Accessory Name</label>
      <input type="text" class="form-control" placeholder="Accessory name"/>
    </div>
    <div class="col">
    <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option selected>Unit Name</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
    </div>

{/* <div style={{height:"50px",marginLeft:"10px",marginTop:"10px"}} class="input-group">
  <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option selected>Unit Name</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <button class="btn btn-outline-secondary" type="button">+</button>
</div> */}
  </div>

  <div className='row'>
    
  <div  className="col input-wrapper" >
  <label htmlFor="first">Unit Price</label>
  <input placeholder="Unit Price" type="text" class="form-control" />
</div>

<div  className="col input-wrapper">
  <label htmlFor="first">Description</label>
  <input placeholder="Description" type="text" class="form-control" />
</div>


  </div>

  


<div style={{padding:"10px",textAlign:"center"}}>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-primary btn-lg">Save</button>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-outline-secondary btn-lg">Cancel</button>
</div>
</div>

  </div>
</div>
    </div>
  )
}

export default CreateAccOrder
