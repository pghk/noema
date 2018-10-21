#!/usr/bin/env sh

while read line; do printf -- "--$line "; done <<-EOF
  enforce_https
  check-sri
  check_img_http
  check-html
  report_missing_names
EOF
