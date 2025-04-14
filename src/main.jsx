import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import NotFoundPage from "./components/404/NotFoundPage.jsx";
import ErrorPage from "./components/error/ErrorPage.jsx";
import "./index.css";
import Layout from "./layout/Layout.jsx";
import AnalyticsPage from "./pages/analyticsPage/AnalyticsPage.jsx";
import CampaignsNavigator from "./pages/campaigns/CampaignsNavigator.jsx";
import CategoryManagement from "./pages/categoryManagement/CategoryManagement.jsx";
import CreateCategory from "./pages/categoryManagement/createCategory/CreateCategory.jsx";
import EditCategory from "./pages/categoryManagement/editCategory/EditCategory.jsx";
import ContentManagement from "./pages/contentManagement/ContentManagement.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Delivery from "./pages/deliveryAgent/delivery/delivery.jsx";
import DeliveryAgent from "./pages/deliveryAgent/deliveryAgent.jsx";
import DiscountAndOfferManagement from "./pages/discountAndOfferManagement/DiscountAndOfferManagement.jsx";
import CreateDownSliderImage from "./pages/downSliderManagement/createDownSilderImage/CreateDownSliderImage.jsx";
import DownSliderManagement from "./pages/downSliderManagement/DownSliderManagement.jsx";
import EditDownSliderImage from "./pages/downSliderManagement/editDownSilderImage/EditDownSliderImage.jsx";
import Login from "./pages/login/login.jsx";
import OrderDetails from "./pages/orderManagement/orderDetails/OrderDetails.jsx";
import OrderManagement from "./pages/orderManagement/OrderManagement.jsx";
import PaymentDetailsPreview from "./pages/paymentManagement/paymentDetail/PaymentDetailsPreview.jsx";
import PaymentManagement from "./pages/paymentManagement/PaymentManagement.jsx";
import QueryManagement from "./pages/queryManagement/QueryManagement.jsx";
import RatingAndReviewManagement from "./pages/ratingAndReview/RatingAndReviewManagement.jsx";
import ServiceManagement from "./pages/serviceManagement/ServiceManagement.jsx";
import Settings from "./pages/settings/Settings.jsx";
import CreateSubCategory from "./pages/subCategoryManagement/createSubCategory/CreateSubCategory.jsx";
import EditSubCategory from "./pages/subCategoryManagement/editSubCategory/EditSubCategory.jsx";
import SubCategoryManagement from "./pages/subCategoryManagement/SubCategoryManagement.jsx";
import CreateTopSliderImage from "./pages/topSliderManagement/createTopSilderImage/CreateTopSliderImage.jsx";
import EditTopSliderImage from "./pages/topSliderManagement/editTopSilderImage/EditTopSliderImage.jsx";
import TopSliderManagement from "./pages/topSliderManagement/TopSliderManagement.jsx";
import SingleUser from "./pages/userManagement/singleUser/SingleUser.jsx";
import UserManagement from "./pages/userManagement/UserManagement.jsx";
import SingleVendorDetailsView from "./pages/vendorManagement/singleVendorDetailsView/SingleVendorDetailsView.jsx";
import VendorDetail from "./pages/vendorManagement/vendorApprovalRequests/VendorDetail.jsx";
import VendorManagement from "./pages/vendorManagement/vendorManagement.jsx";
import MlmUser from "./pages/MLM User/MlmUser.jsx";
import MlmDetails from "./pages/MLM User/MlmDetails.jsx";
import MyContextProvider from "./context/MyContext.jsx";

const router = createBrowserRouter([
  {
    path: "/", // Public login route
    element: <Login />,
  },
  {
    path: "/", // Main application route
    element: (
      <MyContextProvider>
        <App />
      </MyContextProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/admin", // Layout with nested routes
        element: <Layout />,
        children: [
          {
            path: "/admin/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/admin/users",
            element: <UserManagement />,
          },
          {
            path: "/admin/mlm-details/:id",
            element: <MlmDetails />,
          },
          {
            path: "/admin/users/:id",
            element: <SingleUser />,
          },
          {
            path: "/admin/vendors",
            element: <VendorManagement />,
          },
          {
            path: "/admin/vendors/vendor-approval/:id",
            element: <SingleVendorDetailsView />,
          },
          {
            path: "/admin/vendors/vendor-details",
            element: <VendorDetail />,
          },
          {
            path: "/admin/delivery",
            element: <DeliveryAgent />,
          },
          {
            path: "/admin/delivery/delivery-approval",
            element: <Delivery />,
          },
          {
            path: "/admin/orders",
            element: <OrderManagement />,
          },
          {
            path: "/admin/orders/order-detail",
            element: <OrderDetails />,
          },
          {
            path: "/admin/campaign",
            element: <CampaignsNavigator />,
          },
          {
            path: "/admin/service",
            element: <ServiceManagement />,
          },
          {
            path: "/admin/content",
            element: <ContentManagement />,
          },
          {
            path: "/admin/category",
            element: <CategoryManagement />,
          },
          {
            path: "/admin/subcategory",
            element: <SubCategoryManagement />,
          },
          {
            path: "/admin/top-slider",
            element: <TopSliderManagement />,
          },
          {
            path: "/admin/top-slider/create",
            element: <CreateTopSliderImage />,
          },
          {
            path: "/admin/top-slider/edit",
            element: <EditTopSliderImage />,
          },
          {
            path: "/admin/down-slider",
            element: <DownSliderManagement />,
          },
          {
            path: "/admin/down-slider/create",
            element: <CreateDownSliderImage />,
          },
          {
            path: "/admin/down-slider/edit",
            element: <EditDownSliderImage />,
          },
          {
            path: "/admin/payment-management",
            element: <PaymentManagement />,
          },
          {
            path: "/admin/payment-management/payment-details",
            element: <PaymentDetailsPreview />,
          },
          {
            path: "/admin/rating-review",
            element: <RatingAndReviewManagement />,
          },
          {
            path: "/admin/query-management",
            element: <QueryManagement />,
          },
          {
            path: "/admin/discount-offer",
            element: <DiscountAndOfferManagement />,
          },
          {
            path: "/admin/analytics",
            element: <AnalyticsPage />,
          },
          {
            path: "/admin/settings",
            element: <Settings />,
          },
          {
            path: "/admin/create-category",
            element: <CreateCategory />,
          },
          {
            path: "/admin/edit-category/:id",
            element: <EditCategory />,
          },
          {
            path: "/admin/edit-subcategory/:id",
            element: <EditSubCategory />,
          },
          {
            path: "/admin/create-sub-category",
            element: <CreateSubCategory />,
          },
          {
            path: "*",
            element: <NotFoundPage />, // Catch-all for undefined routes
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
