import React from 'react';

const ListItem = (props) => (
  <div>
  <button onClick={()=>props.delete(props.item.listName)} type="submit">Delete</button>
    { props.item.listName }
  </div>
)

export default ListItem;
