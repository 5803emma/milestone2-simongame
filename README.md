<h1 align="center">
Milestone Project Two <br>Simon Memory Game<br> 
</h1>

<h2>Interactive Frontend Module</h2>


The Simon memory game uses four primary colours accompanied by four musical tones.  It's a familiar and accessible game which is playable by all ages and abilities.  Children of the eighties may remember the electronic Simon devices.  This project aims to replicate some of the functionality of the physical Simon game through the use of Javascript, HTML and CSS.   View the deployed site [here](https://5803emma.github.io/milestone2-simongame/)


## UX

## Project Aim

This memory game should be interactive, easy to use, engaging, challenging and responsive on different devices.

### User Stories

- I played the actual Simon game and would like to try it out online.
- The site seems simple and it looks quite like the Simon game.
- There are no intrusive sounds playing when I visit the site initially.
- I can see the play button to start the game.  I can see a strict option. I can see a score counter.
- If I want to know more I can see an information button on How to Play the game, below the game board.
- The game tones are not unpleasant and some of them are reminiscent of the original game.
- I can turn strict mode off if I want to practice.

### User Experience

- Primary colours are used in keeping with the original game, which users might recognise.
- The Simon name is visible at the top of the page, and also in the centre of the game board.
- The colourful board stands out against a dark background.
- The user sees a dash on the counter prior to engaging with the game.  When they start they should see this counter increment     by 1 on each successful turn. This is common and should be recognisable.
- The green start button has a universally recognised "play" symbol taken from Font Awesome
- Strict mode is automatically activated to allow users to start the game immediately
- There is a "How to Play" button below the game board if the user needs further information on how the game works.  In the "How to Play" section, it is explained that Strict mode can be turned off for practice runs.
- A losing game modal and sound is implemented to signify to players in strict mode that the game is over
- A winning game modal and sound is implemented to signify to players in strict mode that they have won the game
- Users should not need to reload the page or to press the back button as there are clear options available

### Wireframes

