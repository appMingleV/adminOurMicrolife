import { Box, Button, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import React from 'react';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

const UpdateCategory = () => {
  return (
    <Box className="container" mx="auto" px={5} py={5}>
        {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Update Category</Typography>
        <Button
          startIcon={<DownloadIcon />}
          variant="contained"
          color="primary"
        >
          Download
        </Button>
      </Box>
      <hr className="w-full mt-5" />

        {/* Create category form */}
        <div className='mt-10'>
            <div className='text-[25px]'>
                <h2>Update Category</h2>
            </div>
            <form className='mt-5 flex' encType='multipart/formdata'>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="outlined-basic" label="Category Name" variant="outlined" />
                </Box>
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    sx={{
                        padding: '12px 24px', // Adjust padding for size
                        fontSize: '16px',     // Adjust text size
                        width: '200px',       // Optional: Adjust width
                        height: '50px',       // Optional: Adjust height
                        marginTop:'10px',
                    }}
                    >
                    Choose file
                    <VisuallyHiddenInput
                        type="file"
                        onChange={(event) => console.log(event.target.files)}
                    />
                </Button>
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    sx={{
                        padding: '12px 24px',
                        fontSize: '16px',
                        width: '200px',
                        height: '50px',
                        margin:'10px'
                    }}
                >
                    Save
                </Button>
            </form>
        </div>

    </Box>
  )
}

export default UpdateCategory
