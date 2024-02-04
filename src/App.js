import rosePetals from './images/rose-petals.png'
import meow from './images/meow.png'
import hug from './images/hug.gif'
import { useState } from 'react';


function App() {
  const [yesTextSize, setYesTextSize] = useState(1);
  const [yesPadding, setYesPadding] = useState(3);
  const [buttonsDisplay, setButtonsDisplay] = useState('flex');
  const [noLabel, setNoLabel] = useState('No');
  const [noCount, setNoCount] = useState(0);

  const handleYes=()=>{
    setButtonsDisplay('hidden')
  }
  const handleNo=()=>{
    const noLabels=['Oye, Are you serious?','Ouchh!!, That hurt :(', 'Youre making a mistake.', 'But your mom likes me.', 'This is the wrong button -_-', '😢😢😢😢😢😢','😭😭😭😭😭']
    if(noCount<=5){
      setNoLabel(noLabels[noCount]);
      setNoCount(noCount+1)
    }else{
      setNoLabel(noLabels[6]);
    }
    setYesPadding(yesPadding+7)
    setYesTextSize(yesTextSize+0.5)
  }
  console.log(noCount);

  return (
    <div className="w-screen h-screen bg-red-500 flex justify-center items-center">
      <div className=" w-full h-full md:w-2/3 lg:w-1/3 md:h-4/5 lg:2/3 bg-[#fcfcfc] border rounded-md relative overflow-hidden">
        <div className="absolute h-36 w-full z-10">
          <img src={rosePetals} className='h-full w-full object-cover'/>
        </div>
        <div className='absolute flex flex-col w-full top-40'>
          <div className='z-10 w-full flex justify-center'>
            <div className="h-40 w-40">
              <img src={meow} className='h-full w-full object-cover'/>
            </div>
          </div>
          <p className='text-center w-full font-bold text-2xl z-20 text-red-500 px-2'>Will you be my Valentine?</p>
          <div className={`${buttonsDisplay} mt-8 flex-col gap-4 text-white`}>
            <button className={`bg-green-500 flex justify-center mx-16 px-2 hover:shadow-lg `} style={{padding: `${yesPadding}px`,fontSize: `${yesTextSize}rem`,}} onClick={handleYes}>Yes</button>
            <button className='bg-red-800 mx-16 py-[3px] px-2 hover:shadow-lg text-[1rem]' onClick={handleNo}>{noLabel}</button>
          </div>
          <div className={`${buttonsDisplay==='flex'? 'hidden': 'flex'} flex-col items-center mt-8`}>
            <p className='text-xl font-semibold text-red-400 text-center'>Yayyyy!!!!!!</p>
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
