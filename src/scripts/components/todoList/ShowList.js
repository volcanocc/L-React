/**
 * Created by Administrator on 2016/9/28.
 */

var React = require('react');

var ShowList = React.createClass({

    handleDel: function (e) {
        var delIndex = e.target.getAttribute('data-key');
        this.props.todo.splice(delIndex, 1);
        this.props.onDel(this.props.todo);
    },

    render: function () {
        return (
            <ul className="list-box">
                {
                    this.props.todo.map(function (item, i) {
                        return (
                            <li key={i}>
                                <span className="toggle">
                                    <label>{i}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item}</label>
                                    <button className="v-button secondary mini" onClick={this.handleDel} data-key={i}>删除</button>
                                </span>
                            </li>
                        )
                    }.bind(this))
                }
            </ul>
        )
    }
});

module.exports = ShowList;
