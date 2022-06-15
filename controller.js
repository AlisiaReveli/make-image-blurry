const Jimp = require("jimp");
const AWS = require("aws-sdk");
exports.getBlurry = async function (req, res) {
  const image = await Jimp.read(" your image url here");
  const blurImage = await image.blur(20).getBufferAsync(Jimp.MIME_JPEG);

  AWS.config.update({
    accessKeyId: process.env.key,
    secretAccessKey: process.env.secret,
    region: process.env.region,
  });

  const s3Bucket = new AWS.S3({
    params: { Bucket: process.env.bucket_name },
  });
  const imageUpload = Buffer.from(blurImage, "base64");

  const data = {
    Key: "write a name for your new image here",
    Body: imageUpload,
    ContentType: "image/jpeg",
    ACL: "public-read",
    ContentEncoding: "base64",
  };
  s3Bucket.putObject(data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully uploaded data to S3");
    }
  });
};
