/**
 * Created by Administrator on 2016/9/27.
 */

var React = require('react');

var ListTodo = React.createClass({
    handleDel: function (e) {
        var delindex = e.target.getAttribute("data-key");
        this.props.todo.splice(delindex, 1);
        this.props.onDel(this.props.todo);
    },

    render: function () {
        return (
            <ul id="todo-list">
                {
                    this.props.todo.map(function (item, i) {
                        return (
                            <li key={i}>
                                <span className="toggle">
                                    <label>{item}</label>
                                    <button className="destroy" onClick={this.handleDel} data-key={i}>del</button>
                                </span>
                            </li>
                        )
                    }.bind(this))
                }
            </ul>
        )
    }
});

module.exports = ListTodo;
