. ../etc/mmo.rc

LocalNode=$(cat /dev/urandom | tr -cd 'a-z' | head -c 6)
erl -name $LocalNode@$LOCAL_IP -setcookie $COOKIE -remsh $NODE@$LOCAL_IP -hidden 
