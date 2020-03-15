#!/usr/bin/env sh

FONT_DIR='../static/fonts'
if [ ! -d ${FONT_DIR}/build ]; then mkdir ${FONT_DIR}/build; fi

ROMAN_SANS="SourceSansVariable-Roman"
ROMAN_SERIF="SourceSerifVariable-Roman"
ITALIC_SANS="SourceSansVariable-Italic"
ITALIC_SERIF="SourceSerifVariable-Italic"

# Sans-serif subset: uppercase glyphs & small caps feature
SANS_PARAMS=(--layout-features=c2sc --no-hinting --desubroutinize)
SANS_SET=(--unicodes=U+41-5A,U+7B-7E)

# Serif subset: 0, uppercase, and lowercase glyphs - with kerning
SERIF_PARAMS=(--layout-features=kern --no-hinting --desubroutinize)
SERIF_SET=(--unicodes=U+30,U+41-5A,U+61-7A)

# Optimized set: All features & Latin glyphs
OPT_FULL=(--unicodes=$(glyphhanger --LATIN) --layout-features='*')

# Helps assemble common command options
function subset_base() {
  local FILE="${1}/src/${3}.ttf"
  echo "$FILE --output-file=${1}/build/${2}.${3}.${4} --flavor=${4} ${5}"
}

echo "Generating font files..."

echo "subset: $ROMAN_SANS" # Generate the sans subset (Roman only)
pyftsubset $(subset_base $FONT_DIR "sub" $ROMAN_SANS "woff" "--with-zopfli") $SANS_PARAMS $SANS_SET

echo "subset: $ROMAN_SERIF" # Generate the serif subset (Roman only)
pyftsubset $(subset_base $FONT_DIR "sub" $ROMAN_SERIF "woff" "--with-zopfli") $SERIF_PARAMS $SERIF_SET

# Generate optimized full sets of sans & serif, in Roman and italic
for FONT in $ROMAN_SANS $ROMAN_SERIF $ITALIC_SANS $ITALIC_SERIF; do
  echo "optimized: $FONT woff (with zopfli)" # Wider support
  pyftsubset $(subset_base $FONT_DIR "opt" $FONT "woff" "--with-zopfli") $OPT_FULL

  echo "optimized: $FONT woff2" # Greater compression
  pyftsubset $(subset_base $FONT_DIR "opt" $FONT "woff2" "") $OPT_FULL
done
