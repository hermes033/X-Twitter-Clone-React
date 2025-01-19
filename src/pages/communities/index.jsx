import { Helmet } from "react-helmet-async";
import CommunitiesHeader from "./comHeader";
import CommunitiesNav from "./comNav";

export default function Communities() {
  return (
    <div>
      <Helmet>
        <title>Communities / X</title>
      </Helmet>

      <div className="fixed top-0">
        <CommunitiesHeader />
      </div>

      <div className="mt-[50px]">
        <CommunitiesNav />
      </div>

    </div>
  )
}