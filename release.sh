#!/bin/zsh
# ALFRED WORKFLOW RELEASE
#───────────────────────────────────────────────────────────────────────────────

# goto git root
cd "$(git rev-parse --show-toplevel)" || return 1

# Prompt for next version number
nextVersion="$*"
currentVersion=$(plutil -extract version xml1 -o - info.plist | sed -n 4p | cut -d">" -f2 | cut -d"<" -f1)
echo "current version: $currentVersion"
echo -n "   next version: "
read -r nextVersion
echo

# Insert next version number
plutil -replace version -string "$nextVersion" info.plist
localInfoPlist="$DOTFILE_FOLDER/Alfred.alfredpreferences/workflows/$(basename "$PWD")/info.plist"
if [[ -f "$localInfoPlist" ]]; then
	plutil -replace version -string "$nextVersion" "$localInfoPlist"
fi

# GIT OPERATIONS
git add -A
git commit -m "release $nextVersion"
git pull
git push

git tag "$nextVersion" # trigger the release action via github action
git push origin --tags
