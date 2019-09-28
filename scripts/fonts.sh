#!/usr/bin/env sh

FONT_DIR='./static/fonts'
SANS_NAME="SourceSansVariable-Roman"
SERIF_NAME="SourceSerifVariable-Roman"

function base_params() {
  local FILE="$1/src/${2}.ttf"
  local FLAVOR="--flavor=woff --with-zopfli"
  echo "$FILE --output-file=$1/build/${2}.testing.woff $FLAVOR"
}

SANS_PARAMS=(--layout-features=c2sc --no-hinting --desubroutinize)
SANS_CODES=(--unicodes=U+41-5A,U+7B-7E)

set -x
pyftsubset $(base_params $FONT_DIR $SANS_NAME) ${SANS_PARAMS[@]} ${SANS_CODES[@]}
pyftsubset $(base_params $FONT_DIR $SERIF_NAME) ${SANS_PARAMS[@]} ${SANS_CODES[@]}
