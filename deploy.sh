#!/bin/sh

targetDir=`basename "$PWD"`
targetPath="~/mimming.com/presos/$targetDir"
targetHost="mimming.com"

echo "Deploying to $targetHost:$targetPath"
rsync --exclude=.git --exclude=test -vaz ./* $targetHost:$targetPath
ssh mimming@mimming.com "chmod -R 755 $targetPath"
