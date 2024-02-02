# Setup

```
git clone git@github.com:msantic/react-useeffect-dynamic-import.git
```

```
cd react-useeffect-dynamic-import
```

In the terminal, open two tabs. In the first one (remote component server), run:

```
cd remotecomponent
npm install
npm run start
```

In the second tab, run:

```
cd app
npm install
npm run start
```

Open browser at http://localhost:4444  and check the developer tools console for errors while trying to import and render the remote React component. If the useEffect function in the RemoteComponent.jsx file is commented out, everything works fine.

With useEffect code the error is:

```
remotecomponent.js:1 Uncaught TypeError: Cannot read properties of null (reading 'useEffect')
````
