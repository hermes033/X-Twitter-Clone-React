import Button from "~/components/button"

export default function MessagesRight() {
  return (
    <section className="bg-red-400-48 border-[1px] border-[#2f3336] w-[601px] flex justify-center items-center">
      <div className="w-[336px] h-[164px] mb-10 flex items-center justify-evenly">
        <div className="w-[324.4px] h-[200px] pt-7 flex flex-col items-start justify-between">
          <div className="flex flex-col items-start">
            <h2 className="w-[262.61px] text-[31px] break-words font-extrabold tracking-[0.3px]">Select a message</h2>
            <p className="w-[318px] text-[#71767b]">Choose from your existing conversations, start a new one, or just keep swimming.</p>
          </div>
          <Button size="msgbtnright">New message</Button>
        </div>
      </div>
    </section>
  )
}