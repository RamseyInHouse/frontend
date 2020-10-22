#! /bin/bash

for directoryPath in packages/* ; do
    echo "npm publish $directoryPath --access public"
    # If already published, it will just fail
done
