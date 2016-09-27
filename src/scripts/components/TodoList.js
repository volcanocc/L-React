/**
 * Created by Administrator on 2016/9/27.
 */

var React = require('react');

var TypeNew = require('./TypeNew.js');
var ListTodo = require('./ListTodo.js');

var TodoList = React.createClass({
    getInitialState: function () {
        return ({
            todolist: []
        })
    },
    handleChange: function (rows) {
        this.setState({todolist: rows});
    },
    render: function () {
        return (
            <div>
                <TypeNew onAdd={this.handleChange} todo={this.state.todolist}/>
                <ListTodo onDel={this.handleChange} todo={this.state.todolist}/>
            </div>
        )

    }

});

module.exports = TodoList;
