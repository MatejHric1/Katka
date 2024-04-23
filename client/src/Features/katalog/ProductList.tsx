import { Grid } from "@mui/material";
import { Produkt } from "../../App/models/produkty";
import ProductCard from "./ProductCard";


interface Props {
    produkty: Produkt[];
}

export default function ProducList({produkty}: Props) {
    return(
        <Grid container spacing={4}>
                {produkty.map(produkty => (
                    <Grid item xs={3}>
                        <ProductCard key={produkty.id} produkty={produkty} />
                    </Grid>
                ))}
        </Grid>
    )
}