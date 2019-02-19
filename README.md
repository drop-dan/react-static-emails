# SETUP

- Install [vscode](https://code.visualstudio.com/)
- Install [node](https://code.visualstudio.com/)
- git clone https://github.com/drop-dan/react-static-emails.git
- `cd react-static-emails; npm install`
- add .env with s3 secrets

# CREATING EMAIL

1. duplicate existing email folder and rename changes as necessary
2. add images to assets folder
3. run `npm run upload "folder name"`
4. run `npm run start "folder name"`
5. update as necessary until finished
6. run `npm run build "folder name"`
7. copy html from `html/index.html`
8. paste to leanplum
9. run `npm run save` to push changes to git
