export function bytesToSize(bytes) {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes == 0) return "0 Byte";
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString());
  return (
    Math.round(bytes / Math.pow(1024, i))
      .toString()
      .substring(0, 2) +
    " " +
    sizes[i]
  );
}
