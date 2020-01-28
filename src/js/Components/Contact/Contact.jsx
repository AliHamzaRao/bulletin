import React from 'react';
// import PropTypes from 'prop-types';

const Contact = props => {
    return (
        <div>
            <div class="container-fluid" id="home5">
                <h1 className="text-white text-center">{props.cont[0].h1}</h1>
                <div class="container" >
                    <div class="row">
                        <div className="col-lg-6 col-md-6 col-sm-12  p-2 m-0">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7413.845171010811!2d74.30056799753493!3d31.57183695337618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssecurity+guard+services+lahore!5e0!3m2!1sen!2s!4v1563728801923!5m2!1sen!2s" width={550} height={450} frameBorder={0} style={{border: 0}} allowFullScreen />

                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12  p-5">
                            <h1 className="text-center text-white font-weight-bold">Contact Detail</h1>
                            <ul className="list-unstyled text-white text-center">
                                <li className="font-weight-bold mt-3">Number : {props.cont[0].numbers[0].num}</li>
                                <li className="font-weight-bold mt-3">Email : {props.cont[0].numbers[1].email}</li>
                                <li className="font-weight-bold m-3">Address : {props.cont[0].numbers[2].address}</li>
                            </ul>
                        </div>
                    </div>    
                </div>
            </div>
            <footer className="text-white text-center font-weight-bolder h4" id="home5">{props.cont[0].footer}</footer>
        </div>
    );
};

// Contact.propTypes = {
    
// };

export default Contact;