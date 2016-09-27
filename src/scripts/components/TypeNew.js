/**
 * Created by Administrator on 2016/9/27.
 */

var React = require('react');

var TypeNew = React.createClass({
    handleAdd: function (e) {
        e.preventDefault();
        var newthing = this.refs.inputnew.value.trim();
        var rows = this.props.todo;
        if (newthing != '') {
            rows.push(newthing);
            this.props.onAdd(rows);
        }
        this.refs.inputnew.value = '';

    },

    render: function () {
        return (
            <form onSubmit={this.handleAdd}>
                <input ref="inputnew" type="text" placeholder="type a newthing todo" id="new-todo"/>
            </form>
        )
    }
});

module.exports = TypeNew;
