import React from 'react';
import {Todo} from './Todo';
import ReactDOM from 'react-dom';
export class TodoList extends React.Component {
    render() {
      const todoList=this.props.todoList;
      const listData= todoList.map((dat,num)=>
       <li key ={'dat_'+num}>
       <Todo text ={dat.text}
        priority ={dat.priority}
        dueDate={dat.dueDate} />
        </li>
        );
      return <ul>{listData}</ul>
    }



}