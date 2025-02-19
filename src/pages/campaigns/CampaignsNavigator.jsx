import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import CartPageCampaign from "./CartPageCampaign";
import HomePageCampaign from "./HomePageCampaign.jsx";
import OrderDetailsCampaign from "./OrderDetailsCampaign";
import ProductPageCampaign from "./ProductPageCampaign";

const CampaignsNavigator = () => {
  const [activePage, setActivePage] = useState("home-campaigns");

  const handleChange = (event, newValue) => {
    setActivePage(newValue);
  };

  const renderPage = () => {
    switch (activePage) {
      case "home-campaigns":
        return <HomePageCampaign />;
      case "product-campaigns":
        return <ProductPageCampaign />;
      case "order-campaigns":
        return <OrderDetailsCampaign />;
      case "cart-campaigns":
        return <CartPageCampaign />;
      default:
        return <HomePageCampaign />;
    }
  };

  return (
    <Box sx={{ border: 1, m: 2, mb: 4, borderColor: "divider" }}>
      <Tabs
        value={activePage}
        onChange={handleChange}
        aria-label="Campaigns Navigation"
        variant="fullWidth"
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab
          label="Home Campaigns"
          value="home-campaigns"
          sx={{
            "&:hover": {
              textDecoration: "underline",
              transition: "text-decoration 0.3s",
            },
          }}
        />
        <Tab
          label="Product Campaigns"
          value="product-campaigns"
          sx={{
            "&:hover": {
              textDecoration: "underline",
              transition: "text-decoration 0.3s",
            },
          }}
        />
        <Tab
          label="Order Campaigns"
          value="order-campaigns"
          sx={{
            "&:hover": {
              textDecoration: "underline",
              transition: "text-decoration 0.3s",
            },
          }}
        />
        <Tab
          label="Cart Campaigns"
          value="cart-campaigns"
          sx={{
            "&:hover": {
              textDecoration: "underline",
              transition: "text-decoration 0.3s",
            },
          }}
        />
      </Tabs>
      <Box sx={{ mt: 2 }}>{renderPage()}</Box>
    </Box>
  );
};

export default CampaignsNavigator;
