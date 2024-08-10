import React from 'react'
// import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

const AccorderList = () => {
    const data = [
        {
          id: 1,
          invoice: 'rr',
          partyName:'PESO',
          acc:'$12.00',
          unit:'silk',
          qty:'$12.00',
          price:'$12.00',
          ttl: "$"+"",
          action: <MoreVertIcon/>,
         }]
  return (
    <div>
       <div className="row" >
        <div style={{marginLeft:"50px",marginTop:"100px"}} className="col-11">
          <div className="card">
            <div className="card-content">
              <div style={{display:"flex"}} className="card-body titleHead">
                <h4 style={{position:"fixed"}} className="card-title">
                 ACCESSORY ORDER LIST
                  
                </h4>

                <div style={{marginTop:"100px",marginRight:"100px"}} class="dropdown">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    All result
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
                
                <div style={{position:"fixed",marginLeft:"600px"}} id='groupBtn' class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">Accessory list</button>
  <button type="button" class="btn btn-outline-primary"><Link to="/createAccorder">Create Accessory</Link></button>
 
</div>
              </div>
        <div className="table-responsive">
          <table className="table mb-0">
            <thead>
              <tr>
                <th>SL.</th>
                <th>Invoice</th>
                <th>Party name</th>
                <th>Accessories</th>
                <th>Unit</th>
                <th>QTY</th>
                <th>Unit Price</th>
                <th>TTL Amount</th>
                <th>Action</th>
                
                
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.invoice}</td>
                  <td>{item.partyName}</td>
                  <td>{item.acc}</td>
                  <td>{item.unit}</td>
                  <td>{item.qty}</td>
                  <td>{item.price}</td>
                  <td>{item.ttl}</td>
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

export default AccorderList
