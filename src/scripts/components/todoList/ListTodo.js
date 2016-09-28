/**
 * Created by Administrator on 2016/9/27.
 */

var React = require('react');

var InputCom = require('./InputCom.js');
var ShowList = require('./ShowList.js');

var ListTodo = React.createClass({
    getInitialState: function () {
        return ({
            list: []
        })
    },
    handleChange: function (lists) {
        this.setState({list: lists});
        console.log(this.state.list)
    },
    render: function () {
        return (
            <div>
                <InputCom onAdd={this.handleChange} todo={this.state.list} />
                <ShowList onDel={this.handleChange} todo={this.state.list} />
            </div>
        )
    }
});

module.exports = ListTodo;
