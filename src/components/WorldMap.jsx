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
                stroke="#ffd700"
                strokeWidth="0.6"
                opacity="0.35"
                className="connection-line"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            </g>
          ))}

          {/* Central hub marker */}
          <Marker coordinates={[35, 15]}>
            <circle r={5} fill="#ffd700" className="hub-marker" />
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
                <foreignObject
                  x={-15}
                  y={-15}
                  width={30}
                  height={30}
                  className="flag-container"
                  style={{ overflow: 'visible' }}
                >
                  <div
                    className="flag-marker"
                    xmlns="http://www.w3.org/1999/xhtml"
                  >
                    <img
                      src={`https://flagcdn.com/w80/${marker.code}.png`}
                      alt={marker.name}
                      className="flag-image"
                      loading="eager"
                      crossOrigin="anonymous"
                    />
                    <div className="marker-ring"></div>
                  </div>
                </foreignObject>
                {tooltipContent === marker.name && (
                  <foreignObject
                    x={-50}
                    y={-50}
                    width={100}
                    height={35}
                    className="tooltip-container"
                    style={{ overflow: 'visible' }}
                  >
                    <div
                      className="marker-tooltip"
                      xmlns="http://www.w3.org/1999/xhtml"
                    >
                      {marker.name}
                    </div>
                  </foreignObject>
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
