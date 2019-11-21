import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {
             allTasksValue: 0,
        };
          
      }
      componentDidMount() {
         console.log(this.props.subjects);
      } 
     render() { 
        return ( <table id="summary-table" className="table">
            <tbody>
      
        <tr>
            <td className="td-left" colSpan="2">
                All things
            </td>
            <td className="td-right" id = "all-type-quantity">
               {this.props.subjects.reduce((sum, current) => sum + current.value, 0)}
            </td>
        </tr>
        {this.props.subjects.map(item=>{
           return <tr key = {item.name}>
              <td className="td-left">
                   {item.name}
             </td>
             <td className="td-center">
             <FontAwesomeIcon icon="circle" size="xs" className={item.color}/>
             </td>
             <td className="td-right">
              {item.value}
             </td>
            </tr> 
            }        
         )
        } 
        </tbody>
    </table> );
    }
}
 
export default Summary;