import React from "react";
// import PropTypes from 'prop-types';

const Home3 = props => {
  return (
    <div>
      <div class="container-fluid text-center" id="home3">
        <h1 className="text-center text-white">
        <i class="fa fa-picture-o text-white" aria-hidden="true"></i>    
        <br/>    
        {props.home3[0].h1}</h1>
        <div class="container p-5" id="home3_inner">
          <div class="row ">

<div className="col-lg-4 col-md-4 col-sm-12 m-0 p-0"><img src={props.home3[0].images[0].image} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/></div>
<div className="col-lg-4 col-md-4 col-sm-12 m-0 p-0">
<img src={props.home3[0].images[1].image} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>
</div>
<div className="col-lg-4 col-md-4 col-sm-12 m-0 p-0">
<img src={props.home3[0].images[2].image} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>
</div>
              </div>
        </div>
      </div>
    </div>
  );
};

// Home3.propTypes = {

// };

export default Home3;
