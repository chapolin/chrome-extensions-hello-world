chrome.runtime.onInstalled.addListener(function() {
  chrome.alarms.create("you-alarm-name", {delayInMinutes: 0.01, periodInMinutes: 1.0});
});

chrome.alarms.onAlarm.addListener(function(alarm) {
  switch(alarm.name) {
    case "you-alarm-name":
    
      var installed = getValueFromLocalStorage("installed");
      
      if(installed == "true")  {
        showNotification();  
      } else {
        setValueToLocalStorage("installed", true);
      }
    break;
  }
});
