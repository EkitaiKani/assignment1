# Assignment 1

Design and develop a responsive website for a company revamp (real or fictional) or a fictional company site of your own
Chosen company/product to promote among us (big mistake)

# IMPORTANT

This most recent commit has 3 separate commits within it.
I made a mistake and tried to commit a file that was larger than 100mb. This caused github to be unable to sync the changes.
I had to undo the commits until i found the file.

# Currently:

1. The nav bar
   Each page has a nav bar
   Nav bar consists of links to subpages, as well as button which bring the user to the social media

   When the page width is too small, nav bar has a hamburger instead.
   When clicked, the hamburger drops down an overlay which contains the subpages and social media instead.

2. The index page
   Shows the logo as well as a button which brings you to the official website.
   Background autoplays the video trailers of the game.
   If the user's browser does not support HTML5 format the background is an image instead.

3. The about page
   This is a page which shows the users the main objective of the game and how to play.
   the page shows the two roles: crewmate and imposter
   When the user scrolls down, the instructions on how to play fades in from the bottom of the page.
   Similarly, when the user scrolls up, instructions that cannot fit on the screen will fade back down.

4. The shop page
   This page showcases accessories that the user can buy in the game shop, consisting of 2 sections
   First section compares the how the user will look with and without accessories
   A gif is played between two sections where the user can see how the accessories look like in the game
   Second section encourages the user to download the game and buy the accessories from within the game.

5. The contact page
   First part of the page contains a link to the official FAQ page.
   Second part displays the official emails of the game
   Last part displays a form where the user can submit their feedback
   Form resets when user presses the submit button

## Minor commit
Index page has background when browser does not support HTML5 Format
About page gif now has a larger height.

# Major Commit 5

1. About and Shop page
   Fixed bug where image is too big
   image width would exceed screen width when width was less than 320px
   Now image will fit width no matter what is the width size

2. Contact page
   Fixed bug where form width was too large
   Form is now a flex and is mobile friendly

   Added a background for the form

3. Shop page
   Added a gif between the 2 sections

4. Index page
   gif was too large for github
   used a mp4 file instead

# Major commit 4 (very big commit oopsies)

1. Navbar
   fixed problem where navbar completely breaks when max width decreases
   overlay now works on all pages, where page links work

2. Index page
   added javascript for background image:
   plays a 50 second video when user is idle for 10 seconds
   returns to image after video is played.
   (side note, the button now goes to the actual among us page.)

3. About page
   fixed problem where images were too big for the page
   now mobile friendly

transitions to be added to the cards(?)

4. Shop page
   added pictures, as well as a parallax division between sections.
   division plays a gif
   made it mobile friendly

5. Contact page
   added cards to display the emails of the company
   added a form at the bottom (page breaks when submit button is clicked)

form is too big for the page
currently not mobile friendly.

#### Oops

fixed nav bar to work on mobile for all pages (now all pages have burger)
Also a side note i made the about page look better(?)

# Major commit 3

Made the nav bar work for mobile, added overlay for burger (drop down overlay)

#### Added javascript file for the burger

## About page

added some assets to the about page
now has 3 sections: 1 main title, crewmate and imposter roles

# Major commit 2

## Made index.html responsive (mobile friendly)

Background (to be replaced) did not cover the whole page, disappearing when screen size was too small
Now background fits to all screens (i think)

Navbar now becomes smaller when screen is smaller, replacing subpages with a burger (overlay to be added)

## Made some changes to the nav bar

The navbar now brings users to the separate pages (they are still empty)
All links in the nav bar are working.

# Major Commit 1

## Added the nav bar:

3 menu buttons that directs user to 3 different subpages (to be added)
logos that bring user to social media pages

###### Made some changes to the nav bar:

Added clickable logo and subpages
changed the font

References:
discord colour:
https://www.eggradients.com/tool/discord-color-codes

twitter colour:
https://usbrandcolors.com/twitter-colors/

youtuber colour:
https://usbrandcolors.com/youtube-colors/

youtube videos:
https://www.youtube.com/watch?v=nG2IyH43xMU (navbar)
https://www.youtube.com/watch?v=At4B7A4GOPg (navbar)
https://www.youtube.com/watch?v=VplDlwLTR50 (reveal on scroll)
https://www.youtube.com/watch?v=d34GsFz-HkY (parallax background)

tutorials from w3 schools and others:
https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp
https://www.w3schools.com/howto/howto_css_image_text.asp
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_round_buttons
https://www.w3schools.com/css/css_form.asp
https://www.w3schools.com/jsref/met_win_settimeout.asp
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_fullscreen_video
https://bobbyhadz.com/blog/javascript-clear-input-field-after-submit

icons taken from front awsome:
https://fontawesome.com

also some colours palettes:
https://colorhunt.co

fonts taken from google fonts: (quicksand)
https://fonts.google.com

pictorial sources:
https://www.citypng.com/photo/6895/hd-red-among-us-crewmate-shhh-logo-png (shh)
https://www.innersloth.com/games/among-us/
https://www.polygon.com/2020/9/11/21432684/among-us-emergency-meeting-meme-explained (emergency meeting)
https://wall.alphacoders.com/big.php?i=1115636 (contact us background)
https://gamewith.net/among-us-wiki/article/show/22183 (ejectpng)

video sources:
https://youtu.be/0YKjFoGxbec (trailer)
https://www.youtube.com/watch?v=vlVeaz_l5Jg (also trailer)
