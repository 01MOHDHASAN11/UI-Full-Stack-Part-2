import React from 'react'

const PreventDefault = () => {

    function handleSubmit(event){
        event.preventDefault()
        alert("Form submit successfully")
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        UserName: <input type="text" name='UserName'/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default PreventDefault
