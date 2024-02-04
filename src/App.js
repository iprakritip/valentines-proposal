import rosePetals from './images/rose-petals.png'
import meow from './images/meow.png'
import hug from './images/hug.gif'
import { useState } from 'react';


function App() {
  const [yesTextSize, setYesTextSize] = useState("md");
  const [yesPadding, setYesPadding] = useState("1");
  const [buttonsDisplay, setButtonsDisplay] = useState('flex');
  const [noLabel, setNoLabel] = useState('No');

  const handleYes=()=>{
    setButtonsDisplay('hidden')
  }
  const handleNo=()=>{
    console.log('jaaaaa');
  }

  return (
    <div className="w-screen h-screen bg-red-500 flex justify-center items-center">
      <div className=" w-full h-full md:w-2/3 lg:w-1/3 md:h-2/3 bg-white border rounded-md relative">
        <div className="absolute h-36 w-full z-10">
          <img src={rosePetals} className='h-full w-full object-cover'/>
        </div>
        <div className='absolute flex flex-col w-full top-40'>
          <div className='z-10 w-full flex justify-center'>
            <div className="h-40 w-40">
              <img src={meow} className='h-full w-full object-cover'/>
            </div>
          </div>
          <p className='text-center w-full font-bold text-2xl z-20 text-red-500'>Will you be my Valentine?</p>
          <div className={`${buttonsDisplay} mt-8 flex-col gap-4 text-white`}>
            <button className={`bg-green-500 mx-16 py-1 px-${yesPadding} hover:shadow-lg text-${yesTextSize}`} onClick={handleYes}>Yes</button>
            <button className='bg-red-800 mx-16 py-1 px-2 hover:shadow-lg' onClick={handleNo}>{noLabel}</button>
          </div>
          <div className={`${buttonsDisplay==='flex'? 'hidden': 'flex'} flex-col items-center mt-8`}>
            <p className='text-xl text-red-200 text-center'>Yayyyy!!!!!!</p>
            <div className=' h-40 w-40'>
              <img src={hug} className='h-full w-full object-cover'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
