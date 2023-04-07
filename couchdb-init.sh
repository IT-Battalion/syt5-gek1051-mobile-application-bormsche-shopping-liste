#!/bin/sh
sleep 5
curl -u "${COUCHDB_USER}:${COUCHDB_PASSWORD}" -X PUT http://database:5984/_users
curl -u "${COUCHDB_USER}:${COUCHDB_PASSWORD}" -X PUT http://database:5984/_replicator
curl -u "${COUCHDB_USER}:${COUCHDB_PASSWORD}" -X PUT http://database:5984/_global_changes
curl -u "${COUCHDB_USER}:${COUCHDB_PASSWORD}" -X PUT http://database:5984/list
