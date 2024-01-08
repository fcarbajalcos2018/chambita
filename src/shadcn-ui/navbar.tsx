import Link from "next/link";
import { Button } from "./ui/button";

function NavBar() {
    console.log('nav');
    return (
        <nav>
            <div className="flex justify-between">
                <Link href="/">
                    <div>Inicio</div>
                </Link>
                <Link href="/postulaciones">
                    <div>Mis Postulaciones</div>
                </Link>
                <Link legacyBehavior href="/">
                    <a onClick={() => logOut()}>Salir</a>
                </Link>
            </div>
        </nav>
    );
}

function logOut() {
    console.log('ss')
}

export { NavBar };