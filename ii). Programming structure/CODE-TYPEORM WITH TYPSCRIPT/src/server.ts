import { createConnection } from 'typeorm';
import "reflect-metadata";

export const Dbconnection = createConnection()
  .then(() => {
    console.log("database connected");
})
.catch((error) => {
    console.log("database error", error)
});