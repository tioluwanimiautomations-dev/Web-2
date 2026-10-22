#!/bin/bash
# Installs the SVG renderer the logo-design skill needs for small-size (16/32/64 px) PNG renders.
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

python3 -c "import cairosvg" 2>/dev/null || pip install -q cairosvg
