/**
 * Created by Administrator on 2016/9/29.
 */


var React = require('react');

var Form = React.createClass({
    getInitialState: function () {
        return (
            {value: 'Hello!'}
        )
    },
    handleChange: function (event) {
        this.setState({
            value: event.target.value
        });
    },
    render: function () {
        return (
            <div className="row">
                <div className="v-grid-5">
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <p>{this.state.value}</p>
                </div>
            </div>
        )
    }
});

module.exports = Form;
