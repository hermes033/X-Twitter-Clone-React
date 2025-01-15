export default function GrokMainBottom() {
  return (
    <div className="mt-3 w-[740px] h-[220px] flex justify-evenly items-center">

      <div className="group cursor-pointer relative rounded-xl">
        <img
          src="https://abs.twimg.com/responsive-web/client-web/robot@2x.0418fcca.jpg"
          className="rounded-xl opacity-35 group-hover:opacity-100 transition duration-300 w-[352px] h-[220px] ease-in-out"
        />

        <span className="absolute flex justify-center items-center -mt-9 ml-5 w-[175.13px] h-[24px] bg-black rounded-lg" >A robot in a flower field</span>

      </div>


      <div className="group cursor-pointer relative rounded-xl">
        <img
          src="https://abs.twimg.com/responsive-web/client-web/roadster@2x.70ead61a.jpg"
          className="rounded-xl opacity-35 group-hover:opacity-100 transition duration-300 w-[352px] h-[220px] ease-in-out"
        />

        <span className="absolute flex justify-center items-center -mt-9 ml-5 w-[90.13px] h-[24px] bg-black rounded-lg" >Mount Fuji</span>

      </div>

    </div>
  )
}