
import { useRouter } from "next/router";

import PORFOLIO_DATA from "../../project_data.json";


const ProjectInformation = () => {

  const router = useRouter();
  const { pid } = router.query;
  console.log("portolio ID :", pid);
  return (
    <div>

      Dynamic Project Information Disaplay

    </div>
  )
}


export default ProjectInformation;