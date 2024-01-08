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

const passwordString = zod.string().refine(pw => pw.length >= 8, {
    message: "Contraseña debe tener minimo 8 carácteres."
});
const zodLogin = zod.object({
    email: zod.string().email(),
    password: passwordString
});

function Login() {
    const form = useForm<zod.infer<typeof zodLogin>>({
        resolver: zodResolver(zodLogin),
        defaultValues: {
            email: "",
            password: ""
        }});
        console.log("dddd");
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(HacerLogin)}>
                    <FormField control={form.control} name="email" 
                    render={(field) => {
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
                    render={(field) => {
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

function HacerLogin() {
    console.log("cc");
    const route = useRouter();
    route.push('/');
}

export default Login;