./scripts/build.sh
git add .
git commit -m "[Release]"
git push
npm version patch
git push --tags origin master
npm publish
