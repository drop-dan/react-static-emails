TODO:
Add proptypes to components
Add git automation scripts
rename component props for marketing needs
add more component abstraction
remove react static and replace with webpack

DONE:
Add compression and resizing to images
remove DS_store from upload script

SETUP:
install vscode
install node and npm
install git
install homebrew
brew install graphicsmagick
clone repo
npm install
add .env with s3 secrets

to make a new email:
duplicate existing email folder and rename changes as necessary
add images to assets folder
run `npm run upload "folder name"`
run `npm run start "folder name"`
update as necessary until finished
run `npm run build "folder name"`
copy html from `html/index.html`
paste to leanplum
run `npm run save` to push changes to git

# React-Static - Basic Example

This example is the most basic version of react-static available. It includes:

- Babel
- CSS imports
- Image imports
- File imports
- Automatic Routing

To get started, run `react-static create` and use the `basic` template.
