import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const containerStyle = {
  width: "100%",
  color: "blue",
  "aspect-ratio": "9 / 6",
};

const center = {
  lat: -22.017442,
  lng: -47.889136,
};

const googleMapsApiKey = "AIzaSyBHu9a_HAUg3UKCt1uRO4ccIUGBozQntlM";

export default function ContactMap() {
  const mapRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: mapRef,
    offset: ["start end", "end start"],
  });

  const translateY = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  const y = useTransform(translateY, [0, 0.4, 1], ["-12%", "0%", "0%"]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey,
    id: "google-map-script",
  });

  return (
    <motion.div
      className=" w-7/12 max-w-[1000px]"
      ref={mapRef}
      style={{
        y,
      }}
    >
      {isLoaded && (
        <GoogleMap
          options={{
            streetViewControl: false,
            mapTypeControl: false,
            styles: mapStyle,
          }}
          zoom={16}
          mapContainerStyle={containerStyle}
          center={center}
        ></GoogleMap>
      )}
    </motion.div>
  );
}

const mapStyle: google.maps.MapTypeStyle[] = [
  {
    featureType: "poi",
    elementType: "labels.icon",
    stylers: [
      {
        color: "#63452c",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#aee2e0",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#abce83",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#769E72",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#63452c",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#EBF4A4",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        visibility: "simplified",
      },
      {
        color: "#8dab68",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#5B5B3F",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#ABCE83",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#A4C67D",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#9BBF72",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#EBF4A4",
      },
    ],
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#87ae79",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#7f2200",
      },
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        visibility: "on",
      },
      {
        weight: 4.1,
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#495421",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];
