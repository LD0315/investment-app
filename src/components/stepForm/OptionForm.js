import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 396,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function OptionForm() {
  //const { option } = formData;
  const classes = useStyles();
  const [option, setOptions] = React.useState('');

  const handleChange = (event) => {
    setOptions(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="option">Options</InputLabel>
        <Select
          id="option"
          label="Option"
          name="option"
          value={option}
          onChange={handleChange}
          fullWidth
          required
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Premium'}>Premium  - From $10,000 - To $250,000 - </MenuItem>
          <MenuItem value={'Select'}>Select  - From $25,000 - To $250,000 -</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
