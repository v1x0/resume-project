#!/bin/zsh
ng build --configuration production --base-href /resume-project/
cd dist/resume-project/browser
git status
git init
git remote add origingp git@github.com:v1x0/resume-project.git
cp index.html 404.html
touch .nojekyll
git add .
git commit -m "Deploy Githubpages"
git push -f origingp main:gh-pages