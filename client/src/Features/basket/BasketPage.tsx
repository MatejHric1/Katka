import { useEffect, useState } from "react"
import { Basket } from "../../App/models/basket";
import agent from "../../App/api/agent";
import LoandingComponent from "../../App/layout/LoadingComponent";
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

export default function BasketPage() {
    const [loading, setLoading] = useState(true);
    const [basket, setBasket] = useState<Basket | null>(null);

    useEffect(() => {
        agent.Basket.get()
            .then(basket => setBasket(basket))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <LoandingComponent message="Loading basket..."/>

    if (!basket) return <Typography variant="h3">Your basket is empty</Typography>

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Produkt</TableCell>
              <TableCell align="right">Cena</TableCell>
              <TableCell align="right">Množstvo</TableCell>
              <TableCell align="right">Cena</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basket.items.map(item => (
              <TableRow
                key={item.produktId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.meno}
                </TableCell>
                <TableCell align="right">${(item.cena / 100).toFixed(2)}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">${((item.cena / 100 ) * item.quantity).toFixed(2)}</TableCell>
                <TableCell align="right">
                    <IconButton color='error'>
                         <Delete/>
                    </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}