chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('index.html', {
      id: 'main',
      bounds: { width: 620, height: 500 }
    });
  });
  chrome.alarms.onAlarm.addListener(function( alarm ) {
    console.log("Got an alarm!", alarm);
  });