#!/usr/bin/env bash

DIR_SCRIPT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
DIR_ROOT="$( cd "$DIR_SCRIPT/../.." >/dev/null 2>&1 && pwd )"

echo ---- DIR_ROOT = $DIR_ROOT

echo ---- ---- ---- ---- npm install
cd $DIR_ROOT/x-dev
npm install
rc=$?; if [ $rc -ne 0 ]; then echo ---- RC=$rc; exit $rc; fi

echo ---- ---- ---- ---- npm run svelte:build
cd $DIR_ROOT/x-dev
npm run svelte:build
rc=$?; if [ $rc -ne 0 ]; then echo ---- RC=$rc; exit $rc; fi

echo ---- ---- ---- ---- npm run gulp:build
cd $DIR_ROOT/x-dev
npm run gulp:build
rc=$?; if [ $rc -ne 0 ]; then echo ---- RC=$rc; exit $rc; fi

echo ---- ---- ---- ---- hugo -d public --gc
cd $DIR_ROOT/hugo
hugo -d public --gc
rc=$?; if [ $rc -ne 0 ]; then echo ---- RC=$rc; exit $rc; fi


#=======================================================================
# Notes:
#  - Using deploy script instead of &&-chain of commands because
#    Netlify would not always do npm install so deploy would fail.
#    Could not find why so now this script always does npm install.
