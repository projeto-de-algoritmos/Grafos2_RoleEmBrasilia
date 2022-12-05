import React, { useEffect, useState } from 'react'
import { mapApi } from './../../axios';
import tdata from './../../test_data/treated_data.json';
import ol from 'ol';


let mapApiKey = process.env.REACT_APP_MAPTILER_KEY;
let mapUrl = process.env.REACT_APP_MAP_URL;

let routes = []
Object.keys(tdata['lat']).forEach(latkey => {
    routes.push(
        [tdata['long'][latkey], tdata['lat'][latkey]]
    )
});
let initial = routes[0].reduce((prev, curr) => prev + ',' + curr);

let urlRoute = routes
        .map((route) => {
            return `${route[0]},${route[1]}`;
        })
        .slice(0, 50)
        .reduce((prev, curr) => {
            return `${prev}|${curr}`;
        });

console.log(urlRoute)

const getStyleMap = () => {
    return mapApi.get(`/style.json`, { // /${initial},15/400x300.png?`, {
        params: {
            key: mapApiKey,
            path: `fill:none|width:3|stroke:red|${urlRoute}`, 
        },
    }).then((image) => {
        console.log(image);
        return btoa(new Uint8Array(image).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
        ))
    }).catch(err => console.log(err));

};

const TruckMap = () => {
    let [mapStyle, setMapStyle] = useState('') 
    useEffect(() => {
        getStyleMap().then((image) => {
            setMapStyle(image);
        })
    }, [])



    return <>
        <div id='map'></div>
        {/* <img alt="static truck map" src={`data:image/png;charset=utf-8;base64,${bfImage}`}></img>
        <iframe title="Truck routes" width="800" height="800" 
            src={`${mapUrl}/static/${initial},15/400x300.png?key=${mapApiKey}&path=fill:none|width:3|stroke:red|${urlRoute}`}
        ></iframe> */}
    </>
};

export default TruckMap;