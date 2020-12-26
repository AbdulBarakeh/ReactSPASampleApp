import React from 'react';
export default class ViewTwo extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div className="viewTwo">
          {this.props.text}
      </div>
    );
  }
}
