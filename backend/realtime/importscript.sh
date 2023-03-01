#!/bin/bash

for file in /root/realtime/*.sql; do
  psql -U postgres -d forecast -f "$file" -h localhost -p 5432 < /dev/null
done
rm /root/realtime/*.sql