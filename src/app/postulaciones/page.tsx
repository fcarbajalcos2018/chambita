"use client"

import { NavBar } from "@/shadcn-ui/navbar";
import Leer from "@/api/leer";

export default function Postulaciones() {

    const email = 'frankair@amail.io';
    const data = Leer('http://localhost:3001/postulaciones');
    let jsonData = [
        {
            "id": "---",
            "email": "----",
            "name": "----",
            "surname": "----",
            "phoneNo": "-----"
        }
    ];
    if (data != null) {
        jsonData = data;
    }
    console.log(jsonData[0].id);
    const filtrado = jsonData.filter(elem => elem.email == email);
    console.log(filtrado);

    return (
        <main>
            <div>Mis Postulaciones</div>
            <NavBar/>
            {
                filtrado.map(elem => {
                    return(
                        <div>
                            <div>{ elem.id }</div>
                            <div>{ elem.email }</div>
                            <div>{ elem.name + ' ' + elem.surname }</div>
                            <div>{ elem.phoneNo }</div>
                        </div>
                    )
                })
            }
        </main>
    );
}