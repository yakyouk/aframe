var HLS_MIMETYPES = ['application/x-mpegurl', 'application/vnd.apple.mpegurl'];

/**
 * Given video element src and type, guess whether stream is HLS.
 *
 * @param {string} src - src from video element (generally URL to content).
 * @param {string} type - type from video element (generally MIME type if present).
 */
module.exports.isHLS = function (src, type) {
  if (type && HLS_MIMETYPES.includes(type.toLowerCase())) { return true; }
  if (src && src.toLowerCase().indexOf('.m3u8') > 0) { return true; }
  return false;
};
