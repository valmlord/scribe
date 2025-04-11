#!/bin/bash
# filepath: /workspaces/scribe/infra/scripts/code-climate.sh
set -eo pipefail

# Set default output directory
REPORTS_DIR="reports/code-climate"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")

# Create reports directory if it doesn't exist
mkdir -p $REPORTS_DIR

# Parse arguments
OUTPUT_FORMAT="text"
ANALYZE=false
OPEN_REPORT=false

while [ "$#" -gt 0 ]; do
  case "$1" in
    analyze|a)
      ANALYZE=true
      shift 1
      ;;
    -f|--format)
      OUTPUT_FORMAT="$2"
      shift 2
      ;;
    -o|--open)
      OPEN_REPORT=true
      shift 1
      ;;
    *)
      ARGS="$ARGS $1"
      shift 1
      ;;
  esac
done

# Run Code Climate analysis
echo "Running Code Climate analysis..."
if [ "$ANALYZE" = true ]; then
  REPORT_FILE="$REPORTS_DIR/report_${TIMESTAMP}.${OUTPUT_FORMAT}"
  
  if [ "$OUTPUT_FORMAT" = "html" ]; then
    docker run \
      --interactive --tty --rm \
      --env CODECLIMATE_CODE="$PWD" \
      --volume "$PWD":/code \
      --volume /var/run/docker.sock:/var/run/docker.sock \
      --volume /tmp/cc:/tmp/cc \
      codeclimate/codeclimate analyze -f html > "$REPORT_FILE"
    
    echo "Report saved to $REPORT_FILE"
    
    if [ "$OPEN_REPORT" = true ]; then
      echo "Opening report..."
      if command -v xdg-open &> /dev/null; then
        xdg-open "$REPORT_FILE"
      elif command -v open &> /dev/null; then
        open "$REPORT_FILE"
      else
        echo "Cannot automatically open the report. Please open manually: $REPORT_FILE"
      fi
    fi
  else
    docker run \
      --interactive --tty --rm \
      --env CODECLIMATE_CODE="$PWD" \
      --volume "$PWD":/code \
      --volume /var/run/docker.sock:/var/run/docker.sock \
      --volume /tmp/cc:/tmp/cc \
      codeclimate/codeclimate analyze -f "$OUTPUT_FORMAT" > "$REPORT_FILE"
    
    echo "Report saved to $REPORT_FILE"
  fi
else
  # Pass all other commands directly to Code Climate
  docker run \
    --interactive --tty --rm \
    --env CODECLIMATE_CODE="$PWD" \
    --volume "$PWD":/code \
    --volume /var/run/docker.sock:/var/run/docker.sock \
    --volume /tmp/cc:/tmp/cc \
    codeclimate/codeclimate $ARGS
fi