import React from 'react';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ListItemText from '@material-ui/core/ListItemText';

export const Review = ( formData ) => {
    const { 
        firstName,
        lastName,
        dateOfBirth,
        email,
        phone,
        address,
        option,
        amount,  
    } = formData;

    return (
        <div>
            <Container maxWidth='sm'>
                <h3>Review</h3>
                <RenderAccordion summary="Names" details={[
                    { 'First Name': firstName },
                    { 'Last Name': lastName },
                    { 'Date Of Birth': dateOfBirth },
                ]}/>
            </Container>
            
        </div>
    );
};

export const RenderAccordion = ({ summary, details }) => (
    <Accordion>
        <AccordionSummary>{summary}</AccordionSummary>
        <AccordionDetail>
            <div>
                { details.map((data, index) => {
                    const objKey = Object.keys(data)[0];
                    const objValue = data[Object.keys(data)[0]];

                return <ListItemText>{`${objKey}: ${objValue}`}</ListItemText>
                })}
            </div>

        </AccordionDetail>
    </Accordion>

)