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
    email: "",
    phone: "",
    address: "",
    option:"",
    amount: "",
};

/*
var sql = require('mssql');
        var config = {
            server: 'lindb.database.windows.net',
            database: 'investmentdb',
            user: 'linlin',
            password: 'panacea315&',
            port: 1433
        };
*/
export const Form = () => {

    const [formData, setForm] = useForm(userInput);
    const [submitted, setSubmitted] = useState(false);
    
    const { firstName, lastName, dateOfBirth, email, phone, address, option, amount } = formData;

    
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
    

    const handleOnSubmit = async ()=>{
        console.log('submit data',formData)
        const response = await axios.post('http://localhost:4000/submit', formData);
        // set state 'submitted' = true;
        setSubmitted(true);
        console.log(response);
    }
    
        // at this point use the formdata and submit it to your sql server (example sql server on azure, aws)
        //var dbConn = new sql.Connection(config);
    //5.
    /*dbConn.connect().then(function () {
        //6.
        var request = new sql.Request(dbConn);
        //7.

        var query = "INSERT  into investmentdb.dbo.Investments(FirstName, LastName, Email, BirthDate, Address, InvestmentType, Amount)" +
        "values (N'Test2', N'TestLastName2', N'a2a@aaa.com', '2000-01-05', N'1223 hawken drive', N'Premium', 25500)";

        request.query("select * from EmployeeInfo")
        .then(function (recordSet) {
            console.log(recordSet);
            dbConn.close();
        }).catch(function (err) {
            //8.
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        //9.
        console.log(err);
    });*/
   

        // navigate to submit page using react-navigation
    

        //setSubmitted(true);
        //console.log(response);
    

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
                        name=" dateOfBirth"
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
            
                    <Select   
                        id="option"
                        label="Option"
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

