import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    const keyHandler = (event) => {
        if(event.key == 'Enter') {
            event.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if(event.key == 'Escape') {
            props.handleClear();
        }
    }

    return (
        <div role="form" className="todoForm">
            <div className="col-xs-10">
                <input type="text" id="description" className="form-control" placeholder="Add task" value={props.description} onChange={props.handleChange} onKeyUp={keyHandler} />
            </div>
            <div className="col-xs-2 text-right">
                <IconButton style="primary" icon="plus" onClick={props.handleAdd}></IconButton>
                <IconButton style="info" icon="search" onClick={props.handleSearch}></IconButton>
                <IconButton style="deafult" icon="close" onClick={props.handleClear}></IconButton>
            </div>
        </div>
    )
}