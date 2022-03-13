import React from "react";
import Form from "./Form";
import Input from "./Input";
import {useForm} from "react-hook-form";
import MainContainer from "./MainContainer";
import Header from "./Header";
import PrimaryButton from "./PrimaryButton";
import {BASE_URL} from "../utils/Constantst";

const SubmitForm = () => {

    //to create a form and handle errors, we use Hook useForm
    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        reset();
        try {
            const result = fetch(BASE_URL, {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify({data})
            });
            console.log(result);

        } catch (e) {
            console.log(e);
        }
    };

    //components MainContainer, Form, Input, SubmitForm we are used for styles
    return (
        <MainContainer>
            <Header/>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input id="firstName" type="text" label="First Name" {...register("firstName", {
                    pattern: /^[a-zA-Z]+$/,
                    required: "required field",
                    minLength: {value: 2, message: "min 2 characters"}
                })}/>
                <div>{errors?.firstName && <p style={{
                    alignItems: "flex-start",
                    marginTop: -5
                }}>{errors?.firstName?.message || "Error! Only symbols"}</p>}</div>

                <Input id="lastName" type="text"
                       label="Last Name" {...register("lastName", {
                    pattern: /^[a-zA-Z]+$/,
                    required: "required field",
                    minLength: {value: 2, message: "Min 2 characters"}
                })}/>
                <div>{errors?.lastName && <p style={{
                    alignItems: "flex-start", marginTop: -5
                }}>{errors?.lastName?.message || "Error! Only symbols"} </p>} </div>

                <Input id="email" type="text"
                       label="Email" {...register("email", {
                    pattern: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                    required: "required field",
                })}/>
                <div>{errors?.email && <p style={{
                    alignItems: "flex-start", marginTop: -5
                }}>{errors?.email?.message || "Error!"} </p>} </div>

                <Input id="phone" type="number"
                       label="Phone Number" {...register("phone", {
                    maxLength: 10,
                    minLength: 10,
                    required: "required field",
                })}/>
                <div>{errors?.phone && <p style={{
                    alignItems: "flex-start", marginTop: -5
                }}>{errors?.phone?.message || "Error! enter 10 characters of the phone number"} </p>} </div>

                <PrimaryButton>Submit</PrimaryButton>
            </Form>
        </MainContainer>
    );
};

export default SubmitForm;
