import { NotMain } from "~/utils/notConst";

export default function NotSmsComp() {
  return (
    <div className="w-full h-[120px]">
      {NotMain.map((mainContent, index) => (
        <div key={index} className="w-full h-[120px] pt-[11px] flex border-b-[1px] border-[#2f3336] hover:bg-[#2d2d2d3c] m-auto pl-[25px] cursor-pointer">
          <div className="flex w-full">
            <svg viewBox="0 0 24 24" width={30} height={30}>
              <path
                fill="#794bc4"
                d="M22.99 11.295l-6.986-2.13-.877-.326-.325-.88L12.67.975c-.092-.303-.372-.51-.688-.51-.316 0-.596.207-.688.51l-2.392 7.84-1.774.657-6.148 1.82c-.306.092-.515.372-.515.69 0 .32.21.6.515.69l7.956 2.358 2.356 7.956c.09.306.37.515.69.515.32 0 .6-.21.69-.514l1.822-6.15.656-1.773 7.84-2.392c.303-.09.51-.37.51-.687 0-.316-.207-.596-.51-.688z"
              ></path>
            </svg>

            <div className="flex pl-2 h-full flex-col items-start">
              <img src={mainContent.profImg} className="w-[32px] h-[32px] rounded-full" alt="" />
              <h3 className="pt-2.5 font-bold">{mainContent.profName}</h3>
              <span className="pt-2.5 text-[#757677]">{mainContent.mainMessage}</span>
            </div>
          </div>

          <div className="w-[34.75px] mr-2 -mt-2 h-[34.75px] flex items-center justify-center rounded-full hover:bg-[#29282859] transition-all">
            <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
              <path
                fill="#757677"
                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
              ></path>
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
