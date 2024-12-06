import React from 'react'

function CustomEvent() {

  function handleClick(e,name,price,stock){
    alert(`Name=${name}\nPrice=${price}\nStock=${stock}\n Button X axis=${e.clientX}\n Button Y axis=${e.clientY}\nButton id=${e.target.id}\nbutton className=${e.target.className}`)
  }

  return (
    <div>
      <button onClick={(e)=>handleClick(e,"Samsung TV",50000,true)} id='btnClick' className='btnInsert'>Click Here</button>
    </div>
  )
}

export default CustomEvent
