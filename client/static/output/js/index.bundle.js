webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _blogHeader = __webpack_require__(178);

	var _blogHeader2 = _interopRequireDefault(_blogHeader);

	var _homepage = __webpack_require__(179);

	var _homepage2 = _interopRequireDefault(_homepage);

	var _connectMe = __webpack_require__(180);

	var _connectMe2 = _interopRequireDefault(_connectMe);

	var _loginRegister = __webpack_require__(181);

	var _loginRegister2 = _interopRequireDefault(_loginRegister);

	var _techpage = __webpack_require__(183);

	var _techpage2 = _interopRequireDefault(_techpage);

	var _sundriespage = __webpack_require__(184);

	var _sundriespage2 = _interopRequireDefault(_sundriespage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var toConnectMe = function toConnectMe() {
	    _reactDom2.default.render(_react2.default.createElement(_connectMe2.default, null), document.getElementById('mainContent'));
	    $("#blog-header").collapse("hide");
	};
	var goLoginRegister = function goLoginRegister() {
	    _reactDom2.default.render(_react2.default.createElement(_loginRegister2.default, { toHomepage: goHomepage, toHeader: setHeader }), document.getElementById('mainContent'));
	    $("#blog-header").collapse("hide");
	};

	var setHeader = function setHeader() {
	    _reactDom2.default.render(_react2.default.createElement(_blogHeader2.default, { connectMe: toConnectMe, goTech: toTechPage, goLogin: goLoginRegister, goLiving: toSundriesPage, nickname: window.sessionStorage.getItem('nickname') }), document.getElementById('blog-header'));
	};

	var toTechPage = function toTechPage() {
	    _reactDom2.default.render(_react2.default.createElement(_techpage2.default, null), document.getElementById('mainContent'));
	    $("#blog-header").collapse("hide");
	};

	var toSundriesPage = function toSundriesPage() {
	    _reactDom2.default.render(_react2.default.createElement(_sundriespage2.default, null), document.getElementById('mainContent'));
	    $("#blog-header").collapse("hide");
	};

	var goHomepage = function goHomepage() {
	    _reactDom2.default.render(_react2.default.createElement(_homepage2.default, { connectMe: toConnectMe }), document.getElementById('mainContent'));
	    $("#blog-header").collapse("hide");
	};

	$("#goHomepage").click(function () {
	    goHomepage();
	});

	setHeader();

	goHomepage();

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Header = _react2.default.createClass({
	    displayName: "Header",


	    render: function render() {
	        return _react2.default.createElement(
	            "div",
	            null,
	            _react2.default.createElement(LeftNav, { goTech: this.props.goTech, goLiving: this.props.goLiving }),
	            _react2.default.createElement(RightNav, { goLogin: this.props.goLogin, connectMe: this.props.connectMe })
	        );
	    }
	});

	var LeftNav = _react2.default.createClass({
	    displayName: "LeftNav",

	    goTech: function goTech() {
	        this.props.goTech();
	    },
	    goLiving: function goLiving() {
	        this.props.goLiving();
	    },
	    render: function render() {
	        return _react2.default.createElement(
	            "ul",
	            { className: "nav navbar-nav" },
	            _react2.default.createElement(
	                "li",
	                null,
	                _react2.default.createElement(
	                    "a",
	                    { href: "#", onClick: this.goTech },
	                    "\u778E\u641E\u6280\u672F"
	                )
	            ),
	            _react2.default.createElement(
	                "li",
	                null,
	                _react2.default.createElement(
	                    "a",
	                    { href: "#", onClick: this.goLiving },
	                    "\u4E71\u4E03\u6742\u516B"
	                )
	            )
	        );
	    }
	});

	var RightNav = _react2.default.createClass({
	    displayName: "RightNav",

	    getInitialState: function getInitialState() {
	        return {
	            nickname: window.sessionStorage.getItem("nickname")
	        };
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            nickname: window.sessionStorage.getItem("nickname")
	        };
	    },
	    componentWillReceiveProps: function componentWillReceiveProps() {
	        if (!this.state.nickname && window.sessionStorage.getItem("nickname")) {
	            this.setState({
	                nickname: window.sessionStorage.getItem("nickname")
	            });
	        }
	    },
	    goLogin: function goLogin() {
	        this.props.goLogin();
	    },
	    logout: function logout() {
	        window.sessionStorage.clear();
	        this.setState({
	            nickname: undefined
	        });
	    },
	    connectMe: function connectMe() {
	        this.props.connectMe.call(this);
	    },
	    render: function render() {

	        var beforeLogin = _react2.default.createElement(
	            "li",
	            null,
	            _react2.default.createElement(
	                "a",
	                { href: "#", onClick: this.goLogin },
	                "\u767B\u5F55\u6CE8\u518C"
	            )
	        );
	        var afterLogin = _react2.default.createElement(
	            "li",
	            null,
	            _react2.default.createElement(
	                "a",
	                null,
	                "\u6B22\u8FCE\u4F60\uFF0C",
	                this.state.nickname,
	                "\u3002",
	                _react2.default.createElement(
	                    "span",
	                    { style: { "color": "red", "cursor": "pointer" }, onClick: this.logout },
	                    "\u6CE8\u9500"
	                )
	            )
	        );
	        return _react2.default.createElement(
	            "ul",
	            { className: "nav navbar-nav navbar-right" },
	            this.state.nickname ? afterLogin : beforeLogin,
	            _react2.default.createElement(
	                "li",
	                null,
	                _react2.default.createElement(
	                    "a",
	                    { href: "#", onClick: this.connectMe },
	                    "\u4E0E\u6211\u8054\u7CFB"
	                )
	            )
	        );
	    }
	});

	exports.default = Header;

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var aboutWebsite = ['要学习很多的新知识，利用建站来累计工程经验', '分享拙见、技术文章以及有意思的东西，期待前辈们的指导与交流', '本站还在开发中，会在不定期的进行版本迭代', '当前版本使用的技术：webpack，react，bootstrap，nodejs，gulp,mysql 等'];
	var aboutMe = ['做过运营策划的web开发菜鸟，偏前端多一点，多多指教', '除了爱学习（诚实boy），也会打打篮球弹弹吉他玩玩游戏等', '用力只算称职，用心才会优秀，anyway，希望自己保持技术热枕'];

	var homepageData = {
	    aboutWebsite: aboutWebsite,
	    aboutMe: aboutMe
	};

	var homepageContainerStyle = {
	    "background": 'url("/static/img/homepage_bg.jpg")',
	    "backgroundSize": 'cover',
	    'backgroundPosition': 'center bottom',
	    "minHeight": $(window).height() - 50,
	    'marginTop': '0px',
	    'marginBottom': '0px'
	};

	var Homepage = _react2.default.createClass({
	    displayName: 'Homepage',

	    getDefaultProps: function getDefaultProps() {
	        var aboutWebsiteData = [];
	        for (var i = 0; i < homepageData.aboutWebsite.length; i++) {
	            var li = _react2.default.createElement(
	                'li',
	                { key: i, className: 'list-group-item' },
	                homepageData.aboutWebsite[i]
	            );
	            aboutWebsiteData.push(li);
	        };
	        var aboutMeData = [];
	        for (var i = 0; i < homepageData.aboutMe.length; i++) {
	            var li = _react2.default.createElement(
	                'li',
	                { key: i, className: 'list-group-item' },
	                homepageData.aboutMe[i]
	            );
	            aboutMeData.push(li);
	        };
	        return {
	            aboutWebsite: aboutWebsiteData,
	            aboutMe: aboutMeData
	        };
	    },
	    connectMe: function connectMe() {
	        this.props.connectMe();
	    },
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'jumbotron', style: homepageContainerStyle },
	            _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'WELCOME'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    'Welcome to Vincent\'s website'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    _react2.default.createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-primary btn-lg', 'data-toggle': 'collapse', 'data-target': '#more' },
	                        'about \xBB'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { id: 'more', className: 'collapse' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'panel panel-default' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'panel-heading', 'data-toggle': 'collapse', 'data-target': '#aboutWebsite' },
	                            '\u5173\u4E8E\u672C\u7AD9'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'aboutWebsite', className: 'panel-body collapse in' },
	                            _react2.default.createElement(
	                                'ul',
	                                { className: 'list-group' },
	                                this.props.aboutWebsite
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'panel-heading', 'data-toggle': 'collapse', 'data-target': '#aboutMe' },
	                            '\u5173\u4E8E\u4F5C\u8005'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'aboutMe', className: 'panel-body collapse in' },
	                            _react2.default.createElement(
	                                'ul',
	                                { className: 'list-group' },
	                                _react2.default.createElement(
	                                    'li',
	                                    { className: 'list-group-item' },
	                                    '\u81EA\u5DF1\u4E5F\u4F1A\u5B66\u7740\u5F00\u53D1\u4E00\u70B9\u5C0F\u63D2\u4EF6,\u653E\u4E86\u4E00\u90E8\u5206\u5230',
	                                    _react2.default.createElement(
	                                        'a',
	                                        { href: 'https://github.com/vincentmrlau/wedgets', target: '_blank' },
	                                        'github'
	                                    ),
	                                    '\u4E0A'
	                                ),
	                                this.props.aboutMe
	                            ),
	                            _react2.default.createElement(
	                                'button',
	                                { onClick: this.props.connectMe, type: 'button', className: 'btn btn-default btn-block' },
	                                '\u4E0E\u6211\u8054\u7CFB'
	                            )
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

	exports.default = Homepage;

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ConnectMePageStyle = {
	    "background": 'url("/static/img/homepage_bg.jpg")',
	    "backgroundSize": 'cover',
	    'backgroundPosition': 'center bottom',
	    "minHeight": $(window).height() - 50,
	    'marginTop': '0px',
	    'marginBottom': '0px'
	};

	var ConnectMe = _react2.default.createClass({
	    displayName: 'ConnectMe',


	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'jumbotron', style: ConnectMePageStyle },
	            _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'p',
	                    { style: { textAlign: "center" } },
	                    _react2.default.createElement(
	                        'a',
	                        { href: 'mailto:mrliuyiman@foxmail.com' },
	                        _react2.default.createElement('span', { className: 'glyphicon glyphicon-envelope' })
	                    ),
	                    '\xA0mrliuyiman@foxmail.com'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    { className: 'row' },
	                    _react2.default.createElement('img', { src: '/static/img/wxcode.jpg', alt: 'wechat:mrliuyiman', className: 'img-thumbnail col-sm-4 col-sm-offset-4 col-xs-6 col-xs-offset-3' })
	                )
	            )
	        );
	    }
	});

	exports.default = ConnectMe;

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _clientConfigs = __webpack_require__(182);

	var _clientConfigs2 = _interopRequireDefault(_clientConfigs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var domain = _clientConfigs2.default.domain;

	var style = {
	    "background": 'url("/static/img/homepage_bg.jpg")',
	    "backgroundSize": 'cover',
	    'backgroundPosition': 'center bottom',
	    "minHeight": $(window).height() - 50,
	    'marginTop': '0px',
	    'marginBottom': '0px'
	};
	var formStyle = {
	    marginTop: "50px",
	    paddingBottom: "10px"
	};
	var Login = _react2.default.createClass({
	    displayName: 'Login',

	    getInitialState: function getInitialState() {
	        return {
	            emailWarningStyle: "text-muted",
	            emailWarning: "Enter your email please",
	            pswWarningStyle: "text-muted",
	            pswWarning: "Enter your password",
	            commitBtn: false,
	            emailState: false,
	            pswState: false,
	            email: "",
	            psw: ""
	        };
	    },
	    checkEmail: function checkEmail(event) {
	        var emailRexExp = /^([a-zA-Z0-9_-]+@([a-zA-Z0-9_-])+)(\.[a-zA-Z0-9_-]+)+/g;
	        var email = event.target.value;
	        // console.log(emailRexExp.exec(email),email);
	        if (email.match(emailRexExp) == email) {
	            this.setState({
	                email: email,
	                emailState: true,
	                emailWarningStyle: "text-success",
	                emailWarning: "correct email format"
	            }, function () {
	                if (this.state.emailState && this.state.pswState) {
	                    this.setState({
	                        commitBtn: true
	                    });
	                }
	            });
	        } else {
	            this.setState({
	                email: "",
	                emailState: false,
	                emailWarningStyle: "text-danger",
	                emailWarning: "email format error,please check"
	            }, function () {
	                this.setState({
	                    commitBtn: false
	                });
	            });
	        }
	    },
	    checkPsw: function checkPsw(event) {
	        var psw = event.target.value;
	        if (psw) {
	            this.setState({
	                psw: psw,
	                pswState: true,
	                pswWarningStyle: "text-success",
	                pswWarning: "Enter your password"
	            }, function () {
	                if (this.state.emailState && this.state.pswState) {
	                    this.setState({
	                        commitBtn: true
	                    });
	                }
	            });
	        } else {
	            this.setState({
	                psw: "",
	                pswState: false,
	                pswWarningStyle: "text-danger",
	                pswWarning: "password can not be empty"
	            }, function () {
	                this.setState({
	                    commitBtn: false
	                });
	            });
	        }
	    },
	    submit: function submit() {
	        // this.props.submitSuccess();
	        //call loading cover
	        var url = domain + '/user/login';
	        var data = {
	            email: this.state.email,
	            psw: this.state.psw
	        };

	        $.ajax({
	            url: url,
	            type: 'post',
	            data: data,
	            dataType: 'json',
	            success: function (result, status, xhr) {
	                console.log(result);
	                if (result.code == "success") {
	                    window.sessionStorage.setItem('email', result.email);
	                    window.sessionStorage.setItem('nickname', result.nickname);
	                    window.sessionStorage.setItem('createdAT', result.createdAT);
	                    window.sessionStorage.setItem('updatedAT', result.updatedAT);
	                    this.props.submitSuccess();
	                } else if (result.code == "error") {
	                    this.setState({
	                        email: "",
	                        emailState: false,
	                        emailWarningStyle: "text-danger",
	                        emailWarning: "this email is not existed"
	                    }, function () {
	                        this.setState({
	                            commitBtn: false
	                        });
	                    });
	                } else if (result.code == "pswError") {
	                    this.setState({
	                        psw: "",
	                        pswState: false,
	                        pswWarningStyle: "text-danger",
	                        pswWarning: "password error"
	                    }, function () {
	                        this.setState({
	                            commitBtn: false
	                        });
	                    });
	                } else {
	                    this.setState({
	                        pswWarningStyle: "text-danger",
	                        pswWarning: "sorry for server error,try again"
	                    });
	                }
	            }.bind(this),
	            error: function (xhr, status, error) {
	                this.setState({
	                    pswWarningStyle: "text-danger",
	                    pswWarning: "sorry for net work error,try again"
	                });
	            }.bind(this)
	        });
	    },
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                'h3',
	                null,
	                'Please Login'
	            ),
	            _react2.default.createElement('input', { type: 'email', className: 'form-control', required: true, placeholder: 'Email', onInput: this.checkEmail }),
	            _react2.default.createElement(
	                'p',
	                { className: this.state.emailWarningStyle },
	                this.state.emailWarning
	            ),
	            _react2.default.createElement('input', { type: 'password', className: 'form-control', required: true, placeholder: 'password', onInput: this.checkPsw }),
	            _react2.default.createElement(
	                'p',
	                { className: this.state.pswWarningStyle },
	                this.state.pswWarning
	            ),
	            _react2.default.createElement(
	                'button',
	                { type: 'button', className: 'btn btn-success btn-block', disabled: !this.state.commitBtn, onClick: this.submit },
	                'SUBMIT'
	            )
	        );
	    }
	});

	var Register = _react2.default.createClass({
	    displayName: 'Register',


	    getInitialState: function getInitialState() {
	        return {
	            emailWarningStyle: "text-muted",
	            emailWarning: "Enter your email please",
	            pswWarningStyle: "text-muted",
	            pswWarning: "password must contain 6 - 16 characters",
	            nicknameWarningStyle: "text-muted",
	            nicknameWarning: "nickname will show to others",
	            commitBtn: false,
	            emailState: false,
	            pswState: false,
	            nicknameState: false,
	            email: "",
	            psw: "",
	            nickname: ""
	        };
	    },
	    checkEmail: function checkEmail(event) {
	        var emailRexExp = /^([a-zA-Z0-9_-]+@([a-zA-Z0-9_-])+)(\.[a-zA-Z0-9_-]+)+/g;
	        var email = event.target.value;
	        // console.log(emailRexExp.exec(email),email);
	        if (email.match(emailRexExp) == email) {
	            this.setState({
	                email: email,
	                emailState: true,
	                emailWarningStyle: "text-success",
	                emailWarning: "correct email format"
	            }, function () {
	                if (this.state.emailState && this.state.pswState && this.state.nicknameState) {
	                    this.setState({
	                        commitBtn: true
	                    });
	                }
	            });
	        } else {
	            this.setState({
	                email: "",
	                emailState: false,
	                emailWarningStyle: "text-danger",
	                emailWarning: "email format error,please check"
	            }, function () {
	                this.setState({
	                    commitBtn: false
	                });
	            });
	        }
	    },
	    checkPsw: function checkPsw(event) {
	        var psw = event.target.value;
	        if (psw) {
	            this.setState({
	                psw: psw,
	                pswState: true,
	                pswWarningStyle: psw.length > 20 ? "text-danger" : "text-success",
	                pswWarning: psw.length > 20 ? "password must less than 20 characters" : "Enter your password"
	            }, function () {
	                if (this.state.emailState && this.state.pswState && this.state.nicknameState) {
	                    this.setState({
	                        commitBtn: psw.length > 20 ? false : true
	                    });
	                }
	            });
	        } else {
	            this.setState({
	                psw: "",
	                pswState: false,
	                pswWarningStyle: "text-danger",
	                pswWarning: "password can not be empty"
	            }, function () {
	                this.setState({
	                    commitBtn: false
	                });
	            });
	        }
	    },
	    checkNickname: function checkNickname(event) {

	        var nickname = event.target.value;
	        if (!nickname) {
	            this.setState({
	                nickname: "",
	                nicknameState: false,
	                nicknameWarningStyle: "text-danger",
	                nicknameWarning: "nickname can not be null"
	            }, function () {
	                this.setState({
	                    commitBtn: false
	                });
	            });
	        } else if (nickname.length > 16) {
	            this.setState({
	                nickname: nickname,
	                nicknameState: false,
	                nicknameWarningStyle: "text-danger",
	                nicknameWarning: "nickname must less than 16 characters"
	            }, function () {
	                this.setState({
	                    commitBtn: false
	                });
	            });
	        } else {
	            this.setState({
	                nickname: nickname,
	                nicknameState: true,
	                nicknameWarningStyle: "text-success",
	                nicknameWarning: "nickname will show to others"
	            }, function () {
	                if (this.state.emailState && this.state.pswState && this.state.nicknameState) {
	                    this.setState({
	                        commitBtn: true
	                    });
	                }
	            });
	        }
	    },
	    submit: function submit() {
	        var url = domain + '/user/register';
	        var data = {
	            email: this.state.email,
	            psw: this.state.psw,
	            nickname: this.state.nickname
	        };
	        $.ajax({
	            url: url,
	            type: 'post',
	            data: data,
	            dataType: 'json',
	            success: function (result, status, xhr) {
	                console.log(result);
	                if (result.code == 'success') {
	                    window.sessionStorage.setItem('nickname', this.state.nickname);
	                    window.sessionStorage.setItem('email', this.state.email);
	                    this.props.submitSuccess();
	                } else if (result.code == "existed") {
	                    this.setState({
	                        emailWarningStyle: "text-danger",
	                        emailWarning: "this email has been registered"
	                    }, function () {
	                        this.setState({
	                            commitBtn: false
	                        });
	                    });
	                } else if (result.code == 'sqlerror') {
	                    this.setState({
	                        emailWarningStyle: "text-danger",
	                        emailWarning: "sorry for server error,try again"
	                    });
	                }
	            }.bind(this),
	            error: function (xhr, status, error) {
	                this.setState({
	                    emailWarningStyle: "text-danger",
	                    emailWarning: "sorry for net work error,try again"
	                });
	            }.bind(this)
	        });
	    },
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                'h3',
	                null,
	                'Thanks for register'
	            ),
	            _react2.default.createElement('input', { type: 'email', className: 'form-control', required: true, placeholder: 'Email', onInput: this.checkEmail }),
	            _react2.default.createElement(
	                'p',
	                { className: this.state.emailWarningStyle },
	                this.state.emailWarning
	            ),
	            _react2.default.createElement('input', { type: 'password', className: 'form-control', required: true, placeholder: 'password', onInput: this.checkPsw }),
	            _react2.default.createElement(
	                'p',
	                { className: this.state.pswWarningStyle },
	                this.state.pswWarning
	            ),
	            _react2.default.createElement('input', { type: 'text', className: 'form-control', required: true, placeholder: 'nickname', onInput: this.checkNickname }),
	            _react2.default.createElement(
	                'p',
	                { className: this.state.nicknameWarningStyle },
	                this.state.nicknameWarning
	            ),
	            _react2.default.createElement(
	                'button',
	                { type: 'button', className: 'btn btn-success btn-block', disabled: !this.state.commitBtn, onClick: this.submit },
	                'SUBMIT'
	            )
	        );
	    }
	});

	var LoginRegister = _react2.default.createClass({
	    displayName: 'LoginRegister',

	    getInitialState: function getInitialState() {
	        return {
	            login: true
	        };
	    },
	    changeMode: function changeMode() {
	        this.setState({
	            login: !this.state.login
	        });
	    },
	    loginSuccess: function loginSuccess(result) {
	        this.props.toHomepage();
	        this.props.toHeader();
	    },
	    render: function render() {
	        var loginDom = _react2.default.createElement(Login, { submitSuccess: this.loginSuccess });
	        var registerDom = _react2.default.createElement(Register, { submitSuccess: this.loginSuccess });
	        return _react2.default.createElement(
	            'div',
	            { className: 'jumboron', style: style },
	            _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'form',
	                    { action: '/', className: 'panel col-sm-4 col-sm-offset-4', style: formStyle, onKeyDown: function onKeyDown() {
	                            if (event.keyCode == 13) return false;
	                        } },
	                    this.state.login ? loginDom : registerDom,
	                    _react2.default.createElement(
	                        'button',
	                        { type: 'button', className: 'btn btn-link btn-block', onClick: this.changeMode },
	                        this.state.login ? "TO register" : "TO login"
	                    )
	                )
	            )
	        );
	    }
	});

	exports.default = LoginRegister;

