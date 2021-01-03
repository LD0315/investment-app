import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export const Names = ({ formData, setForm, navigation }) => {
    
    const { firstName, lastName } = formData;
    console.log(firstName);

    return (
        <div>
            <Container maxWidth="xs">
                <h3>Names</h3>
                <TextField 
                    label="First Name"
                    name="firstName"
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

                <Button 
                    variant="contained" 
                    fullWidth color="primary" 
                    style={{ marginTop: '1rem' }}
                    onClick={() => navigation.next()}
                    >
                    Next
                </Button>

            </Container>
        </div>
    );
};
