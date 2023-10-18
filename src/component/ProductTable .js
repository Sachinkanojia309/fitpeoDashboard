import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TableFooter, TablePagination } from '@mui/material';

const ProductTable = ({ products }) => {
  // Define table columns
  const columns = [
    { id: 'image', label: 'Product Image', minWidth: 100 },
    { id: 'name', label: 'Product Name', minWidth: 200 },
    { id: 'stock', label: 'Stock', minWidth: 100 },
    { id: 'price', label: 'Product Price', minWidth: 100 },
    { id: 'totalsale', label: 'Total Sales', minWidth: 100 },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead style={{overflow:"hidden"}}>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} style={{overflow:"hidden",color:"#000",fontSize:"18px",fontWeight:"bold"}}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody style={{overflow:"scroll"}}>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell>
                <img src={product.image} alt={product.name} style={{ width: 50, height: 50 }} />
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>${product.stock}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>${product.totalsale}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
