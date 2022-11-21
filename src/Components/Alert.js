import React from 'react'

export default function Alert(props) {
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
  }
  return (
    <div style={{ height: "7vh" }}>

      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
      </div>
      }
    </div>

  );
}
