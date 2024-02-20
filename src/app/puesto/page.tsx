"use client"

import React from "react";
import { useSearchParams } from "next/navigation";
import Leer from "@/api/leer";
import { Button } from "@/shadcn-ui/ui/button";
import Link from "next/link";

function InformacionDePuesto() {
    
    let info = ConseguirInformacionDelPuesto();
    return(
        <div>
            <div>Puesto: {info?.puesto} </div>
            <div>Empresa: {info?.empresa} </div>
            <Button asChild>
                <Link href={
                    {
                        pathname: "/postular/",
                        query: {
                            id: info?.id,
                        }
                    }
                }>Postular</Link>
            </Button>
        </div>
    );
}

function ConseguirInformacionDelPuesto() {
    const param = useSearchParams().get('id');

    console.log('d' + param);
    const data = Leer('http://localhost:3001/puestos');
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
    const jobData = jsonData.find(elem => elem.id == param);
    console.log(jobData);

    return jobData;
}

export default InformacionDePuesto;