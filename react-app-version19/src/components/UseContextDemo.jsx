import React, { createContext } from 'react'
import { useContext } from 'react'

let contextData = createContext(null)
export const LevelOne=()=>{
    const context = useContext(contextData)
    return(
        <h1 className='bg-danger'>Hello LevelOne {context} </h1>
    )

}

export const LevelTwo =()=>{
    const context = useContext(contextData)
    return(
        <div className='bg-warning'>
            <h1>Hello LevelTwo {context}</h1>
            <LevelOne/>
        </div>
    )
}

const UseContextDemo = () => {
  return (
    <div className='mt-4 ms-4 text-light fs-3 bg-dark p-4'>
    <contextData.Provider value={'Hasan'}>
    <h1>Parent {contextData}</h1>
        <LevelTwo/>
    </contextData.Provider>
    </div>
  )
}

export default UseContextDemo
