# Setup

```
git clone git@github.com:msantic/react-useeffect-dynamic-import.git
```

```
cd react-useeffect-dynamic-import
```

In terminal open two tabs and than in first one (remote component server) run:

```
cd remotecomponent
npm install
npm run start
```

In a second tab run:

```
cd app
npm install
npm run dev
```

If everything went well browser should open at http://localhost:4444 . Open dev tools and check the error while trying to import&render remote react component. If useEffect in RemoteComponent.jsx file is commented everything rowks ok.
