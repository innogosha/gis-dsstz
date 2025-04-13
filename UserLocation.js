import React, { useState } from "react";
import { Marker, useMap } from "react-leaflet";

const UserLocation = () => {
    const [position, setPosition] = useState(null);
    const map = useMap();

    const locateUser = () => {
        map.locate().on("locationfound", (e) => {
            setPosition(e.latlng);
            map.flyTo(e.latlng, 13);
        });
    };

    return (
        <>
            <button onClick={locateUser} style={{ position: "absolute", top: 10, left: 10, zIndex: 1000 }}>
                Locate Me
            </button>
            {position && <Marker position={position} />}
        </>
    );
};

export default UserLocation;