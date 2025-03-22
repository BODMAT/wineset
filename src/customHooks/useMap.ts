import { useEffect, useRef } from "react";
import L from "leaflet";

interface UseMapProps {
    lat: number;
    lng: number;
    zoom: number;
    markerLat: number;
    markerLng: number;
    popupContent: string;
}

export function useMap({
    lat,
    lng,
    zoom,
    markerLat,
    markerLng,
    popupContent,
}: UseMapProps) {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<L.Map | null>(null);

    useEffect(() => {
        if (!mapContainerRef.current || mapRef.current) return;

        mapRef.current = L.map(mapContainerRef.current, { preferCanvas: true }) // Improved rendering
            .setView([lat, lng], zoom);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            crossOrigin: "anonymous", // Added to bypass COEP errors
        }).addTo(mapRef.current);

        const marker = L.marker([markerLat, markerLng]).addTo(mapRef.current);
        marker.bindPopup(popupContent).openPopup();

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [lat, lng, zoom, markerLat, markerLng, popupContent]);

    return mapContainerRef;
}
