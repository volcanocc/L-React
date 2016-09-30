/**
 * Created by Administrator on 2016/9/28.
 */

var React = require('react');

var GetTime = React.createClass({
    render: function () {
        return (
            <div>
                <span>{this.props.data.getHours()} : </span>
                <span>{this.props.data.getMinutes()} : </span>
                <span>{this.props.data.getSeconds()}</span>

            </div>
        )
    }
});

module.exports = GetTime;
