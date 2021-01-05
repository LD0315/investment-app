import React from "react";
import { useForm } from "react-hooks-helper";
//import { useForm } from "react-hook-form";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


// initial state
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


export const Form = () => {

    const [formData, setForm] = useForm(userInput);
    //const { submitting } = useFormDate()
    //const props = { formData, setForm }
    const { firstName, lastName, email, phone, address, option, amount } = formData;
    //const handleSubmit = () => form.submit()

    //const onSubmit = (data) => {
        //console.log(data);
    //};

    //function displayPage() {
        //document.getElementById('submit').style.display = "block";

        // show submit confirmtaion
        //if ('submit' === true) {
            //document.getElementById('submit').style.display = '';
        //} else if ('submit' === false) {
            //document.getElementById('submit').style.display = "none";
        //}
    //}

    return (
            <form id="form" action="/submit" method="POST">
                <Container maxWidth="xs">
                    <h2>Investment App</h2>
                    <hr></hr>
                    <h3>Names</h3>
                    <TextField 
                        label="First Name"
                        name="firstName"
                        type="text"
                        value={firstName}
                        onChange={setForm}
                        margin="normal"
                        variant="outlined"
                        autoComplete
                        fullWidth
                        required
                    />
                    <TextField 
                        label="Last Name"
                        name="lastName"
                        type="text"
                        value={lastName}
                        onChange={setForm}
                        margin="normal"
                        variant="outlined"
                        autoComplete
                        fullWidth
                        required
                    />
                    <TextField
                        id="date"
                        label="Date Of Birth"
                        type="date" 
                        placeholder="DD/MM/YYYY"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        margin="normal"
                        variant="outlined" 
                        autoComplete
                        fullWidth
                        required
                    />
                     <h3>Contact</h3>
                    <TextField 
                        label="Email"
                        name="email"
                        value={email}
                        onChange={setForm}
                        margin="normal"
                        variant="outlined"
                        autoComplete
                        fullWidth
                        required
                    />
                    <TextField 
                        label="Phone"
                        name="phone"
                        value={phone}
                        onChange={setForm}
                        margin="normal"
                        variant="outlined"
                        autoComplete
                        fullWidth
                        required
                    />
                    <TextField 
                        label="Address"
                        name="address"
                        value={address}
                        onChange={setForm}
                        margin="normal"
                        variant="outlined"
                        autoComplete
                        fullWidth
                        required
                    />

                <div style={{ marginTop: '1.5rem' }}>
                <h3>Investment Funds</h3> <br></br>
                
                <form>
                    <Select 
                        id="option"
                        label="Option"
                        name="option"
                        value={option}
                        onChange={setForm}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                    >
                    <MenuItem value="premium">Premium - From $10,000 - To $250,000 - </MenuItem>
                    <MenuItem value="select">Select - From $25,000 - To $250,000 - </MenuItem>
                </Select>
             </form>
                <TextField 
                    label="Investment Amount"
                    name="amount"
                    type="number"
                    placeholder="$ AUS"
                    value={amount}
                    onChange={setForm}
                    margin="normal"
                    variant="outlined"
                    autoComplete
                    fullWidth
                    required
                />   
                </div>
                <div style={{ marginBottom: '2rem'}}>
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    style={{ marginTop: '1.5rem' }}
                    //style="display:none"
                    //onChange="document.getElementById('fsubmit').style.display = '';"
                    text="Save"    
                >
                    Submit
                </Button>
                </div>
                
            </Container>
        </form>
        );
    
};

