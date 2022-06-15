var index = require("./index");
const Jimp = require("jimp");
exports.getBlurry = async function (req, res) {
  try {
    const image = await Jimp.read("insert image url here");
    const blurImage = image.blur(20).write("./blur.jpg");
    console.log("blurImage", blurImage);
    return res.status(200).json({
      message: "Succesfully  Retrieved",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
