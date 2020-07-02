# e2eTests

end to end browser tests running on the protractor/jasmine framework 

### Dependencies 
Requires npm, and protractor 
you can install node [HERE](https://nodejs.org/en/) 

then install the node package 
```
npm install -g protractor
```
This will install protractor and webdriver-manager 

Set up the webdriver 
```
webdriver-manager update 

webdriver-manager start
```

finally run the tests 
```
protractor config.js
```
