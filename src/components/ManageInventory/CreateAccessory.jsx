import React from 'react'
import "./createAccess.scss";
import Sidebar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';

const CreateAccessory = () => {
  return (
    <div>
    
         <div className="card border-primary col-11 " style={{marginLeft:"50px",marginTop:"50px"}}>
  <div  className="card-header">  
  <h5 className="card-title">CREATE NEW ACCESSORY LIST</h5>
  <div style={{marginLeft:"600px"}} class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary"><Link to="/accessory">Accessory list</Link></button>
  <button type="button" class="btn btn-outline-primary">Create Accessory</button>
 
</div>
</div>
  {/* <div className="card-body ">
    
    
<div className="container">

    <form>
  <div style={{display:"flex"}}>
    
  <div  className="input-wrapper col-md-6" >
  <label htmlFor="first">Accessory Name</label>
  <input placeholder="Accessory Name" type="text" />
</div>

<div style={{height:"50px",marginLeft:"10px",marginTop:"10px"}} class="input-group">
  <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option selected>Unit Name</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <button class="btn btn-outline-secondary" type="button">+</button>
</div>
  </div>

  <div style={{display:"flex"}}>
    
  <div  className="input-wrapper col-md-6 " >
  <label htmlFor="first">Unit Price</label>
  <input placeholder="Unit Price" type="text" />
</div>

<div  className="input-wrapper col-md-6">
  <label htmlFor="first">Description</label>
  <input placeholder="Description" type="text" />
</div>


  </div>

  


<div style={{padding:"10px"}}>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-primary btn-lg">Save</button>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-outline-secondary btn-lg">Cancel</button>
</div>
</form>
</div>

  </div> */}
        <div className="card-body">
          <form>
            <div className="row mb-2">
              <div className="col input-wrapper">
              <label htmlFor="first">Accessory Name</label>
                <input type="text" className="form-control input-wrapper" placeholder="Name" />

              </div>
              <div className="col input-wrapper">
              <label htmlFor="phone">phone</label>

                <input type="text" className="form-control" placeholder="Phone number" />
              </div>
              
            </div>
            <div className="row mb-2">
              <div className="col input-wrapper">
              <label htmlFor="Address">Address</label>

                <input type="text" className="form-control" placeholder="Address" />
              </div>
              <div className="col input-wrapper">
                <select className="form-control">
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            
            </div>
         
        
          </form>
          <div style={{padding:"10px", marginLeft:"300px",marginTop:"10px"}}>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-outline-secondary btn-lg">Cancel</button>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-primary btn-lg">Save</button>
</div>
        </div>
</div>
      
    </div>
  )
}

export default CreateAccessory
