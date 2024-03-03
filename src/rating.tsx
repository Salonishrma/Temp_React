import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function BasicRating() {
  const [value, setValue] = React.useState<number | null>(3);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "30vh",
        maxWidth: "10px",
        margin: "0 auto",
      }}
    >
      <Typography component="legend" marginLeft={-8}>
        Rate_US
      </Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          color: "#6CB4EE",
          "& .MuiRating-iconEmpty": {
            color: "black",
          },
        }}
      />
    </Box>
  );
}

export default BasicRating;
