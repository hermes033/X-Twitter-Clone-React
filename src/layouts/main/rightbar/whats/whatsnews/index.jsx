import { whatsConst } from "~/utils/whatsConst"

export default function WhatsComponent() {
  return (
    <div className="w-full h-[248px] flex flex-col items-center ">
      {whatsConst.map((trend, index) => (
        <div key={index} className="hover:bg-[#1d1d1d2d] cursor-pointer hover:bg-slate-950 w-full h-[62px] pl-4 pr-4 flex items-center justify-between">

          <div className="flex items-center justify-between w-full">
            {/* Text kısmı */}
            <div>
              <p className="text-[#6a6f74]">{trend.topText}</p>
              <span className="font-bold text-[#e7e9ea]">{trend.bottomText}</span>
            </div>

            {/* SVG kısmı */}
            <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
              <path
                fill="#6a6f74"
                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
              ></path>
            </svg>
          </div>

        </div>
      ))}

    </div>


  );
}
