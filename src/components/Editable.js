import React, { useState, useEffect } from "react";

const Editable = ({
  text,
  type,
  placeholder,
  children,
  onSetEditing,
  isEditing,
  ...props
}) => {
  const handleKeyDown = (event, type) => {
    // Handle when key is pressed
  };

  return (
    <section {...props}>
      {isEditing ? (
        <div onKeyDown={(e) => handleKeyDown(e, type)}>{children}</div>
      ) : (
        <div onClick={onSetEditing}>
          <span>{text || placeholder || "Editable content"}</span>
        </div>
      )}
    </section>
  );
};

export default Editable;
