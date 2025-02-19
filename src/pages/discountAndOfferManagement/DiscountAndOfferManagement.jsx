import React from 'react';
import { Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const DiscountAndOfferManagement = () => {
  return (
    <div className="container mx-auto px-5 py-5">
      <header className="flex justify-between px-5">
        <Typography variant="h4">Discount & Offer Management</Typography>
        <div className="flex gap-5 items-center">
          <button className="flex items-center gap-2">
            <DownloadIcon />
            <span>Download</span>
          </button>
        </div>
      </header>
      <hr className="w-full mt-5" />
    </div>
  )
}

export default DiscountAndOfferManagement
