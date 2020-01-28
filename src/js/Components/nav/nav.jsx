import React from "react"
const Nav = props =>{
    let res = props.nav[0].nav_link.map((item, index) => {
        return (
          <li className="navbar-item" key={index} id="ulh">
            <a href="#" className="nav-link text-muted" id="anchor">
              {item.link}
            </a>
          </li>
        );
      });
    
      return (
        <div>
          <nav className="navbar navbar-expand-lg d-flex shadow fixed-top p-2" id="nav">
            <a href="" className="navbar-brand d-flex " >
            <img src={props.nav[0].logo_img} style={{height:"100px",filter:"invert(100%)"}} />
            <h1 className=" my-auto text-white" id="h1">{props.nav[0].logo}</h1>
            </a>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#header"
            >
              <span className="navbar-toggler-icon ">
                  <i class="fa fa-bars text-black" aria-hidden="true"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse"   id="header">
              <ul className="navbar-nav ml-auto">
                {res}
              </ul>
            </div>
          </nav>
        </div>
      );
};
export default Nav