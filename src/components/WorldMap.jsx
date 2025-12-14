import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import "./WorldMap.css";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const WorldMap = () => {
  const [tooltipContent, setTooltipContent] = useState("");

  const markers = [
    { name: "Jordan", coordinates: [39.0, 31.0], code: "jo" },
    { name: "Saudi Arabia", coordinates: [45.0, 24.0], code: "sa" },
    { name: "Yemen", coordinates: [48.0, 15.0], code: "ye" },
    { name: "Palestine", coordinates: [35.0, 32.0], code: "ps" },
    { name: "Egypt", coordinates: [31.5, 27.0], code: "eg" },
    { name: "Sudan", coordinates: [32.5, 15.0], code: "sd" },
    { name: "Ethiopia", coordinates: [40.5, 9.0], code: "et" },
    { name: "Kenya", coordinates: [37.5, -1.0], code: "ke" },
    { name: "Tanzania", coordinates: [35.0, -6.5], code: "tz" },
    { name: "Togo", coordinates: [1.2, 8.0], code: "tg" },
    { name: "Algeria", coordinates: [2.5, 28.5], code: "dz" },
    { name: "Mongolia", coordinates: [105.0, 47.0], code: "mn" },
  ];

  return (
    <div className="world-map-container">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 400,
          center: [50, 20],
        }}
        className="world-map"
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#00458a"
                  stroke="#ffffff"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none", opacity: 0.15 },
                    hover: { outline: "none", opacity: 0.25 },
                    pressed: { outline: "none", opacity: 0.15 },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Connection lines from center */}
          {markers.map((marker, index) => (
            <g key={`line-${index}`}>
              <line
                x1={0}
                y1={0}
                x2={(marker.coordinates[0] - 35) * 4}
                y2={(marker.coordinates[1] - 15) * -4}
                stroke="#3498db"
                strokeWidth="0.6"
                opacity="0.35"
                className="connection-line"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            </g>
          ))}

          {/* Central hub marker */}
          <Marker coordinates={[35, 15]}>
            <circle r={5} fill="#3498db" className="hub-marker" />
          </Marker>

          {/* Country markers with flags */}
          {markers.map((marker, index) => (
            <Marker
              key={marker.name}
              coordinates={marker.coordinates}
              onMouseEnter={() => setTooltipContent(marker.name)}
              onMouseLeave={() => setTooltipContent("")}
            >
              <g
                className="country-marker-group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Outer ring */}
                <circle
                  r={17}
                  fill="none"
                  stroke="#3498db"
                  strokeWidth={2}
                  className="marker-outer-ring"
                />

                {/* White background */}
                <circle
                  r={15}
                  fill="white"
                  stroke="#3498db"
                  strokeWidth={2}
                />

                {/* Flag image clipped to circle */}
                <defs>
                  <clipPath id={`clip-${marker.code}`}>
                    <circle r={13} />
                  </clipPath>
                </defs>
                <image
                  xlinkHref={`https://flagcdn.com/w80/${marker.code}.png`}
                  x={-13}
                  y={-13}
                  width={26}
                  height={26}
                  clipPath={`url(#clip-${marker.code})`}
                  className="flag-image-svg"
                />

                {/* Tooltip */}
                {tooltipContent === marker.name && (
                  <g className="tooltip-group">
                    <rect
                      x={-45}
                      y={-45}
                      width={90}
                      height={25}
                      rx={8}
                      fill="#004e92"
                      className="tooltip-bg"
                    />
                    <text
                      x={0}
                      y={-28}
                      textAnchor="middle"
                      fill="white"
                      fontSize="11"
                      fontWeight="600"
                      className="tooltip-text"
                    >
                      {marker.name}
                    </text>
                  </g>
                )}
              </g>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
