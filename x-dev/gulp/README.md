
## Notes - Gulp

- Overview ...

### Set-Up
- Gulp and its sub-packages are installed when
  `x-dev/package.json` is installed by the `npm install` command.
- When required, add additional gulp packages:
  - `cd c:\path\to\project\x-dev`
  - `npm install --save-dev new-pkg`
- Add gulp commands to `x-dev/package.json` so they are available
  to all project developers:
  - `"gulp:build": "cd gulp && gulp build",`
  - `"gulp:watch": "cd gulp && gulp watch",`

### Notes
