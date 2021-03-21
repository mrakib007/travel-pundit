import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './Transport.css';
import {Map,InfoWindow,Marker,GoogleApiWrapper} from 'google-maps-react';
const Transport = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    let showResult;
    let result1,result2
    const handleSearch = (event) =>{
        
        if (event.target.name === "from" && event.target.name === "to" ) {
            result1 = event.target.value;
            result2 = event.target.value;
            showResult = true;
          }
    }

    return (
        <div className="container">
            <div className="row mt-5 ">
            {!showResult&&(
                <div className="col-md-4 box-style">
                    <p>Pick From</p>
                <input className="form-control" type="text" name="from" onBlur={handleSearch} required placeholder="From" />
                <br />
                <p>Drop To</p>
                <input className="form-control" type="text" name="to" onBlur={handleSearch}  placeholder="To"required></input>
                <br></br>
                <button className="btn-success form-control" onClick={handleSearch} >Search</button>
                </div>
                )}
        
                <div className="col-md-6"> 
                 {/* <Map google={this.props.google} zoom={14}>
                     <Marker onClick={this.onMarkerClick} name= {'Current location'}>
                     </Marker>
                     <InfoWindow onClose= {this.onInfoWindowClose}>
                         {/* <div>
                             <h1>{this.state.selectedPlace.name}</h1>
                         </div> */}
                     {/* </InfoWindow>
                 </Map> */} 
                </div>
            </div>
        </div>
    );
};

export default
//  GoogleApiWrapper({
//     apiKey: ("AIzaSyBxOxwAxyejtjJ69BvdNSQAhoW3w_9ML88")
// })
 (Transport);
