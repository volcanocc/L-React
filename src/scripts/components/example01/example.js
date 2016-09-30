/**
 * Created by Administrator on 2016/9/28.
 */

var React = require('react');
var GetTime = require('./getTime.js');

var Example = React.createClass({
    getInitialState: function () {
        var that = this;
        setInterval(function () {
            var time = new Date();
            that.setState(time)
        },500);
        return (
            {time: new Date()}
        )
    },
    render: function () {
        return (
            <GetTime data={new Date()}/>
        )
    }
});

module.exports = Example;
