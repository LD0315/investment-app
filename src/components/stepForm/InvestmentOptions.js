import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import OptionForm from './OptionForm';


       
export const InvestmentOptions = ( formData, setForm, navigation ) => {
    const { amount } = formData;
    return (
        <Container maxWidth="xs">
            <div style={{ marginTop: '2rem' }}>
            <h3>Investment Funds</h3>
            
           <OptionForm />
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