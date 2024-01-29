"use client"

import { Url } from "next/dist/shared/lib/router/router";
import React from "react";
import { useSearchParams } from "next/navigation";
//import Data from '../../data/resultados.json';
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import Leer from "@/api/leer";
import { Button } from "@/shadcn-ui/ui/button";
import Link from "next/link";

interface Props{
    id: string;
}

type Puesto = {
    id: string;
    puesto: string;
    empresa: string;
}

function InformacionDePuesto() {
    
    let info = ConseguirInformacionDelPuesto();
    return(
        <div>
            <div>Puesto: {info?.puesto} </div>
            <div>Empresa: {info?.empresa} </div>
            <Button asChild>
                <Link href="/postular">Postular</Link>
            </Button>
        </div>
    );
}

function ConseguirInformacionDelPuesto() {
    const param = useSearchParams().get('id');

    console.log('d' + param);
    const data = Leer();
    let jsonData = [
        {
            "id": "-1",
            "puesto": "-----",
            "empresa": "-----"
        }
    ];
    console.log(`Datos: ${JSON.stringify(data)}`);
    if (data == null) {
        return jsonData[0];
    }
    jsonData = data
    const jobData = jsonData.find(elem => elem.id === param);
    console.log(jobData);

    return jobData;
}

export default InformacionDePuesto;