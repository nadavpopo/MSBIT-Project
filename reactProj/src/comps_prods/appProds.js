import React, { useState } from 'react';
import Header from './header';
import Nav from './nav';
import Main from './main';

function AppProds(props)
{
    let [search , setSearch] = useState();

    return(
      <div>  
          <Header/>
          <Nav setSearch={setSearch}/>
          <Main search={search}/>
      </div> 
    )
}

export default  AppProds
