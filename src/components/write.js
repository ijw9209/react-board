import React, { Component } from 'react';

import './write.css';
class write extends Component {

    state = {
        title: '',
        name: '',
        contents: ''

    }

    componentDidMount = () => {
        console.log("write 컴포넌트!")
    }


    handleTitle = e => {
        this.setState({
            title: e.target.value
        })
    }


    handleContents = e => {
        this.setState({
            contents: e.target.value
        })
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="write_title">
                    <h2>글쓰기</h2>
                </div>
                <div className="write_wrap mt-4">
                    <table className="write_table">
                        <tbody>
                            <tr className="write_tr">
                                <th>제목</th>
                                <td><input type="text" onChange={this.handleTitle}></input></td>
                            </tr>
                            <tr className="write_tr">
                                <th>작성자</th>
                                <td><input type="text" readOnly="readOnly"></input></td>
                            </tr>
                            <tr className="write_tr">
                                <th className="write_content_th">내용</th>
                                <td><textarea cols="46" rows="5" onChange={this.handleContents}></textarea></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="btn_wrap">
                        <button className="write-btn">작성</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default write;