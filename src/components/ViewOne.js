import React from 'react';
export default class ViewOne extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div className="viewOne">
          {this.props.text}
      </div>
    );
  }
}
