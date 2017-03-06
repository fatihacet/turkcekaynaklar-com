#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

ENCRYPTED_KEY_VAR="encrypted_${ENCRYPTION_LABEL}_key"
ENCRYPTED_IV_VAR="encrypted_${ENCRYPTION_LABEL}_iv"
ENCRYPTED_KEY=${!ENCRYPTED_KEY_VAR}
ENCRYPTED_IV=${!ENCRYPTED_IV_VAR}
openssl aes-256-cbc -K $ENCRYPTED_KEY -iv $ENCRYPTED_IV -in tk-deploy-key.enc -out tk-deploy-key -d
chmod 600 tk-deploy-key
eval `ssh-agent -s`
ssh-add tk-deploy-key
SHA=`git rev-parse --verify HEAD --short`

awesome_bot README.md -t 5 --allow-timeout --allow-dupe --allow-redirect

git clone git@gitlab.com:fatihacet/turkcekaynaklar-com.git gl
cd gl
git config --global user.email "fatih@fatihacet.com"
git config --global user.name "Fatih Acet"
git commit --allow-empty -m "Deploy new version: ${SHA}"
git push origin master
