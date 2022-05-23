#!/bin/sh
# sh curl-scripts/suggestions/index.sh

API="http://localhost:4741"
URL_PATH="/suggestions"
TOKEN="6db15697e2f44eed0a3dbbfc5fc7fa3c"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
