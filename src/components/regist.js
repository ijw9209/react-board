import React, { Component } from 'react';

import './regist.css';
class regist extends Component {
    no = 1;
    state = {
        id: "",
        pw: "",
        pwchk: "",
        name: "",
        users: [],
        idChk: false,
        existBtn: false

    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    };



    handleIdChk = e => {
        e.preventDefault();
        const { id } = this.state;


        const existId = JSON.parse(localStorage.getItem("userInfo"));

        if (Object.keys(existId).length > 0) {

            const filteredexist = existId.filter(user => user.id === id);
            if (filteredexist.length === 1) {
                this.setState({
                    idChk: false,
                    id: ''
                })
                alert('중복된 아이디입니다!')
            } else {
                this.setState({
                    idChk: true,
                    existBtn: true
                })
                alert('사용가능한 아이디입니다!');
            }
        }

    }


    handleSubmit = e => {
        const { history } = this.props;
        e.preventDefault();


        const { id, pw, pwchk, name, users, idChk, existBtn } = this.state;

        const getCheck = RegExp(/^[a-zA-Z0-9]{4,12}$/);
        const getName = RegExp(/^[가-힣]+$/);
        if (id === "") {
            alert('아이디를 입력해주세요!');
            return false;
        } else if (pw === "") {
            alert('비밀번호를 입력해주세요!');
            return false;
        } else if (pwchk === "") {
            alert('비밀번호확인을 입력해주세요!');
            return false;
        } else if (name === "") {
            alert('이름을 입력해주세요!');
            return false;
        }

        if (pw !== pwchk) {
            alert('비밀번호가 같지 않습니다.');
            return false;
        }

        if (existBtn === false) {
            alert('아이디 중복검사를 해주세요!');
            return false;
        } else if (idChk === false) {
            alert('다른 아이디를 사용해주세요!');
            return false;
        }

        if (!getCheck.test(id)) {
            alert('아이디는 대문자와 소문자 + 숫자로 입력가능합니다.(4~12자리)');
            return false;
        } else if (!getCheck.test(pw) || !getCheck.test(pwchk)) {
            alert('비밀번호는 대문자와 소문자 + 숫자로 입력가능합니다.(4~12자리)');
            return false;
        } else if (!getName.test(name)) {
            alert('이름은 한글로 입력해주세요!');
            return false;
        }

        const newItem = {
            no: this.no++,
            id: id,
            pw: pw,
            pwchk: pwchk,
            name: name
        }


        const updatedItems = [...users, newItem];
        this.setState({
            users: updatedItems
        })
        localStorage.setItem("userInfo", JSON.stringify(updatedItems));
        //const userInfo = JSON.parse(localStorage.getItem("userInfo"));

        //userInfo.map(item => console.log(item.no));
        //console.log(d);

        history.push('/Login');
    }

    componentDidMount = () => {
        const { users } = this.state;

        if (Object.keys(users).length === 0) {
            const userInfo = JSON.parse(localStorage.getItem("userInfo"));
            const localUser = [...userInfo];
            const length = Object.keys(userInfo).length;
            const selectedItem = localUser.filter(item => item.no === length);
            this.no = selectedItem[0].no + 1;
            this.setState({
                users: localUser
            })
        }
    }

    render() {
        return (
            <div className="container regist_form_wrap">
                <form onSubmit={this.handleSubmit} name="fr">
                    <table className="mx-auto">
                        <tbody>
                            <tr>
                                <th>아이디</th>
                                <td className="td_input">
                                    <input type="text" id="id" name="id" onChange={this.handleChange} placeholder="아이디"></input>
                                </td>
                                <td><button className="exist-btn" onClick={this.handleIdChk}>중복검사</button></td>
                            </tr>
                            <tr>
                                <th>비밀번호</th>
                                <td className="td_input">
                                    <input type="password" name="pw" onChange={this.handleChange} placeholder="비밀번호"></input>
                                </td>
                            </tr>
                            <tr>
                                <th>비밀번호 확인</th>
                                <td className="td_input">
                                    <input type="password" name="pwchk" onChange={this.handleChange} placeholder="비밀번호 확인"></input>
                                </td>
                            </tr>
                            <tr>
                                <th>이름</th>
                                <td className="td_input">
                                    <input type="text" name="name" onChange={this.handleChange} placeholder="이름"></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" className="submit-btn">가입</button>
                </form>
            </div>
        );
    }
}

export default regist;