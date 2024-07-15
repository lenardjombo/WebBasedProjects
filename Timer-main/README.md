# Countdown Timer

A simple countdown timer created using HTML, CSS, and JavaScript. This timer counts down to a specified date and time.

## Files

- **index.html**: The main HTML file that sets up the structure of the countdown timer.
- **styles.css**: The CSS file that styles the countdown timer.
- **script.js**: The JavaScript file that contains the logic for the countdown timer.

## Setup

1. **HTML Structure**: 
   - The HTML file includes a `div` with the id `timer` where the countdown is displayed.
   - Inside the `div`, there are `span` elements for days, hours, minutes, and seconds.

2. **CSS Styling**:
   - The CSS styles the timer to be centered on the page with a background color and padding.
   - The font size is set to be large enough to be easily readable.

3. **JavaScript Functionality**:
   - The JavaScript sets a countdown date.
   - It updates the countdown every second.
   - The remaining time is calculated and displayed in the respective `span` elements.
   - When the countdown reaches zero, it displays "EXPIRED".

## Usage

1. Open the `index.html` file in a web browser.
2. The countdown timer will automatically start and display the time remaining until the specified date.
3. To change the countdown date, modify the `countDownDate` variable in `script.js`.
