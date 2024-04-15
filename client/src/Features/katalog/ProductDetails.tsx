import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Produkt } from "../../App/models/prodkuty";
import agent from "../../App/api/agent";
import NotFound from "../../App/errors/NotFound";
import LoandingComponent from "../../App/layout/LoadingComponent";

export default function ProductDetails() {
    const {id} = useParams<{id: string}>();
    const[produkty, setProdukty] = useState<Produkt | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        id && agent.Catalog.details(parseInt(id))
        .then(response => setProdukty(response))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));

    }, [id])

    if (loading) return <LoandingComponent message='Načitavam...'/>

    if (loading) return <h3>Loanding...</h3>

    if(!produkty) return <NotFound />

    return (
        <Grid container spacing ={6}>
            <Grid item xs={6}>
                <img src={produkty.fotkaUrl} alt={produkty.meno} style={{width: '100%'}}/>
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h3'>{produkty.meno}</Typography>
                <Divider sx={{mb:2}} />
                <Typography variant='h4' color='secondary'>${(produkty.cena / 100).toFixed(2)}</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Meno</TableCell>
                                <TableCell>{produkty.meno}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Popis</TableCell>
                                <TableCell>{produkty.popis}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Typ</TableCell>
                                <TableCell>{produkty.typ}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Znacka</TableCell>
                                <TableCell>{produkty.znacka}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Množstvo na sklade</TableCell>
                                <TableCell>{produkty.quantityInStock}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}