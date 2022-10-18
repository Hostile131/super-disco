# <Daily-Taskmaster>

## Description

Here is a website that helps organize your daily routine

## Usage

The website provides you with the current date and time at the top. Every hour from 6 AM to 6 PM provides a blank to add a task text description.

After adding a task text, you can click the save button to the right. It will commit the task to the website. If you would like to edit your response, you can click the button again to unlock the task input field.

As your day progresses, the current hour is highlighted in yellow. Hours that have passed you by become grayed out and are no longer editable.

## Credits

Time management was provided by [Luxon](https://moment.github.io/luxon/)

## License

This project is shared under the [MIT License](/LICENSE).

## Bugs

When a user attempts to click the 'disabled' save buttons after time has elapsed, the button is still active and the text field becomes editable for up to a second, until it refreshes back to 'disabled'. Try as I might, I could not get that button to truly disable.