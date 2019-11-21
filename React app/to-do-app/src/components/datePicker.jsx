import React, {Component} from "react";
class DatePicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: "text",
            focus: false
        }
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
    }
   onFocus(){
      this.setState({
        type: "date",
        });
    }
    onBlur(){
        if(this.props.value ===""){
        this.setState({
          type: "text",
          });}
      }
    
    render() { 
        return ( <input type= {this.state.type}
            onFocus={this.onFocus} onChange={this.props.onChange} onBlur={this.onBlur} className="input-in-div" placeholder="When?*" value = {this.props.value}/> );
    }
}
 
export default DatePicker;
