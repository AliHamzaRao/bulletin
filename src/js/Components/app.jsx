import React ,{Component}from 'react';
// import data from "./data"
// import Prenav from "./pre-nav/prenav"
import Nav from "./nav/nav"
import Home from "./home/home"
import Home2 from './Home2/Home2';
import Home3 from './Home3/Home3';
import Home4 from './Home4/Home4';
import Contact from './Contact/Contact';
import axios from "axios"
class App extends Component{
    state={
        data:[]
    }
    componentDidMount(){
        axios.get('/api').then(res =>{
            console.log(res);
            this.setState({
                data : [...res.data]
            })
        })
    }
    render(){
        if(this.state.data[0]){
            console.log('code is working')
            return(
                // <div>
                <React.Fragment>                    
                {/* <Prenav prenav={this.state.data[0].pre_nav}/> */}
                <Nav nav={this.state.data[0].nav} />
                    <Home home={this.state.data[0].header} />
                    <Home2 home2={this.state.data[0].header2}/>

                    <Home3 home3={this.state.data[0].header3}/>
                    <Home4 home4={this.state.data[0].header4} />
                    <Contact cont={this.state.data[0].contact_detail}/> 
                    {/* // </div> */}
                    </React.Fragment>
            )
        }
        else{
            return 'hello lakh di lanat'
        }

}
}
export default App;