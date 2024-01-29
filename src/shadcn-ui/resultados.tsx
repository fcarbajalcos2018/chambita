import Leer from '@/api/leer';
import Link from 'next/link';

function ListaDeResultados() {
    const data = Leer();
    let jsonData = [
        {
            "id": "-1",
            "puesto": "-----",
            "empresa": "-----"
        }
    ];
    console.log(`Datos: ${JSON.stringify(data)}`);
    if (data != null) {
        jsonData = data
    }
    //const jsonData = JSON.parse(data);
    //console.log('Mis resultados' + jsonData.sin);
    return(
        <div>
            {
                jsonData.map( elem => {
                    return(
                        <div>
                            <div>
                                { elem.puesto }
                            </div>
                            <div>
                                { elem.empresa }
                            </div>
                            <Link href={
                                {
                                    pathname: '/puesto/',
                                    query: {
                                        id: elem.id,
                                    }
                                }}>Mas información</Link>
                        </div>
                    );
                })
            }
        </div>
    );
}
export { ListaDeResultados };