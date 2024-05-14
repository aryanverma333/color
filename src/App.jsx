import { useState } from 'react'

function App() {
   const [color, setColor] = useState("white")

  return (
    <>
    <div className='flex min-h-screen' style={{backgroundColor : color}}>
      <div className='flex font-semibold bg-gray-500 rounded-full h-fit absolute inset-x-80 bottom-8'>
        <div className='flex gap-2 px-3 py-2'>
          <button className='rounded-full px-4 py-2' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
          <button className='rounded-full px-4 py-2' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
          <button className='rounded-full px-4 py-2' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
          <button className='rounded-full px-4 py-2' style={{backgroundColor:"olive"}} onClick={()=>setColor("olive")}>Olive</button>
          <button className='rounded-full px-4 py-2' style={{backgroundColor:"gray"}} onClick={()=>setColor("gray")}>Gray</button>
          <button className='rounded-full px-4 py-2' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
          <button className='rounded-full px-4 py-2' style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
          <button className='rounded-full px-4 py-2' style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>Purple</button>
          <button className='rounded-full px-4 py-2' style={{backgroundColor:"lavender"}} onClick={()=>setColor("lavender")}>Lavender</button>
          <button className='rounded-full px-4 py-2' style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>White</button>
          <button className='rounded-full px-4 py-2 text-white' style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>Black</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
