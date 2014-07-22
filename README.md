# Moovweb Project
Welcome to your Moovweb project! Moovweb is a great way to build a compelling new front-end presentation for an existing website. The files in this project describe the changes you want to make to the front end of a site. There are places in this project to add new images (assets/images/), styles (assets/stylesheets/) and even manipulate HTML (scripts/).

## Before Running This
To run this project, you must have the Moovweb SDK installed on your system. Installation is easy - just go to [the download page on the Moovweb site](http://developer.moovweb.com/download) to download and install.

NOTE: This document assumes that you are using the latest version of Moovweb SDK, 5.0 or later. If you are using an earlier release of the Moovweb SDK, the commands to run the server and deploy your project to a site will be different. Please [update your SDK](http://developer.moovweb.com/download) to version 5.0 or later, or see the detailed documentation for information about managing projects with older Moovweb SDK versions at [developer.moovweb.com](http://developer.moovweb.com).

## Starting
To manage your local development and testing, cd to the directory where you want to manage all your Moovweb project (typically it will be the parent directory that contains the directory where this readme file lives) and issue the following command:

    sudo moov start

This will launch the local Moovweb Developer Dashboard interface in your favorite browser. The Moovweb Developer Dashboard will let you generate, manage, start, debug, and track locally running projects as you develop.

## Serving
You can also start the Moovweb server directly. Just cd to this project folder in a terminal and then run the following command:

    sudo moov server 

Then in a web browser, you can visit [mlocal.amazinglytimedphotos.com](http://mlocal.amazinglytimedphotos.com) and you are ready to start testing and developing!

## Deployment
When the local project looks the way you want, and you're ready to deploy, you need to have a destination site on Moovweb. 

If you don't already have an Moovweb site, log in to the [Control Center](http://console.moovweb.com) and create a project, giving it a unique name. 

Then return to the command line and, from within the project directory, just enter the command:

    moov deploy YOUR-ACCOUNT-NAME/YOUR-SITE-NAME

## More Info
We have lots of informative guides, videos, live help, documentation, and even a book on how to use Moovweb. You should be able to get up and running in 30 minutes if you visit [developer.moovweb.com](http://developer.moovweb.com).

You might find [the page about the scripts folder](http://developer.moovweb.com/docs/local/project_files) useful for starting to write Tritium, and our [documents on the stylesheets folder](http://developer.moovweb.com/docs/local/project_files/stylesheet) for information on how we structure our stylesheets.

## Domains
If running `sudo moov server`, remember to put all domains you're going to hit in your etc/hosts if you run your server with the `-auto-hosts=false` option.

    127.0.0.1   mlocal.amazinglytimedphotos.com
