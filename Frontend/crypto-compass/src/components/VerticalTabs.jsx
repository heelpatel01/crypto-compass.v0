import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chart from "./Chart";
import Chronology from "./Chronology";

function TabPanel({ children, value, index }) {
 return (
  <div
   role="tabpanel"
   hidden={value !== index}
   id={`vertical-tabpanel-${index}`}
   aria-labelledby={`vertical-tab-${index}`}
  >
   {value === index && (
    <Box sx={{ p: 3 }} display={"block"}>
     <Typography>{children}</Typography>
    </Box>
   )}
  </div>
 );
}

export default function VerticalTabs() {
 const [value, setValue] = useState(0);
 const [coinDetails, setCoinDetails] = useState([]);
 const [coinMarketData, setCoinMarketData] = useState([]);
 const [loading, setLoading] = useState(true);

 const handleChange = (event, newValue) => {
  setValue(newValue);
  fetchCoinMarketData(coinDetails[newValue].id); // Fetch market data for the selected coin
 };

 const fetchCoinMarketData = (coinId) => {
  const options = {
   method: "GET",
   headers: {
    accept: "application/json",
    "x-cg-demo-api-key": "CG-uBePUKnoBs5CB6vTYjBpaj2C",
   },
  };

  fetch(
   `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=inr&days=30`,
   options
  )
   .then((response) => response.json())
   .then((data) => {
    setCoinMarketData(data.prices);
   })
   .catch((err) => {
    console.error(err);
   });
 };

 useEffect(() => {
  const options = {
   method: "GET",
   headers: {
    accept: "application/json",
    "x-cg-demo-api-key": "CG-uBePUKnoBs5CB6vTYjBpaj2C",
   },
  };

  fetch(
   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&category=layer-1",
   options
  )
   .then((response) => response.json())
   .then((data) => {
    setCoinDetails(data);
    setLoading(false);
    if (data.length > 0) {
     fetchCoinMarketData(data[0].id); // Fetch market data for the first coin by default
    }
   })
   .catch((err) => {
    console.error(err);
    setLoading(false);
   });
 }, []);

 return (
  <Box
   sx={{
    flexGrow: 1,
    bgcolor: "background.paper",
    display: "flex",
    height: "100vh",
    width: "100%",
   }}

   display={"flex"}
  >
   <Tabs
    orientation="vertical"
    variant="scrollable"
    value={value}
    onChange={handleChange}
    aria-label="Vertical tabs example"
    sx={{
     borderRight: 1,
     borderColor: "divider",
     height: "100vh",
     minWidth: "10.417vw",
    }}
   >
    {coinDetails.map((coin, index) => (
     <Tab key={coin.id} label={coin.name} />
    ))}
   </Tabs>
   <div style={{ display: 'flex', flexDirection: 'column'}}>

   {coinDetails.map((coin, index) => (
    <TabPanel value={value} index={index} key={coin.id}>
     <img className="coinIcon" src={coin.image} alt={coin.name} />
     <div className="verticalTabContent">{`₹${coin.current_price.toLocaleString()}`}</div>
    </TabPanel>
   ))}


   {/* <div style={{ display: 'flex', flexDirection: 'column'}}> */}

   <div>
    <Chart coinMarketData={coinMarketData} />
   </div>

   <div style={{ width: '100%' }}>
    <Chronology />
   </div>
   </div>
  </Box>
 );
}
