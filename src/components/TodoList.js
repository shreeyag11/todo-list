import React from 'react';

function TodoList(props) {
    const style1 = {
        textDecoration: "line-through",
        fontStyle: "italic",
        color: "#cdcdcd"
    }

    return (
        <div>
            <input type="checkbox"
                id={props.item.id}
                checked={props.item.completed}
                onChange={() => props.onchange(props.item.id)} />
            <label style={props.item.completed? style1 : null}>{props.item.text}</label><br />
        </div>
    )
}

export default TodoList;