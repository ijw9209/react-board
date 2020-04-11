import React, { Component } from 'react';

class regist extends Component {
    render() {
        return (
            <div>
                <form>
                    <table>
                        <tr>
                            <th>아이디</th>
                            <td><input type="text"></input></td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td><input type="text"></input></td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td><input type="text"></input></td>
                        </tr>
                        <tr>
                            <th>전화번호</th>
                            <td><input type="text"></input></td>
                        </tr>
                    </table>
                    <button type="submit">가입</button>
                </form>
            </div>
        );
    }
}

export default regist;