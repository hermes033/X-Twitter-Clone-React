import GrokInput from "./grokInput";
import GrokText from "./grokText";
import GrokTop from "./grokTop";

export default function Grok() {
  return (
    <div className="w-[1048.5px] flex justify-center border-r-[1px] h-[290vh] border-[#2f3336] bg-black">

      <div className="fixed w-[1016px] top-0">
        <GrokTop />
      </div>

      <div>
        <GrokInput /> 
        <GrokText/>
      </div>


     
       
      


    </div>
  )
}