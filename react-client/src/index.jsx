import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list: [],
      listName:'To Do Liszt',
      search: ''
    };
this.search = this.search.bind(this);
this.fetchTodo = this.fetchTodo.bind(this);
this.deleteTodo = this.deleteTodo.bind(this);
this.postTodo = this.postTodo.bind(this);
  }

  componentDidMount(){
this.fetchTodo();
  }

  fetchTodo(){
    axios
    .get('/api/todolist', {params: {listName:this.state.listName} })
    .then(results=> {
     this.setState({list:results.data})})
    .catch(err=>console.log('axios get component did mout failed ',err))
  }

  postTodo(e){
         e.preventDefault();
    // console.log('made it to post', input);
    axios
    .post('/api/todolist', {
      name: this.state.listName,
      listName: this.state.search
    })
    .then(results=> {
       this.setState({list:[].concat(this.state.list, results.data)})})
    .catch(err=>console.log('errrrrrrra', err))
  }

  deleteTodo(todo){

    console.log('got to delete func');
    axios
    .delete('/api/todolist', {params:{listName:todo}})
    .then(()=>this.fetchTodo())
    .catch(err=>console.log('delete didnt work', err))
  }

  handleInput(e){
    this.setState({search:e.target.value});
  }

  search(input){
    axios
    .get('/todos', {
      params: {input}
    })
    .then(results=> this.setState({list:results}))
    .catch(err=>console.log('axios get failed ',err))
  }

  render(){
    return(
      <div>
      <h1>List Items</h1>
      <input onKeyUp={e=>this.setState({search:e.target.value})} type="text" placeholder="todo" />
      <button onClick={e=>this.postTodo(e)}  type="submit">Add todo</button>
      <List delete={this.deleteTodo} items={this.state.list}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
