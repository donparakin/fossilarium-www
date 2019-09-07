
# x-dev README

Developer / operator stuff is placed here so as not to "pollute"
the application's root directory with this non-app stuff.

## NOTES - NPM (DEVELOPER SET-UP)
- Developer set-up (initial):
  - You should have `node` and `npm` already installed.
    See [NodeJS website](https://nodejs.org/).
  - Install of NodeJS modules. These are not saved in git (they are huge)
    so they must be installed locally by each developer:
    - `cd c:\path\to\this-project\x-dev`
    - `npm install`
  - Add the useful `"scripts"` from `package.json` to your IDE's run
    configuration.  These include commands from running Hugo, Gulp, etc.
    - For VSCode, npm scripts are auto-detected and available in Terminal > Run Task
    - For Intellij, must configure Run > Edit Configurations to add each npm script.
- Developer refresh (as required):
  - (TBD)
- NOTES:
  - When required, add additional npm packages:
    - `cd c:\path\to\this-project\x-dev`
    - `npm install --save-dev new-pkg`    (if for dev only)
    - `npm install --save-prod new-pkg`
  - When required, add additional useful commands to `package.json`
    so that they may be called in an IDE-independent way: `npm run my:cmd`.

## NOTES - Gulp
- See [Gulp README](gulp/README.md)

## NOTES - Hugo
- See [Hugo README](../hugo/README.md)

## NOTES - Google App Engine (GAE)
- See [GAE README](../gae/README.md)

## NOTES - Misc
 - Material Icons (free, delivered with fonts)
   - &lt;i class="material-icons is-size-5">menu</i>
 - Fontawesome - OLD/DON'T
   - &lt;i class="fas fa-arrow-left"></i>
 - HTML / Unicode variables
   - Triangle pointers for use in buttons:
     - Solid   &#x25b2; &#x25b6; &#x25bc; &#x25c0;
     - Hollow: &#x25b3; &#x25b7; &#x25bd; &#x25c1;
