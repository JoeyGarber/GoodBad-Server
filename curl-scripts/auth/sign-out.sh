#!/bin/bash
# sh curl-scripts/auth/sign-out.sh

API="http://localhost:4741"
URL_PATH="/sign-out"
TOKEN="189ec0968f72ca8b0f7b3c1c840fd9a5"


curl "${API}${URL_PATH}/" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
