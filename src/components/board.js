import React, { Component } from 'react';

import BoardItem from './boardItem';
import './board.css';

class board extends Component {
    state = {
        contents: [
            { no: 1, title: '안녕하세요', contents: '안녕하십니까', name: '유저1' },
            { no: 2, title: '하이하이', contents: '내용내용', name: '이순신' }
        ]
    }


    render() {
        const { contents } = this.state;
        return (
            <div className="container board_wrap mt-3">
                <div>
                    <h2>게시판</h2>
                </div>
                <table className="board_table">
                    <colgroup>
                        <col width="530" />
                        <col width="450" />
                        <col width="100" />
                        <col width="50" />
                        <col width="50" />
                    </colgroup>
                    <tbody>
                        <tr className="board_tr">
                            <th>글 번 호</th>
                            <th>제  목</th>
                            <th>작성자</th>
                        </tr>
                        {contents.map(item => (
                            <BoardItem
                                key={item.no}
                                no={item.no}
                                title={item.title}
                                name={item.name}
                            ></BoardItem>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default board;