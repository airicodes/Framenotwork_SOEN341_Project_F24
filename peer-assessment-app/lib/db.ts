export interface IDBSettings {
    host: string,
    port: number,
    user: string,
    password: string,
    database: string
}

export default function GetDBSettings(): IDBSettings {
    const env = process.env.NODE_ENV;

    if (env == 'development') {
        console.log('Using development database settings');
        console.log('host: ' + process.env.host_dev);
        console.log('port: ' + process.env.port_dev);
        console.log('user: ' + process.env.user_dev);
        console.log('password: ' + process.env.password_dev);
        console.log('database: ' + process.env.database_dev);
        return {
            // host: process.env.host_dev!, //'58.84.143.251', 
            // port: parseInt(process.env.port_dev!),
            // user: process.env.user_dev!,
            // password: process.env.password_dev!,
            // database: process.env.database_dev!,
            // host: process.env.host_dev || 'localhost',
            // port: parseInt(process.env.port_dev!) || 3306,
            // user: process.env.user_dev || 'root',
            // password: process.env.password_dev || 'password123',
            // database: process.env.database_dev || 'peer_assessment_app',
            host: '127.0.0.1',
            port: 3306,
            user: 'root',
            password: 'password123',
            database: 'peer_assessment_app',
            // TODO Fix teh process thing not working
        }
    }
    else
        return {
            host: process.env.host!, //'58.84.143.251', 
            port: parseInt(process.env.port!),
            user: process.env.user!,
            password: process.env.password!,
            database: process.env.database!,
            // host: process.env.host || 'localhost',
            // port: parseInt(process.env.port!) || 3306,
            // user: process.env.user || 'production_user',
            // password: process.env.password || 'production_password',
            // database: process.env.database || 'production_database',


        }
}
