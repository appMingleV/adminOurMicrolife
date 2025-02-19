import DownloadIcon from "@mui/icons-material/Download";
import { Typography } from "@mui/material";

const MainHeader = (props) => {
  //   const { name } = props;
  //   console.log(name);
  return (
    <>
      {/* Header */}
      <div className="container mx-auto p-5">
        <header className="flex justify-between px-5">
          <Typography variant="h4">{props.name}</Typography>
          <div className="flex gap-5 items-center">
            <button className="flex items-center gap-2">
              <DownloadIcon />
              <span>Download</span>
            </button>
          </div>
        </header>
        <hr className="w-full mt-5" />
      </div>
    </>
  );
};

export default MainHeader;
