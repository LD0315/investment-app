import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const Contact = ({ formData, setForm, navigation }) => {

    const { email, phone, address } = formData;
    return (
        <Container maxWidth="xs">
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

        </Container>
    );
};