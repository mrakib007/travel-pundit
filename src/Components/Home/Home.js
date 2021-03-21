import React, { useEffect,useState } from 'react';
import Vehicle from '../Vehicle/Vehicle';
import FakeData from '../FakeData/FakeData.json';

const Home = () => {

    useEffect(()=>{
        setVehicles(FakeData);
    },[])
    const [vehicles,setVehicles] = useState([]);

    return (
        <div className='row mt-5 ms-auto col'>
            {
                vehicles.map(vehicle=><Vehicle vehicle={vehicle}></Vehicle>)
            }
    
        </div>
    );
};

export default Home;