import React,{useState} from "react";
import { useForm } from "react-hooks-helper";
//import { useForm } from "react-hook-form";
import axios from 'axios';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Submit } from "./Submit";


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
    const [submitted, setSubmitted] = useState(false);
    
    const { firstName, lastName, email, phone, address, option, amount } = formData;
    

    const handleOnSubmit = async ()=>{
        console.log('submit data',formData)
        const response = await axios.post('localhost:4000/submit',JSON.stringify(formData));
        // set state 'submitted' = true;
        setSubmitted(true);
        console.log(response);
    }

    return (!submitted ?
            <form>
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
                        style={{ marginTop: '1.0rem' }}
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <TextField 
                        label="Last Name"
                        name="lastName"
                        type="text"
                        value={lastName}
                        onChange={setForm}
                        style={{ marginTop: '1.0rem' }}
                        variant="outlined"
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
                        style={{ marginTop: '1.0rem' }}
                        variant="outlined" 
                        fullWidth
                        required
                    />
                     <h3>Contact</h3>
                    <TextField 
                        label="Email"
                        name="email"
                        value={email}
                        onChange={setForm}
                        style={{ marginTop: '1.0rem' }}
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <TextField 
                        label="Phone"
                        name="phone"
                        value={phone}
                        onChange={setForm}
                        style={{ marginTop: '1.0rem' }}
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <TextField 
                        label="Address"
                        name="address"
                        value={address}
                        onChange={setForm}
                        style={{ marginTop: '1.0rem' }}
                        variant="outlined"
                        fullWidth
                        required
                    />

                <div style={{ marginTop: '1.5rem' }}>
                <h3>Investment Funds</h3> <br></br>
                
              
                    <Select 
                        id="option"
                        label="Option"
                        name="option"
                        value={option}
                        onChange={setForm}
                        variant="outlined"
                        style={{ marginTop: '1.0rem' }}
                        fullWidth
                        required
                    >
                    <MenuItem value="premium">Premium - From $10,000 - To $250,000 - </MenuItem>
                    <MenuItem value="select">Select - From $25,000 - To $250,000 - </MenuItem>
                </Select>
            
                <TextField 
                    label="Investment Amount"
                    name="amount"
                    type="number"
                    placeholder="$ AUS"
                    value={amount}
                    onChange={setForm}
                    style={{ marginTop: '1.0rem' }}
                    variant="outlined"
                    fullWidth
                    required
                />   
                </div>
                <div style={{ marginBottom: '2rem'}}>
                <Button
                    color="primary"
                    variant="contained"
                    type="button"
                    style={{ marginTop: '1.5rem' }}
                    //style="display:none"
                    //onChange="document.getElementById('fsubmit').style.display = '';"
                    text="Save"    
                    onClick={handleOnSubmit}
                >
                    Submit
                </Button>
                </div>
                
            </Container>
        </form>
        :<Submit/>
        );
    
};

