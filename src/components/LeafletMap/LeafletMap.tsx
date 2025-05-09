import { useMap } from "../../hooks/useMap";
import styles from "./LeafletMap.module.scss";

export function LeafletMap({ height = undefined, zoom = 17 }: { height?: string, zoom?: number }) {
    const mapContainerRef = useMap({
        lat: 50.43675236189238,
        lng: 30.514976398846958,
        zoom: zoom,
        markerLat: 50.43575236189238,
        markerLng: 30.514976398846958,
        popupContent: "<b>Wineset</b><br>Zabuttsia Sahakanskiy, 25, Kyiv",
    });

    return <div ref={mapContainerRef} className={styles.map} style={{ height: height }}></div>;
}
