import React, { useState } from 'react';
export default function GroceryItem() {
  const [name, setName] = useState(0);
    return (
      <>
        <p>{name}</p>
      </>
    );
  }
  