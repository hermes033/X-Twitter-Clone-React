import { Outlet } from "react-router-dom"

export default function MainBar() {
  return (
    <div className="max-W-[600px]  min-h-[2000px]">
      <Outlet />
    </div>
  )
}