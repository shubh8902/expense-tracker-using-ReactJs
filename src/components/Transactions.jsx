import React from 'react';
import { Typography, List, Divider, styled, Box } from '@mui/material';
import Transaction from './Transaction';

const Component = styled(Box)`
    & > h5 {
        margin-bottom: 10px;
    }
`;

function Transactions({transactions, setTransactions}) {
    return (
        <Component>
            <Typography variant="h5">Transaction History</Typography>
            <Divider style={{ width: '100%' }} />
            <List>
                {
                    transactions.map(transaction =>(
                        <Transaction transaction={transaction} setTransactions={setTransactions} transactions={transactions}/>
                    ))
                }
            </List>
        </Component>
    )
}

export default Transactions;