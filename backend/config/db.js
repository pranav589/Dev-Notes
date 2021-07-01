import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((result) => console.log("connected"))
    .catch((er) => console.log(er));

  mongoose.connection.on("connected", () => console.log("Mongo DB Connected"));
};

export default connectDB;
