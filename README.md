This is a demo mobile banking project using Angular 4 and [Ionic](http://ionicframework.com/docs/) to show a basic mobile banking process (login screen --> account summary page with mock data)
  
## How to use this Demo project  

*This project does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).  

To use this demo project, follow these steps to setup your local dev enviroment:  

1) install node.js (https://nodejs.org/en/) -- skip this step if it's already installed;  
2) install ionic, type in this command:  
	*npm install -g cordova ionic*  
3) to create an ionic project, find the proper directory and type in this command (in this case, the project name is 'Lego Bank')  
	*ionic start Lego Bank tabs*
4) Copy the source code / resources files into this folder (Lego Bank) accordingly;
5) launch this app by these commands:  
	*cd Lego Bank*  
	*ionic serve*  
 
	The app would be launched on http://localhost:8100/  
	
* Also reference to [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

6) deploy / run @ devices:

After testing the app on the web browser, to deploy it to the device:

6.1) Android: run this command:

	***	cordova platform add android
	
	Build the APK file using Android studio; the project path would look like this:
	
		~\Lego Bank\platforms\android

6.2) iOS: run this command:

	***	cordova platform add ios
	
	Run it for iphone simulator using xcode @ Mac; the project path would look like this:
	
		~/Lego Bank/platforms/ios

