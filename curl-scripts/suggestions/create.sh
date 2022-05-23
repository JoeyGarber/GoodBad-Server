#!/bin/bash
# sh curl-scripts/suggestions/create.sh

API="http://localhost:4741"
URL_PATH="/suggestions"

TOKEN="6db15697e2f44eed0a3dbbfc5fc7fa3c"
TITLE="Cartoons"


curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "suggestion": {
      "title": "'"${TITLE}"'"
    }
  }'

echo
