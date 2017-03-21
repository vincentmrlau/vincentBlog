
import React from 'react';

var ConnectMePageStyle = {
    "background" : 'url("/static/img/homepage_bg.jpg")',
    "backgroundSize" : 'cover',
    'backgroundPosition' : 'center bottom',
    "minHeight" : $(window).height()-50,
    'marginTop' : '0px',
    'marginBottom' :'0px'
}

var ConnectMe = React.createClass({

    render:function () {
        return(
            <div className="jumbotron" style={ConnectMePageStyle}>
                <div className="container">
                    <p style={{textAlign:"center"}}>
                        <a href="mailto:mrliuyiman@foxmail.com">
                            <span className="glyphicon glyphicon-envelope"></span>
                        </a>
                        &nbsp;mrliuyiman@foxmail.com
                    </p>
                    <p  className="row">
                        <img src="/static/img/wxcode.jpg" alt="wechat:mrliuyiman" className="img-thumbnail col-sm-4 col-sm-offset-4 col-xs-6 col-xs-offset-3" />
                    </p>
                </div>
            </div>
        );
    }
});

export default ConnectMe;