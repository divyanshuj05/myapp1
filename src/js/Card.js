import React from 'react';
const Card = (props) => {  /* we can also replace props by name email this is known as destructor */
    const {name , email, id} = props;
    return( 
    <div className=' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
  
       <img alt='robot' src={`https://robohash.org/${props.id}?200x230`} />
       <div >
        <h2>{name}</h2>
        <p>{email}</p>
       </div>
   
    </div>
    );
}
export default Card;