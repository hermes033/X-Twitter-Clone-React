import Button from "~/components/button"

export default function Premium() {
  return (
    <aside className="mt-16 bg-black mb-4 rounded-2xl border border-[#2F3336] py-3 px-4 flex flex-col gap-2.5 text-[#e7e9ea]">
      <h6 className="text-xl leading-6 font-extrabold">Try Premium for free today</h6>
      <p className="leading-5 text-[15px] font-normal">Upgrade your experience with less ads, power tools, and more with Premium.</p>
      <div className="self-start">
        <Button size="premium" >Start free 14-day trial</Button>
      </div>
    </aside>
  )
}