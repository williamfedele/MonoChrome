Experimental Chrome Tab Home Page

1. Create the following Chrome _manifest.json_ file in the root directory:
```json
{    
    "manifest_version": 3,
    "name": "MonoChrome",
    "description": "...",
    "version": "1.0",
    "chrome_url_overrides": {
        "newtab": "index.html"
    }
}
```

2. Toggle _Developer mode_ within the Chrome extensions page.
3. Click _Load unpacked_ and select the project folder.
