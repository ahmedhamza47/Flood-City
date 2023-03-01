psql -U postgres -d forecast -W <<EOF
expect "Password:"
send "postgres\r"

select * from realtime;
EOF
