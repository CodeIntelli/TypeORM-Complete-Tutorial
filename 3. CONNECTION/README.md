<!-- @format -->

## CONNECTION

- ### What is Connection?
  Your interaction with the database is only possible once you setup a connection.
- ### Creating a new connection?

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

- ### Using ConnectionManager

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

- ### Working with connection

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
