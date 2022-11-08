git pull
git status
git add .
git commit . -m "update"
git push -u origin main
yarn run docs:build
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git push -f root@8.142.40.205:/home/www/website/ts.git main
cd -