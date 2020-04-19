import React, { Component } from 'react';

class write extends Component {
    render() {
        return (
            <div className="container mt-3">
                <div className="write_title">
                    <h2>글쓰기</h2>
                </div>
                <table className="write_table">
                    <tbody>
                        <tr>
                            <th>제목</th>
                            <td><input type="text"></input></td>
                        </tr>
                        <tr>
                            <th>작성자</th>
                            <td><input type="text"></input></td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td><textarea cols="20" rows="5"></textarea></td>
                        </tr>
                    </tbody>
                    <button>작성</button>
                </table>
            </div>
        );
    }
}

export default write;