import { useState , useCallback , useEffect , useRef} from 'react'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberallowed] = useState(false)
  const [characterAllowed,setCharacterallowed] = useState(false)
  const[password,setPassword] = useState("")

  // userRef hooks
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(()=>{
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numberAllowed) str+= "0123456789"
      if (characterAllowed) str+= "!@#$%^&*()-+=[]{}~`"
      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length +1)
        pass += str.charAt(char)
      }
      setPassword(pass)
    },[length,numberAllowed,characterAllowed])

    const copyPasswordtoClipboard = useCallback(()=>{
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,9)
      window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(() => {
      passwordGenerator()
    },[length,numberAllowed,characterAllowed,passwordGenerator])


  return (
    <div className = 'w-full max-w-md mx-auto shadow-md text-center rounded-md px-2 py-5 my-8 text-orange-500 bg-gray-900'>
      Password Generator 
      <div className='flex shadow-lg rounded-lg overflow-hidden mb-4 '>
        <input type="text"
        value = {password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        ref={passwordRef}
        readOnly />
         <button 
         onClick={copyPasswordtoClipboard}
         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' >copy</button>
      </div>
      <div className='flex gap-x-2 text-sm'>
        <div className='flex gap-x-1 item-center'>
          <input 
          type="range"
          min = {1}
          max = {50}
          value = {length}
          className='cursor-pointer' 
          onChange={(e)=>{setLength(e.target.value)}} />
          <label>Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked = {numberAllowed}
          id = "numberInput"
          onChange={() => {
            setNumberallowed((prev)=> !prev);
          }}
           />
           <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked = {characterAllowed}
          id = "characterInput"
          onChange={() => {
            setCharacterallowed((prev)=> !prev);
          }}
           />
           <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
