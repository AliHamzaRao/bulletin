import React from "react";
const Home = props => {
  return (
    <div>
    <div class="container-fluid" id="home">
      <div class="container">
      <h1 className="text-white text-center">
        <i class=
    {props.home[0].icon} aria-hidden="true"></i>
        <br/> 
    {props.home[0].h1}</h1>
      <p className="text-center text-white font-weight-light mx-auto">
    {props.home[0].p}
      </p>
    </div>
    </div>
    </div>
  );
};
export default Home;
