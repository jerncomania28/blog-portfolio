import React from "react";
import HeaderStyle from "./HeaderStyle";

interface ExprerienceData {
  name: string;
  role: string;
  location: string;
  duration: string;
}

const ExperienceView: React.FC<ExprerienceData> = ({ name, role, location, duration }) => {
  return (
    <div className="relative text-left my-4">
      <HeaderStyle className='mb-4 whitespace-nowrap' headerClassName='text-[20px] md:text-[25px]'>
        {name}
      </HeaderStyle>
      <p className="text-[18px] font-alclonica font-bold">{role}</p>
      <div className="flex justify-between my-3 font-alclonica capitalize">
        <small>{location}</small>
        <small>{duration}</small>
      </div>
    </div>
  )
}

export default ExperienceView;