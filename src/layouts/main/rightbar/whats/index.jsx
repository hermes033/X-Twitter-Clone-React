import { Link } from "react-router-dom"
import WhatsComponent from "./whatsnews"

export default function WhatsHappening() {
  return (

    <section className="w-[348.4px] h-[471.1px] border border-[#2F3336] rounded-2xl pt-[12px]">
      <div className="w-full h-[48px] pl-4">
        <div className="w-[316.4px] h-[24px]">
          <h2 className="w-[178.29px] h-full text-[20px] font-bold text-[#e7e9ea]">What’s happening</h2>
        </div>
      </div>

      <div className="w-full h-[103.1px] pl-4 flex items-center cursor-pointer hover:bg-[#1d1d1d2d]">
        <div className="w-full h-[79.1px] flex items-center">
          <img src='https://pbs.twimg.com/semantic_core_img/1874110387446001664/r5Oi9C0Z?format=jpg&name=240x240' className="h-full object-cover" alt="" width={79.1} height={79.1} />
          <div className="w-[225.3px] h-full flex flex-col items-center ml-3">
            <span className="w-full h-[20px] font-bold">Kings World Cup Nations</span>
            <span className="w-full h-[16px] text-[13px] text-gray-500">LIVE</span>
          </div>
        </div>
      </div>

      <div>
        <WhatsComponent />
      </div>

      <div className="text-[#1e9bf1] pl-4 pt-5 h-[52px] w-[348.4px]">
        <Link to='whatshap' className="text-[#1880c7]">Show more</Link>
      </div>

    </section>

  )
}