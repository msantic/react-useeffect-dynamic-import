import React, { useEffect, useState, lazy, Suspense } from 'react'

async function importUserComponent(moduleName) {
  try {        
      const moduleUrl = `http://localhost:5555/${moduleName}.js`;    
      return import(moduleUrl);
  } catch (error) {
      console.error('Error importing user component:', error);
  }
}


function loadRemoteComponent(componentName) {
  let RemoteComponent = lazy(() => importUserComponent(componentName));
  
  return (props) => {
    return <RemoteComponent {...props} useEffect={useEffect} useState={useState} />;
  }
}


function App() {
  
  const componentName = 'remotecomponent';
  const RemoteComponent = loadRemoteComponent(componentName);

  return (
    <>
      <div>
        <h1>Dynamic import with react+useEffect</h1>
        <p>This is main app react code!</p>
        <br/>
        <br/>
        <h2>Below should be visible dynamically imported react component with useEffect hook</h2>
        <div id="dynamic-imported-react-component">
          <Suspense fallback={<div>Loading...</div>}>
            <RemoteComponent mainAppProp={"This is passed from the main app"} />
          </Suspense>
        </div>
       </div>
    </>
  )
}

export default App
