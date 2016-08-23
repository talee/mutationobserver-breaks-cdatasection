#!/bin/sh
git checkout gh-pages
git merge master
git push -u origin --all
