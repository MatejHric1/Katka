import { Produkt } from "../../App/models/prodkuty"
import ProducList from "./ProductList";
import { useState, useEffect } from "react";



export default function Catalog( ) {
  const [produkty, setProdukty]= useState<Produkt[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/produkty')
    .then(response => response.json())
    .then(data => setProdukty(data))
  }, [])

  
    return (
    <>
      <ProducList produkty={produkty} />
    </>
    )
}