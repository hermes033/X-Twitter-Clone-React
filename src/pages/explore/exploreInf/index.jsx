import { exploreInfConst } from "~/utils/expoloreInf";

export default function ExploreInf() {
  return (
    <div className="max-w-[600px] mt-[8px] flex flex-col justify-between">
      {exploreInfConst.map((infos, index) => (
        <div
          key={index}
          className="mt-2 cursor-pointer hover:bg-[#3d404300] items-center w-[600px] h-[78px] flex justify-between"
        >
          <div className="flex flex-col pl-4">
            <p className="text-[13px] text-[#71767b]">{infos.topText}</p>
            <span className="font-bold text-[#e7e9ea]">#{infos.bottomText}</span>
            <span className="text-[#71767b] text-[13px]">10.6K posts</span>
          </div>

          <div className="cursor-pointer transition-all  rounded-full pt-1 pl-1 pr-4 pb-4">
            <svg viewBox="0 0 24 24" width={20} height={20} >
              <path
                fill="#71767b"
                className="hover:blue-500"
                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
              ></path>
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
