import React, { Component } from 'react'

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        email: '',
        phone: '',
        investmentOptions: '',
        amount: ''
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, dateOfBirth, email, phone, 
        investmentOptions, amount } = this.state;
        const values = { firstName, lastName, dateOfBirth, email, 
        phone, investmentOptions, amount }

        switch(step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep = {this.nextStep}
                        handleChange = {this,this.handleChange}
                        values = {values}
                    />
                )
            case 2:
                return <h1>FormPersonalDetails</h1>
            case 3: 
                return <h1>Confirm</h1>
            case 4: 
            return <h1>Success</h1>
        }

        return (
            <div>
                
            </div>
        )
    }
}

export default UserForm
