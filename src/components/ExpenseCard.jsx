import React from 'react';
import { Card, CardContent, styled, Typography, Box } from '@mui/material';

const Container = styled(Box)`
    display: flex;
    & > div {
        flex: 1;
        padding: 10px;
    }
`;

function ExpenseCard({transactions}) {

    
    const amount = transactions.map(transaction => transaction.amount);

    //For Income
    const positive = amount.filter(
        transaction => transaction > 0
    );
    const income = positive.reduce((transaction, item) => (transaction += item), 0).toFixed(2);

    //For Expense
    const negative = amount.filter(
        transaction => transaction < 0
    );
    const num = negative.reduce((transaction, item) => (transaction += item), 0)* -1;
    const expense = num.toFixed(2);


  return (
    <Container>
            <Card>
                <CardContent>
                    <Typography>Income</Typography>
                    <Typography style={{ color: 'green' }}>+₹{income}</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography>Expense</Typography>
                    <Typography style={{ color: 'red' }}>-₹{expense}</Typography>
                </CardContent>
            </Card>
        </Container>
  )
}

export default ExpenseCard;