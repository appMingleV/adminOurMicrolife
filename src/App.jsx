import BarChartIcon from "@mui/icons-material/BarChart";
import CampaignIcon from "@mui/icons-material/Campaign";
import CategoryIcon from "@mui/icons-material/Category";
import ClassIcon from "@mui/icons-material/Class";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DiscountIcon from "@mui/icons-material/Discount";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QuizIcon from "@mui/icons-material/Quiz";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ReviewsIcon from "@mui/icons-material/Reviews";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import PersonIcon from "@mui/icons-material/Person";
import { AppProvider } from "@toolpad/core/react-router-dom";
import { Outlet } from "react-router-dom";

const NAVIGATION = [
  {
    segment: "admin/dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "admin/users",
    title: "User Management",
    icon: <PeopleAltIcon />,
  },
  {
    segment: "admin/mlm-user",
    title: "MLM user",
    icon: <PersonIcon />,
  },
  {
    segment: "admin/vendors",
    title: "Vendor Management",
    icon: <ManageAccountsIcon />,
  },
  {
    segment: "admin/delivery",
    title: "Delivery Agent",
    icon: <LocalShippingIcon />,
  },
  {
    segment: "admin/orders",
    title: "Order Management",
    icon: <ShoppingCartIcon />,
  },
  {
    segment: "admin/campaign",
    title: "Campaigns Management",
    icon: <CampaignIcon />,
  },
  {
    segment: "admin/service",
    title: "Service Management",
    icon: <SupportAgentIcon />,
  },
  {
    segment: "admin/content",
    title: "Content Management",
    icon: <ReceiptLongIcon />,
  },
  {
    segment: "admin/category",
    title: "Category Management",
    icon: <CategoryIcon />,
  },
  {
    segment: "admin/subcategory",
    title: "Sub Category Management",
    icon: <ClassIcon />,
  },
  {
    segment: "admin/top-slider",
    title: "Top Slider Management",
    icon: <VerticalAlignTopIcon />,
  },
  {
    segment: "admin/down-slider",
    title: "Down Slider Management",
    icon: <VerticalAlignBottomIcon />,
  },
  {
    segment: "admin/payment-management",
    title: "Payment Management",
    icon: <CurrencyRupeeIcon />,
  },

  {
    segment: "admin/rating-review",
    title: "Rating & Review Management",
    icon: <ReviewsIcon />,
  },
  {
    segment: "admin/query-management",
    title: "Query Management",
    icon: <QuizIcon />,
  },
  {
    segment: "admin/discount-offer",
    title: "Discount & Offer Management",
    icon: <DiscountIcon />,
  },
  {
    segment: "admin/analytics",
    title: "Analytics",
    icon: <BarChartIcon />,
  },
  {
    segment: "admin/settings",
    title: "Settings",
    icon: <SettingsIcon />,
  },
];

const App = () => {
  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: "",
        title: "OurMicroLife",
      }}
    >
      <Outlet />
    </AppProvider>
  );
};

export default App;
