import React from 'react';
import Vehicle from '../Vehicle/Vehicle';

const Home = () => {
    const vehicles = [
        {
            title: 'Bike',
            description: 'Enjoy bike ride with experienced drivers.',
            // imgUrl: '../../images/bike.png',
            imgUrl:'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmlrZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
            capacity: 1,
            avatar: 'S',
            price: 119
        },
        {
            title: 'Car',
            description: 'Enjoy your journey with modern cars.',
            // imgUrl: '../../images/car.png',
            imgUrl:'https://media.istockphoto.com/photos/illustration-of-generic-compact-white-car-front-side-view-picture-id1150931120?k=6&m=1150931120&s=612x612&w=0&h=ROHOV8PJH0X3A0VP3CQq3zTLQvn78tBnk8jVR7L1vX8=' ,
            capacity: 4,
            avatar: 'D',
            price: 149
        },
        {
            title: 'Bus',
            description:'Enjoy your travel with experienced driver and luxurious buses.' ,
            // imgUrl: '../../images/bus.png',
            imgUrl: 'https://www.uttaramotorsltd.com/wp-content/uploads/2015/12/LT-Bus.png',
            avatar: 'F',
            price: 199
        },
        {
            title: 'train',
            description: ' Book your train ticket more quickly.And travel safely',
            imgUrl: 'https://s3.india.com/wp-content/uploads/2021/01/mumbai-local-train.jpg',
            avatar: 'F',
            price: 199
        }
    ];
    return (
        <div className='row mt-5 ms-auto'>
            {
                vehicles.map(vehicle=><Vehicle vehicle={vehicle}></Vehicle>)
            }
    
        </div>
    );
};

export default Home;