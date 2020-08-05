import React from 'react';
import { useRef } from 'react';
import {} from "react-lodash";

function Nav(props)
{
    let valInput = useRef();
    let valSelect = useRef();

    const search = () =>
    {
        if(valInput.current.value != "")
        {
            props.setSearch(valInput.current.value);
            valInput.current.value = "";
        }
        else
        {
            alert("You must enter value");
        }
    }

    const sortBy = () =>
    {
        alert(valSelect.current.value);
    }

    return (
        <nav className="container my-3">
            <div className="rl">
                <div className="row">
                    <div className="col-lg-8">
                        <input ref={valInput} className="form-control" type="text" placeholder="Search..." />
                    </div>
                        <button onClick={search} className="btn btn-dark">Found</button>
                </div>
                <div className="col-lg-2">
                    <select onChange={sortBy}  ref={valSelect} class="form-control">
                        <option >Sort by...</option>
                        <option value="a-z">a - z</option>
                        <option value="z-a">z - a</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}

export default Nav
