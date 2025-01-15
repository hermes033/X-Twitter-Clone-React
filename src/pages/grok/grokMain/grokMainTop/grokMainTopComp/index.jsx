export default function GrokMainTopComp({ text, logo }) {
  return (
    <div className="w-[170px] h-[130px] bg-[#0d0f10] rounded-xl hover:bg-[#202327] flex flex-col justify-center pl-4 transition-colors duration-[450ms] cursor-pointer">

      <p className="w-[138px] h-[78px]">{text}</p>
      <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-z80fyv r-19wmn03">
        <g>
          <path fill="#1d9bf0" d={logo}>
          </path>
        </g>
      </svg>

    </div>
  )
}