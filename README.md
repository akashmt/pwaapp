# PWAapp
PWA App frame and testing to move into Jivasoft Apps

* Make sure package Serve is installed

## Reigster the Service Worker
* in index.js change serviceWorker.unregister(); to serviceWorker.register(); to registet the service worker
* in Chrome, open Inspect, and look under 'Application'

### Run Build process that will optimize and create files in /build folder
```
$ npm run build
```

### This will server porduction build on Port 5000
```
$ serve -s build
```

### Make changes to file(s)
* Need to $npm run build, then $ serve -s build
* NEED to clear Cached Service Worker
* will need to hard refresh (shift + command + r) or open in new tab or broswer

## Going Offline

```
$ npm run build
$ serve -s build
```

Open Chrome > Inspect > Network

* Under Network > All you will be able to see all resources loaded

* Click checkbox in Network > Offline, this simulates going Offline (disconnect from the network).

* Will see failures in RED so we test with downloaded local file.. app/media/videos/sculpture.mp4

* Test by removing Fetching logic from app - useState, useEffect, and map() - comment out

* Now..

```
import video from '../../app/media/videos/sculpture.mp4'

in.. 
return(
	<video height={200} controls src={video} />
)
```

* Shut serve down (control + c)
* Run Build

```
$ npm run build
$ serve -s build
```

* This is ONLY a way to load a static asset that NEEDS to be loaded, EVEN IF offline

## Manifest.json - /public/manifest.json

* Contains all sorts of meta-data about the application

```
$ npm run build
$ serve -s build
```

* Open in localhost: 5000
* Goto Chrome . Inspect > Application > Manifest
* Can view file here, contains info on Identity, Presenatation, Icons, etc
* Run and Audit - Chrome > Inspect > Audits > Run Audit
* Will get some Failures/Errors in Progressive Web App > Installable and PWA Optimized
* These are simple fixes.. Icon Sizes, etc (watch video to see how)


