import React from 'react';
import Card from './Card';


const Cardlist = ({robots}) => {
    const cardarray = robots.map((user, i) => {    /* for loop used here in form of map() to retrieve all the robots */
       return ( <Card 
       key={i} 
       id={robots[i].id} 
       name={robots[i].name} 
       email={robots[i].email}/>
    );
    })
    return(
        <div> 
            {cardarray}  x{/* we can also paste all elements of cardarray in here so that we do not have to use {cardarray} in here */}
        </div>
    );
}
export default Cardlist;