import React from 'react'
import { Map as LeafletMap , TileLayer} from 'react-leaflet'

const Map = () => {
    return (
        <div>
           <LeafletMap>
               <TileLayer
            //    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            //    attribution=`&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors`
               >

               </TileLayer>
           </LeafletMap>
        </div>
    )
}

export default Map
