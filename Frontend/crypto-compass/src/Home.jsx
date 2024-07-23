import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Paper,
  CircularProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  textAlign: 'center',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const LoaderContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(4),
}));

function Home() {
  const [coinDetails, setCoinDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-uBePUKnoBs5CB6vTYjBpaj2C' }
    };

    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=layer-1', options)
      .then(response => response.json())
      .then(data => {
        setCoinDetails(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <StyledContainer maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        Cryptocurrency Prices
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Stay updated with the latest prices and market data.
      </Typography>
      {loading ? (
        <LoaderContainer>
          <CircularProgress />
        </LoaderContainer>
      ) : (
        <StyledPaper>
          <List>
            {coinDetails.map((coin) => (
              <ListItem key={coin.id}>
                <ListItemAvatar>
                  <Avatar src={coin.image} alt={coin.name} />
                </ListItemAvatar>
                <ListItemText
                  primary={`${coin.name} (${coin.symbol.toUpperCase()})`}
                  secondary={`$${coin.current_price.toLocaleString()}`}
                />
              </ListItem>
            ))}
          </List>
        </StyledPaper>
      )}
    </StyledContainer>
  );
}

export default Home;
