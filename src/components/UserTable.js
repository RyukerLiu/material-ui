import React, { useState, useEffect } from 'react';

const UserTable = () => {
    const [userid, setUserid] = useState("");
    const [name, setName] = useState("");
    

    const create = (e) => {
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

    const update = (e) => {
        e.preventDefault();

        fetch(`https://inquisitive-numerous-transport.glitch.me/users/${userid}`, {
            "method": "PUT",
            "headers": {
                "content-type": "application/json"
            },
            "body": JSON.stringify({
                name: name
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

    const onDelete = (e) => {
        e.preventDefault();

        fetch(`https://inquisitive-numerous-transport.glitch.me/users/${userid}`, {
            "method": "DELETE"
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleUseridChange = (e) => {
        setUserid(e.target.value);
    }

    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="display-4 text-center">Make An API Call in React</h1>
              <form className="d-flex flex-column">
                <legend className="text-center">Add-Update-Delete Friend</legend>
                <label htmlFor="userid">
                  User ID:
                  <input
                    name="userid"
                    id="userid"
                    type="text"
                    className="form-control"
                    value={userid}
                    onChange={(e) => handleUseridChange(e)}
                    required
                    />
                </label>
                <label htmlFor="name">
                  User Name:
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => handleNameChange(e)}
                    required
                    />
                </label>
                <button className="btn btn-primary" type='button' onClick={(e) => create(e)}>
                    Add
                </button>
                <button className="btn btn-info" type='button' onClick={(e) => update(e)}>
                    Update
                </button>
                <button className="btn btn-danger" type='button' onClick={(e) => onDelete(e)}>
                    Delete
                </button>
              </form>
            </div>
          </div>
        </div>
    )
}

export default UserTable;
