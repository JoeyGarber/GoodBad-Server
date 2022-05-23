#!/bin/bash
# sh curl-scripts/auth/sign-up.sh

API="http://localhost:4741"
URL_PATH="/sign-up"
EMAIL="Test@gmail.com"
PASSWORD="1234"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
