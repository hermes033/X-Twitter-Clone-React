import Button from "~/components/button"

export default function Premium() {
  return (
    <aside className="mt-3 w-[350px] bg-black mb-4 rounded-2xl border border-[#2F3336] py-3 px-4 flex flex-col gap-2.5 text-[#e7e9ea]">
      <h6 className="text-xl leading-6 font-extrabold">Subscribe to Premium</h6>
      <p className="leading-5 text-[15px] font-normal">Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
      <div className="self-start">
        <Button size="premium" >Subscribe</Button>
      </div>
    </aside>
  )
}