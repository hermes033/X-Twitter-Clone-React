import GrokInput from "./grokInput";
import GrokMain from "./grokMain";
import GrokText from "./grokText";
import GrokTop from "./grokTop";

export default function Grok() {
  return (
    <div className="w-[1048.5px] border-r-[1px] h-[290vh] border-[#2f3336] bg-black">

      <div className="w-[1047.5px] flex justify-center items-center flex-col h-[150vh] bg-black">
        <div className="fixed w-[1016px] top-0 ">
          <GrokTop />
        </div>

        <div className="flex flex-col items-center justify-between h-[577.11px] mb-[132px]">
          <div className="w-[750px] h-[138px]">
            <GrokInput />
            <GrokText />
          </div>

          <div className="">
            <GrokMain />
          </div>
        </div>
      </div>

    </div>
  )
}