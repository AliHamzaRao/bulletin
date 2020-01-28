import React from 'react';
// import PropTypes from 'prop-types';

const Home2 = props => {
    return (
        <div>
            <div class="container-fluid" id="home2">
      <div class="container">
      <h1 className="text-white text-center">
<i class={props.home2[0].icon} aria-hidden="true"></i>
        <br/> 
    {props.home2[0].h1}</h1>
      <p className="text-center text-white font-weight-light mx-auto">
    {props.home2[0].p}
      </p>
    </div>
    </div>
        </div>
    );
};

// Home2.propTypes = {
    
// };

export default Home2;