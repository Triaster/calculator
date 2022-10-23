import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

export default function Converter() {
  const currencies = [
    {
      value: "USD",
      label: "$ USA DOLLAR",
    },
    {
      value: "EUR",
      label: "€ EU EURO",
    },
    {
      value: "BTC",
      label: "฿ BITCOIN",
    },
    {
      value: "JPY",
      label: "¥ JAPONE YANE",
    },
  ];

  var myHeaders = new Headers();
  myHeaders.append("apikey", process.env.Apikey);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const [currencyLeft, setCurrencyLeft] = React.useState("USD");

  const [currencyRight, setCurrencyRight] = React.useState("EUR");

  const [valueLeft, setValueLeft] = React.useState("1000");

  const [valueRight, setValueRight] = React.useState("");

  const func = () => {
    // let resultFetch = null;

    fetch(
      `https://api.apilayer.com/currency_data/convert?to=${currencyLeft}&from=${currencyRight}&amount=${valueLeft}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => (setValueRight(result)))
      .catch((error) => console.log("error", error));

      
      // return resultFetch;
  };

  const handleChangeInputLeft = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValueLeft(event.target.value);
  };

  const handleChangeInputRight = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValueRight(event.target.value);
  };

  const handleChangeLeft = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrencyLeft(event.target.value);
    const itervl = setTimeout(() => {
      func();
    }, 500);
  };

  const handleChangeRight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrencyRight(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currencyLeft}
          onChange={handleChangeLeft}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={valueLeft}
          onChange={handleChangeInputLeft}
        />
      </div>

      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currencyRight}
          onChange={handleChangeRight}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={valueRight}
          onChange={handleChangeInputRight}
        />
      </div>
    </Box>
  );
}