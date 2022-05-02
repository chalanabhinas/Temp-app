import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function TempApp() {
    const [city, setCity] = useState(null)
    const [search, setSearch] = useState('Mumbai')
    useEffect(() => {
        fetchtemp();
    }, [search]);
    const fetchtemp = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c1a818e6f8360988a958923e1a8ae2e7`;
        const response = await fetch(url);
        const resjson = await response.json();
        setCity(resjson.main)
       

    }
    // const fetchtemp= async()=>{
    //     try{ 
    //         const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c1a818e6f8360988a958923e1a8ae2e7`)
    //         setCity(response.main);
    //         console.log(response.main);
    //     }catch(e){
    //         console.log(e);
    //     }

    // }
    return (
        <>
            <div className='box'>
                <div className='searchb'>
                    <div className='searchinput'>
                        <input type="text" value={search}
                            onChange={(e) => { setSearch(e.target.value) }} />
                    </div>
                </div>
                {!city ? ( 
                    <p className='nodata'>NO DATA FOUND</p>
                ) : (
                    <div>
                        <div className="info">
                            <h2 className="location">{search}</h2>
                            <h3 className="date1">{city.temp} &deg;Cel</h3>
                            <h1 className="temp">Min: {city.temp_min}&deg;Cel | Max: {city.temp_max}&deg;F</h1>
                        </div>
                        <div className='wave -one'></div>
                        <div className='wave -two'></div>
                        <div className='wave -three'></div>
                    </div>
                )
                }



            </div>
        </>
    )
}
