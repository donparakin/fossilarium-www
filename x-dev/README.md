
# x-dev README

Developer & operator stuff is placed here so as not to "pollute"
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
- Developer refresh (as required):
  - (TBD)
- NOTES:
  - When required, add additional npm packages:
    - `cd c:\path\to\this-project\x-dev`
    - `npm install --save-dev new-pkg`    (if for dev only)
    - `npm install --save-prod new-pkg`
  - When required, add additional useful commands to `package.json`
    so that they may be called in an IDE-independent way: `npm run my:cmd`.

## NOTES - Hugo
- Hugo generates the static site.
- See [Hugo README](../hugo/README.md)

## NOTES - Netlify (CDN)
- Netlify builds (from gitlab) and hosts the static site.
- See [Netlify README](netlify/README.md)

## NOTES - RollupJS
- RollupJS manages the build of JS and CSS. 
- See [RollupJS README](../rollup/README.md)

## NOTES - Misc
- ...