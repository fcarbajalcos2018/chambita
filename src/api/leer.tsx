import fs from 'fs/promises';
import path from 'path';
import { URL } from '../funciones/URL';
import res from './resultados.json'

export default async function Leer() {  
    const filePath = path.join(URL(), '../../public', 'resultados.json');
    console.log(process.cwd())
    try {
        console.log(filePath)
        const data = await fs.readFile('./resultados.json');
        //const data = { prueba: 'ddd' };
        console.log('data')
        console.log(data);
        return data;
    }
    catch (error) {
        console.error('No se ha podido cargar el archivo');
        throw new Error('Archivo no encontrado.');
    }
}