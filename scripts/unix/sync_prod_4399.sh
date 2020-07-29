#!/usr/bin/env bash
#scp -r _build/default/rel/${1} 4399://data/server/sxwj/CN/stable/android_cn/
rsync -avz "_build/default/rel/${1}" 4399://data/server/sxwj/CN/stable/android_cn/
