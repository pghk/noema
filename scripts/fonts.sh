#!/usr/bin/env sh

FONT_DIR='./static/fonts'
SANS_NAME="SourceSansVariable-Roman"
SERIF_NAME="SourceSerifVariable-Roman"

function base_params() {
  local FILE="$1/src/${2}.ttf"
  local FLAVOR="--flavor=woff --with-zopfli"
  echo "$FILE --output-file=$1/build/sub.${2}.woff $FLAVOR"
}

SANS_PARAMS=(--layout-features=c2sc --no-hinting --desubroutinize)
SANS_CODES=(--unicodes=U+41-5A,U+7B-7E)

SERIF_PARAMS=(--layout-features=kern --no-hinting --desubroutinize)
SERIF_CODES=(--unicodes=U+41-5A,U+61-7A)

FULL=(--unicodes=$(glyphhanger --LATIN) --layout-features='*')

echo "Generating derivative font files..."
echo "subset: $SANS_NAME"
pyftsubset $(base_params $FONT_DIR $SANS_NAME) ${SANS_PARAMS[@]} ${SANS_CODES[@]}
echo "subset: $SERIF_NAME"
pyftsubset $(base_params $FONT_DIR $SERIF_NAME) ${SERIF_PARAMS[@]} ${SERIF_CODES[@]}

for FONT in $SANS_NAME $SERIF_NAME SourceSansVariable-Italic SourceSerifVariable-Italic
  do
    echo "optimized: $FONT woff (with zopfli)"
    pyftsubset $FONT_DIR/src/$FONT.ttf $FULL --flavor=woff --with-zopfli\
     --output-file=$FONT_DIR/build/opt.$FONT.woff
    echo "optimized: $FONT woff2"
    pyftsubset $FONT_DIR/src/$FONT.ttf $FULL --flavor=woff2\
     --output-file=$FONT_DIR/build/opt.$FONT.woff2
  done
