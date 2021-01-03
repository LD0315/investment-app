import React from 'react';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

export const Review = ( formData, navigation ) => {
    const { go } = navigation;
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
                <RenderAccordion summary="Names" go={ go } details={[
                    { 'First Name': firstName },
                    { 'Last Name': lastName },
                    { 'Date Of Birth': dateOfBirth },
                ]}/>
                <RenderAccordion summary="Contact" go={ go } details={[
                    { 'Email': email },
                    { 'Phone': phone },
                    { 'Address': address },
                ]}/>
                <RenderAccordion summary="Investment Funds" go={ go } details={[
                    { 'Options': option },
                    { 'Amount': amount },
                ]}/>
                <Button
                    color="primary"
                    variant="contained"
                    style={{ marginTop: '1.5rem'}}
                >
                    Submit
                </Button>
            </Container>
            
        </div>
    );
};

export const RenderAccordion = ({ summary, details, go }) => (
    <Accordion>
        <AccordionSummary
            expandIcon = {<ExpandMoreIcon />}
            >{summary}</AccordionSummary>
        <AccordionDetail>
            <div>
                { details.map((data, index) => {
                    const objKey = Object.keys(data)[0];
                    const objValue = data[Object.keys(data)[0]];

                return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
                })}
                <IconButton
                    color="primary"
                    component="span"
                    onClick={() => go(`${summary.toLowerCase()}`)}
                ><EditIcon /></IconButton>
            </div>

        </AccordionDetail>
    </Accordion>

)