#!/bin/bash

API="http://localhost:4741"
URL_PATH="/suggestions"
ID="628bc494602131809d907ce0"
TOKEN="6db15697e2f44eed0a3dbbfc5fc7fa3c"
TITLE="Jizz (Star Wars)"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "suggestion": {
      "title": "'"${TITLE}"'"
    }
  }'

echo
