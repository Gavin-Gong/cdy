import cdy from "./cdy"


const textA = "4 月 8 日，根据上海新闻出版局公示的信息，《马力欧网球 王牌》《潘卡普守梦人》《歧路旅人》三款游戏已进行「关于出版和复制境外电子出版物、计算机软件、电子媒体非卖品著作权授权合同登记」，并获得准予许可。需要注意的是，获得著作权合同登记的许可并不代表游戏过审，更多时候被看作是可以提交送审的前提以及前期准备工作\n"

console.log(cdy(textA, .2), .2)
console.log(cdy(textA, .3), .3)
console.log(cdy(textA, .4), .4)
console.log(cdy(textA, .5), .5)
