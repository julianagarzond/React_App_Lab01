import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          //Add your code here to represent a TODO
   <div>
          <h1>{this.props.text}</h1>
          <h1>{this.props.priority}</h1>
          <h1>{this.props.dueDate.toString()}</h1>
   </div>


        );
    }

}