/***/ },

/***/ 182:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by 41389 on 2017/1/17.
	 */
	var config = {
	  domain: "http://192.168.1.104:3000"
	};

	exports.default = config;

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _clientConfigs = __webpack_require__(182);

	var _clientConfigs2 = _interopRequireDefault(_clientConfigs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var domain = _clientConfigs2.default.domain;

	var style = {
	    "background": 'url("/static/img/homepage_bg.jpg")',
	    "backgroundSize": 'cover',
	    'backgroundPosition': 'center bottom',
	    "minHeight": $(window).height() - 50,
	    'marginTop': '0px',
	    'marginBottom': '0px',
	    'paddingTop': '20px'
	};

	var TechPage = _react2.default.createClass({
	    displayName: 'TechPage',

	    getInitialState: function getInitialState() {
	        return {
	            tags: false,
	            dataState: 'loading',
	            data: [],
	            showData: []
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        var url = domain + '/blog/getByClass' + '?class=tech';
	        $.ajax({
	            url: url,
	            type: 'get',
	            dataType: 'json',
	            success: function (result, status, xhr) {
	                console.log(result);
	                if (result.code == 'success') {
	                    var data = result.data;
	                    var allTags = [];
	                    for (var i = 0; i < data.length; i++) {
	                        // console.log(data[i].tag_id);
	                        allTags = allTags.concat(data[i].tag_id);
	                        data[i].comments = 'preLoad';
	                        data[i].commentsLoadState = false;
	                    }
	                    // console.log(allTags);
	                    for (var i = 0; i < allTags.length; i++) {
	                        for (var k = i + 1; k < allTags.length; k++) {
	                            if (allTags[i] == allTags[k]) {
	                                allTags.splice(k, 1);
	                            }
	                        }
	                    }
	                    // console.log(allTags);
	                    this.setState({
	                        tags: allTags,
	                        data: data,
	                        showData: data
	                    });
	                } else if (result.code == 'noBlog') {} else if (result.code == 'sqlerror') {} else if (result.code == 'emptyClass') {}
	            }.bind(this),
	            error: function (xhr, status, error) {}.bind(this)
	        });
	    },
	    loadComment: function loadComment(event) {
	        var key = event.target.id.slice(14);
	        var targetData = this.state.showData[key];
	        if (targetData.commentsLoadState) {
	            console.log("commentsLoadState", targetData.commentsLoadState);
	        } else if (targetData.comment_count > 0) {
	            console.log("commentsLoadState", targetData.commentsLoadState);
	            var url = domain + "/blog/commentsByBlogId?blog_id=" + targetData.blog_id;
	            $.ajax({
	                url: url,
	                type: 'get',
	                dataType: 'json',
	                success: function (result, status, xhr) {
	                    console.log(result);
	                    console.log(key);
	                    if (result.code == 'success') {
	                        targetData.comments = result.data;
	                        targetData.commentsLoadState = true;
	                        console.log(this.state.showData);
	                        this.setState({
	                            showData: this.state.showData
	                        });
	                    } else if (result.code == 'sqlError') {
	                        targetData.comments = 'sqlError';
	                    }
	                }.bind(this),
	                error: function (xhr, status, error) {}.bind(this)
	            });
	        }
	    },
	    submitComment: function submitComment(event) {
	        var key = event.target.id.slice(19);
	        var targetData = this.state.showData[key];
	        var url = domain + "/blog/newComment";
	        var content = $(event.target).prev('textarea').val();
	        var data = {
	            content: content,
	            email: window.sessionStorage.getItem('email'),
	            blog_id: targetData.blog_id,
	            nickname: window.sessionStorage.getItem('nickname')
	        };
	        $.ajax({
	            url: url,
	            type: 'post',
	            data: data,
	            dataType: 'json',
	            success: function (result, status, xhr) {
	                console.log(result);
	                if (result.code == 'success') {
	                    targetData.comments = result.data;
	                    targetData.commentsLoadState = true;
	                    targetData.comment_count += 1;
	                    console.log(this.state.showData);
	                    this.setState({
	                        showData: this.state.showData
	                    }, this.forceUpdate);
	                } else if (result.code == 'sqlError') {
	                    targetData.comments = 'sqlError';
	                }
	            }.bind(this),
	            error: function (xhr, status, error) {}.bind(this)
	        });
	    },

	    render: function render() {
	        console.log("this.state.tags" + this.state.tags);
	        if (this.state.tags) {
	            var tags = this.state.tags;
	            var tagsLabel = [];
	            for (var i = 0; i < tags.length; i++) {
	                var classStyle = '';
	                if (tags[i] == "client") {
	                    classStyle = 'label-primary';
	                } else if (tags[i] == "performance") {
	                    classStyle = 'label-success';
	                } else if (tags[i] == "sever") {
	                    classStyle = 'label-info';
	                } else if (tags[i] == "frame") {
	                    classStyle = 'label-warning';
	                } else if (tags[i] == "dev-tool") {
	                    classStyle = 'label-danger';
	                }
	                tagsLabel[i] = _react2.default.createElement(
	                    'span',
	                    { style: { 'marginRight': '5px' }, key: i, className: "label " + classStyle },
	                    tags[i]
	                );
	            }
	        } else {
	            var tagsLabel = "LOADING....";
	        }

	        if (this.state.showData.length == 0) {
	            var papers = "";
	        } else {
	            var papers = [];
	            var showData = this.state.showData;
	            console.log(this.state.showData);

	            var nickname = window.sessionStorage.getItem('nickname');

	            for (var i = 0; i < showData.length; i++) {
	                var paperTags = showData[i].tag_id;
	                var paperTagsLabel = [];
	                for (var k = 0; k < paperTags.length; k++) {
	                    var paperClassStyle = '';
	                    if (paperTags[k] == "client") {
	                        paperClassStyle = 'label-primary';
	                    } else if (paperTags[k] == "performance") {
	                        paperClassStyle = 'label-success';
	                    } else if (paperTags[k] == "sever") {
	                        paperClassStyle = 'label-info';
	                    } else if (paperTags[k] == "frame") {
	                        paperClassStyle = 'label-warning';
	                    } else if (paperTags[k] == "dev-tool") {
	                        paperClassStyle = 'label-danger';
	                    }
	                    paperTagsLabel[k] = _react2.default.createElement(
	                        'span',
	                        { style: { 'marginRight': '5px' }, key: k, className: "label " + paperClassStyle },
	                        paperTags[k]
	                    );
	                }

	                var comments = showData[i].comments;
	                if (showData[i].comment_count == 0) {
	                    var paperComment = _react2.default.createElement(
	                        'p',
	                        { className: 'text-muted', 'data-comments-length': showData[i].comment_count },
	                        'no comment for this paper yet.'
	                    );
	                } else if (comments == 'preLoad') {
	                    var paperComment = _react2.default.createElement(
	                        'p',
	                        { 'data-comments-length': showData[i].comment_count },
	                        'LOADING...'
	                    );
	                } else if (comments == 'sqlError') {
	                    var paperComment = _react2.default.createElement(
	                        'p',
	                        { 'data-comments-length': showData[i].comment_count },
	                        'sorry for sql error'
	                    );
	                } else {
	                    var paperComment = [];
	                    for (var l = 0; l < comments.length; l++) {
	                        paperComment[l] = _react2.default.createElement(
	                            'div',
	                            { key: l, className: 'panel panel-default' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'panel-body' },
	                                _react2.default.createElement(
	                                    'p',
	                                    null,
	                                    comments[l].content
	                                ),
	                                _react2.default.createElement(
	                                    'p',
	                                    { className: 'text-muted' },
	                                    _react2.default.createElement(
	                                        'small',
	                                        null,
	                                        'BY : ',
	                                        comments[l].nickname,
	                                        ' AT :',
	                                        comments[l].updatedAT
	                                    )
	                                )
	                            )
	                        );
	                    }
	                }

	                if (nickname) {
	                    var newComment = _react2.default.createElement(
	                        'p',
	                        null,
	                        _react2.default.createElement(
	                            'span',
	                            null,
	                            'Leave your precious comments :'
	                        ),
	                        _react2.default.createElement('textarea', { className: 'form-control', rows: '3' }),
	                        _react2.default.createElement(
	                            'button',
	                            { id: "commentCommitButton" + i, onClick: this.submitComment, type: 'button', className: 'btn btn-primary' },
	                            'submit comment'
	                        )
	                    );
	                } else {
	                    var newComment = _react2.default.createElement(
	                        'p',
	                        { className: 'text-warning' },
	                        'please login for writing your comment.'
	                    );
	                }

	                papers[i] = _react2.default.createElement(
	                    'div',
	                    { key: i, className: 'panel panel-default' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'panel-heading' },
	                        _react2.default.createElement(
	                            'a',
	                            { href: showData[i].href, target: '_black' },
	                            showData[i].title
	                        ),
	                        _react2.default.createElement(
	                            'button',
	                            { id: 'loadCommentBtn' + [i], onClick: this.loadComment, className: 'btn btn-default btn-sm', style: { "marginLeft": "10px", "marginRight": "10px" }, 'data-toggle': 'collapse', 'data-target': '#comment' + [i] },
	                            'COMMENTS ',
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'badge' },
	                                showData[i].comment_count
	                            )
	                        ),
	                        paperTagsLabel
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: "comment" + i, className: 'panel-body collapse' },
	                        paperComment,
	                        newComment
	                    )
	                );
	            }
	        }
	        return _react2.default.createElement(
	            'div',
	            { style: style },
	            _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'panel panel-default' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'panel-heading' },
	                        '(building)LABELS choose what to show for you'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'panel-body' },
	                        tagsLabel
	                    )
	                ),
	                papers
	            )
	        );
	    }
	});

	exports.default = TechPage;

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _clientConfigs = __webpack_require__(182);

	var _clientConfigs2 = _interopRequireDefault(_clientConfigs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var domain = _clientConfigs2.default.domain;

	var style = {
	    "background": 'url("/static/img/homepage_bg.jpg")',
	    "backgroundSize": 'cover',
	    'backgroundPosition': 'center bottom',
	    "minHeight": $(window).height() - 50,
	    'marginTop': '0px',
	    'marginBottom': '0px',
	    'paddingTop': '20px'
	};

	var Sundries = _react2.default.createClass({
	    displayName: 'Sundries',

	    getInitialState: function getInitialState() {
	        return {
	            tags: false,
	            dataState: 'loading',
	            data: [],
	            showData: []
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        var url = domain + '/blog/getByClass' + '?class=other';
	        $.ajax({
	            url: url,
	            type: 'get',
	            dataType: 'json',
	            success: function (result, status, xhr) {
	                console.log(result);
	                if (result.code == 'success') {
	                    var data = result.data;
	                    var allTags = [];
	                    for (var i = 0; i < data.length; i++) {
	                        // console.log(data[i].tag_id);
	                        allTags = allTags.concat(data[i].tag_id);
	                        data[i].comments = 'preLoad';
	                        data[i].commentsLoadState = false;
	                    }
	                    // console.log(allTags);
	                    for (var i = 0; i < allTags.length; i++) {
	                        for (var k = i + 1; k < allTags.length; k++) {
	                            if (allTags[i] == allTags[k]) {
	                                allTags.splice(k, 1);
	                            }
	                        }
	                    }
	                    // console.log(allTags);
	                    this.setState({
	                        tags: allTags,
	                        data: data,
	                        showData: data
	                    });
	                } else if (result.code == 'noBlog') {} else if (result.code == 'sqlerror') {} else if (result.code == 'emptyClass') {}
	            }.bind(this),
	            error: function (xhr, status, error) {}.bind(this)
	        });
	    },
	    loadComment: function loadComment(event) {
	        var key = event.target.id.slice(14);
	        var targetData = this.state.showData[key];
	        if (targetData.commentsLoadState) {
	            console.log("commentsLoadState", targetData.commentsLoadState);
	        } else if (targetData.comment_count > 0) {
	            console.log("commentsLoadState", targetData.commentsLoadState);
	            var url = domain + "/blog/commentsByBlogId?blog_id=" + targetData.blog_id;
	            $.ajax({
	                url: url,
	                type: 'get',
	                dataType: 'json',
	                success: function (result, status, xhr) {
	                    console.log(result);
	                    console.log(key);
	                    if (result.code == 'success') {
	                        targetData.comments = result.data;
	                        targetData.commentsLoadState = true;
	                        console.log(this.state.showData);
	                        this.setState({
	                            showData: this.state.showData
	                        });
	                    } else if (result.code == 'sqlError') {
	                        targetData.comments = 'sqlError';
	                    }
	                }.bind(this),
	                error: function (xhr, status, error) {}.bind(this)
	            });
	        }
	    },
	    submitComment: function submitComment(event) {
	        var key = event.target.id.slice(19);
	        var targetData = this.state.showData[key];
	        var url = domain + "/blog/newComment";
	        var content = $(event.target).prev('textarea').val();
	        var data = {
	            content: content,
	            email: window.sessionStorage.getItem('email'),
	            blog_id: targetData.blog_id,
	            nickname: window.sessionStorage.getItem('nickname')
	        };
	        $.ajax({
	            url: url,
	            type: 'post',
	            data: data,
	            dataType: 'json',
	            success: function (result, status, xhr) {
	                console.log(result);
	                if (result.code == 'success') {
	                    targetData.comments = result.data;
	                    targetData.commentsLoadState = true;
	                    targetData.comment_count += 1;
	                    console.log(this.state.showData);
	                    this.setState({
	                        showData: this.state.showData
	                    }, this.forceUpdate);
	                } else if (result.code == 'sqlError') {
	                    targetData.comments = 'sqlError';
	                }
	            }.bind(this),
	            error: function (xhr, status, error) {}.bind(this)
	        });
	    },

	    render: function render() {
	        console.log("this.state.tags" + this.state.tags);
	        if (this.state.tags) {
	            var tags = this.state.tags;
	            var tagsLabel = [];
	            for (var i = 0; i < tags.length; i++) {
	                var classStyle = '';
	                if (tags[i] == "toy") {
	                    classStyle = 'label-primary';
	                } else if (tags[i] == "website") {
	                    classStyle = 'label-success';
	                } else if (tags[i] == "sever") {
	                    classStyle = 'label-info';
	                } else if (tags[i] == "frame") {
	                    classStyle = 'label-warning';
	                } else if (tags[i] == "dev-tool") {
	                    classStyle = 'label-danger';
	                }
	                tagsLabel[i] = _react2.default.createElement(
	                    'span',
	                    { style: { 'marginRight': '5px' }, key: i, className: "label " + classStyle },
	                    tags[i]
	                );
	            }
	        } else {
	            var tagsLabel = "LOADING....";
	        }

	        if (this.state.showData.length == 0) {
	            var papers = "";
	        } else {
	            var papers = [];
	            var showData = this.state.showData;
	            console.log(this.state.showData);

	            var nickname = window.sessionStorage.getItem('nickname');

	            for (var i = 0; i < showData.length; i++) {
	                var paperTags = showData[i].tag_id;
	                var paperTagsLabel = [];
	                for (var k = 0; k < paperTags.length; k++) {
	                    var paperClassStyle = '';
	                    if (paperTags[k] == "toy") {
	                        paperClassStyle = 'label-primary';
	                    } else if (paperTags[k] == "website") {
	                        paperClassStyle = 'label-success';
	                    } else if (paperTags[k] == "sever") {
	                        paperClassStyle = 'label-info';
	                    } else if (paperTags[k] == "frame") {
	                        paperClassStyle = 'label-warning';
	                    } else if (paperTags[k] == "dev-tool") {
	                        paperClassStyle = 'label-danger';
	                    }
	                    paperTagsLabel[k] = _react2.default.createElement(
	                        'span',
	                        { style: { 'marginRight': '5px' }, key: k, className: "label " + paperClassStyle },
	                        paperTags[k]
	                    );
	                }

	                var comments = showData[i].comments;
	                if (showData[i].comment_count == 0) {
	                    var paperComment = _react2.default.createElement(
	                        'p',
	                        { className: 'text-muted', 'data-comments-length': showData[i].comment_count },
	                        'no comment for this paper yet.'
	                    );
	                } else if (comments == 'preLoad') {
	                    var paperComment = _react2.default.createElement(
	                        'p',
	                        { 'data-comments-length': showData[i].comment_count },
	                        'LOADING...'
	                    );
	                } else if (comments == 'sqlError') {
	                    var paperComment = _react2.default.createElement(
	                        'p',
	                        { 'data-comments-length': showData[i].comment_count },
	                        'sorry for sql error'
	                    );
	                } else {
	                    var paperComment = [];
	                    for (var l = 0; l < comments.length; l++) {
	                        paperComment[l] = _react2.default.createElement(
	                            'div',
	                            { key: l, className: 'panel panel-default' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'panel-body' },
	                                _react2.default.createElement(
	                                    'p',
	                                    null,
	                                    comments[l].content
	                                ),
	                                _react2.default.createElement(
	                                    'p',
	                                    { className: 'text-muted' },
	                                    _react2.default.createElement(
	                                        'small',
	                                        null,
	                                        'BY : ',
	                                        comments[l].nickname,
	                                        ' AT :',
	                                        comments[l].updatedAT
	                                    )
	                                )
	                            )
	                        );
	                    }
	                }

	                if (nickname) {
	                    var newComment = _react2.default.createElement(
	                        'p',
	                        null,
	                        _react2.default.createElement(
	                            'span',
	                            null,
	                            'Leave your precious comments :'
	                        ),
	                        _react2.default.createElement('textarea', { className: 'form-control', rows: '3' }),
	                        _react2.default.createElement(
	                            'button',
	                            { id: "commentCommitButton" + i, onClick: this.submitComment, type: 'button', className: 'btn btn-primary' },
	                            'submit comment'
	                        )
	                    );
	                } else {
	                    var newComment = _react2.default.createElement(
	                        'p',
	                        { className: 'text-warning' },
	                        'please login for writing your comment.'
	                    );
	                }

	                papers[i] = _react2.default.createElement(
	                    'div',
	                    { key: i, className: 'panel panel-default' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'panel-heading' },
	                        _react2.default.createElement(
	                            'a',
	                            { href: showData[i].href, target: '_black' },
	                            showData[i].title
	                        ),
	                        _react2.default.createElement(
	                            'button',
	                            { id: 'loadCommentBtn' + [i], onClick: this.loadComment, className: 'btn btn-default btn-sm', style: { "marginLeft": "10px", "marginRight": "10px" }, 'data-toggle': 'collapse', 'data-target': '#comment' + [i] },
	                            'COMMENTS ',
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'badge' },
	                                showData[i].comment_count
	                            )
	                        ),
	                        paperTagsLabel
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: "comment" + i, className: 'panel-body collapse' },
	                        paperComment,
	                        newComment
	                    )
	                );
	            }
	        }
	        return _react2.default.createElement(
	            'div',
	            { style: style },
	            _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'panel panel-default' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'panel-heading' },
	                        '(building)LABELS choose what to show for you'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'panel-body' },
	                        tagsLabel
	                    )
	                ),
	                papers
	            )
	        );
	    }
	});

	exports.default = Sundries;

/***/ }

});