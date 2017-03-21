

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './blog-header.jsx';
import Homepage from './homepage.jsx';
import ConnectMe from './connect-me.jsx';
import LoginRegister from './login-register.jsx';
import TechPage from './techpage.jsx';
import SundriesPage from './sundriespage.jsx';

var toConnectMe = function () {
    ReactDOM.render(
        <ConnectMe />,
        document.getElementById('mainContent')
    );
    $("#blog-header").collapse("hide");
}
var goLoginRegister = function () {
    ReactDOM.render(
        <LoginRegister toHomepage={goHomepage} toHeader={setHeader}/>,
        document.getElementById('mainContent')
    );
    $("#blog-header").collapse("hide");
}

var setHeader = function () {
    ReactDOM.render(
        <Header connectMe={toConnectMe} goTech={toTechPage} goLogin={goLoginRegister} goLiving={toSundriesPage} nickname={window.sessionStorage.getItem('nickname')}/>,
        document.getElementById('blog-header')
    );
}

var toTechPage = function () {
    ReactDOM.render(
        <TechPage/>,
        document.getElementById('mainContent')
    );
    $("#blog-header").collapse("hide");
}

var toSundriesPage = function () {
    ReactDOM.render(
        <SundriesPage/>,
        document.getElementById('mainContent')
    );
    $("#blog-header").collapse("hide");
}


var goHomepage = function () {
    ReactDOM.render(
        <Homepage connectMe={toConnectMe}/>,
        document.getElementById('mainContent')
    );
    $("#blog-header").collapse("hide");
}

$("#goHomepage").click(function () {
    goHomepage();
});

setHeader();


goHomepage();

















