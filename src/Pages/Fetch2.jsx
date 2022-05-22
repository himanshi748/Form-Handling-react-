import React from 'react';
import './Fetch.css';

class Fetch2 extends React.Component{
    render(){
        return(
            <div className='cont'>
            <h1>EMPLOYEE FEEDBACK DATA</h1>
            <br/><br/>

            <div id='demo'>
            {this.props.employee.map((value, index) => {
                return (
                    <div key={index} id='demo1'>
                    
                    Name : {value.name} | Department : {value.dept} | Rating : {value.rating}
                    </div>
                    )
                })}
                </div>
                <br/>
                <button onClick={this.props.showEmpData}>Go Back</button>
                </div>
                )
            }
        }

export default Fetch2;
