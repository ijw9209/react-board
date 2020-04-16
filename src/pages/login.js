import React, { Component } from 'react';

import './login.css';

class login extends Component {
    render() {
        return (
            <div className="container login_wrap">
                <div className="form_wrap">
                    <form className="login_form">
                        <input type="text" placeholder="아이디"></input>
                        <input type="password" placeholder="비밀번호"></input>
                        <button className="btn-primary login-btn">로그인</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default login;