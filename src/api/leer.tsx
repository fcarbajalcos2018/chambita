import { useEffect, useState } from 'react';

export default function Leer() {  
    console.log(process.cwd())
    const [data, setData] = useState(null);
    useEffect(() => {
        async function cargar() {
            try {
                console.log('Cargando datos')
                fetch('http://localhost:3001/puestos').then(res => {
                    console.log('red');
                    console.log(res);
                    return res.json();
                }).then(getData => {
                    console.log(getData)
                    setData(getData);
                });
                console.log('data')
                console.log(data);
            }
            catch (error) {
                console.error('No se ha podido cargar el archivo');
                throw new Error('Archivo no encontrado.');
            }
        }
        cargar();
    }, [])
    return data;
}