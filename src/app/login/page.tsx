"use client"

import Link from "next/link";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shadcn-ui/ui/form";
import {ControllerFieldState, ControllerRenderProps, UseFormStateReturn, useForm} from "react-hook-form"
import * as zod from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { ReactElement, JSXElementConstructor } from "react";
import { Input } from "@/shadcn-ui/ui/input";
import { Button } from "@/shadcn-ui/ui/button";
import { useRouter } from "next/navigation";
import Leer from "@/api/leer";

const Email = zod.string()
    .email("Correo electrónico requiere ser proporcionado como sigue: nombre@exemplo.com");
const Password = zod.string().refine(pw => pw.length >= 8, {
    message: "Contraseña debe tener minimo 8 carácteres."
});
const zodLogin = zod.object({
    email: Email,
    password: Password
});

function Login() {
    const form = useForm<zod.infer<typeof zodLogin>>({
        resolver: zodResolver(zodLogin),
        defaultValues: {
            email: "",
            password: ""
        }});
        console.log("dddd");

    const cuentas = Leer('http://localhost:3001/cuentas') as any;
    const route = useRouter();

    function HacerLogin(miCuenta: zod.infer<typeof zodLogin>, webCuenta: any) {
        console.log("cc");
        console.log(miCuenta);
        let credenciales = {
            email: '',
            nombre: '',
            apellido: '',
            contraseña: '',
        }
        
        if (webCuenta !== null) {
            credenciales = webCuenta.find((e : any) => e.email === miCuenta.email);
            console.log(webCuenta);
        }
    
        console.log(credenciales);
        
        if (miCuenta.email !== credenciales.email || miCuenta.password !== credenciales.contraseña){
            console.log(`${miCuenta.email}, ${credenciales.email}, ${miCuenta.password}, ${credenciales.contraseña}`)
            console.log('eer')
            return Error('El correo electrónico y/o contraseña no coinciden con una cuenta existente.');
        }
        route.push('/');
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(
                    (cred: { email: string; password: string; }) => HacerLogin(cred, cuentas))}>
                    <FormField control={form.control} name="email" 
                    render={({field}) => {
                        return (
                            <FormItem>
                                <FormLabel>Correo Electrónico</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Email"
                                        type="email"
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}/>
                    <FormField control={form.control} name="password"
                    render={({field}) => {
                        return(
                            <FormItem>
                                <FormLabel>Contraseña</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Password"
                                        type="password"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        );
                    }}/>
                    <Button type="submit">Ingresar</Button>
                </form> 
            </Form>
        </div>
    )
}

export default Login;