/**
 * Created by Administrator on 2016/9/28.
 */

var React = require('react');

var InputCom = React.createClass({
    handleClick: function () {
        var myInput = this.refs.myInput;
        var inputValue = myInput.value;
        var lists = this.props.todo;
        if (inputValue !== '') {
            lists.push(inputValue);
            this.props.onAdd(lists);
        }
        myInput.value = '';
    },
    render: function () {
        return (
            <div className="wrap">
                <div className="v-input-group">
                    <div className="v-input-control small inline">
                        <label htmlFor="username">User Name：</label>
                        <input placeholder="Placeholder" className="v-input" id="username" type="text" required ref="myInput"/>
                    </div>
                    <button type="button" className="v-button primary small" onClick={this.handleClick}>按钮</button>
                </div>
            </div>

        )
    }
});

module.exports = InputCom;
