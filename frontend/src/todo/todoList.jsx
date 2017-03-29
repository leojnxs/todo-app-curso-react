import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    const renderRows = () => {
        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id} className={todo.done ? "success" : ""}>
                <td className="col-xs-10">{todo.description}</td>
                <td className="col-xs-2 text-right">
                    <IconButton style="success" icon="check" onClick={() => props.handleMarkAsDone(todo)} hide={todo.done}></IconButton>
                    <IconButton style="warning" icon="undo" onClick={() => props.handleMarkAsPending(todo)} hide={!todo.done}></IconButton>
                    <IconButton style="danger" icon="trash-o" onClick={() => props.handleRemove(todo)} hide={todo.done}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Description</th>
                    <th className="text-right">Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}