import React from "react";




const CustomParagraph = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="my-3 text-left">
      {children}
    </p>
  )

}


export default CustomParagraph;