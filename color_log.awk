#!/usr/local/bin/awk -f
# 对日志文本流添加颜色
# Author: Shengning Piao

BEGIN{
    date = strftime("%Y-%m-%d", systime());
    headh = "\033[0;"
    headt = "m"
    tail = "\033[0m"
    head_black =  headh 30 headt    
    head_red =  headh 31 headt    
    head_green =  headh 32 headt    
    head_yello =  headh 33 headt    
    head_blue =  headh 34 headt    
    head_magenta =  headh 35 headt    
    head_cyan =  headh 36 headt    
    head_white =  headh 37 headt    
    head_close =  headh headt    
    print FS
}

# 匹配2016-05-04 00:00:00格式
$0 ~ /^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}.*$/ {
    #printf("字段数=%s", NF)
    # 打印debug/info/error字样
    if ($3 ~ /.*DEBUG.*/) {
        head_color = head_green
    } else if ($3 ~ /.*INFO.*/) {
        head_color = head_blue
    } else if ($3 ~ /.*WARNING.*/) {
        head_color = head_yello
    } else if ($3 ~ /.*ERROR.*/) {
        head_color = head_red
    }

    # 一条日志的第一行
    printf("%s%s%s %s%s%s %s%s%s %s%s%s%s%s%s ",
           head_red, $1, tail,
           head_yello, $2, tail,
           head_color, $3, tail,
           head_cyan, $4, tail,
           head_blue, $5, tail)

    # 打印剩下的文本
    if ($0 ~ /.*SEND.*/) {
        head_color = head_yello
        p = 1
    } else if ($0 ~ /.*RECV.*/) {
        head_color = head_cyan
        p = 2
    } else if ($0 ~ /.*trace.*/) {
        head_color = head_magenta
        p = -1
    } else if ($0 ~ /.*error.*/) {
        head_color = head_magenta
        p = -2
    } else {
        head_color = head_close
        p = 0
    }
    for (i = 6; i <= NF; i++)
        printf("%s%s%s ", head_color, $i, tail);

    printf("\n");
}

$0 ~ /.*trace.*/ {
    p = -1
}

$0 ~ /.*error.*/ {
    p = -2
}

$0 !~ /^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}.*$/ {
    if (p == 0)
        head_color = head_close
    else if (p == 1)
        head_color = head_blue
    else if (p == 2)
        head_color = head_cyan
    else if (p == -1)
        head_color = head_red
    else if (p == -2)
        head_color = head_red

    print head_color "                                                     " $0 tail
}
        


END{}
