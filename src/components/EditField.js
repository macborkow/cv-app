import React, {Component} from "react";
import './EditField.css';

class EditField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.placeholder,
      tag: props.tag?props.tag:'span',
    }
  }

  handleKeyDown = (e) => {
    this.setState({
      content: e.target.value,
    })
  }

  render() {
    return (
    <span>
      {this.props.mode === "build" ? 
        <input type="text" placeholder={this.state.content} onChange={this.handleKeyDown}></input>
       : 
        React.createElement(this.state.tag, null, this.state.content)
      }
    </span>
    )};
}

export default EditField;
