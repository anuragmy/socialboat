import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Input, Button, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import RestrauntCard from "./RestrauntCard";

const Home = () => {
  const [data, setData] = useState([]);
  const [asc, setAsc] = useState(true);

  const token = useSelector((state) => state.auth.token);
  const [val, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  const sortByPrice = () => {
    setAsc(!asc);
    const nd = data;
    nd.sort((a, b) =>
      asc
        ? +a["Average Cost for two"] - +b["Average Cost for two"]
        : +b["Average Cost for two"] - +a["Average Cost for two"]
    );
    setData(nd);
  };
  const handleSubmit = async () => {
    try {
      const result = await axios.get("/api/restraunts", {
        params: {
          keyword: val,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (result) {
        setData(result.data.response.slice(0, 50));
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <div
          style={{
            margin: "0 auto",
          }}
        >
          <Input
            placeholder="Enter name, place or cuisine"
            onChange={handleChange}
            value={val}
            style={{ width: 400, marginRight: 10 }}
          />
          <Button type="primary" onClick={handleSubmit}>
            Search
          </Button>
        </div>
      </Grid>
      <Grid item xs={6}>
        <Button type="primary" onClick={sortByPrice}>
          Sort By Price ({asc ? "Asc" : "Desc"})
        </Button>
      </Grid>
      {data.map((item) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          key={item["_id"]}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <RestrauntCard
            name={item["Restaurant Name"]}
            place={item.Locality}
            rating={item["Rating text"]}
            averagePrice={item["Average Cost for two"]}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
