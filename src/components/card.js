import { NavLink } from "react-router-dom";
export default function Card(props)
{
    return(
        <>  
            < div className="col location">
                <div className="card" >
                  <img  src={props.data.pic} className="card-img-top imgcard " alt="Skyscrapers"/>
                  <div className="card-body">
                    <h5 className="card-title">Product</h5>
                    <p className="card-text">{props.data.name}</p>
                    <p className="card-text">{props.data.price}</p>
                    
                    <NavLink to="/product" className="btn btn-primary" >Buy</NavLink>
                  </div>
              </div>
             </div>        
        </>
    );

}