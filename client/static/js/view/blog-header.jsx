
import React from 'react';

var Header = React.createClass({

    render:function () {
        return (
            <div>
                <LeftNav goTech={this.props.goTech} goLiving={this.props.goLiving}/>
                <RightNav goLogin={this.props.goLogin} connectMe={this.props.connectMe}/>
            </div>

        );
    }
});

var LeftNav = React.createClass({
    goTech:function () {
      this.props.goTech()
    },
    goLiving:function () {
      this.props.goLiving()
    },
    render:function () {
        return (
            <ul className="nav navbar-nav">
                <li><a href="#" onClick={this.goTech}>瞎搞技术</a></li>
                <li><a href="#" onClick={this.goLiving}>乱七杂八</a></li>
            </ul>
        );
    }
});


var RightNav = React.createClass({
    getInitialState:function () {
        return{
            nickname:window.sessionStorage.getItem("nickname")
        }
    },
    getDefaultProps:function () {
      return{
          nickname:window.sessionStorage.getItem("nickname")
      }
    },
    componentWillReceiveProps:function () {
        if((!this.state.nickname)&&window.sessionStorage.getItem("nickname")){
            this.setState({
                nickname:window.sessionStorage.getItem("nickname")
            });
        }
    },
    goLogin : function () {
        this.props.goLogin();
    },
    logout:function () {
        window.sessionStorage.clear();
        this.setState({
            nickname:undefined
        })
    },
    connectMe:function () {
      this.props.connectMe.call(this);
    },
    render:function () {

        var beforeLogin = (<li><a href="#" onClick={this.goLogin}>登录注册</a></li>);
        var afterLogin = (
            <li>
                <a>欢迎你，{this.state.nickname}。
                <span style={{"color":"red","cursor":"pointer"}} onClick={this.logout}>注销</span>
                </a>
            </li>
        );
        return (
            <ul className="nav navbar-nav navbar-right">
                {this.state.nickname?afterLogin:beforeLogin}
                <li><a href="#" onClick={this.connectMe}>与我联系</a></li>
            </ul>
        );
    }
});




export default Header;

