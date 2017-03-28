import React from 'react'
import IconButton from '../template/iconButton'

export default props => (
    <div role="form" className="todoForm">
        <div className="col-xs-11 col-sm-11 col-md-11">
            <input type="text" id="description" className="form-control" placeholder="Add task" value={props.description} onChange={props.handleChange} />
        </div>
        <div className="col-xs-1 col-sm-1 col-md-1">
            <IconButton style="primary" icon="plus" onClick={props.handleAdd}></IconButton>
        </div>
    </div>
)