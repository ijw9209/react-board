import React, { Component } from 'react';

import './home.css';
class home extends Component {
    state = {
        isLogin: false,
        name: ''
    }

    componentDidMount = () => {
        console.log('componentDidMount');

        const loginInfo = JSON.parse(sessionStorage.getItem("loginInfo"));
        if (loginInfo) {
            const loginExist = Object.keys(loginInfo).length;
            if (loginExist > 0) {
                this.setState({
                    isLogin: true,
                    name: loginInfo[0].name
                })
            } else {
                this.setState({
                    isLogin: false
                })
            }
            console.log(loginInfo[0].name);
        }
    }
    render() {
        const { isLogin, name } = this.state;
        return (
            <div className="home_Wrap">
                <p>React-Board Project</p>
                <p className={`username ${isLogin && 'visible'}`}>{name}님 환영합니다.</p>
            </div>
        );
    }
}

export default home;