import React, { Component } from 'react';

import './regist.css';
class regist extends Component {
    no = 1;
    state = {
        id: "",
        pw: "",
        email: "",
        phone: "",
        users: []
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

    handleEmail = e => {
        this.setState({
            email: e.target.value
        })
    }

    handlePhone = e => {
        this.setState({
            phone: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        e.target.reset();

        // const { history } = this.props;
        // history.push('/Login');
        const { id, pw, email, phone, users } = this.state;
        const newItem = {
            no: this.no++,
            id: id,
            pw: pw,
            email: email,
            phone: phone
        }
        const updatedItems = [...users, newItem];
        this.setState({
            users: updatedItems
        })
        localStorage.setItem("userInfo", JSON.stringify(updatedItems));
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));

        userInfo.map(item => console.log(item.no));
        //console.log(d);

    }

    render() {
        return (
            <div className="container regist_form_wrap">
                <form onSubmit={this.handleSubmit}>
                    <table className="mx-auto">
                        <tbody>
                            <tr>
                                <th>아이디</th>
                                <td className="td_input"><input type="text" onChange={this.handleId}></input></td>
                                <td><button className="btn-primary">중복검사</button></td>
                            </tr>
                            <tr>
                                <th>비밀번호</th>
                                <td className="td_input"><input type="password" onChange={this.handlePw}></input></td>
                            </tr>
                            <tr>
                                <th>이메일</th>
                                <td className="td_input"><input type="text" onChange={this.handleEmail}></input></td>
                            </tr>
                            <tr>
                                <th>전화번호</th>
                                <td className="td_input"><input type="text" onChange={this.handlePhone}></input></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" className="btn-primary submit-btn">가입</button>
                </form>
            </div>
        );
    }
}

export default regist;