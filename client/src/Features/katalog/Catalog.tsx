import agent from "../../App/api/agent";
import LoandingComponent from "../../App/layout/LoadingComponent";
import { Produkt } from "../../App/models/prodkuty"
import ProducList from "./ProductList";
import { useState, useEffect } from "react";



export default function Catalog( ) {
  const [produkty, setProdukty]= useState<Produkt[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Catalog.list()
    .then(produkty => setProdukty(produkty))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }, [])

  if (loading) return <LoandingComponent message='Načitavam...'/>

    return (
    <>
      <ProducList produkty={produkty} />
    </>
    )
}