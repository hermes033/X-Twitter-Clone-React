import Button from "~/components/button";

export default function MessagesMain() {
  return (
    <div className="w-[388.4px] h-[280px] flex items-center justify-center">
      <div className="w-[324.4px] h-[200px] flex flex-col items-start justify-between pl-6">
        <div className="flex flex-col items-start justify-between">
          <h2 className="w-[262.61px] h-[72.8px] text-[31px] leading-[36px] break-words font-bold tracking-[0.3px]">Welcome to your inbox!</h2>
          <p className="w-[318px] text-[#71767b] h-[38.4px] pt-2">Drop a line, share posts and more with private conversations between you and others on X. </p>
        </div>
        <Button size="msgbtn">Write a message</Button>
      </div>
    </div>

  )
}