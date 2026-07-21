import { useMap } from "../../hooks/useMap";
import "leaflet/dist/leaflet.css";

export function LeafletMap({ height = undefined, zoom = 17 }: { height?: string, zoom?: number }) {
    const mapContainerRef = useMap({
        lat: 50.43675236189238,
        lng: 30.514976398846958,
        zoom: zoom,
        markerLat: 50.43575236189238,
        markerLng: 30.514976398846958,
        popupContent: "<b>Wineset</b><br>Zabuttsia Sahakanskiy, 25, Kyiv",
    });

    return <div ref={mapContainerRef} className="relative z-[5] h-[571px] max-[1379.98px]:h-[500px] max-[991.98px]:h-[400px] max-md:h-[350px] max-[479.98px]:h-[300px]" style={{ height: height }}></div>;
}
