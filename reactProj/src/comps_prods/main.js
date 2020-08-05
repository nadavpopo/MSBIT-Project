import React,{useEffect,useState} from 'react';
import { doApiGet } from '../services/apiService';
import ProdsItem from './prodsItem';

function Main(props)
{
    let [allProds , setAllProds] = useState([]);
    let [prods , setprods] = useState([]);

    useEffect(() =>
    {
        let url="http://localhost:3000/products/";
        doApiGet(url)
        .then(data=>
        {
            setAllProds(data);
            setprods(data);
        })
    },[])

    useEffect(() =>
    {
        prods = allProds;
        let filterProds = [];

        prods.map(item => 
        {
            if(item.name.includes(props.search) || item.description.includes(props.search))
            {
                filterProds.push(item);
            }
        })

        setprods(filterProds);

    },[props.search])


    
    return(
        <main className="container">  
            {(prods.length > 0 )?
                prods.map(item =>
                {
                    return(
                        <ProdsItem item = {item}/>
                    )
                }):"Not found."  
            }     
        </main> 
    )
}

export default  Main
