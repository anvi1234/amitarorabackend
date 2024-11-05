
const Banner = require('../model/banner'); // Update the path based on your structure

// Add a new banner
module.exports.addBanner = (req, res, next) => {
    const banner = new Banner({
        bannerFile: req.body.bannerFile,
        position: req.body.position
    });

    banner.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            return next(err);
        }
    });
};

// Get all banners
module.exports.getBanners = (req, res, next) => {
    Banner.find((err, siteData) => {
        if (err) {
            console.log(err);
            return next(err);
        } else {
            res.json(siteData);
        }
    });
};

module.exports.updateBanner = (req, res, next) => {
    const { id } = req.params; // Assuming the ID of the banner is provided in the route parameters
    const updateData = req.body; // Data to update from the request body

    Banner.findByIdAndUpdate(id, updateData, { new: true }, (err, updatedBanner) => {
        if (err) {
            console.log(err);
            return next(err);
        } else if (!updatedBanner) {
            res.status(404).json({ message: "Banner not found" });
        } else {
            res.json(updatedBanner);
        }
    });
};

// Delete a banner by ID
module.exports.deleteBanner = (req, res, next) => {
    const id = req.params.id;
    Banner.findByIdAndRemove(id, (err) => {
        if (err) {
            res.json(err);
        } else {
            res.json('Banner Deleted Successfully');
        }
    });
};
