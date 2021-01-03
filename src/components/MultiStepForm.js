import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Names } from "./stepForm/Names";
import { Contact } from "./stepForm/Contact";
import { InvestmentOptions } from "./stepForm/InvestmentOptions";
import { Review } from "./stepForm/Review";
import { Submit } from "./stepForm/Submit";


const userInput = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    address: "",
    option:"",
    amount: "",
};

const steps = [
    { id: 'names'},
    { id: 'contact'},
    { id: 'investmentOptions'},
    { id: 'review'},
    { id: 'submit'}
]

export const MultiStepForm = () => {
    const [formData, setForm] = useForm(userInput);
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });

    const props = { formData, setForm, navigation }

    switch (step.id) {
        case "names":
            return <Names { ...props }/>
        case "contact":
            return <Contact { ...props }/>
        case "investmentOptions":
            return <InvestmentOptions { ...props }/>
        case "review":
            return <Review { ...props }/>
        case "submit":
            return <Submit { ...props }/>
    }

    //console.log(step);

    return (
        <div>
            <h1>Multi step form</h1>
        </div>
    );
};