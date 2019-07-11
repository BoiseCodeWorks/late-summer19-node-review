import mongoose from 'mongoose'
const connectionString = "mongodb+srv://student:student@cluster0-wtsis.mongodb.net/planets?retryWrites=true&w=majority"

let connection = mongoose.connection

mongoose.connect(connectionString, {
  useNewUrlParser: true
})
connection.on("error", err => {
  console.error('[DATABASE ERROR]:', err)
})
connection.once("open", () => {
  console.log("Connected to the DB")
})