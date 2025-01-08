import { useMap } from "../../customHooks/useMap";
import styles from "./LeafletMap.module.scss";

export function LeafletMap() {
    const mapContainerRef = useMap({
        lat: 50.44579985406559,
        lng: 30.515033164800435,
        zoom: 17,
        markerLat: 50.44499985406559,
        markerLng: 30.515033164800435,
        popupContent: "<b>Wineset</b><br>Zabuttsia Sahakanskiy, 25, Kyiv",
    });

    return <div ref={mapContainerRef} className={styles.map}></div>;
}
