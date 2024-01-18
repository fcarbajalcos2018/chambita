import Link from 'next/link';
import Data from '../data/resultados.json';

function ListaDeResultados() {
    console.log('Mis resultados');
    return(
        <div>
            {
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
                })
            }
        </div>
    );
}
export { ListaDeResultados };