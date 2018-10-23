#!/bin/sh
# ideas used from https://gist.github.com/motemen/8595451

# abort the script if there is a non-zero error
set -e

# show where we are on the machine
pwd

LAST_COMMIT=$(git rev-parse --short HEAD)

remote=$(git config remote.origin.url)
DIRECTORY=gh-dist-branch

# make a directory to put the gp-pages branch
if [ -d "$DIRECTORY" ]; then
     rm -rf $DIRECTORY
fi

mkdir $DIRECTORY

cd gh-dist-branch
# now lets setup a new repo so we can update the gh-pages branch
git init
git remote add --fetch origin "$remote"

# switch into the the gh-pages branch
if git rev-parse --verify origin/dist-v2 > /dev/null 2>&1
then
    git checkout dist-v2
    # delete any old site as we are going to replace it
    # Note: this explodes if there aren't any, so moving it here for now
    git rm -rf .
else
    git checkout --orphan dist-v2
fi

# copy over or recompile the new site
cp -R ../build/dist/* ./

# stage any changes and new files
git add -A
# now commit, ignoring branch gh-pages doesn't seem to work, so trying skip
git commit --allow-empty -m "Auto-deploy dist-v2, commit $LAST_COMMIT"
# and push, but send any output to /dev/null to hide anything sensitive
git push --force --quiet origin dist-v2 > /dev/null 2>&1

# go back to where we started and remove the gh-pages git repo we made and used
# for deployment
cd ..
rm -rf gh-dist-branch

echo "Finished Deployment!"