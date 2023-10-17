import { useState, useEffect } from "react";
import { IMaskInput } from "react-imask";
import React from "react";
import "./style.login.css"


import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox
} from "@material-tailwind/react";

export function DialogWithForm() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);


    const [passwordVisible, setPasswordVisible] = useState(false);
    const [eyeIconClass, setEyeIconClass] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
        setEyeIconClass(passwordVisible ? 'password-visible' : 'password-hidden');
    };

    const [passwordVisible2, setPasswordVisible2] = useState(false);
    const [eyeIconClass2, setEyeIconClass2] = useState('');

    const togglePasswordVisibility2 = () => {
        setPasswordVisible2(!passwordVisible2);
        setEyeIconClass2(passwordVisible2 ? 'password-visible' : 'password-hidden');
    };

    const [isLoginVisible, setIsLoginVisible] = useState(true);

    const toggleForm = () => {
        setIsLoginVisible(!isLoginVisible);
    };

    return (
        <>
            <Button onClick={handleOpen} fullWidth>CADASTRAR</Button>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem] text-center">
                    <div className={`card-container ${isLoginVisible ? '' : 'rotate'}`}>
                        <div className={`card-inner ${isLoginVisible ? 'front' : 'back'}`}>
                            {isLoginVisible ? (
                                <>
                                    <CardHeader
                                        variant="gradient"
                                        color="yellow"
                                        className="grid h-28 place-items-center"
                                    >
                                        <Typography variant="h3" className="text-stone-900">
                                            CADASTRE-SE
                                        </Typography>
                                    </CardHeader>

                                    <CardBody >
                                        <Input
                                            type="text"
                                            label="Nome"
                                        />

                                        <br />

                                        <Input
                                            type="number"
                                            label="CPF"
                                        />

                                        <br />
                                        <Input
                                            type="number"
                                            label="Data de Nascimento"
                                        />

                                        <br />

                                        <Input
                                            type="number"
                                            label="Celular"
                                        />

                                        <br />

                                        <Input
                                            type="email"
                                            label="Email"
                                        />

                                        <br />

                                        <Input
                                            name="password"
                                            label="Senha"
                                            type={passwordVisible ? 'text' : 'password'}
                                            icon={
                                                <i onClick={togglePasswordVisibility}>
                                                    {passwordVisible ?
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                            <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
                                                        </svg>
                                                        :
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                            <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                                                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                                                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                                                        </svg>
                                                    }
                                                </i>}
                                        />

                                        <br />

                                        <Input
                                            name="password"
                                            label="Confirme sua Senha"
                                            type={passwordVisible2 ? 'text' : 'password'}
                                            icon={
                                                <i onClick={togglePasswordVisibility2}>
                                                    {passwordVisible2 ?
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                            <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
                                                        </svg>
                                                        :
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                            <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                                                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                                                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                                                        </svg>
                                                    }
                                                </i>}
                                        />

                                        <Checkbox
                                            label={
                                                <Typography
                                                    variant="small"
                                                    color="gray"
                                                    className="flex items-center font-normal"
                                                >
                                                    Eu Concordo Com os
                                                    <a
                                                        href="#"
                                                        className="font-medium transition-colors hover:text-gray-900"
                                                    >
                                                        &nbsp;Termos e Condições
                                                    </a>
                                                </Typography>
                                            }
                                            containerProps={{ className: "-ml-2.5" }}
                                        />
                                        <Button>CADASTRAR</Button>
                                        <Typography color="gray" className="mt-4 text-center font-normal">
                                            Já Tenho Conta ?{" "}
                                            <button className="text-red-700 font-bold" onClick={() => setIsLoginVisible(false)}>Entre</button>
                                        </Typography>
                                    </CardBody>
                                </>
                            ) : (
                                <>
                                    <CardHeader
                                        variant="gradient"
                                        color="blue"
                                        className="mb-4 grid h-28 place-items-center"
                                    >
                                        <Typography variant="h3" color="white">
                                            LOGIN
                                        </Typography>
                                    </CardHeader>

                                    <CardBody>
                                        <form action="" className="flip-card__form">

                                            <Input
                                                id="emailLogin"
                                                type="email"
                                                label="Email"
                                            />

                                            <br />

                                            <Input
                                                label="Senha"
                                                type={passwordVisible ? 'text' : 'password'}
                                                icon={
                                                    <i onClick={togglePasswordVisibility}>
                                                        {passwordVisible ?
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                                <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
                                                            </svg>
                                                            :
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                                <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                                                                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                                                                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                                                            </svg>
                                                        }
                                                    </i>}
                                            />

                                            <br />

                                            <Checkbox
                                                label={
                                                    <Typography
                                                        variant="small"
                                                        color="gray"
                                                        className="flex items-center font-normal"
                                                    >
                                                        Me Manter Cadatrado
                                                    </Typography>
                                                }
                                                containerProps={{ className: "-ml-2.5" }}
                                            />

                                            <br />

                                            <Button>ENTRAR</Button>

                                            <br />

                                            <Typography color="gray" className="mt-4 text-center font-normal">
                                                Não Tenho Conta ?{" "}
                                                <button className="text-red-700 font-bold" onClick={() => setIsLoginVisible(true)}>Cadastre-se</button>
                                            </Typography>
                                        </form>
                                    </CardBody>
                                </>
                            )}
                        </div>
                    </div>
                </Card>
            </Dialog >
        </>
    );
}