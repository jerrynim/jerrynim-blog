const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");
const imageminPngquant = require("imagemin-pngquant");
const imageminMozjpeg = require("imagemin-mozjpeg");
// import imageminSvgo from "imagemin-svgo";

/**
 * * .webp생성
 */
imagemin(["images/before/**/*.{jpg,png}"], {
  destination: "images/webp",
  plugins: [imageminWebp({ quality: 75 })]
}).then(() => {
  console.log("Images optimized");
});

/**
 * * .pngquant로 압축한 png생성
 */
imagemin(["images/before/**/*.png"], {
  destination: "images/png",
  plugins: [
    imageminPngquant({
      quality: [0.75, 0.75], //[min,max]
      strip: true //Remove optional metadata
    })
  ]
}).then(() => console.log("Png optimized"));

/**
 * * mozJPEG로 압축한 jpg생성
 * * progressive JPEG 사용
 */
imagemin(["images/before/**/*.jpg"], {
  destination: "images/jpeg",
  plugins: [imageminMozjpeg({ quality: 75, progressive: true })]
}).then(() => console.log("Jpeg Optimized"));

export default null;
/**
 * * SvgO로 압축한 svg생성
 */

// imagemin(['images/before/**/*.svg'], {
//   destination: 'images/svg',
//   plugins: [imageminSvgo()],
// }).then(() => console.log('Svg optimized'));
