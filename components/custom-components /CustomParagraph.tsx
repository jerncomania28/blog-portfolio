import React from "react";


export interface CustomParagraphProps {
  children: React.ReactNode
}

const CustomParagraph: React.FC<CustomParagraphProps> = ({ children }) => {
  return (
    <p className="my-3 text-left">
      {children}
    </p>
  )

}


export default CustomParagraph;