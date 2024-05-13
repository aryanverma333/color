import { useState } from 'react'

function App() {
   const [color, setColor] = useState("olive")

  return (
    <>
      <h2 className='flex justify-center text-8xl bg-gradient-to-r from-blue-600 to-orange-400 text-transparent bg-clip-text'>Color</h2>
      <div className='flex gap-3 my-64 font-semibold bg-gray-300 rounded-2xl w-fit'>
        <button>Red</button>
        <button>Green</button>
        <button>Blue</button>
        <button>Olive</button>
        <button>Gray</button>
        <button>Yellow</button>
        <button>Pink</button>
        <button>Purple</button>
        <button>Lavender</button>
        <button>White</button>
        <button>Black</button>
      </div>
    </>
  )
}

export default App
