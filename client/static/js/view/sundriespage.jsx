
import React from 'react';
import clientConfigs from './clientConfigs.js';
var domain = clientConfigs.domain;

var style = {
    "background" : 'url("/static/img/homepage_bg.jpg")',
    "backgroundSize" : 'cover',
    'backgroundPosition' : 'center bottom',
    "minHeight" : $(window).height()-50,
    'marginTop' : '0px',
    'marginBottom' :'0px',
    'paddingTop':'20px'
}



var Sundries = React.createClass({
    getInitialState:function () {
        return{
            tags:false,
            dataState:'loading',
            data:[],
            showData:[]
        }
    },
    componentDidMount:function () {
        var url = domain + '/blog/getByClass'
            +'?class=other';
        $.ajax({
            url:url,
            type:'get',
            dataType:'json',
            success:function (result,status,xhr) {
                console.log(result);
                if(result.code == 'success'){
                    var data = result.data;
                    var allTags = [];
                    for(var i = 0 ;i<data.length;i++){
                        // console.log(data[i].tag_id);
                        allTags = allTags.concat(data[i].tag_id);
                        data[i].comments = 'preLoad'
                        data[i].commentsLoadState = false;
                    }
                    // console.log(allTags);
                    for(var i = 0;i<allTags.length;i++){
                        for(var k = i+1;k<allTags.length;k++){
                            if (allTags[i] == allTags[k]){
                                allTags.splice(k,1);
                            }
                        }
                    }
                    // console.log(allTags);
                    this.setState({
                        tags:allTags,
                        data:data,
                        showData:data
                    })

                }else if (result.code == 'noBlog'){

                }else if (result.code == 'sqlerror'){

                }else if (result.code == 'emptyClass'){

                }
            }.bind(this),
            error:function (xhr,status,error) {

            }.bind(this)
        });
    },
    loadComment:function (event) {
        var key = event.target.id.slice(14);
        var targetData = this.state.showData[key];
        if(targetData.commentsLoadState){
            console.log("commentsLoadState",targetData.commentsLoadState);
        }else if(targetData.comment_count>0) {
            console.log("commentsLoadState",targetData.commentsLoadState);
            var url = domain +"/blog/commentsByBlogId?blog_id="+targetData.blog_id;
            $.ajax({
                url:url,
                type:'get',
                dataType:'json',
                success:function (result,status,xhr) {
                    console.log(result);
                    console.log(key);
                    if(result.code == 'success'){
                        targetData.comments = result.data;
                        targetData.commentsLoadState = true;
                        console.log(this.state.showData);
                        this.setState({
                            showData:this.state.showData,
                        })
                    }else if (result.code == 'sqlError'){
                        targetData.comments = 'sqlError'
                    }
                }.bind(this),
                error:function (xhr,status,error) {

                }.bind(this)
            });
        }
    },
    submitComment:function (event) {
        var key = event.target.id.slice(19);
        var targetData = this.state.showData[key];
        var url = domain + "/blog/newComment";
        var content = $(event.target).prev('textarea').val();
        var data = {
            content:content,
            email:window.sessionStorage.getItem('email'),
            blog_id:targetData.blog_id,
            nickname:window.sessionStorage.getItem('nickname')
        };
        $.ajax({
            url:url,
            type:'post',
            data:data,
            dataType:'json',
            success:function (result,status,xhr) {
                console.log(result);
                if(result.code == 'success'){
                    targetData.comments = result.data;
                    targetData.commentsLoadState = true;
                    targetData.comment_count += 1;
                    console.log(this.state.showData);
                    this.setState({
                        showData:this.state.showData
                    },this.forceUpdate)
                }else if (result.code == 'sqlError'){
                    targetData.comments = 'sqlError'
                }
            }.bind(this),
            error:function (xhr,status,error) {

            }.bind(this)
        });
    },

    render:function () {
        console.log("this.state.tags"+this.state.tags);
        if(this.state.tags){
            var tags = this.state.tags;
            var tagsLabel=[];
            for(var i = 0;i<tags.length;i++) {
                var classStyle = '';
                if (tags[i] == "toy") {
                    classStyle = 'label-primary'
                } else if (tags[i] == "website") {
                    classStyle = 'label-success'
                } else if (tags[i] == "sever") {
                    classStyle = 'label-info'
                } else if (tags[i] == "frame") {
                    classStyle = 'label-warning'
                } else if (tags[i] == "dev-tool") {
                    classStyle = 'label-danger'
                }
                tagsLabel[i] = (
                    <span style={{'marginRight':'5px'}} key={i} className={"label "+classStyle}>{tags[i]}</span>
                );
            }

        }else {
            var tagsLabel="LOADING....";
        }

        if(this.state.showData.length == 0){
            var papers = "";
        }else {
            var papers = [];
            var showData = this.state.showData;
            console.log(this.state.showData);

            var nickname = window.sessionStorage.getItem('nickname');

            for(var i = 0;i<showData.length;i++){
                var paperTags = showData[i].tag_id;
                var paperTagsLabel = [];
                for(var k = 0;k<paperTags.length;k++) {
                    var paperClassStyle = '';
                    if (paperTags[k] == "toy") {
                        paperClassStyle = 'label-primary'
                    } else if (paperTags[k] == "website") {
                        paperClassStyle = 'label-success'
                    } else if (paperTags[k] == "sever") {
                        paperClassStyle = 'label-info'
                    } else if (paperTags[k] == "frame") {
                        paperClassStyle = 'label-warning'
                    } else if (paperTags[k] == "dev-tool") {
                        paperClassStyle = 'label-danger'
                    }
                    paperTagsLabel[k] = (
                        <span style={{'marginRight':'5px'}} key={k} className={"label "+paperClassStyle}>{paperTags[k]}</span>
                    );
                }

                var comments = showData[i].comments;
                if(showData[i].comment_count == 0){
                    var paperComment =(
                        <p className="text-muted" data-comments-length={showData[i].comment_count}>
                            no comment for this paper yet.
                        </p>
                    ) ;
                }else if(comments == 'preLoad') {
                    var paperComment = (
                        <p data-comments-length={showData[i].comment_count}>LOADING...</p>
                    );
                }else if(comments == 'sqlError'){
                    var paperComment = (
                        <p data-comments-length={showData[i].comment_count}>sorry for sql error</p>
                    );
                }else {
                    var paperComment = [];
                    for(var l = 0;l<comments.length;l++){
                        paperComment[l] = (
                            <div key={l} className="panel panel-default">
                                <div className="panel-body">
                                    <p>{comments[l].content}</p>
                                    <p className="text-muted">
                                        <small>
                                            BY : {comments[l].nickname} AT :{comments[l].updatedAT}
                                        </small>
                                    </p>
                                </div>
                            </div>
                        );
                    }
                }

                if(nickname){
                    var newComment = (
                        <p>
                            <span>Leave your precious comments :</span>
                            <textarea className="form-control" rows="3">

                            </textarea>
                            <button id={"commentCommitButton"+i} onClick={this.submitComment} type="button" className="btn btn-primary">submit comment</button>
                        </p>
                    );
                }else {
                    var newComment =(
                        <p className="text-warning">
                            please login for writing your comment.
                        </p>
                    );
                }

                papers[i]=(
                    <div key={i} className="panel panel-default">
                        <div className="panel-heading">
                            <a href={showData[i].href} target="_black">{showData[i].title}</a>
                            <button id={'loadCommentBtn'+[i]} onClick={this.loadComment} className="btn btn-default btn-sm" style={{"marginLeft":"10px","marginRight":"10px"}} data-toggle="collapse" data-target={'#comment'+[i]}>
                                COMMENTS <span className="badge">{showData[i].comment_count}</span>
                            </button>
                            {paperTagsLabel}
                        </div>
                        <div id={"comment"+i} className="panel-body collapse">
                            {paperComment}
                            {newComment}
                        </div>
                    </div>
                );
            }
        }
        return(
            <div style={style}>
                <div className="container">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            (building)LABELS choose what to show for you
                        </div>
                        <div className="panel-body">
                            {tagsLabel}
                        </div>
                    </div>
                    {papers}
                </div>
            </div>
        );
    }
});

export default Sundries;