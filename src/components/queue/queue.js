import React from "react";
import "./queue.css";

export default function Queue({ tracks, setCurrentIndex }) {
  console.log(tracks);
  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <p className="upNext">Up Next</p>
        <div className="queue-list">
          {tracks?.map((track, index) => {
            const durationInSec = Math.floor(track?.track?.duration_ms / 1000);
            const minutes = Math.floor(durationInSec / 60);
            const seconds = durationInSec % 60;
            const formattedDuration = `${minutes}:${
              seconds < 10 ? "0" : ""
            }${seconds}`;

            return (
              <div
                key={index + "key"}
                className="queue-item flex"
                onClick={() => setCurrentIndex(index)}
              >
                <p className="track-name">{track?.track?.name}</p>
                <p>{formattedDuration}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
