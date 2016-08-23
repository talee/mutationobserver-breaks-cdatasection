#!/bin/sh
git checkout master
git checkout gh-pages
git merge master
git push -u origin --all
git checkout master
