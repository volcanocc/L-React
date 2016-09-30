/**
 * Created by Administrator on 2016/9/29.
 */

var React = require('react');

var Ajax = React.createClass({
    getInitialState: function () {
        return ({
            url: 'https://api.github.com/users/octocat/gists',
            userName: '',
            ID: ''
        })
    },
    componentDidMount: function () {
        /*var that = this;
        $.ajax({
            url: that.state.url,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                var list = data[0]['owner'];
                that.setState({
                    userName: list['login'],
                    ID: list['id']
                })
            },
            error: function (data) {

            }
        });*/

        /*$.get(this.state.url, function(result) {
            var lastGist = result[0];
            if (this.isMounted()) {
                this.setState({
                    userName: lastGist.owner.login,
                    ID: lastGist.html_url
                });
            }
        }.bind(this));*/
        this.handleClick();

    },
    handleClick:function () {
        var that = this;
        $.ajax({
                url: that.state.url,
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    var list = data[0]['owner'];
                    that.setState({
                        userName: list['login'],
                        ID: list['id']
                    })
                },
                error: function (data) {

                }
        });
    },
    render: function () {
        return (
            <div>
                <span>
                    <p>用户名：{this.state.userName}</p>
                    <p>ID：{this.state.ID}</p>
                    <button type="button" onClick={this.handleClick}>按钮</button>
                </span>
            </div>
        );
    }
});

module.exports = Ajax;
