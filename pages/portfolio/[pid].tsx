
import Image from "next/image";
import { useRouter } from "next/router";

import PORFOLIO_DATA from "../../project_data.json";
import { useEffect, useState } from "react";

import { DataProps } from "../../index.types";

const ProjectInformation = () => {

  const [currentProject, setCurrentProject] = useState<DataProps>();

  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {

    const current = PORFOLIO_DATA.find(data => data.href === pid)

    setCurrentProject(current);

  }, [pid]);

  return (
    <div className="w-[90%] mx-auto flex flex-col justify-center relative md:w-[80%] md:flex-row">

      <div className="w-full relative h-[300px] my-3 md:w-[45%] flex justify-center items-center ">
        <Image src={currentProject ? currentProject.imagePath : ""} alt="visual" width={400} height={400} priority={true} />
      </div>

      <div className="w-full relative my-2 text-left md:w-[45%] text-[20px] md:my-auto overflow-hidden font-proxima">
        <h1 className="capitalize mb-2 font-bold font-alclonica">
          {currentProject?.name}
        </h1>
        <p className="my-2">
          {currentProject?.projectDescription}
        </p>
        <p className="my-2 font-bold">
          {`Technologies : ${currentProject?.technologies}`}
        </p>
        <div className="flex">
          <a
            href={currentProject?.liveUrl}
            target="_blank"
            className="px-4 py-2 my-4 border-[1px] border-solid border-custom-grey transition duration-500 ease-in-out hover:border-none hover:bg-custom-grey hover:text-black"
            rel="noreferrer"
          >
            Live Url
          </a>
          <a
            href={currentProject?.sourceUrl}
            target="_blank"
            className="px-4 py-2 my-4 mx-4 border-[1px] border-solid border-custom-grey transition duration-500 ease-in-out hover:border-none hover:bg-custom-grey hover:text-black"
            rel="noreferrer"
          >
            Source Code
          </a>
        </div>

      </div>


    </div>
  )
}


export default ProjectInformation;