import React, { useState,useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";




function TabPanel({ children, value, index }) {


 return (
  <div
   role="tabpanel"
   hidden={value !== index}
   id={`vertical-tabpanel-${index}`}
   aria-labelledby={`vertical-tab-${index}`}
  >
   {value === index && (
    <Box sx={{ p: 3 }}>
     <Typography>{children}</Typography>
    </Box>
   )}
  </div>
 );
}

export default function VerticalTabs({ tabLabels, tabContents }) {
 const [value, setValue] = useState(0);

 const handleChange = (event, newValue) => {
  setValue(newValue);
 };


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
  <Box
   sx={{
    flexGrow: 1,
    bgcolor: "background.paper",
    display: "flex",
    height: "100vh",
    width: "100%",
   }}
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
     minWidth: "200px",
    }}
   >

    {coinDetails.map((coin)=>(
      <Tab label={coin.name}/>
    ))}

   </Tabs>

   {coinDetails.map((coin,index)=>(
    <TabPanel value={value} index={index}>
      <img className="coinIcon" src={coin.image} alt={coin.name} />
      <div className="verticalTabContent">{`$${coin.current_price.toLocaleString()}`}</div>
    </TabPanel>
   ))}


   {/* {tabContents.map((content, index) => (
    <TabPanel value={value} index={index}>
     <h1 className="verticalTabContent">{content}</h1>
    </TabPanel>
   ))} */}

   {/* <h1 className="colorBlack">OKk</h1> */}
  </Box>
 );
}
