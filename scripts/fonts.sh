#!/usr/bin/env sh

FONT_DIR='./static/fonts'
SANS_SRC="SourceSansVariable-Roman"

INPUT_FILE=($FONT_DIR/src/${SANS_SRC}.ttf)
BASE_PARAMS=(--output-file=$FONT_DIR/build/${SANS_SRC}.testing.woff --flavor=woff --with-zopfli)

SANS_PARAMS=(--layout-features=c2sc --no-hinting --desubroutinize)
SANS_CODES=(--unicodes=U+41-5A,U+7B-7E)

set -x
pyftsubset ${INPUT_FILE[@]} ${BASE_PARAMS[@]} ${SANS_PARAMS[@]} ${SANS_CODES[@]}
