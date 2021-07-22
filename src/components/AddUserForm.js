import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const AddUserForm = () => {
    const classes = useStyles();

    const [name, setName] = useState("");
    
    const onSubmit = (e) => {
        e.preventDefault();

        fetch("https://inquisitive-numerous-transport.glitch.me/users/", {
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "body": JSON.stringify({
                name: name,
            })
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err);
        });
    }

    const onChange = (e) => {
        setName(e.target.value);
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
            <TextField id="standard-basic" label="User Name" autoFocus value={name} onChange={onChange}/>
            <Button variant="contained" type="submit">Sumbit</Button>
        </form>
        // <form className="d-flex flex-column">
        //     <legend className="text-center">Add User</legend>
        //     <label htmlFor="name">
        //         User Name:
        //         <input
        //         name="name"
        //         id="name"
        //         type="text"
        //         className="form-control"
        //         value={name}
        //         onChange={(e) => onChange(e)}
        //         required
        //         />
        //     </label>
        //     <button className="btn btn-primary" type='button' onClick={(e) => onSubmit(e)}>
        //         Add
        //     </button>
        // </form>
    )
}

export default AddUserForm;
