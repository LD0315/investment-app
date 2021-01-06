import React,{ useState } from "react";
import { useForm } from "react-hooks-helper";
import axios from 'axios';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { Submit } from "./Submit";


// initial state
const userInput = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    option:"",
    amount: "",
};


export const Form = () => {

    const [formData, setForm] = useForm(userInput);
    const [submitted, setSubmitted] = useState(false);
    
    const { firstName, lastName, dateOfBirth, email, phone, address, option, amount } = formData;

    const amountValidation = amount => {
        // if doensn't fill the amount (empty)
        if (null) {
          return 'Amount is required';
        }
        // if option === premium: 10000 < amount < 250000
        if (amount < 10000) {
          return 'Amount must be at least 10000';
        }

        //if option === select: 25000 < amount < 250000
        if (amount > 250000) {
          return 'Amount must be under 250000';
        }
        return null;
      };

    
    /*
    const emailValidation = email => {
        if (
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            email,
          )
        ) {
          return null;
        }
        if (email.trim() === '') {
          return 'Email is required';
        }
        return 'Please enter a valid email';
      };
      */
    
      const validateEmail = () => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

      const validName = (name: String) => {

            for (var i = 0; i < name.length; i++) {
                var c = name.charAt(i);

                if (!isNaN(c)) {
                    return false;
                }
            }
            return true;
      }

      const validNumber = (num: String) => {
        
        for (var i = 0; i < num.length; i++) {
            var c = num.charAt(i);
            if (c === '+' && i === 0) {
                continue;
            }
            if (isNaN(c)) {
                return false;
            }
        }
        return true;
      }

      
      const validateForm = () => {
          console.log(formData);
            if (firstName === "" || !validName(firstName)) {
                alert("invalid firstname");
                return false;
            }
            if (lastName === "" || !validName(lastName)) {
                alert("invalid familyname");
                return false;
            }
            if (email === "" || !validateEmail()) {
                alert("invalid email");
                return false;
            }
            if (phone === "" || !validNumber(phone)) {
                alert("invalid phone");
                return false;
            }
            // address, option, amount 
            if (address === "") {
                alert("invalid addr");
                return false;

            }
            if (dateOfBirth === "") {
                alert("please enter date of birth");
                return false;
            }
            var moment = require('moment');
            //"2021-01-20"
            var dob = moment(dateOfBirth);

            var now = moment(new Date());

            var n = now.diff(dob, "year");

            if (n < 18) {
                alert("You must be at least 18 years old to use this app");
                return false;
            }

            if (option === "") {
                alert("please select investment option");
                return false;
            }
            if (amount === "") {
                alert("please enter amount");
                return false;
            }
            var am = parseInt(amount);
            if (option === "premium") {
                if (am < 10000 || am > 250000) {
                    alert("was expecting value between 10,000 and 250,000");
                    return false;
                }
            }else {
                if (am < 25000 || am > 250000) {
                    alert("was expecting value between 25,000 and 250,000");
                    return false;
                }
            }


            return true;
      }

    const handleOnSubmit = async ()=>{
        //console.log('submit data',formData);

        if (!validateForm()) {
            
            return;
        }
        const response = await axios.post('http://localhost:4000/submit', formData);
        // set state 'submitted' = true;
        setSubmitted(true);
        console.log(response);
    }
    
    return (!submitted?
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
                        name="dateOfBirth"
                        label="Date Of Birth"
                        type="date" 
                        value={dateOfBirth}
                        onChange={setForm}
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
                        //onClick={emailValidation}
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
                    <InputLabel shrink id="investment-option" required style={{ margin: 'none', fontSize: '20px' }}>
                        Options
                    </InputLabel>
                    <Select
                        labelId="investment-option"  
                        name="option"
                        required
                        value={option}
                        onChange={setForm}
                        variant="outlined"
                        style={{ marginTop: '1.0rem' }}
                        fullWidth
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
                    //onChange={amountValidation}
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

