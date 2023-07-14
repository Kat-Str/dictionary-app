import React, { useEffect, useState } from "react";

export default function Photos(props) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (props.photos) {
      setIsLoading(true);

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [props.photos]);

  function generateRandomColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.documentElement.style.setProperty("--random-color", randomColor);
  }
  if (isLoading) {
    return null;
  }

  if (props.photos && props.photos.length > 0) {
    return (
      <section onMouseEnter={generateRandomColor} className="photo-grid">
        {props.photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src.landscape}
            alt={photo.alt}
            className="photo"
          />
        ))}
      </section>
    );
  } else {
    return null;
  }
}