Wireframes of the inital concept and design for desktop, tablet and smartphone were created using [Balsamiq](https://balsamiq.com/) and can be view by clicking the links below.

- [Desktop](wireframes/desktop.png) 
- [Tablet](wireframes/tablet.png) 
- [Smartphone](wireframes/smartphone.png) 

#### Styling

- #### Colours

- The site is designed to be simple and intuitive.  
- The dark background contrasts with the game board, helping it to stand out.  
- The buttons, display, slider and modals all use colours which are in keeping with the game board for design continuity.  
- The white font is easy to read on the dark background.
- The pads flash a lighter colour in game to signify the active block.
- A transition hover effect on the play button is interative and invites the user to start the game.

- #### Fonts

The Google Font Righteous was chosen as it is easy to read and has a slightly retro feel to it.
    

## Features

### Main Site

- Header which displays the name of the game.
- Game board in the centre of the page.
- How to play button which triggers a game information modal.
- Footer which explains the site is a project.

### Game Board

- The coloured blocks are disabled when the user visits the site.  They cannot be interacted with.
- Upon first visiting the site, the score counter will display a "-" to signify that no score has been recorded.
- Strict mode is automatically active, as it would be in the original Simon game.
- The user can press the play button in the centre of the board to begin a game or they can begin a game by pressing the play button in the game information modal after they have read the instructions for playing.
- The game begins with one block flashing and it's accompanying musical tone.  This increases by 1 on each turn.
- When the computer has finished producing the pattern, the blocks then become active, allowing the player to choose the correct (or incorrect) block pattern.

### Modals

- Bootstrap modals are used to provide the instructions for playing, as well as winning and losing messages to the player, including a record of their score in that game instance, and buttons to begin a new game or close the modals if they don't want to start a new game.
- The win and lose modals are programmed to appear only when strict mode is true.
- The win modal appears when the player correctly inputs 10 patterns without an error.
- The lose modal appears when the player enters an incorrect pattern in strict mode.

### Potential Future Features

- Difficulty settings - easy, moderate and difficult.  The pattern would be generated slowly in easy mode, at a faster pace in moderate, and faster again in difficult.  This is a feature in some of the newer Simon games.
- An Audio Off option would make the game more difficult as players would only have visual cues for the pattern.
- An option to store player username and score so that players can keep track of their high scores and try to beat their them.


## Technologies

- HTML, CSS, Javascript
- [JQuery](https://jquery.com)
- [Google Fonts](https://fonts.google.com/)
- [Font Aewsome](https://fontawesome.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Github](https://github.com/)
- The Integrated Development Environment used for this project was Cloud 9 via [Amazon Web Services](https://aws.amazon.com/cloud9/)


## Version Control

- Github was used for version control and to deploy the website.
- A Github repository was created and the bash terminal in Cloud 9 was used to commit and push project changes.

## Deployment

The website is hosted using GitHub pages which were deployed directly from the master branch. The site that is deployed will automatically update itself when new commits are made to the master branch. At the moment of submitting this Milestone project the Master Branch and Development Branch are identical. 

The project was developed using [Cloud9 IDE](https://c9.io) via Amazon Web Services.  It was committed to git and pushed to GitHub using the terminal in Cloud9. 

To deploy this page to GitHub Pages from its [GitHub repository](https://5803emma.github.io/milestone2-simongame/), the following steps were taken: 

- Log into GitHub. 
- Select the repository **5803emma/milestone2-simongame**.
- Go to the top of the page and select **Settings** from the menu.
- Scroll down to the **GitHub Pages** section.
- Under **Source** click the drop-down item **None** and choose **Master Branch**
- This selection automatically refreshes the page and the website is deployed. 
- Go back down to the **GitHub Pages** section to retrieve the link to the deployed website.


### How to run this project locally

To clone this project from GitHub:
1. Click on this link to the [GitHub repository](https://5803emma.github.io/milestone2-simongame/).
2. Under repository name, click the option "Clone or download".
3. In the Clone with HTTPs section, copy the clone URL for the repository. 
4. Open Git Bash in your local IDE.
5. Change the current working directory to the location where you want the cloned directory to be created.
6. Type ```git clone```, and then paste the URL copied in Step 3.
```console
git clone https://github.com/USERNAME/REPOSITORY
```
7. Press Enter and your local clone will be created.

## Testing

 - Google Chrome developer tools were used to test responsiveness across various devices sizes and operating systems.
 - I used [Browserling](https://www.browserling.com/) to test the website across multiple browsers to ensure compatability and responsiveness.
 - All buttons across the site pages were manually tested and operational.
 - HTML and CSS code were checked on the [W3C Markup](https://validator.w3.org/) and [CSS Jigsaw](https://jigsaw.w3.org/css-validator/) validators.
- Friends and family members played the game.


## Media

#### Favicon
- The Simon favicon was created using [Favicon Generator](https://www.favicon-generator.org/).

#### Images

- The background image on the main site, the information and lose modals, and the background image on the win modal are royalty free images from [Unsplash](https://unsplash.com/).

#### Sounds
    
- The sounds on the four coloured blocks are from [FreeCodeCamp](https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/build-a-simon-game)
- The winning game sound is from the following royalty and copyright free [YouTube Video](https://youtu.be/P8T6gh9p2-c)
- The losing game sound is from [FreeSound](https://freesound.org/)

### Sources and Tutorials

I used and adapted code from the following video tutorials to create the game:

- [Simon Game Javascript Tutorial for Beginners](https://youtu.be/n_ec3eowFLQ)
- [How to Program a Simon Game: HTML](https://youtu.be/9MTR3V2XpRI)
- [Building a Simon Game web app using javascript and jQuery](https://youtu.be/4pfvy_A5ceE)
- [Speed Styling Simon Game: CSS](https://youtu.be/fJQtc24sCJ8)
- [On/Off Toggle Switch Button With HTML/CSS ](https://youtu.be/BemxV5rS094)

I also got inspiration from the various student Milestone Projects posted in the Peer Code Review channel on [Slack](https://slack.com/intl/en-ie/)

### Acknowledgements

- Thanks to the Student Care Team at Code Institute for their patience and understanding.
- Thanks to Ignatius Mentor for helpful and constructive advice.
- Thanks to my husband Mark and to my family and friends for testing the website and for helping me to see the wood for the trees when the going got tough!

