import React from "react";
//import * as C from "./styles";
type resumeItemType ={ 
  tittle:string;
  icon?:string;
  value:number;
}
const ResumeItem = ({ tittle, icon, value  }:resumeItemType) => {
  return (
    <>
    <div>
      <span>{value}</span>
      <span>{tittle}</span>
    </div>
    </>
    // <C.Container>
    //   <C.Header>
    //   <C.Total>{value}</C.Total>
    //   </C.Header>
    //   <C.HeaderTitle>{title}</C.HeaderTitle>
    // </C.Container>
  );
};

export default ResumeItem;