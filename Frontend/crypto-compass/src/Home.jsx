import { useState, useEffect } from 'react';
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
  backgroundColor: '#0B0C10', // Dark slate background
  color: '#EAEAEA', // Muted white text
  minHeight: '100vh',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  backgroundColor: '#1F2833', // Charcoal black background for paper
  color: '#EAEAEA', // Muted white text
}));

const LoaderContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(4),
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  borderBottom: '1px solid #45A29E', // Neon green accent border
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: '#66FCF1', // Electric blue background for avatars
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
      <Typography variant="h3" component="h1" gutterBottom style={{ color: '#66FCF1' }}>
        Cryptocurrency Prices
      </Typography>
      <Typography variant="subtitle1" gutterBottom style={{ color: '#C5C6C7' }}>
        Stay updated with the latest prices and market data.
      </Typography>
      {loading ? (
        <LoaderContainer>
          <CircularProgress style={{ color: '#66FCF1' }} />
        </LoaderContainer>
      ) : (
        <StyledPaper>
          <List>
            {coinDetails.map((coin) => (
              <StyledListItem key={coin.id}>
                <ListItemAvatar>
                  <StyledAvatar src={coin.image} alt={coin.name} />
                </ListItemAvatar>
                <ListItemText
                  primary={`${coin.name} (${coin.symbol.toUpperCase()})`}
                  secondary={`$${coin.current_price.toLocaleString()}`}
                  primaryTypographyProps={{ style: { color: '#C5C6C7' } }} // Soft gold text for list items
                  secondaryTypographyProps={{ style: { color: '#66FCF1' } }} // Electric blue for price
                />
              </StyledListItem>
            ))}
          </List>
        </StyledPaper>
      )}
    </StyledContainer>
  );
}

export default Home;
