const Url = require("../models/url");

const createUrl = async (req, res) => {
  const newUrl = new Url(req.body);
  try {
    const savedUrl = await newUrl.save();
    res.status(200).json(savedUrl);
  } catch (err) {
    res.status(500).json(err);
  }
};

const goFullUrl = async (req, res) => {
  const shortUrl = await Url.findOne({shortUrl:req.params.shortUrl})
  try {
    shortUrl.clicks++
    shortUrl.save();
    res.redirect(shortUrl.fullUrl);
  } catch (err) {
    res.status(500).json(err);
  }
};

//const urlDetails = async (req, res) => {
  //const shortUrl = await Url.findOne({shortUrl:req.params.shortUrl})
  //try {
    //res.redirect(shortUrl);
  //} catch (err) {
    //res.status(500).json(err);
  //}
//};


module.exports = {
    createUrl,
    goFullUrl,
}