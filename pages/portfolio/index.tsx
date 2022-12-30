
import ProjectPreview from "../../components/ProjectPreview";
import PORTFOLIO_DATA from "../../project_data.json"

import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import { DataProps } from "../../index.types";

const Portfolio = () => {

    const { textImage, textLeave } = useContext(AppContext);
    return (
        <div className="relative w-[90%] md:w-[80%] mx-auto my-8">
            <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 '>
                {
                    PORTFOLIO_DATA.map((data: DataProps, _idx) => (
                        <ProjectPreview key={_idx} data={data} textEnter={textImage} textLeave={textLeave} />
                    ))
                }
            </div>
        </div>
    )
}


export default Portfolio;