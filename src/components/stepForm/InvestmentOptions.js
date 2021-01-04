import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import OptionForm from './OptionForm';
import Select from '@material-ui/core/Select';


       
export const InvestmentOptions = ( formData, setForm, navigation ) => {
    const { option, amount } = formData;
    return (
        <Container maxWidth="xs">
            <div style={{ marginTop: '2rem' }}>
            <h3>Investment Funds</h3>
            
           <form>
               <Select 
                id="option"
                label="Option"
                name="option"
                value={option}
                variant="outlined"
                margin="normal"
                fullWidth
               >
                   <option value="premium">Premium - From $10,000 - To $250,000 - </option>
                   <option value="select">Select - From $25,000 - To $250,000 - </option>
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
                />   
           
                 <div style={{ marginTop: '1rem' }}>
                
                    <Button 
                        color="secondary" 
                        variant="contained"
                        style={{ marginRight: "1rem" }}
                        onClick={() => navigation.previous()}
                    >
                        Back
                    </Button>
                    <Button 
                        color="primary" 
                        variant="contained"  
                        onClick={() => navigation.next()}
                    >
                        Next
                    </Button>
                </div>
             </div>
            </Container>
    );
};