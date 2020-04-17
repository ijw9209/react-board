import React, { Component } from 'react';

import './login.css';


class login extends Component {
    state = {
        id: '',
        pw: ''
    }

    handleId = e => {
        this.setState({
            id: e.target.value
        })
    }

    handlePw = e => {
        this.setState({
            pw: e.target.value
        })
    }

    handleRegist = e => {
        const { history } = this.props;
        e.preventDefault();
        history.push('/regist')

    }

    handleSubmit = e => {
        const { history } = this.props;
        const { id, pw } = this.state;
        e.preventDefault();
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        const localUser = [...userInfo];
        const loginInfo = localUser.filter(item => item.id === id && item.pw === pw);
        const length = Object.keys(loginInfo).length;
        if (length > 0) {
            alert('로그인 성공');
            //세션에 담아야됨..
            sessionStorage.setItem("loginInfo", JSON.stringify(loginInfo));
            history.push('/');

        } else {
            alert('아이디와 비밀번호를 확인해주세요!');
            return false;
        }
    }
    render() {
        return (
            <div className="container login_wrap">
                <div className="form_wrap">
                    <form className="login_form" onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="아이디" onChange={this.handleId}></input>
                        <input type="password" placeholder="비밀번호" onChange={this.handlePw}></input>
                        <button type="submit" className="btn-primary login-btn">로그인</button>
                        <button onClick={this.handleRegist} className="btn-primary regist-btn">회원가입</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default login;