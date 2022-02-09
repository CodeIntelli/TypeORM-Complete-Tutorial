<!-- @format -->

## CONNECTION

- ## Working with Connection

  #### What is Connection?

  Your interaction with the database is only possible once you setup a connection.

  #### Creating a new connection?

  createConnection creates a single connection:

  ```javascript
  import { createConnection, Connection } from 'typeorm';

  const connection = await createConnection({
  	type: 'mysql',
  	host: 'localhost',
  	port: 3306,
  	username: 'test',
  	password: 'test',
  	database: 'test',
  });
  ```

  [more options](https://typeorm.io/#/connection/creating-a-new-connection)

  #### Using ConnectionManager

  You can create connection using ConnectionManager class. For example:

  ```javascript
  import { getConnectionManager, ConnectionManager, Connection } from 'typeorm';

  const connectionManager = getConnectionManager();
  const connection = connectionManager.create({
  	type: 'mysql',
  	host: 'localhost',
  	port: 3306,
  	username: 'test',
  	password: 'test',
  	database: 'test',
  });
  await connection.connect(); // performs connection
  ```

  [more options](https://typeorm.io/#/connection/using-connectionmanager)

  #### Working with connection

  Once you set your connection up, you can use it anywhere in your app using getConnection function:

  ```javascript
  import { getConnection } from 'typeorm';
  import { User } from '../entity/User';

  export class UserController {
  	@Get('/users')
  	getAll() {
  		return getConnection().manager.find(User);
  	}
  }
  ```

  [more options](https://typeorm.io/#/connection/working-with-connection)

- ## Using ormconfig.json

  Create ormconfig.json in the project root (near package.json). It should have the following content:

  ```javascript
    {
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": "test",
        "password": "test",
        "database": "test"
    }
  ```

  [more options](https://typeorm.io/#/using-ormconfig)

- ## Connection Options

  #### What is ConnectionOptions?

  Connection options is a connection configuration you pass to createConnection
  or define in ormconfig file. Different databases have their own specific connection options.

  [more options](https://typeorm.io/#/connection-options)

- ## Multiple Connections

  The simplest way to use multiple databases is to create different connections:

  ```javascript
  import { createConnections } from 'typeorm';

  const connections = await createConnections([
  	{
  		name: 'db1Connection',
  		type: 'mysql',
  		host: 'localhost',
  		port: 3306,
  		username: 'root',
  		password: 'admin',
  		database: 'db1',
  		entities: [__dirname + '/entity/*{.js,.ts}'],
  		synchronize: true,
  	},
  	{
  		name: 'db2Connection',
  		type: 'mysql',
  		host: 'localhost',
  		port: 3306,
  		username: 'root',
  		password: 'admin',
  		database: 'db2',
  		entities: [__dirname + '/entity/*{.js,.ts}'],
  		synchronize: true,
  	},
  ]);
  ```

  [more options](https://typeorm.io/#/multiple-connections)

- ## Connection API

  #### Main API

  createConnection() - Creates a new connection and registers it in global connection manager. If connection options parameter is omitted then connection options are read from ormconfig file or environment variables.

  ```javascript
  import { createConnection } from 'typeorm';

  const connection = await createConnection({
  	type: 'mysql',
  	host: 'localhost',
  	port: 3306,
  	username: 'test',
  	password: 'test',
  	database: 'test',
  });
  ```

  [more options](https://typeorm.io/#/connection-api)
