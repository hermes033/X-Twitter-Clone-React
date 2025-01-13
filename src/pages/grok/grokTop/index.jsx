export default function GrokTop() {
  return (
    <div className="w-full bg-[#00000075] backdrop-blur-md h-[53px] flex items-center justify-between">

      <div className="w-[318.8px] h-[32px] cursor-pointer">
        <div className="rounded-full hover:bg-[#3d3d3d6d] w-[30.4px] h-[30.4px] flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="cursor-pointer" width={18} height={18}>
            <g>
              <path fill="#eff3f4" d="M19.5 3h-15C3.122 3 2 4.121 2 5.5v13C2 19.879 3.122 21 4.5 21h15c1.378 0 2.5-1.121 2.5-2.5v-13C22 4.121 20.878 3 19.5 3zM4 18.5v-13c0-.275.224-.5.5-.5H11v14H4.5c-.276 0-.5-.225-.5-.5zm16 0c0 .275-.224.5-.5.5H13V5h6.5c.276 0 .5.225.5.5v13zM15 7h3v2h-3V7zm0 4h3v2h-3v-2z">
              </path>
            </g>
          </svg>
        </div>
      </div>


      <div className="flex items-center w-[318.8px] h-[32px] justify-center">
        <div className="w-[132.01px] mb-0.5 ml-1 h-[32px] rounded-full hover:bg-[#3d3d3d6d] flex items-center justify-center cursor-pointer">
          <p className="font-bold text-[14px] w-[44.13px] h-[20px] text-[#e7e9ea]">Grok 2</p>
          <span className="w-[41.99px] h-[20px] ml-1 mr-1 pb-0.5 bg-[#02113d] rounded-md flex items-center justify-center text-[#1d9bf0] text-[13px] font-bold">new</span>
          <svg viewBox="0 0 24 24" width={16} height={16} className="mt-[2px] flex justify-center items-center">
            <g>
              <path
                fill="#565a5f" d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z">
              </path>
            </g>
          </svg>
        </div>
      </div>


      <div className="flex items-center w-[318.8px] h-[32px] justify-end">
        <div className="flex items-center justify-center rounded-full hover:bg-[#3d3d3d6d] transition-all cursor-pointer w-[105px] h-[32px]">
          <svg viewBox="0 0 24 24" width={18} height={18} className="mr-1">
            <g>
              <path fill="#eff3f4" d="M12 4C9.25 4 6.83 5.39 5.38 7.5H8v2H2v-6h2V6c1.82-2.43 4.73-4 8-4 5.52 0 10 4.48 10 10s-4.48 10-10 10c-4.76 0-8.74-3.33-9.75-7.78l1.95-.44C5.01 17.34 8.19 20 12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8zm-1 4h2v3.59l3.21 3.2-1.42 1.42-3.79-3.8V8z">
              </path>
            </g>
          </svg>
          <span className="text-[#e7e9ea] font-semibold">History</span>
        </div>
      </div>

    </div>
  )
}