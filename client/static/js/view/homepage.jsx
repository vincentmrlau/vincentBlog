
import React from 'react';

var aboutWebsite = [
    '要学习很多的新知识，利用建站来累计工程经验',
    '分享拙见、技术文章以及有意思的东西，期待前辈们的指导与交流',
    '本站还在开发中，会在不定期的进行版本迭代',
    '当前版本使用的技术：webpack，react，bootstrap，nodejs，gulp,mysql 等'
];
var aboutMe = [
    '做过运营策划的web开发菜鸟，偏前端多一点，多多指教',
    '除了爱学习（诚实boy），也会打打篮球弹弹吉他玩玩游戏等',
    '用力只算称职，用心才会优秀，anyway，希望自己保持技术热枕'
];

var homepageData = {
    aboutWebsite:aboutWebsite,
    aboutMe:aboutMe
}

var homepageContainerStyle = {
    "background" : 'url("/static/img/homepage_bg.jpg")',
    "backgroundSize" : 'cover',
    'backgroundPosition' : 'center bottom',
    "minHeight" : $(window).height()-50,
    'marginTop' : '0px',
    'marginBottom' :'0px'
}

var Homepage = React.createClass({
    getDefaultProps : function () {
        var aboutWebsiteData = [];
        for(var i = 0;i<homepageData.aboutWebsite.length;i++){
            var li = <li key={i} className="list-group-item">{homepageData.aboutWebsite[i]}</li>;
            aboutWebsiteData.push(li);
        };
        var aboutMeData = [];
        for(var i = 0;i<homepageData.aboutMe.length;i++){
            var li = <li key={i} className="list-group-item">{homepageData.aboutMe[i]}</li>;
            aboutMeData.push(li);
        };
        return {
            aboutWebsite:aboutWebsiteData,
            aboutMe:aboutMeData
        }
    },
    connectMe:function () {
      this.props.connectMe();
    },
    render:function () {
        return (
          <div className="jumbotron" style={homepageContainerStyle}>
              <div className="container">
                <h1>WELCOME</h1>
                {/*<p>欢迎来到文森特的个人网站</p>*/}
                <p>Welcome to Vincent's website</p>
                <p>
                    <button type="button" className="btn btn-primary btn-lg" data-toggle="collapse" data-target="#more">about »</button>
                </p>
                <div id="more" className="collapse">
                   <div className="panel panel-default">
                         <div className="panel-heading" data-toggle="collapse" data-target="#aboutWebsite">
                          关于本站
                        </div>
                       <div id="aboutWebsite" className="panel-body collapse in" >
                              <ul className="list-group">
                              {this.props.aboutWebsite}
                            </ul>
                         </div>
                         <div className="panel-heading" data-toggle="collapse" data-target="#aboutMe">
                          关于作者
                         </div>
                          <div id="aboutMe" className="panel-body collapse in">
                            <ul className="list-group">
                                <li className="list-group-item">自己也会学着开发一点小插件,放了一部分到<a href="https://github.com/vincentmrlau/wedgets" target="_blank">github</a>上</li>
                                  {this.props.aboutMe}
                             </ul>

                              <button onClick={this.props.connectMe} type="button" className="btn btn-default btn-block">与我联系</button>
                        </div>
                  </div>
                </div>
              </div>
          </div>
        );
    }
});


export default Homepage;
