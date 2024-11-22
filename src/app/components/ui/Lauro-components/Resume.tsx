import React from "react";
import ResumeItem from "./ResumeItem";
//import * as C from "./styles";
type ResumeType={
  total:number;
  productCount:number;
}
const Resume = ({ total, productCount }:ResumeType) => {
  return (
    <>
    <div>
      <span>{total}</span>
      <span>{productCount}</span>
      
    </div>
    </>
    // <C.Container>
    //   <ResumeItem title="Valor em Estoque" value={total} />
      
    //   <ResumeItem title="Total de Produtos" value={productCount} />
    // </C.Container>
  );
};

export default Resume;
