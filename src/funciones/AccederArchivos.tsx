import fs from 'fs';
import path from 'path';
import React, { useEffect, useState } from 'react';
import Leer from '@/api/leer';

function AccederArchivos() {
    const [data, setData] = useState(null);
    console.log('dddw');
    useEffect(() => {
        console.log('ddddww');
        async function cargar() {
            console.log('Iniciando carga de json');
            try {
                const res = await Leer();
                const mres = res.toString();
                console.log(`s ${res.prueba}`);
                //setData(mres);
            }
            catch(error) {
                console.error('Lo sentimos, pero no se ha podido cargar el archivo.')
            }
        }
        cargar();
    });
    let dataString : string = '{ "sin": "datos" }';
    console.log(dataString);
    console.log(data);
    if (data) {
        dataString = data;
    }
    console.log(dataString);
    return JSON.parse(dataString);
}

export { AccederArchivos };