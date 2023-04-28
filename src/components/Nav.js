import React from 'react'

const Nav = () => {
  return (
    <nav className="flex justify-between">
      <div className="flex justify-start items-center">Code Quiz</div>
      <div className="flex justify-end">
        <button className="mr-4">Button 1</button>
        <button>Button 2</button>
      </div>
    </nav>
  )
}

export default Nav