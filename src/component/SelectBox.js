import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useSelector } from "react-redux";

export const SelectBox = ({ country, changeCountry }) => {
  const countries = useSelector((state) => state.counter.countries);

  return (
    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
    <InputLabel id="demo-simple-select-standard-label">All Countries</InputLabel>
    <Select
      variant="filled"
      value={country}
      style={{ width: 200, height: 40,marginTop:'20px',border:'none' }}
      onChange={changeCountry}
      labelId="demo-simple-select-standard-label"
      id="demo-simple-select-standard"
      label="Country"
    >
     
      <MenuItem value={"All Countries"}><em>All Countries</em></MenuItem>
      {countries.map((country) => (
        <MenuItem key={country.name} value={country.name}>
          {country.name}
        </MenuItem>
      ))}
    </Select>
    </FormControl>
  );
};
