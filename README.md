# GitHub Profile Search

Use a SHA hash to lookup a GitHub user who has contributed a commit to [github.com/facebook/react](https://github.com/facebook/react). The user's profile picture, login name, and a link to their GitHub profile will then be displayed on the screen.

I completed this project as a part of [Parsity's](https://www.parsity.io) module on APIs.

## How it Works

When the user enters a [SHA hash](https://git-scm.com/docs/hash-function-transition/) and clicks "Search", this program uses the JavaScript Fetch API to make a request to https://api.github.com/repos/facebook/react/commits. There, it finds the relevant commit, then extracts the `avatar_url` (profile picture link), `html_url` (link to GitHub profile), and `login` (GitHub screen name) values that belong to it.

[Open this link in a new tab to test the program](https://jordanccox.github.io/github-face-search). In a separate tab, open [github.com/facebook/react/commits/](https://github.com/facebook/react/commits/) and search for a SHA hash (string of letters and numbers on the righthand side of a commit log) to copy. Then, head back over [here](https://jordanccox.github.io/github-face-search) and paste the SHA in the input area and press "Search." Within a few seconds, the user profile should be displayed.
