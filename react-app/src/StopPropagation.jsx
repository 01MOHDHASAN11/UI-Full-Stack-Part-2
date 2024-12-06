import React from 'react'

const StopPropagation = () => {

    function handleButtonClick(e){
        e.stopPropagation()
        alert("Button clicked")
    }

    function handleNavbarClick(){
        alert("Navbar clicked")
    }
  return (
    <div>
      <nav onClick={handleNavbarClick}>
        <span>Navbar</span>
        <button onClick={handleButtonClick}>Click me</button>
      </nav>
    </div>
  )
}

export default StopPropagation
