import img01d from "./img/01d@2x.png";
import img01n from "./img/01n@2x.png";
import img02d from "./img/02d@2x.png";
import img02n from "./img/02n@2x.png";
import img03d from "./img/03d@2x.png";
import img03n from "./img/03n@2x.png";
import img04d from "./img/04d@2x.png";
import img04n from "./img/04n@2x.png";
import img09d from "./img/09d@2x.png";
import img09n from "./img/09n@2x.png";
import img10d from "./img/10d@2x.png";
import img10n from "./img/10n@2x.png";
import img11d from "./img/11d@2x.png";
import img11n from "./img/11n@2x.png";
import img13d from "./img/13d@2x.png";
import img13n from "./img/13n@2x.png";
import img50d from "./img/50d@2x.png";
import img50n from "./img/50n@2x.png";
import thermometer from "./img/thermometer.png";
import cloud from "./img/cloud.png";

export function setCurrentIcon(icon) {
  switch (icon) {
    case "01d":
      return img01d;
    case "01n":
      return img01n;
    case "02d":
      return img02d;
    case "02n":
      return img02n;
    case "03d":
      return img03d;
    case "03n":
      return img03n;
    case "04d":
      return img04d;
    case "04n":
      return img04n;
    case "09d":
      return img09d;
    case "09n":
      return img09n;
    case "10d":
      return img10d;
    case "10n":
      return img10n;
    case "11d":
      return img11d;
    case "11n":
      return img11n;
    case "13d":
      return img13d;
    case "13n":
      return img13n;
    case "50d":
      return img50d;
    case "50n":
      return img50n;
    default:
      return img01d;
  }
}

export {
  img01d,
  img01n,
  img02d,
  img02n,
  img03d,
  img03n,
  img04d,
  img04n,
  img09d,
  img09n,
  img10d,
  img10n,
  img11d,
  img11n,
  img13d,
  img13n,
  img50d,
  img50n,
  thermometer,
  cloud,
};
