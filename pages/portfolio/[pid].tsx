
import { useRouter } from "next/router";

import PORFOLIO_DATA from "../../project_data.json";


const ProjectInformation = () => {

  const router = useRouter();
  const { pid } = router.query;
  console.log("portolio ID :", pid);
  return (
    <div className="w-[90%] mx-auto flex flex-col justify-center  md:w-[80%] md:flex-row">


    </div>
  )
}


export default ProjectInformation;