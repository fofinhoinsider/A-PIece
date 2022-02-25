import { Connection, createConnection } from "typeorm";

let connection: Connection

export const getConnection = async () => {
    if(!connection) {
        connection = await createConnection()
    }
    return connection
}