"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shadcn-ui/ui/form";
import {ControllerFieldState, ControllerRenderProps, SubmitHandler, UseFormReturn, UseFormStateReturn, useForm} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from "zod";
import { Input } from "@/shadcn-ui/ui/input";
import { Button } from "@/shadcn-ui/ui/button";
import { format } from "path";
import { useParams, useSearchParams } from "next/navigation";

const Email = zod.string().email("Correo electrónico requiere ser proporcionado como sigue: nombre@exemplo.com");
const Name = zod.string();
const Surname = zod.string();
const Phone = zod.string().max(10).refine(num =>
    phoneVerify(num), {
    message: "Numero telefónico requiere incluír solo números del 0 al 9 y no exceder a más de 10 digitos.",
});

const phoneVerify = (phone: string) => {
    for (const digit of phone) {
        if (!parseInt(digit)) {
            console.log('Numero telefónico requiere incluír solo números del 0 al 9 y no exceder a más de 10 digitos.')
            return false;
        }
    }
    return true;
}

const zodSend = zod.object({
    email: Email,
    name: Name,
    surname: Surname,
    phoneNo: Phone,
});

function enviar(postulacion: zod.infer<typeof zodSend>, aid: string) {
    console.log('dddds');
    console.log(postulacion);
    const postulacionEnv = {
        id: aid,
        email: postulacion.email,
        name: postulacion.name,
        surname: postulacion.surname,
        phoneNo: postulacion.phoneNo,
    }
    console.log(postulacionEnv);
}

export default function Postular() {
    const form = useForm<zod.infer<typeof zodSend>>({
        resolver: zodResolver(zodSend),
        defaultValues: {
            email: "",
            name: "",
            surname: "",
            phoneNo: "",
        }});
    const postId = useSearchParams().get('id');
    return(<div>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(data => enviar(data, postId ?? ''))}>
                <FormField control={form.control} name = "email"
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
                <FormField control={form.control} name = "name"
                    render={({field}) => {
                        return(
                            <FormItem>
                                <FormLabel>Nombre</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Nombre"
                                        type="Nombre"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        );
                    }}/>
                    <FormField control={form.control} name = "surname"
                    render={({field}) => {
                        return(
                            <FormItem>
                                <FormLabel>Apellido(s)</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Apellido(s)"
                                        type="apellidos"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        );
                    }}/>
                    <FormField control={form.control} name = "phoneNo"
                    render={({field}) => {
                        return(
                            <FormItem>
                                <FormLabel>Numero Telefónico</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Numero Telefónico"
                                        type="numero"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        );
                    }}/>
                    <Button type="submit">Enviar Postulación</Button>
            </form>
        </Form>
    </div>)
}