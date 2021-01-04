import React from 'react';
import Container from '@material-ui/core/Container';

export const Submit = () => {
    return (
       <Container maxWidth="sm" style={{ marginTop: '4rem' }}>
           <h3>Your investment request has been submitted, 
               we will contact you shortly!</h3>
       </Container>
    );
};