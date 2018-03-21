import sequelize from 'sequelize';

export class SqlProvider {
    connection: sequelize;

    constructor() {
        this.connection = new sequelize.sequelize({
            dialect: 'mssql',
            dialectModulePath: 'sequelize-msnodesqlv8',
            dialectOptions: {
                instanceName: 'MSSQLSERVER01',
                trustedConnection: true
            },
            host: 'localhost',
            database: 'master'
        });
    }
}