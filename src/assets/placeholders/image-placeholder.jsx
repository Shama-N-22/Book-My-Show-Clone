import React from "react";

/**
 * Provides a placeholder image for components when the actual image fails to load
 * Returns a simple base64 encoded 1px transparent PNG with BookMyShow theme
 */
const DEFAULT_PLACEHOLDER =
  "data:image/gif;base64,R0lGODlhAQABAPAAAP8AAAAAACwAAAAAAQABAAACAkQBADs=";

/**
 * Component that returns the placeholder image data URI
 * @param {string} type - The type of placeholder to return (default is 'default')
 * @returns {string} The data URI for the placeholder image
 */
export const getPlaceholderImage = (type = "default") => {
  // We could add more placeholders here if needed
  switch (type) {
    case "movie":
      return DEFAULT_PLACEHOLDER;
    case "event":
      return DEFAULT_PLACEHOLDER;
    default:
      return DEFAULT_PLACEHOLDER;
  }
};

export default getPlaceholderImage;
