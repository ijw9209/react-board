import React, { Component } from 'react';

import './board.css';
class boardItem extends Component {
    render() {
        const { no, title, name } = this.props;
        return (
            <>
                <tr className="board_content">
                    <td>{no}</td>
                    <td>{title}</td>
                    <td>{name}</td>
                    <td><div>수정</div></td>
                    <td><div>삭제</div></td>
                </tr>
            </>
        );
    }
}

export default boardItem;