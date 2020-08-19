import React from 'react';
import {Todo} from './Todo';
import {TodoList} from "./TodoList";
import logo from './logo.svg';
import './App.css';

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [{text:"Learn React", priority:5, dueDate: new Date() },
                           {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
                           {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }],
                            text:'',
                            priority:''};
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangePriority = this.handleChangePriority.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div>
         <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                   <code> &lt;h1&gt;TODO React App&lt;/h1&gt;</code>
         </p>
        <form onSubmit={this.handleSubmit}>
          <input
            class="form-control textbox-dg"
            onChange={this.handleChangeText}
            value={this.state.text}
          />
          <br/>
           <input
              class="form-control textbox-dg"
              onChange={this.handleChangePriority}
              value={this.state.priority}
            />
           <br/>
          <button class ="myButton">
            Add
          </button>
           <TodoList todoList={this.state.items} />
        </form>
       </header>

      </div>
    );
  }

  handleChangeText(e) {
    this.setState({ text: e.target.value });
  }

  handleChangePriority(e) {
      this.setState({ priority: e.target.value });
    }

  handleSubmit(e) {

    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      priority :this.state.priority,
      dueDate:new Date(Date.now())
    };

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: '',priority:''
    }));
  }
}