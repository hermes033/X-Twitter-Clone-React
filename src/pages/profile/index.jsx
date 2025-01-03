import { useParams } from "react-router-dom"

function Profile() {

  const { slug } = useParams()

  return (
    <div>
      Profile Page - {slug} 21:58 3 bolum
    </div>
  )
}

export default Profile