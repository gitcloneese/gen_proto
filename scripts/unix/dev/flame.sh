ROOT=`cd $(dirname $0)/../; pwd`
./flamegraph.pl $ROOT/log/eflame.log.out > eflame.svg

