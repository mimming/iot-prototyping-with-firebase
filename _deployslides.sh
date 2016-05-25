#!/bin/sh
# Exclude hidden files, and ones that start with _
gsutil -m rsync -rdx '\..*|.*/\.[^/]*$|.*/\..*/.*$|_.*' . gs://mimming.com/presos/internet-of-nodebots
