#!/bin/sh
# sh curl-scripts/suggestions/index.sh

API="http://localhost:4741"
URL_PATH="/suggestions"
TOKEN="189ec0968f72ca8b0f7b3c1c840fd9a5"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
