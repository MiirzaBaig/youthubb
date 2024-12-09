import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { FetchFromAPI } from "../utils/FetchFromAPI";
import { useParams } from "react-router-dom";


const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();


  useEffect(() => {
    try {
      FetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => {
          console.log('API Response:', data);
          setVideos(data.items);
        })
        .catch(error => console.error('Feed Error:', error));
    } catch (error) {
      console.error('Feed Error:', error);
    }
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Search Results for: <span style={{ color: "#FC1503" }}>{searchTerm} </span>videos
        </Typography>
        <Videos videos={videos} />
      </Box>
  );
};
export default SearchFeed;