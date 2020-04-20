import React, { Component } from 'react';

import './login.css';


class login extends Component {
    state = {
        id: '',
        pw: ''
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
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
                        <input type="text" name="id" placeholder="아이디" onChange={this.handleChange}></input>
                        <input type="password" name="pw" placeholder="비밀번호" onChange={this.handleChange}></input>
                        <button type="submit" className="login-btn">로그인</button>
                        <button onClick={this.handleRegist} className="regist-btn">회원가입</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default login;