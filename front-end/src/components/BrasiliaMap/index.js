import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "./style.css"
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"

function BrasiliaMap() {

    const position = [-15.82, -47.85]

    const cities = [
        "Plano Piloto",
        "Gama",
        "Taguatinga",
        "Brazlândia",
        "Sobradinho",
        "Planaltina",
        "Paranoá",
        "Núcleo Bandeirante",
        "Ceilândia",
        "Guará",
        "Cruzeiro",
        "Samambaia",
        "Santa Maria",
        "São Sebastião",
        "Recanto das Emas",
        "Lago Sul",
        "Riacho Fundo",
        "Lago Norte",
        "Candangolândia",
        "Águas Claras",
        "Riacho Fundo II",
        "Sudoeste/Octogonal",
        "Varjão",
        "Park Way",
        "SCIA/Estrutural",
        "Sobradinho II",
        "Jardim Botânico",
        "Itapoã",
        "SIA",
        "Vicente Pires",
        "Fercal",
        "Sol Nascente/Pôr do Sol",
        "Arniqueira",
    ];

    return (
        <div className='home'>

            <div className="menu">
                <FormControl fullWidth sx={{ my: 4}}>
                    <InputLabel variant="filled" htmlFor="uncontrolled-native">
                        Origem:
                    </InputLabel>
                    <Select
                        defaultValue={0}
                        inputProps={{
                            name: 'origem',
                            id: 'uncontrolled-native',
                        }}
                    >
                        {cities.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel variant="filled" htmlFor="uncontrolled-native">
                        Destino:
                    </InputLabel>
                    <Select
                        defaultValue={0}
                        inputProps={{
                            name: 'destino',
                            id: 'uncontrolled-native',
                        }}
                    >
                        {cities.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>


            <MapContainer center={position} zoom={11} scrollWheelZoom={false} className="map">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>

    )
}


export default BrasiliaMap;