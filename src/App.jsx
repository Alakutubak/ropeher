import '@fontsource-variable/frank-ruhl-libre';
import '@fontsource/be-vietnam-pro';
import { useState } from 'react';
import ReactSlider from 'react-slider';


function App() {
  const [showResults, setShowResults] = useState(false)

  return (
    <div>
      {/* Header */}
      <div className="bg-black">
        <div className="flex py-5 mx-5 items-center">
          <img className="h-16" src="/logo.png" alt="" />
          <span className="font-sans tracking-[0.5em] text-2xl ml-5">ROPEHER</span>
        </div>
      </div>

      <div className='flex'>
      {/* form */}
      <div className="bg-white text-background w-full p-8 rounded-2xl mt-4 ml-4 flex flex-col">
        <h2 className="font-serif text-4xl leading-[125%] mb-5">
          What percent of people in the world meet your standards?
        </h2>
        <div className="flex w-full items-center justify-between mb-2">
          <p className="font-medium text-sm leading-6">Gender</p>
          <ButtonGroup options={['Men', 'Women']} />
        </div>
        <div className="flex w-full items-center justify-between mb-2">
          <p className="font-medium text-sm leading-6">Wants kids</p>
          <ButtonGroup options={['Either', 'Yes', 'No']} />
        </div>
        <div className="flex w-full items-center justify-between mb-3">
          <p className="font-medium text-sm leading-6">Age</p>
          <DoubleRangeSlider def={[20,42]} min={13} max={99} dist={10} />
        </div>
        <div className="flex w-full items-center justify-between mb-2">
          <p className="font-medium text-sm leading-6">Cock</p>
          <DoubleRangeSlider def={[1, 7]} min={0} max={14} dist={1} symbol={"\""} />
        </div>
        <div className="flex w-full items-center justify-between mb-2">
          <p className="font-medium text-sm leading-6">In-cum</p>
          <ButtonGroup options={['Either', 'Yes', "No"]} />
        </div>
        <div className="flex w-full items-center justify-between mb-2">
          <p className="font-medium text-sm leading-6">Ethnicity</p>
          <DropDown options={['Any', 'Black', 'Bad Ethnicity', 'Chinese', 'Highschooler', 'Pedophile']} />
        </div>
        <div className="flex w-full items-center justify-between mb-2">
          <p className="font-medium text-sm leading-6">Hair Color</p>
          <DropDown options={['Any', 'Greasy']} />
        </div>
        <div className="flex w-full items-center justify-between mb-2">
          <p className="font-medium text-sm leading-6">Eye Color</p>
          <DropDown options={['Any', 'Green', 'Blue', 'Brown', 'Hazel']} />
        </div>
        <div className="flex w-full items-center justify-between mb-2">
          <p className="font-medium text-sm leading-6">Vapes</p>
          <ButtonGroup options={['Either', 'Yes', 'No']} />
        </div>
        <div className="flex w-full items-center justify-between mb-2">
          <p className="font-medium text-sm leading-6">Obese</p>
          <ButtonGroupFake options={['Either', 'Yes', 'No']} />
        </div>
        <div className="flex w-full items-center justify-between">
          <button className='bg-slate-800 w-full text-foreground text-3xl flex px-5 py-6 rounded-xl justify-between hover:bg-slate-600 disabled:cursor-not-allowed disabled:bg-slate-600' onClick={() => setShowResults(true)} disabled={showResults}>
            <span>Let's Find Out</span>
            <span>➡️</span>
          </button>
        </div>
      </div>

      {/* Blank result */}
      {!showResults && (
      <div className="w-full p-8 rounded-2xl mt-4 mx-4 flex flex-col">
      </div>
      )}
      {/* Result */}
      {!!showResults && (
      <div className="w-full p-8 rounded-2xl mt-4 mx-4 flex flex-col">
        <h2 className="font-sans text-6xl mb-1">
          0.000000000133%
        </h2>
        <p className='mb-5'>of all people in the world meet your standards</p>
        <div className='bg-slate-800 py-4 px-3 rounded text-slate-500 text-xl'>
          That's <span className='font-extrabold text-white'>1</span> of <span className='font-extrabold text-white'>7,500,000,000</span>
          <div className='float-right text-xl'>🌎</div>
        </div>
        <div className='flex justify-center mb-2'>
          <img src="/f2roped.jpg" alt="" className='mt-5 rounded-2xl w-full h-96' />
        </div>
        <p className='text-4xl mb-2'>Come meet her</p>
        <div className='flex'>

        <a href="https://twitch.tv/fanfan" className='hover:underline text-2xl text-white bg-purple-600 w-80 text-center rounded-xl p-5'>https://twitch.tv/fanfan</a>
        </div>
      </div>
      )}
      </div>
    </div>
  )
}

function DropDown({options}) {
  const [selected, setSelected] = useState(0)
  return (
    <div className='w-[290px] text-right'>
      <select className='w-full text-lg' value={selected} onChange={(e) => setSelected(e.target.value)}>
      {options.map((option, index) => (
         <option value={index}>{option}</option>
      ))}
      </select>
    </div>
  )
}

function DoubleRangeSlider({def, min, max, dist, symbol=""}) {
  return (
    <div className='w-[300px] relative bottom-4'>
      <div className='h-1 bg-black relative top-4 w-[290px]'></div>
      <ReactSlider
        defaultValue={def}
        min={min}
        max={max}
        renderThumb={({key, ...props}, state) => <div  key={key} {...props}> <div className='outline-none ring-0 select-none flex items-center justify-center border size-6 text-sm text-center bg-white rounded-full border-black'><div>{state.valueNow}{symbol}</div></div></div>}
        pearling
        minDistance={dist}
      />
    </div>
  )
}

function ButtonGroup({ options }) {
  const [selected, setSelected] = useState(0)
  return (
    <div className="bg-[#312c2b0d] border rounded-[7px] border-[#362a220d] flex space-x-4 p-2 justify-evenly w-[300px]">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => setSelected(index)}
          className={`font-medium ease-in-out duration-100 focus-visible:outline rounded-[7px] px-5 py-2 ${selected === index ? 'bg-white border text-black' : 'text-slate-500'}`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

function ButtonGroupFake({ options }) {
  const [selected, setSelected] = useState(1)
  return (
    <div className="bg-[#312c2b0d] border rounded-[7px] border-[#362a220d] flex space-x-4 p-2 justify-evenly w-[300px]">
      {options.map((option, index) => (
        <button
        disabled
          key={index}
          onClick={() => setSelected(index)}
          className={`cursor-not-allowed font-medium ease-in-out duration-100 focus-visible:outline rounded-[7px] px-5 py-2 ${selected === index ? 'bg-white border text-black' : 'text-slate-500'}`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export default App
