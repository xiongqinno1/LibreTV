// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000,  // 验证有效期（90天，约3个月）
    adminLocalStorageKey: 'adminPasswordVerified'  // 新增的管理员验证状态的键名
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com', 
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
    xiaomaomi: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: '小猫咪资源',
    },
    iqiyizyapi.com: {
      name: 🎬-爱奇艺-,
      api: https://iqiyizyapi.com/api.php/provide/vod,
      detail: https://iqiyizyapi.com
    },
    dbzy.tv: {
      _comment: 有伦理片,
      name: 🎬豆瓣资源,
      api: https://caiji.dbzy5.com/api.php/provide/vod,
      detail: https://dbzy.tv
    },
    mtzy.me: {
      name: 🎬茅台资源,
      api: https://caiji.maotaizy.cc/api.php/provide/vod,
      detail: https://mtzy.me
    },
    wolongzyw.com: {
      name: 🎬卧龙资源,
      api: https://wolongzyw.com/api.php/provide/vod,
      detail: https://wolongzyw.com
    },
    ikunzy.com: {
      name: 🎬iKun资源,
      api: https://ikunzyapi.com/api.php/provide/vod,
      detail: https://ikunzy.com
    },
    dyttzyapi.com: {
      name: 🎬电影天堂,
      api: http://caiji.dyttzyapi.com/api.php/provide/vod,
      detail: http://caiji.dyttzyapi.com
    },
    www.maoyanzy.com: {
      name: 🎬猫眼资源,
      api: https://api.maoyanapi.top/api.php/provide/vod,
      detail: https://www.maoyanzy.com
    },
    cj.lzcaiji.com: {
      name: 🎬量子资源,
      api: https://cj.lzcaiji.com/api.php/provide/vod,
      detail: https://cj.lzcaiji.com
    },
    360zy.com: {
      name: 🎬360 资源,
      api: https://360zyzz.com/api.php/provide/vod,
      detail: https://360zy.com
    },
    jszyapi.com: {
      name: 🎬极速资源,
      api: https://jszyapi.com/api.php/provide/vod,
      detail: https://jszyapi.com
    },
    www.moduzy.net: {
      name: 🎬魔都资源,
      api: https://www.mdzyapi.com/api.php/provide/vod,
      detail: https://www.moduzy.net
    },
    ffzyapi.com: {
      name: 🎬非凡资源,
      api: https://api.ffzyapi.com/api.php/provide/vod,
      detail: https://cj.ffzyapi.com
    },
    bfzy.tv: {
      name: 🎬暴风资源,
      api: https://bfzyapi.com/api.php/provide/vod,
      detail: https://bfzy.tv
    },
    zuida.xyz: {
      name: 🎬最大资源,
      api: https://api.zuidapi.com/api.php/provide/vod,
      detail: https://zuida.xyz
    },
    wujinzy.me: {
      name: 🎬无尽资源,
      api: https://api.wujinapi.me/api.php/provide/vod,
      detail: https://wujinzy.com
    },
    xinlangapi.com: {
      name: 🎬新浪资源,
      api: https://api.xinlangapi.com/xinlangapi.php/provide/vod,
      detail: https://xinlangapi.com
    },
    api.wwzy.tv: {
      name: 🎬旺旺资源,
      api: https://api.wwzy.tv/api.php/provide/vod,
      detail: https://api.wwzy.tv
    },
    www.subozy.com: {
      name: 🎬速播资源,
      api: https://subocaiji.com/api.php/provide/vod,
      detail: https://www.subozy.com
    },
    jinyingzy.com: {
      name: 🎬金鹰点播,
      api: https://jinyingzy.com/api.php/provide/vod,
      detail: https://jinyingzy.com
    },
    p2100.net: {
      name: 🎬飘零资源,
      api: https://p2100.net/api.php/provide/vod,
      detail: https://p2100.net
    },
    api.ukuapi88.com: {
      name: 🎬U酷影视,
      api: https://api.ukuapi88.com/api.php/provide/vod,
      detail: https://www.ukuzy.com
    },
    api.guangsuapi.com: {
      name: 🎬光速资源,
      api: https://api.guangsuapi.com/api.php/provide/vod,
      detail: https://api.guangsuapi.com
    },
    www.hongniuzy.com: {
      name: 🎬红牛资源,
      api: https://www.hongniuzy2.com/api.php/provide/vod,
      detail: https://www.hongniuzy.com
    },
    caiji.moduapi.cc: {
      name: 🎬魔都动漫,
      api: https://caiji.moduapi.cc/api.php/provide/vod,
      detail: https://caiji.moduapi.cc
    },
    www.ryzyw.com: {
      name: 🎬如意资源,
      api: https://pz.v88.qzz.io/?url=https://cj.rycjapi.com/api.php/provide/vod,
      detail: https://www.ryzyw.com
    },
    www.haohuazy.com: {
      name: 🎬豪华资源,
      api: https://pz.v88.qzz.io/?url=https://hhzyapi.com/api.php/provide/vod,
      detail: https://www.haohuazy.com
    },
    bdzy1.com: {
      name: 🎬百度云zy,
      api: https://pz.v88.qzz.io/?url=https://api.apibdzy.com/api.php/provide/vod,
      detail: https://bdzy1.com
    },
    lovedan.net: {
      name: 🎬艾旦影视,
      api: https://pz.v88.qzz.io/?url=https://lovedan.net/api.php/provide/vod,
      detail: https://lovedan.net
    },
    zy.jinchancaiji.com: {
      _comment: 无搜索结果,
      name: 🎬金蝉影视,
      api: https://zy.jinchancaiji.com/api.php/provide/vod,
      detail: https://zy.jinchancaiji.com
    },
    lzizy.net: {
      _comment: 备用,
      name: 🎬量子影视,
      api: https://cj.lziapi.com/api.php/provide/vod,
      detail: https://lzizy.net
    },
    zuidazy.co: {
      _comment: 备用,
      name: 🎬最大点播,
      api: https://zuidazy.me/api.php/provide/vod,
      detail: https://zuidazy.co
    },
    wujinzy.com: {
      _comment: 备用,
      name: 🎬无尽影视,
      api: https://api.wujinapi.com/api.php/provide/vod,
      detail: https://wujinzy.com
    },
    wwzy.tv: {
      _comment: 备用,
      name: 🎬旺旺短剧,
      api: https://wwzy.tv/api.php/provide/vod,
      detail: https://wwzy.tv
    },
    1080zyk4.com: {
      _comment: 无法搜索,
      name: 🎬优质资源,
      api: https://api.yzzy-api.com/inc/apijson.php,
      detail: https://1080zyk4.com
    },
    www.huyaapi.com: {
      _comment: 污染搜索结果,
      name: 🎬虎牙资源,
      api: https://www.huyaapi.com/api.php/provide/vod,
      detail: https://www.huyaapi.com
    },
    yayazy3.com: {
      _comment: 暂不支持搜索,
      name: 🎬鸭鸭资源,
      api: https://cj.yayazy.net/api.php/provide/vod,
      detail: https://yayazy3.com
    },
    suonizy.net: {
      _comment: 暂不支持搜索,
      name: 🎬索尼资源,
      api: https://suoniapi.com/api.php/provide/vod,
      detail: https://suonizy.net
    },
    kuaichezy.com: {
      _comment: 暂不支持搜索,
      name: 🎬快车资源,
      api: https://caiji.kuaichezy.org/api.php/provide/vod,
      detail: https://kuaichezy.com
    },
    shandianzy.com: {
      _comment: 暂不支持搜索,
      name: 🎬闪电资源,
      api: https://xsd.sdzyapi.com/api.php/provide/vod,
      detail: https://shandianzy.com
    },
    yhzy.cc: {
      _comment:  403 Forbidden ,
      name: 🎬樱花资源,
      api: https://m3u8.apiyhzy.com/api.php/provide/vod,
      detail: https://yhzy.cc
    },
    91md.me: {
      name: 🔞麻豆视频,
      api: https://91md.me/api.php/provide/vod,
      detail: https://91md.me
    },
    lbapiby.com: {
      name: 🔞--AIvin-,
      api: http://lbapiby.com/api.php/provide/vod,
      detail: http://lbapiby.com
    },
    155zy2.com: {
      name: 🔞155-资源,
      api: https://155api.com/api.php/provide/vod,
      detail: https://155zy2.com
    },
    apiyutu.com: {
      name: 🔞玉兔资源,
      api: https://apiyutu.com/api.php/provide/vod,
      detail: https://apiyutu.com
    },
    fhapi9.com: {
      name: 🔞番号资源,
      api: http://fhapi9.com/api.php/provide/vod,
      detail: http://fhapi9.com
    },
    apilsbzy1.com: {
      name: 🔞-老色逼-,
      api: https://apilsbzy1.com/api.php/provide/vod,
      detail: https://apilsbzy1.com
    },
    www.yytv4.cc: {
      name: 🔞优优资源,
      api: https://www.yytv4.cc/api.php/provide/vod,
      detail: https://www.yytv4.cc
    },
    xiaojizy.live: {
      name: 🔞小鸡资源,
      api: https://api.xiaojizy.live/provide/vod,
      detail: https://xiaojizy.live
    },
    hsckzy.xyz: {
      name: 🔞黄色仓库,
      api: https://hsckzy.xyz/api.php/provide/vod,
      detail: https://hsckzy.xyz
    },
    apidanaizi.com: {
      name: 🔞-大奶子-,
      api: https://apidanaizi.com/api.php/provide/vod,
      detail: https://apidanaizi.com
    },
    jkunzyapi.com: {
      name: 🔞jkun资源,
      api: https://jkunzyapi.com/api.php/provide/vod,
      detail: https://jkunzyapi.com
    },
    lbapi9.com: {
      name: 🔞乐播资源,
      api: https://lbapi9.com/api.php/provide/vod,
      detail: https://lbapi9.com
    },
    Naixxzy.com: {
      name: 🔞奶香资源,
      api: https://Naixxzy.com/api.php/provide/vod,
      detail: https://Naixxzy.com
    },
    slapibf.com: {
      name: 🔞森林资源,
      api: https://beiyong.slapibf.com/api.php/provide/vod,
      detail: https://slapibf.com
    },
    apilj.com: {
      name: 🔞辣椒资源,
      api: https://pz.v88.qzz.io/?url=https://apilj.com/api.php/provide/vod,
      detail: https://apilj.com
    },
    shayuapi.com: {
      name: 🔞鲨鱼资源,
      api: https://shayuapi.com/api.php/provide/vod,
      detail: https://shayuapi.com
    },
    doudouzy.com: {
      _comment:  不稳定 ,
      name: 🔞豆豆资源,
      api: https://api.douapi.cc/api.php/provide/vod,
      detail: https://doudouzy.com
    },
    didizy.com: {
      name: 🔞滴滴资源,
      api: https://api.ddapi.cc/api.php/provide/vod,
      detail: https://didizy.com
    },
    heiliaozy.cc: {
      name: 🔞黑料资源,
      api: https://www.heiliaozyapi.com/api.php/provide/vod,
      detail: https://heiliaozy.cc
    },
    api.bwzym3u8.com: {
      name: 🔞百万资源,
      api: https://api.bwzyz.com/api.php/provide/vod,
      detail: https://api.bwzym3u8.com
    },
    thzy8.me: {
      name: 🔞桃花资源,
      api: https://thzy1.me/api.php/provide/vod,
      detail: https://thzy8.me
    },
    www.jingpinx.com: {
      name: 🔞精品资源,
      api: https://www.jingpinx.com/api.php/provide/vod,
      detail: https://www.jingpinx.com
    },
    ckzy.me: {
      _comment: 无搜索结果,
      name: 🔞 CK-资源,
      api: https://ckzy.me/api.php/provide/vod,
      detail: https://ckzy.me
    },
    souavzyw.com: {
      name: 🔞souavZY,
      api: https://api.souavzyw.net/api.php/provide/vod,
      detail: https://api.souavzyw.net
    },
    www.xxibaozyw.com: {
      _comment: 无搜索结果,
      name: 🔞细胞资源,
      api: https://www.xxibaozyw.com/api.php/provide/vod,
      detail: https://www.xxibaozyw.com
    },
    xiangjiaozyw.com: {
      _comment: 无搜索结果,
      name: 🔞香蕉资源,
      api: https://www.xiangjiaozyw.com/api.php/provide/vod,
      detail: https://www.xiangjiaozyw.com
    },
    www.msnii.com: {
      _comment: 无法搜索,
      name: 🔞-美少女-,
      api: https://www.msnii.com/api/json.php,
      detail: https://www.msnii.com
    },
    www.pgxdy.com: {
      _comment: 无法搜索,
      name: 🔞-黄AVZY,
      api: https://www.pgxdy.com/api/json.php,
      detail: https://www.pgxdy.com
    },
    www.kxgav.com: {
      _comment: 无法搜索,
      name: 🔞白嫖资源,
      api: https://www.kxgav.com/api/json.php,
      detail: https://www.kxgav.com
    },
    xingba111.com: {
      _comment: 403 Forbidden,
      name: 🔞杏吧资源,
      api: https://xingba222.com/api.php/provide/vod,
      detail: https://xingba111.com
    },
    dadizy11.com: {
      _comment: 污染搜索结果,
      name: 🔞大地资源,
      api: https://dadiapi.com/feifei,
      detail: https://dadizy11.com
    },
    semaozy1.com: {
      _comment: 无法搜索,
      name: 🔞色猫资源,
      api: https://caiji.semaozy.net/inc/apijson_vod.php/provide/vod,
      detail: https://semaozy1.com
    },
    aosikazy.com: {
      _comment: 禁止搜索结果,
      name: 🔞-奥斯卡-,
      api: https://aosikazy.com/api.php/provide/vod,
      detail: https://aosikazy.com
    },
    siwazyw.tv: {
      _comment: 污染搜索结果,
      name: 🔞丝袜资源,
      api: https://siwazyw.tv/api.php/provide/vod,
      detail: https://siwazyw.tv
    },
    1080zyku: {
      api: https://api.1080zyku.com/inc/api_mac10.php,
      name: TV-1080资源,
      detail: https://api.1080zyku.com,
      is_adult: false
    },
    360zy: {
      api: https://360zy.com/api.php/provide/vod,
      name: TV-360资源,
      detail: https://360zy.com,
      is_adult: false
    },
    ukuapi: {
      api: https://api.ukuapi.com/api.php/provide/vod,
      name: TV-U酷资源,
      detail: https://api.ukuapi.com,
      is_adult: false
    },
    wujinapi_cc: {
      api: https://api.wujinapi.cc/api.php/provide/vod,
      name: TV-wujinapi无尽,
      detail: ,
      is_adult: false
    },
    wolongzyw: {
      api: https://collect.wolongzyw.com/api.php/provide/vod,
      name: TV-卧龙点播,
      detail: https://collect.wolongzyw.com,
      is_adult: false
    },
    wolongzy_cc: {
      api: https://collect.wolongzy.cc/api.php/provide/vod,
      name: TV-卧龙资源,
      detail: ,
      is_adult: false
    },
    tyyszy: {
      api: https://tyyszy.com/api.php/provide/vod,
      name: TV-天涯资源,
      detail: https://tyyszy.com,
      is_adult: false
    },
    rycjapi: {
      api: https://cj.rycjapi.com/api.php/provide/vod,
      name: TV-如意资源,
      detail: ,
      is_adult: false
    },
    xiaomaomi: {
      api: https://zy.xmm.hk/api.php/provide/vod,
      name: TV-小猫咪资源,
      detail: https://zy.xmm.hk,
      is_adult: false
    },
    wujinapi_net: {
      api: https://api.wujinapi.net/api.php/provide/vod,
      name: TV-无尽资源,
      detail: ,
      is_adult: false
    },
    zuidazy: {
      api: http://zuidazy.me/api.php/provide/vod,
      name: TV-最大点播,
      detail: http://zuidazy.me,
      is_adult: false
    },
    yparse: {
      api: https://api.yparse.com/api/json,
      name: TV-步步高资源,
      detail: ,
      is_adult: false
    },
    niuniuzy: {
      api: https://api.niuniuzy.me/api.php/provide/vod,
      name: TV-牛牛点播,
      detail: https://api.niuniuzy.me,
      is_adult: false
    },
    apibdzy: {
      api: https://api.apibdzy.com/api.php/provide/vod,
      name: TV-百度云资源,
      detail: https://api.apibdzy.com,
      is_adult: false
    },
    1080zyku_json: {
      api: https://api.1080zyku.com/inc/apijson.php/,
      name: TV-神马云,
      detail: https://api.1080zyku.com,
      is_adult: false
    },
    dbzy_caiji: {
      api: https://caiji.dbzy.tv/api.php/provide/vod,
      name: TV-豆瓣资源,
      detail: https://caiji.dbzy.tv,
      is_adult: false
    },
    dbzy: {
      api: https://dbzy.tv/api.php/provide/vod,
      name: TV-豆瓣资源,
      detail: https://dbzy.tv,
      is_adult: false
    },
    hhzyapi: {
      api: https://hhzyapi.com/api.php/provide/vod,
      name: TV-豪华资源,
      detail: https://hhzyapi.com,
      is_adult: false
    },
    jyzyapi: {
      api: https://jyzyapi.com/api.php/provide/vod,
      name: TV-金鹰资源,
      detail: https://jyzyapi.com,
      is_adult: false
    },
    sdzyapi: {
      api: https://sdzyapi.com/api.php/provide/vod,
      name: TV-闪电资源,
      detail: https://sdzyapi.com,
      is_adult: false
    },
    ffzyapi: {
      api: https://cj.ffzyapi.com/api.php/provide/vod,
      name: TV-非凡资源,
      detail: https://cj.ffzyapi.com,
      is_adult: false
    },
    mozhuazy: {
      api: https://mozhuazy.com/api.php/provide/vod,
      name: TV-魔爪资源,
      detail: https://mozhuazy.com,
      is_adult: false
    },
    heimuer: {
      api: https://json.heimuer.xyz/api.php/provide/vod,
      name: TV-黑木耳,
      detail: https://json.heimuer.xyz,
      is_adult: false
    },
    heimuer02: {
      api: https://json02.heimuer.xyz/api.php/provide/vod,
      name: TV-黑木耳点播,
      detail: https://json02.heimuer.xyz,
      is_adult: false
    },
    souavzy: {
      api: https://api.souavzy.vip/api.php/provide/vod,
      name: AV-souav资源,
      detail: https://api.souavzy.vip,
      is_adult: true
    },
    slapibf: {
      api: https://slapibf.com/api.php/provide/vod,
      name: AV-森林资源,
      detail: https://slapibf.com,
      is_adult: true
    },
    xrbsp: {
      api: https://www.xrbsp.com/api/json.php,
      name: AV-淫水机资源,
      detail: https://www.xrbsp.com,
      is_adult: true
    },
    sexnguon: {
      api: https://api.sexnguon.com/api.php/provide/vod,
      name: AV-色嗨国,
      detail: https://api.sexnguon.com,
      is_adult: true
    },
    maozyapi: {
      api: https://api.maozyapi.com/inc/apijson_vod.php,
      name: AV-色猫资源,
      detail: https://api.maozyapi.com,
      is_adult: true
    },
    apilj: {
      api: https://apilj.com/api.php/provide/vod,
      name: AV-辣椒资源,
      detail: https://apilj.com,
      is_adult: true
    },
    gdlsp: {
      api: https://www.gdlsp.com/api/json.php,
      name: AV-香奶儿资源,
      detail: https://www.gdlsp.com,
      is_adult: true
    },
    gayapi: {
      api: https://gayapi.com/api.php/provide/vod,
      name: 快播资源网站,
      is_adult: false
    },
    xingba111: {
      api: https://xingba111.com/api.php/provide/vod,
      name: 性吧资源,
      is_adult: true
    },
    aiduanju: {
      api: https://www.aiduanju.cc/,
      name: 爱短剧.cc,
      is_adult: false
    },
    huawei8: {
      api: https://huawei8.live/api.php/provide/vod,
      name: 华为吧资源,
      is_adult: false
    },
    taopianapi: {
      api: https://taopianapi.com/cjapi/sda/vod,
      name: 淘片资源,
      is_adult: false
    },
    hongniuzy3: {
      api: https://www.hongniuzy3.com/api.php/provide/vod,
      name: 红牛资源,
      is_adult: false
    },
    jyzyapi_provide: {
      api: https://jyzyapi.com/provide/vod,
      name: 金鹰资源采集网,
      is_adult: false
    },
    fczy888: {
      api: https://api.fczy888.me/api.php/provide/vod,
      name: 蜂巢片库,
      is_adult: false
    },
    jmzy: {
      api: https://api.jmzy.com/api.php/provide/vod,
      name: 金马资源网,
      is_adult: false
    },
    dadiapi: {
      api: https://dadiapi.com/api.php/provide/vod,
      name: 大地资源网络,
      is_adult: false
    },
    hsckzy888: {
      api: https://hsckzy888.com/api.php/provide/vod,
      name: 黄色资源啊啊,
      is_adult: true
    },
    kuaichezy: {
      api: https://caiji.kuaichezy.org/api.php/provide,
      name: 快车资源阿,
      is_adult: false
    },
    apilj_provide: {
      api: https://apilj.com/api.php/provide,
      name: 辣椒资源黄黄,
      is_adult: false
    },
    yzzy_api: {
      api: https://api.yzzy-api.com/inc/ldg_api_all.php/provide/vod,
      name: 优质资源库1080zyk6.com高清,
      is_adult: false
    },
    iqiyizyapi: {
      api: https://www.iqiyizyapi.com/api.php/provide/vod,
      name: iqiyi资源,
      is_adult: false
    },
    qiqidys: {
      api: https://www.qiqidys.com/api.php/provide/vod/,
      name: 七七影视,
      is_adult: false
    },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
        detail: 'http://ffzy5.tv', 
    },
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
        detail: 'https://heimuer.tv', 
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
    },
    iqiyi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi资源',
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    }, 
    hwba: {
        api: 'https://cjhwba.com/api.php/provide/vod',
        name: '华为吧资源',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com', 
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源'
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源'
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源'
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧'
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源'
    },
    lzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '量子资源站'
    },
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    },
    // 下面是一些成人内容的API源，默认隐藏，使用本项目浏览黄色内容违背项目初衷
    // 互联网上传播的色情内容将人彻底客体化、工具化，是性别解放和人类平等道路上的巨大障碍。
    // 这些黄色影片是资本主义父权制压迫的最恶毒体现，它将暴力和屈辱商品化，践踏人的尊严，对受害者造成无法弥愈的伤害，并毒害社会关系。
    // 资本为了利润，不惜将最卑劣的剥削（包括对受害者和表演者的剥削）和暴力商品化，
    // 把性别剥削塑造成“性享受”麻痹观众的意识，转移我们对现实生活中矛盾和压迫的注意力。
    // 这些影片和背后的产业已经使数百万男女“下海”，出卖自己的身体，甚至以此为生计。
    // 而作为观众无辜吗？毫无疑问，他们促成了黄色产业链的再生产。
    // 我们提供此警告，是希望您能认清这些内容的本质——它们是压迫和奴役的工具，而非娱乐。
     ckzy: {
         api: 'https://www.ckzy1.com',
         name: 'CK资源',
         adult: true
     },
     jkun: {
         api: 'https://jkunzyapi.com',
         name: 'jkun资源',
         adult: true
     },
     bwzy: {
         api: 'https://api.bwzym3u8.com',
         name: '百万资源',
         adult: true
     },
     souav: {
         api: 'https://api.souavzy.vip',
         name: 'souav资源',
         adult: true
     },
     r155: {
         api: 'https://155api.com',
         name: '155资源',
         adult: true
     },
     lsb: {
         api: 'https://apilsbzy1.com',
         name: 'lsb资源',
         adult: true
     },
     huangcang: {
         api: 'https://hsckzy.vip',
         name: '黄色仓库',
         adult: true,
         detail: 'https://hsckzy.vip'
     },
     yutu: {
         api: 'https://yutuzy10.com',
         name: '玉兔资源',
         adult: true
     },

    // 下面是资源失效率高的API源，不建议使用
    // subo: {
    //     api: 'https://subocaiji.com/api.php/provide/vod',
    //     name: '速播资源'
    // },
    // fczy: {
    //     api: 'https://api.fczy888.me/api.php/provide/vod',
    //     name: '蜂巢资源'
    // },
    // ukzy: {
    //     api: 'https://api.ukuapi88.com/api.php/provide/vod',
    //     name: 'U酷资源'
    // },
};

// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
