
import React from 'react';

import clientConfigs from './clientConfigs.js';
var domain = clientConfigs.domain;

var style = {
    "background" : 'url("/static/img/homepage_bg.jpg")',
    "backgroundSize" : 'cover',
    'backgroundPosition' : 'center bottom',
    "minHeight" : $(window).height()-50,
    'marginTop' : '0px',
    'marginBottom' :'0px'
}
var formStyle = {
    marginTop:"50px",
    paddingBottom:"10px"
}
var Login = React.createClass({
    getInitialState:function () {
      return{
          emailWarningStyle:"text-muted",
          emailWarning:"Enter your email please",
          pswWarningStyle:"text-muted",
          pswWarning:"Enter your password",
          commitBtn:false,
          emailState:false,
          pswState:false,
          email:"",
          psw:""
      }
    },
    checkEmail:function (event) {
        var emailRexExp = /^([a-zA-Z0-9_-]+@([a-zA-Z0-9_-])+)(\.[a-zA-Z0-9_-]+)+/g;
        var email = event.target.value;
        // console.log(emailRexExp.exec(email),email);
        if(email.match(emailRexExp) == email){
            this.setState({
                email: email,
                emailState: true,
                emailWarningStyle:"text-success",
                emailWarning:"correct email format"
            },function () {
                if(this.state.emailState&&this.state.pswState){
                    this.setState({
                        commitBtn:true
                    });
                }
            });
        }else {
            this.setState({
                email: "",
                emailState: false,
                emailWarningStyle:"text-danger",
                emailWarning:"email format error,please check"
            },function () {
                this.setState({
                    commitBtn:false
                });
            });
        }
    },
    checkPsw:function (event) {
        var psw = event.target.value;
        if(psw){
            this.setState({
                psw: psw,
                pswState: true,
                pswWarningStyle:"text-success",
                pswWarning:"Enter your password"
            },function () {
                if(this.state.emailState&&this.state.pswState){
                    this.setState({
                        commitBtn:true
                    });
                }
            });
        }else {
            this.setState({
                psw: "",
                pswState: false,
                pswWarningStyle:"text-danger",
                pswWarning:"password can not be empty"
            },function () {
                this.setState({
                    commitBtn:false
                });
            });
        }
    },
    submit:function () {
      // this.props.submitSuccess();
        //call loading cover
        var url = domain +'/user/login';
        var data = {
            email:this.state.email,
            psw:this.state.psw
        }

        $.ajax({
            url:url,
            type:'post',
            data:data,
            dataType:'json',
            success:function (result,status,xhr) {
                console.log(result);
                if(result.code == "success"){
                    window.sessionStorage.setItem('email',result.email);
                    window.sessionStorage.setItem('nickname',result.nickname);
                    window.sessionStorage.setItem('createdAT',result.createdAT);
                    window.sessionStorage.setItem('updatedAT',result.updatedAT);
                    this.props.submitSuccess();
                }else if(result.code == "error"){
                    this.setState({
                        email: "",
                        emailState: false,
                        emailWarningStyle:"text-danger",
                        emailWarning:"this email is not existed"
                    },function () {
                        this.setState({
                            commitBtn:false
                        });
                    });
                }else if(result.code == "pswError") {
                    this.setState({
                        psw: "",
                        pswState: false,
                        pswWarningStyle:"text-danger",
                        pswWarning:"password error"
                    },function () {
                        this.setState({
                            commitBtn:false
                        });
                    });
                }else {
                    this.setState({
                        pswWarningStyle:"text-danger",
                        pswWarning:"sorry for server error,try again"
                    });
                }
            }.bind(this),
            error:function (xhr,status,error) {
                this.setState({
                    pswWarningStyle:"text-danger",
                    pswWarning:"sorry for net work error,try again"
                });
            }.bind(this)
        });
    },
    render:function () {
        return(
            <div>
                <h3>Please Login</h3>
                <input type="email" className="form-control" required placeholder="Email" onInput={this.checkEmail}/>
                <p className={this.state.emailWarningStyle}>
                    {this.state.emailWarning}
                </p>
                <input type="password" className="form-control" required placeholder="password" onInput={this.checkPsw}/>
                <p className={this.state.pswWarningStyle}>
                    {this.state.pswWarning}
                </p>
                <button type="button" className="btn btn-success btn-block" disabled={!this.state.commitBtn} onClick={this.submit}>SUBMIT</button>
            </div>
        );
    }
});

