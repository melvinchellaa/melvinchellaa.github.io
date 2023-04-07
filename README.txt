
WEBSITE IS HOSTED ON GITHUB PAGES: https://melvinchellaa.github.io

Code Explanations for html

The header is a code file present in all the html files in my assignment. 
<meta charset = "utf-8" is the encoding that is used to display the characters on this device 
line 5 in index.html adjusts the size of the screen to device width for cross device compatability
line 6 in index.html is the favicon visible on the tab bar and the line after that is the title of the website also visible on the tab bar. 

The navbar is also the same for all code pieces in index. html it starts on line 12. It contains all the web pages and links to them. Stylization can be done with css and interactivity can be added in javascript. 

Index.html further just contains a typical body a heading, a paragraph and an image. 

All webpages have the navbar and header and their respective heading 1. 

In contact.html there is a table which displays contact information in a table and also has links to respective contact media. 

Experience.html has an ordered list depicting experiences and in line 35-37 it has a dalhousie logo which when clicked on takes you to the dal website. Further down I included a play through of a game my team developed during the game jam using the video tag. 

Skills.html has a nexted list (unordered) and also has an image, a link to github repo and an audio file(mp3) made using audio tags and a playlist I listen to while studying for which I used the <iframe> tag and added controls

Something added additional in the html is the form, I didn't really need to add anything else as I was pretty thorough with assignment 1.

Code Explanation for CSS

Lines 1-3: This ruleset sets the margin and padding to 0 for all elements and aligns text to the center.

Lines 5-7: This ruleset sets the background color of the body to #31817f.

Lines 9-11: This ruleset sets the color and font weight to bold for all anchor tags.

Lines 13-16: This ruleset changes the color of anchor tags to red when hovered over.

Lines 18-25: This ruleset sets styles for all images, including a relative positioning, a border of 1px solid black, and padding and margin of 10px and 20px, respectively.

Lines 27-34: This ruleset defines a grid container with two columns, a gap of 20px between grid items, and a font size of 18px.

Lines 36-39: This ruleset aligns text to the right for any elements with the class "align-right".

Lines 41-45: This ruleset sets a font size of 24px, font weight of bold, and margin bottom of 10px for any element with the class "Heading" within the grid container.

Lines 47-49: This ruleset sets a margin bottom of 10px for all list items within the grid container.

Lines 51-54: This ruleset centers iframes within the grid container.

Lines 56-64: This ruleset styles ordered lists to display as a column with a 1rem gap between list items and no default padding.

Lines 66-70: This ruleset styles list items to display as a column with a 0.5rem gap between list items.

Lines 72-76: This ruleset sets the color and text alignment to center for all h1, h2, h3, and elements with the class "Heading".

Lines 78-80: This ruleset sets the color and text alignment to center for all paragraph elements.

Lines 82-85: This ruleset styles images following a list item to have a width of 60vh and a height of 40vh.

Lines 87-94: This ruleset styles a navigation bar with a background color of #333, padding of 20px, and white text. Anchor tags within the navigation bar have a margin of 10px and a border radius of 5px. The ".active" class sets the font weight to bold.

Lines 96-107: This ruleset styles a form with a width of 80% or a max width of 600px. Labels, input fields, and textareas are all styled with a block display, and input fields and textareas have padding, border, and border radius. The submit button has a background color of whitesmoke, black text, and a border radius of 5px. The hover state changes the background color to goldenrod.

Lines 109-117: This ruleset styles tables with a collapsed border, left-aligned text, and a background color of #f2f2f2 for even rows. Table headers have a background color of #0077b6 and white text. Links within table cells have blue text with no underline, and the hover state underlines the link. The first cell of each row has bold font weight, and any divs within table cells have a margin bottom of 8px.



Javascript Documentation

Event Handler (lines 1-13): This section sets up the event listeners for changing the website's color scheme.

Purpose: Set and switch between color modes
Input: User clicks on the respective color mode buttons
Output: Changes the website's color scheme
Form Submission Handler (lines 15-29): This section prevents the default form submission behavior and checks if the name field is valid.

Purpose: Validate the form input and display a notification
Input: User submits the contact form
Output: Notification message based on the validation result
Open Links in New Tab (lines 31-41): This section sets up event listeners to open social media links in new tabs.

Purpose: Open external links in new tabs
Input: User clicks on social media icons
Output: Opens the links in new tabs
isNameValid() (lines 43-46): This function checks if the name input is valid.

Purpose: Check the validity of the name input
Input: Name input from the form
Output: Boolean value (true if name length is greater than 3 characters)
showNotification() (lines 48-52): This function displays a notification with the provided message.

Purpose: Display a notification with a specific message
Input: String (message to be displayed)
Output: Alert window with the provided message
Detailed explanations for each code block:

