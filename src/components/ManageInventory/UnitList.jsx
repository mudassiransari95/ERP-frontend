import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

const UnitList = () => {

    const data = [
        {
          id: 1,
          name: 'rr',
          status: <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
</div>,
          action: <MoreVertIcon/>,
         },
         {
            id: 2,
            name: 'rr',
            status: <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
  </div>,
            action: <MoreVertIcon/>,
           }
        ];

  return (
    <div>
       <div className="row" >
        <div style={{marginLeft:"50px",marginTop:"100px"}} className="col-11">
          <div className="card">
            <div className="card-content">
              <div className="card-body titleHead">
                <h4 className="card-title">
                  UNIT LIST 
                  
                </h4>
                
                <div id='groupBtn' class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">Unit list</button>
            
  <button  type="button" class="btn btn-outline-primary"><Link to="/createUnit">Create Unit list</Link></button>
 
</div>
              </div>
        <div className="table-responsive">
          <table className="table mb-0">
            <thead>
              <tr>
                <th>SL.</th>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
                
                
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.status}</td>
                  <td>{item.action}</td>
                  {/* <td>{item.perDeliveryCharge}</td> */}
                  
                
               
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnitList
