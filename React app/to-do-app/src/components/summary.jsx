import React, { Component } from "react";
class Summary extends Component {
    state = {  }
    render() { 
        return ( <table id="summary-table" className="table">
            <tbody>
        <tr>
            <td className="td-left" colSpan="2">
                All things
            </td>
            <td className="td-right" id = "all-type-quantity">
                0
            </td>
        </tr>
        <tr>
            <td className="td-left">
                Business
            </td>
            <td className="td-center">
                <i className="fas fa-circle fa-xs turquoise-color"></i>
            </td>
            <td className="td-right" id = "business-type-quantity">
                0
            </td>
        </tr>
        <tr>
            <td className="td-left">
                Personal
            </td>
            <td className="td-center">
                <i className="fas fa-circle fa-xs yellow-color"></i>
            </td>
            <td className="td-right" id = "personal-type-quantity">
                0
            </td>
        </tr>
        <tr>
            <td className="td-left">
                Family
            </td>
            <td className="td-center">
                <i className="fas fa-circle fa-xs blue-color"></i>
            </td>
            <td className="td-right"  id = "family-type-quantity">
                0
            </td>
        </tr>
        <tr>
            <td className="td-left" nowrap='true'>
                Work
            </td>
            <td className="td-center">
                <i className="fas fa-circle fa-xs violet-color"> </i>
            </td>
            <td className="td-right"  id = "work-type-quantity">
                0
            </td>
        </tr>
        </tbody>
    </table> );
    }
}
 
export default Summary;