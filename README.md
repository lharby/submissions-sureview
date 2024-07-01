## Sureview Systems. Luke Harby 

Before installing dependenices it is recommended to use node v18 or above. For easier node version management use NVM (Node Version Manager)
- [nvm](https://github.com/nvm-sh/nvm) (mac). 
- [nvm-windows](https://github.com/coreybutler/nvm-windows)


After cloning or unzipping the repo navigate to the root folder. Then execute `npm install`. 

After a successfull installation from the same directory you can execute 

```
npm run dev
```

This only runs the client, but is useful for debugging, fixing layout and similar issues. No API calls are made using this mode.  The app will be available at [`http://localhost:5173/`](http://localhost:5173/)

```
npm run server
```

Will execute Backend JavaScript code only. Once running it is possible to test endpoints, some are available in the browser, but most use post requests to prevent direct access, you can however test them by using a tool like [Postman](https://www.postman.com/). The app will be available at [`http://localhost:3000/`](http://localhost:3000/)


```
npm run all
```

This will publish a full build and concurrently run the server and serve the client at `/dist/`. At this point the app should be running both server and client and can be tested. 

The app will be available at [`http://localhost:3000/`](http://localhost:3000/)

Navigate to 'Status' to execute api calls for specific device camera statuses.

Navigate to 'Reports' to execute SQL queries from the database. 