#!/usr/bin/env sh

set -e
yarn ghp-build
cd dist
echo "demo: [https://danielalozano04.github.io/Kudos-app/](https://danielalozano04.github.io/Kudos-app/)" > README.md
git init
git checkout -b main
git add -A
git commit -m 'deploy'
git push -f git@github.com:DanielaLozano04/Kudos-app.git main:gh-pages
cd -
rm -R dist