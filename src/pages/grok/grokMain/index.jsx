import GrokMainBottom from "./grokMainBottom";
import GrokMainTop from "./grokMainTop";

export default function GrokMain() {
  return (
    <div className="w-[800px] h-[362px] flex flex-col items-center">
      <GrokMainTop />
      <GrokMainBottom />
    </div>
  )
}