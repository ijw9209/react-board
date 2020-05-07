import React, { Component } from 'react';

import './write.css';
class write extends Component {
    no = 1;
    state = {
        title: '',
        name: '',
        contents: '',
        items: []

    }

    componentDidMount = () => {
        console.log("write 컴포넌트!")
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    };


    handleWrite = e => {
        const { history } = this.props;
        e.preventDefault();
        const { title, name, contents, items } = this.state;

        const newItem = {
            no: this.no++,
            title: title,
            name: name,
            contents: contents
        }

        const updateItems = [...items, newItem];
        this.setState({
            items: updateItems
        })
        localStorage.setItem("items", JSON.stringify(updateItems));
        // history.push("/");
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
                                <td><input type="text" name="title" onChange={this.handleChange}></input></td>
                            </tr>
                            <tr className="write_tr">
                                <th>작성자</th>
                                <td><input type="text" name="name" onChange={this.handleChange}></input></td>
                            </tr>
                            <tr className="write_tr">
                                <th className="write_content_th">내용</th>
                                <td><textarea cols="46" rows="5" name="contents" onChange={this.handleChange}></textarea></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="btn_wrap">
                        <button className="write-btn" onClick={this.handleWrite}>작성</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default write;