import axios from "axios";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Card from "./Card";
import ImgMediaCard from "./Card";

const Main = () => {
  const URL = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState("");
  const [filtered, setFiltered] = useState([]);
  // let filteredData = []

  // const productGet = async () => {
  //   try {
  //     const data = await fetch(URL)
  //     .then( (res) => res.json())
  //     console.log(data);
  //     // const data1 = await data.json();
  //     // console.log(data1);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleChange = (value) => {
    setCategory(value);
    // console.log(category);
    // if (value !== "") {
    // let filteredData = product.filter( (item) => item.category === value )

    // setProduct(filteredData)

    // }
  };

  const productGet = () => {
    axios
      .get(URL)
      .then((res) => {
        setProduct(res.data);
        setFiltered(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    productGet();
    setFiltered(product);
  }, []);

  // // console.log(product);

  useEffect(() => {
    if (category === "all") {
        productGet()
      }else if (category !== "") {
        let filteredData = product.filter((item) => item.category === category);
        setFiltered(filteredData);
      }


    // if (category !== "") {
    //   let filteredData = product.filter((item) => item.category === category);

    //   setFiltered(filteredData);
    // } else if (category === "all") {
    //   productGet()
    // }
  }, [category]);

  console.log(filtered);
  console.log(category);

  return (
    <>
      <Box sx={{ textAlign: "center", marginTop: 10 }}>
        <Box>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(e) => handleChange(e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="All" />
              <FormControlLabel
                value="electronics"
                control={<Radio />}
                label="Electronics"
              />
              <FormControlLabel
                value="jewelery"
                control={<Radio />}
                label="Jewelery"
              />
              <FormControlLabel
                value="women's clothing"
                control={<Radio />}
                label="For Women"
              />
              <FormControlLabel
                value="men's clothing"
                // disabled
                control={<Radio />}
                label="Fow Men"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <ImgMediaCard item={filtered} />
        </Box>
      </Box>
    </>
  );
};

export default Main;
