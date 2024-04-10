// models/Video.js
import mongoose from "mongoose";
import mongooseAggregratePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String },
        url: { type: String, required: true, unique: true }, // cloudinary url
        thumbnail: { type: String, required: true }, // cloudinary url
        duration: {
            type: Number,
            required: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

videoSchema.plugin(mongooseAggregratePaginate)

const Video = mongoose.model("Video", videoSchema);

export default Video;
