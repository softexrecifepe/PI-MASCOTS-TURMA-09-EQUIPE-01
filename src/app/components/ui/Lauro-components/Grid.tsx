import React from "react";
import GridItem from "./GridItem";
//import * as C from "./styles";
type GridType={
  itens:string;
  setItens:string;
}

const Grid = ({ itens, setItens }:GridType) => {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={50}>Produto</C.Th>
          <C.Th width={20}>categoria</C.Th>
          <C.Th width={20}>Estoque</C.Th>
          <C.Th width={30}>Preço</C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;