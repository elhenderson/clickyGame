import React, { useState } from 'react';

function Header(props) {
  const [count, setCount] = useState(0)

  return(
    <div id="header">
      <p>Score: {count}</p>
      <p>Top Score: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me!
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>

    </div>
  )
}

export default Header;