var Register = React.createClass({

    getInitialState:function () {
        return{
            emailWarningStyle:"text-muted",
            emailWarning:"Enter your email please",
            pswWarningStyle:"text-muted",
            pswWarning:"password must contain 6 - 16 characters",
            nicknameWarningStyle:"text-muted",
            nicknameWarning:"nickname will show to others",
            commitBtn:false,
            emailState:false,
            pswState:false,
            nicknameState:false,
            email:"",
            psw:"",
            nickname:""
        }
    },
    checkEmail:function (event) {
        var emailRexExp = /^([a-zA-Z0-9_-]+@([a-zA-Z0-9_-])+)(\.[a-zA-Z0-9_-]+)+/g;
        var email = event.target.value;
        // console.log(emailRexExp.exec(email),email);
        if(email.match(emailRexExp) == email){
            this.setState({
                email: email,
                emailState: true,
                emailWarningStyle:"text-success",
                emailWarning:"correct email format"
            },function () {
                if(this.state.emailState
                    &&this.state.pswState
                    && this.state.nicknameState){
                    this.setState({
                        commitBtn:true
                    });
                }
            });
        }else {
            this.setState({
                email: "",
                emailState: false,
                emailWarningStyle:"text-danger",
                emailWarning:"email format error,please check"
            },function () {
                this.setState({
                    commitBtn:false
                });
            });
        }
    },
    checkPsw:function (event) {
        var psw = event.target.value;
        if(psw){
            this.setState({
                psw: psw,
                pswState: true,
                pswWarningStyle:(psw.length>20)?"text-danger":"text-success",
                pswWarning:(psw.length>20)?"password must less than 20 characters":"Enter your password"
            },function () {
                if(this.state.emailState
                    &&this.state.pswState
                    && this.state.nicknameState){
                    this.setState({
                        commitBtn:(psw.length>20)?false:true
                    });
                }
            });
        }else {
            this.setState({
                psw: "",
                pswState: false,
                pswWarningStyle:"text-danger",
                pswWarning:"password can not be empty"
            },function () {
                this.setState({
                    commitBtn:false
                });
            });
        }
    },
    checkNickname:function (event) {

        var nickname = event.target.value;
        if(!nickname){
            this.setState({
                nickname: "",
                nicknameState: false,
                nicknameWarningStyle:"text-danger",
                nicknameWarning:"nickname can not be null"
            },function () {
                this.setState({
                    commitBtn:false
                });
            });
        }else if(nickname.length>16) {
            this.setState({
                nickname: nickname,
                nicknameState: false,
                nicknameWarningStyle:"text-danger",
                nicknameWarning:"nickname must less than 16 characters"
            },function () {
                this.setState({
                    commitBtn:false
                });
            });
        }else {
            this.setState({
                nickname: nickname,
                nicknameState: true,
                nicknameWarningStyle:"text-success",
                nicknameWarning:"nickname will show to others"
            },function () {
                if(this.state.emailState
                    &&this.state.pswState
                    && this.state.nicknameState){
                    this.setState({
                        commitBtn:true
                    });
                }
            });
        }
    },
    submit:function () {
        var url = domain +'/user/register';
        var data = {
            email:this.state.email,
            psw:this.state.psw,
            nickname:this.state.nickname
        };
        $.ajax({
            url:url,
            type:'post',
            data:data,
            dataType:'json',
            success:function (result,status,xhr) {
                console.log(result);
                if(result.code=='success'){
                    window.sessionStorage.setItem('nickname',this.state.nickname);
                    window.sessionStorage.setItem('email',this.state.email);
                    this.props.submitSuccess();
                }else if(result.code == "existed") {
                    this.setState({
                        emailWarningStyle:"text-danger",
                        emailWarning:"this email has been registered"
                    },function () {
                        this.setState({
                            commitBtn:false
                        });
                    });
                }else if(result.code == 'sqlerror'){
                    this.setState({
                        emailWarningStyle:"text-danger",
                        emailWarning:"sorry for server error,try again"
                    });
                }
            }.bind(this),
            error:function (xhr,status,error) {
                this.setState({
                    emailWarningStyle:"text-danger",
                    emailWarning:"sorry for net work error,try again"
                })
            }.bind(this)
        });
    },
    render:function () {
        return(
            <div>
                <h3>Thanks for register</h3>
                <input type="email" className="form-control" required placeholder="Email" onInput={this.checkEmail}/>
                <p className={this.state.emailWarningStyle}>
                    {this.state.emailWarning}
                </p>
                <input type="password" className="form-control" required placeholder="password" onInput={this.checkPsw}/>
                <p className={this.state.pswWarningStyle}>
                    {this.state.pswWarning}
                </p>
                <input type="text" className="form-control" required placeholder="nickname" onInput={this.checkNickname}/>
                <p className={this.state.nicknameWarningStyle}>
                    {this.state.nicknameWarning}
                </p>
                <button type="button" className="btn btn-success btn-block" disabled={!this.state.commitBtn} onClick={this.submit}>SUBMIT</button>
            </div>
        );
    }
});

var LoginRegister = React.createClass({
    getInitialState:function () {
      return{
          login:true
      }
    },
    changeMode:function () {
      this.setState({
          login:!this.state.login
      });
    },
    loginSuccess:function (result) {
      this.props.toHomepage();
      this.props.toHeader();
    },
    render:function () {
        var loginDom = (<Login submitSuccess={this.loginSuccess}/>);
        var registerDom = (<Register submitSuccess={this.loginSuccess}/>);
        return(
            <div className="jumboron" style={style}>
                <div className="container">
                    <form action="/" className="panel col-sm-4 col-sm-offset-4" style={formStyle} onKeyDown={function(){
                        if(event.keyCode == 13)return false;}
                    }>
                        {this.state.login?loginDom:registerDom}
                        <button type="button" className="btn btn-link btn-block" onClick={this.changeMode}>{this.state.login?"TO register":"TO login"}</button>

                    </form>
                </div>
            </div>
        )
    }
});


export default LoginRegister;