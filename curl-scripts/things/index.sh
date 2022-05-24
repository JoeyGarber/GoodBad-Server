#!/bin/sh
# sh curl-scripts/things/index.sh

API="http://localhost:4741"
URL_PATH="/things"
TOKEN="8c2e641633015037aabd6ad232edf552"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"
echo
