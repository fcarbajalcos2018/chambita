import Link from 'next/link';
import { AccederArchivos } from '@/funciones/AccederArchivos';

function ListaDeResultados() {
    const data : string = AccederArchivos();
    //const jsonData = JSON.parse(data);
    //console.log('Mis resultados' + jsonData.sin);
    return(
        <div>
            {/*
                Data.map( elem => {
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
                                }}>Postular</Link>
                        </div>
                    );
                })*/
            }
        </div>
    );
}
export { ListaDeResultados };