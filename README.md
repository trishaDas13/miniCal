# miniCal

histing Link : https://trishadas13.github.io/miniCal/
<hr>
<h2>HTML</h2>
This element with the class "month" and "cal" is likely intended to display the current month in the calendar.
This element with the class "day" and "cal" is likely intended to display the current day of the week in the calendar.
This element with the class "date" and "cal" is likely intended to display the current date in the calendar.
This element with the class "year" and "cal" is likely intended to display the current year in the calendar.
<hr>
<h2>CSS</h2>
The @import rule is used to import the "Lato" font from Google Fonts, which is then applied to various elements within the page.

The universal selector (*) is used to reset the margin, padding, and box-sizing properties for all HTML elements, ensuring consistent spacing and sizing.

The body element is set to cover the entire viewport height (100vh) and displays a background color. The content is centered using display: flex; justify-content: center; align-items: center;.

The .calender class represents the calendar container. It has specific width, height, border-radius for curved corners, a background color, and a box-shadow for a subtle shadow effect.

The .cal class is applied to text content within the calendar. It's styled with padding, the "Lato" font, and italic font style.

The .month class represents the header part of the calendar. It has a background color, rounded top corners (border-radius), padding, and styling for text color, font size, and font weight.

The .day and .year classes are used for styling the day and year elements inside the calendar. They have specific font properties, including font-weight and opacity.

The .date class is applied to the date element within the calendar, styled with a large font size and a bold font-weight.
<hr>
<h2>Javascript</h2>
It selects various elements on the web page and stores them in variables:

month: Represents an element where the current month will be displayed.
day: Represents an element where the current day of the week will be displayed.
date: Represents an element where the current date (day of the month) will be displayed.
year: Represents an element where the current year will be displayed.
It creates a Date object named currentDate, which represents the current date and time.

It creates two arrays:

monthArr: An array of month names, starting with January at index 0.
dayArr: An array of day names, starting with Sunday at index 0.
It updates the content of the month, day, date, and year elements with the corresponding values obtained from the currentDate object:

month.innerText is set to the month name from monthArr using currentDate.getMonth().
day.innerText is set to the day of the week name from dayArr using currentDate.getDay().
date.innerText is set to the day of the month using currentDate.getDate().
year.innerText is set to the current year using currentDate.getFullYear().
<hr>
<h2> Summary </h2>
In summary, this CSS code is used to create a simple calendar-like component with specific styling for the calendar container, the header, and the text content inside the calendar. It provides an attractive visual representation of a date or event.
This code dynamically displays the current date, including the month, day of the week, date, and year, using JavaScript.
