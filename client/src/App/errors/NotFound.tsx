import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <Container component={Paper} sx={{height: 400}}>
            <Typography gutterBottom variant='h3'> Oops - nemohli sme nájsť to čo hľadáťe!</Typography>
            <Divider/>
            <Button fullWidth component={Link} to='/catalog'>Spať do obchodu</Button>
        </Container>
    )
}