import ProfileMain from "./profileMain"
import ProfileNav from "./profileNav"
import ProfileTop from "./profileTop"

function Profile() {
  return (
    <>
      <div className="fixed top-0 w-[599px] bg-black">
        <ProfileTop />
      </div>

      <div className="mt-[52px]">
        <ProfileMain />
      </div>

      <div>
        <ProfileNav/>
      </div>
    </>

  )
}

export default Profile