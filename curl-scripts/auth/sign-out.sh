#!/bin/bash

API="http://localhost:4741"
URL_PATH="/sign-out"
TOKEN="6db15697e2f44eed0a3dbbfc5fc7fa3c"


curl "${API}${URL_PATH}/" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
