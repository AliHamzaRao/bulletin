import React from 'react';
// import PropTypes from 'prop-types';

const Home4 = props => {
    return (
        <div>
            <div class="container-fluid" id="home4">
                <h1 className="text-white text-center">{props.home4[0].h1}</h1>
                <div class="container">
                    <div class="row">
                        <div className="col-lg-6 col-md-6 col-sm-12  p-5">
                            <p className="text-left text-white font-weight-bolder">Dear User,</p>
                        <p className="text-white text-center font-weight-bold">"{props.home4[0].p}"</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12  p-5">
        <img src={props.home4[0].chair_man_img} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

// Home4.propTypes = {
    
// };

export default Home4;