import React from 'react';
function ProdsItem(props)
{
    let item = props.item;
    return(
        <div className="row mb-3 border border-aqua p-4 bg-light">
            <img src={item.url} alt={item.name} /> 
            <div className="col-lg-8 ml-3">
                <h4 className="display-4">{item.name}</h4>
                <p>{item.description}</p>
            </div>
        </div> 
    )
}

export default  ProdsItem
