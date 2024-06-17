import '@fontsource-variable/frank-ruhl-libre'
import '@fontsource/be-vietnam-pro'


function App() {
  return (
    <div>
      {/* Header */}
      <div className="bg-black">
        <div className="flex py-5 mx-5 items-center">
          <img className="h-16" src="/logo.png" alt="" />
          <span className="font-sans tracking-[0.5em] text-2xl ml-5">ROPEHER</span>
        </div>
      </div>

      {/* form */}
      <div className='bg-white text-background w-1/2 p-8 rounded-2xl mt-4 ml-4 flex flex-col'>
        <h2 className='font-serif text-4xl leading-[125%] mb-5'>What percent of men in the world meet your standards?</h2>
        <div className="flex w-full items-center justify-between h-[44px]">
          <p className="font-medium text-sm leading-6">Gender</p>
          <div className='bg-slate-300 rounded-sm'></div>
        </div>
      </div>
    </div>
  )
}

export default App
