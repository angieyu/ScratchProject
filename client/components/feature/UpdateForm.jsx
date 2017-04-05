import React, { Component } from 'react';
import Item from './Item.jsx';
import NewTask from './NewTask.jsx';

// need a list of tasks
// need access to duration

const UpdateForm = (props) => {
  const items = [];
  props.featItems.forEach((item, i) => {
    console.log('item featureId', item.featureId);
    items.push(<Item key={i} myID={item.id} description={item.content} complete={item.complete} featID={item.featureId} remove={props.removeItem} index={props.index}/>)
  })

  if (props.showItemConstructor) {
    items.push(<NewTask key={props.featItems.length} featID={props.feat}/>)
  }

  return (
    <div id="update-form">
      <button onClick={props.escapeUpdateView} className="escape-button">Escape</button>
      <h2>{props.feat.title}</h2>
      {items}
      <button className="update-form-button" onClick={props.constructorToggle}>Make New Task</button>
    </div>
  );
}

export default UpdateForm;
