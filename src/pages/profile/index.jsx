import ProfileMain from "./profileMain"
import ProfileNav from "./profileNav"
import ProfileTop from "./profileTop"

function Profile() {
  return (
    <>
      <div className="fixed top-0 w-[599px] border-r-[1px] z-50 border-[#2f3336] backdrop-blur-md bg-transparent bg-black">
        <ProfileTop />
      </div>

      <div className="mt-[54px]">
        <ProfileMain />
      </div>

      <div>
        <ProfileNav />
      </div>
    </>

  )
}

export default Profile