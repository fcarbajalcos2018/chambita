"use client"

import { Url } from "next/dist/shared/lib/router/router";
import React from "react";
import { useSearchParams } from "next/navigation";
import Data from '../../data/resultados.json';
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

interface Props{
    id: string;
}

type Puesto = {
    id: string;
    puesto: string;
    empresa: string;
}

function InformacionDePuesto() {
    
    const info = ConseguirInformacionDelPuesto();
    return(
        <div>
            
        </div>
    );
}

function ConseguirInformacionDelPuesto() {
    const param = useSearchParams().get('id');
    const paramInt = param !== null ? parseInt(param) : 0

    console.log('d' + param);
    const data = Data.find(elem => elem.id === paramInt);
    /*let puesto : Puesto = {
        id: Data.at( ),
    };*/

    return data;
}

export default InformacionDePuesto;