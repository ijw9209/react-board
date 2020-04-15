import React, { Component } from 'react';

class regist extends Component {

    state = {
        id: "",
        pw: "",
        email: "",
        phone: ""
    }


    handleId = e => {
        console.log(e.target.value);
        this.setState({
            id: e.target.value
        })
    }

    handlePw = e => {
        console.log(e.target.value);
        this.setState({
            pw: e.target.value
        })
    }

    handleEmail = e => {
        console.log(e.target.value);
        this.setState({
            email: e.target.value
        })
    }

    handlePhone = e => {
        console.log(e.target.value);
        this.setState({
            phone: e.target.value
        })
    }

    render() {
        const { id } = this.state;
        return (
            <div className="container regist_form_wrap">
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <th>아이디</th>
                                <td><input type="text" onChange={this.handleId} value={id}></input></td>
                                <td><button>중복검사</button></td>
                            </tr>
                            <tr>
                                <th>비밀번호</th>
                                <td><input type="text" onChange={this.handlePw}></input></td>
                            </tr>
                            <tr>
                                <th>이메일</th>
                                <td><input type="text" onChange={this.handleEmail}></input></td>
                            </tr>
                            <tr>
                                <th>전화번호</th>
                                <td><input type="text" onChange={this.handlePhone}></input></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit">가입</button>
                </form>
            </div>
        );
    }
}

export default regist;