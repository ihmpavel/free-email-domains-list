#!/bin/sh

rm -rf build
yarn generate
yarn tsc