Event Handler (lines 1-13):

Line 2: Set the default color mode to "contrast-mode"
Lines 4-6: Add an event listener to the "contrast-mode" button that sets the body class to "contrast-mode" when clicked
Lines 8-10: Add an event listener to the "light-mode" button that sets the body class to "light-mode" when clicked
Lines 12-13: Add an event listener to the "dark-mode" button that sets the body class to "dark-mode" when clicked
Form Submission Handler (lines 15-29):

Lines 15-16: Add an event listener to the contact form that prevents the default submission behavior
Lines 18-27: Check if the name is valid using the isNameValid() function. If valid, display a success message, else display an error message
Open Links in New Tab (lines 31-41):

Lines 31-33: Define the openInNewTab() function that takes a link as input and opens it in a new tab
Lines 35-37: Add an event listener to the LinkedIn icon that opens the link in a new tab
Lines 39-41: Add an event listener to the Instagram icon that opens the link in a new tab
Lines 43-45: Add an event listener to the GitHub icon that opens the link in a new tab
isNameValid() (lines 43-46): Check if the name input is valid by comparing its length to 3 characters

showNotification() (lines 48-52): Display a notification with the provided message using the alert() function


Additional CSS & HTML

CSS:

Light Mode (lines 1-37): This block defines the styles for the "light-mode" color scheme.
Dark Mode (lines 39-75): This block defines the styles for the "dark-mode" color scheme.
Media Queries (lines 77-117): These blocks define responsive styles for different screen sizes:
Mobile: Styles for screens with a maximum width of 899px (lines 77-94)
Tablet: Styles for screens with a width between 900px and 1299px (lines 96-112)
Desktop: Styles for screens with a minimum width of 1300px (lines 114-117)

HTML(looking at experience.html but also generally applies to all webpages):

Header(lines 19-23): Contains three buttons for changing the website's color scheme:

Contrast Mode: Sets the color scheme to "contrast-mode" (line 20)
Light Mode: Sets the color scheme to "light-mode" (line 21)
Dark Mode: Sets the color scheme to "dark-mode" (line 22)
Script (line 56): Includes the external JavaScript file "script.js" that contains the event listeners and functions related to the buttons and color scheme switching.


Asset List:

DAL_LogoVert_RGB_Gold_Wingtip.png
Demo.mp4
favicon-32x32.png
Guitar.mp3
Me.jpg
Typing_cert.png
hero-image.jpg
image1.jpg
image2.jpg
image3.jpg


For this assignment I reused code from A2, and A2 used code from A1. 

File Structure:

Code Review.pdf

Website Design.pdf

Assets
	DAL_LogoVert_RGB_Gold_Wingtip.png
	Demo.mp4
	favicon-32x32.png
	Guitar.mp3
	Me.jpg
	Typing_cert.png
	hero-image.jpg
	image1.jpg
	image2.jpg
	image3.jpg

Website
	contact.html
	experience.html
	index.html
	script.js
	skills.html
	styles.css

README.txt


Citations

Lo-fi Hiphop radio (no date) YouTube. YouTube. Available at: https://www.youtube.com/watch?5qap5aO4i9A (Accessed: February 9, 2023). 

The dal brand (no date) Dalhousie University. Available at: https://www.dal.ca/about-dal/the-dal-brand.html (Accessed: February 9, 2023). 

The ultimate favicon generator (free) (no date) The best Favicon Generator (completely free). Available at: https://favicon.io/ (Accessed: February 9, 2023). 

Hero Image: 
Starline. 2021. Matrix-style binary code digital background with falling numbers [Online]. Available: https://www.freepik.com/free-vector/matrix-style-binary-code-digital-background-with-falling-numbers_8289995.htm#query=coding&position=33&from_view=search&track=sph [Accessed: 2023-04-07].


Gallery Images:

Image 1: 
Rawpixel.com. 2021. Futuristic AI technology template vector disruptive technology blog banner [Online]. Available: https://www.freepik.com/free-vector/futuristic-ai-technology-template-vector-disruptive-technology-blog-banner_16268340.htm#query=artificial%20intelligence&position=44&from_view=search&track=ais [Accessed: 2023-04-07].

Image2: 
Freepik. 2021. Cyber security concept [Online]. Available: https://www.freepik.com/free-vector/cyber-security-concept_7970729.htm#query=cyber%20security&position=1&from_view=search&track=ais [Accessed: 2023-04-07].

Image3: 
Rawpixel.com. 2021. Finance money debt credit balance concept [Online]. Available: https://www.freepik.com/free-photo/finance-money-debt-credit-balance-concept_18129012.htm#query=Finance%20Business&position=3&from_view=search&track=robertav1_2_sidr [Accessed: 2023-04-07].
