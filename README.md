# GitHub Profile Search

Use a SHA hash to lookup a GitHub user who has contributed a commit to React. The user's profile picture, login name, and a link to their GitHub profile will then be displayed on the screen.

I completed this project as a part of [Parsity's](https://www.parsity.io) module on APIs.

## How it Works

When the user enters a [SHA hash](https://git-scm.com/docs/hash-function-transition/) and clicks "Search", this program uses the JavaScript Fetch API to make a request to https://api.github.com/repos/facebook/react/commits. There, it finds the relevant commit
