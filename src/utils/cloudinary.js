import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINDARY_CLOUD_NAME,
    api_key: process.env.CLOUDINDARY_API_KEY,
    api_secret: process.env.CLOUDINDARY_API_SECRET,
});

const uploadToCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        console.log("File uploaded successfully" + response.url);
        return response;
    } catch (error) {
        fs.unlink(localFilePath);
        console.log(error);
    }
};
