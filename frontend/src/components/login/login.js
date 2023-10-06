import { useState, useEffect } from "react";
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
    Checkbox,
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

    const [isLoginVisible, setIsLoginVisible] = useState(true);

    return (
        <>
            <Button onClick={handleOpen} fullWidth className="w-48" >CADASTRAR</Button>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <div>

                        {/* <div className={`card-inner ${isLoginVisible ? 'front' : 'back'}`}>
                            {isLoginVisible ? (
                                <>
                                    <div className="title">Log in</div>
                                    <form action="" className="flip-card__form">
                                        <input type="email" placeholder="Email" name="email" className="flip-card__input" />
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            className="flip-card__input"
                                        />
                                        <button className="flip-card__btn">Let's go!</button>
                                    </form>
                                    <button onClick={() => setIsLoginVisible(false)}>Sign up</button>
                                </>
                            ) : (
                                <>
                                    <div className="title">Sign up</div>
                                    <form action="" className="flip-card__form">
                                        <input type="text" placeholder="Name" className="flip-card__input" />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            className="flip-card__input"
                                        />
                                        <input
                                            label="Senha"
                                            size="lg"
                                            className="flip-card__input"
                                            type="password"
                                        />
                                        <button className="flip-card__btn">Confirm!</button>
                                    </form>
                                    <button onClick={() => setIsLoginVisible(true)}>Log in</button>
                                </>
                            )}
                        </div> */}

                        <CardHeader
                            variant="gradient"
                            color="blue"
                            className="mb-4 grid h-28 place-items-center"
                        >
                            <Typography variant="h3" color="white">
                                CADASTRE-SE
                            </Typography>
                        </CardHeader>

                        <CardBody className="flex flex-col gap-4">
                            <Input label="Email" size="lg" />

                            <Input
                                label="Senha"
                                size="lg"
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

                            <div className="-ml-2.5">
                                <Checkbox label="Lembre-me" />
                            </div>
                        </CardBody>

                        <CardFooter className="pt-0">
                            <Button variant="gradient" onClick={handleOpen} fullWidth>
                                CADASTRE-SE
                            </Button>
                            <Typography variant="small" className="mt-6 flex justify-center">
                                Já tem Conta ?
                                <Typography
                                    as="a"
                                    href="#signup"
                                    variant="small"
                                    color="blue"
                                    className="ml-1 font-bold"
                                    onClick={handleOpen}
                                >
                                    Login
                                </Typography>
                            </Typography>
                        </CardFooter>
                    </div>
                </Card>
            </Dialog >
        </>
    );
}