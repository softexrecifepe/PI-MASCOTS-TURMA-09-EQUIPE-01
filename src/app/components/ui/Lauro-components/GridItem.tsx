import React from "react";
//import * as C from "./styles";
import {FaTrash, FaEdit} from "react-icons/fa";
type GridItemType={
  item:string;
  onDelete:()=> void;
}
type ProdutoType={
  item:string;
  descricao:string;
  quantidade:number;
  valor:number;
}
const GridItem = ({ item, onDelete }: GridItemType) => {

  const produto:ProdutoType[]=[{item:"agulha", descricao:"20mm", quantidade:3, valor:20}]
return(
  <>
      <div>
        <ul>
      {produto.map((item,index)=>(
        <div key={index}>
          <li>  {item.item}  </li>
          <li> {item.descricao}</li>
          <li> {item.quantidade}</li>
          <li> {item.valor}</li>
        </div>
        
      ))}
      </ul>
      </div> 
  </>
)
  
  // return (
  //   <C.Tr>
  //     <C.Td alignCenter>
  //     <C.Td>{item.desc}</C.Td>
  //     </C.Td>
  //     <C.Td alignCenter>
  //     <C.Td>{item.desc}</C.Td>
  //     </C.Td>
  //     <C.Td alignCenter>
  //     <C.Td >1{item.productCount}</C.Td>
  //     </C.Td>
  //     <C.Td alignCenter>
  //       <C.Td>R$ {item.amount},00</C.Td>
  //     </C.Td>
  //     <C.Td alignCenter>
  //     <FaEdit onClick={( )=>onDelete} />
  //       </C.Td>
  //     <C.Td alignCenter>
  //       <FaTrash onClick={() => onDelete(item.id)} />
  //     </C.Td>
  //   </C.Tr>
  // );
};

export default GridItem;