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
                        </div>
                    );
                })
            }
        </div>
    );
}
export { ListaDeResultados };