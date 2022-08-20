import { Connection, createConnection, getConnectionOptions } from 'typeorm';


export default async (host = "database"): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions()

    return createConnection(
        Object.assign(defaultOptions, {
            host: process.env.NODE_ENV === 'test' ? "localhost" : host,
            database:
                process.env.NODE_ENV === 'test'
                    ? "rentx_test"
                    : defaultOptions.database
        })
    )
}






















// import { createConnection } from "typeorm";

// createConnection()

// // import { DataSource } from "typeorm";

// // const dataSource = new DataSource({
// //     type:"postgres",
// //     host:"database", //nome dado ao serviço de banco de dados
// //     port: 5432,
// //     username:"docker",
// //     password:"ignite",
// //     database: "avalon"
// // })

// // dataSource.initialize();

// // const PostgresDataSource = new DataSource({
// //     type: "postgres",
// //     host: "localhost",
// //     port: 5432,
// //     username: "test",
// //     password: "test",
// //     database: "test",
    
// // })

// // PostgresDataSource.initialize();
