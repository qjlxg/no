 const isFalsy = (s) => ['0', 'false', 'null'].includes(s) || !s;
//https://github.com/qjlxg/ss/raw/master/list_raw.txt
//https://git.homegu.com/qjlxg/Ray/raw/main/config.txt
//https://raw.githubusercontent.com/LalatinaHub/Mineral/master/result/nodes
//https://git.homegu.com/qjlxg/YBSub/raw/master/sub/share/available
//https://git.homegu.com/qjlxg/YBSub/raw/master/sub/share/v2
//https://github.com/qjlxg/v2ray-worker-sub/raw/refs/heads/master/Eternity.txt
//https://raw.githubusercontent.com/dongchengjie/airport/main/subs/merged/tested_within.yaml
// 在 github-action 中，使用原始链接，否则使用 fastgit 镜像
const useFastGitMirror = isFalsy(process.env.GITHUB_ACTION);



export const publicCollections = [
   {
    name: '68',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub1.txt'
  },
   {
    name: '69',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub2.txt'
  },
  {
    name: '70',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub3.txt'
  },
   {
    name: '71',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub4.txt'
  },
   {
    name: '72',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub5.txt'
  },
  {
    name: '73',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub6.txt'
  },
   {
    name: '74',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub7.txt'
  },
   {
    name: '75',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub8.txt'
  },
  {
    name: '76',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub9.txt'
  },
   {
    name: '77',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub10.txt'
  },
   {
    name: '78',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub11.txt'
  },
  {
    name: '79',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub12.txt'
  },
  {
    name: '80',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub13.txt'
  },
  {
    name: '81',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub14.txt'
  },
   {
    name: '82',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub15.txt'
  },
   {
    name: '83',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub16.txt'
  },
  {
    name: '100',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub17.txt'
  },
    {
    name: '109',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub18.txt'
  },
   {
    name: '110',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub19.txt'
  },
  {
    name: '101',
    homepage: '',
    url: 'https://github.com/qjlxg/V2ray-Configs2/raw/refs/heads/main/Sub20.txt'
  },
  {
    name: '101',
    homepage: '',
    url: ''
  },
  {
    name: '101',
    homepage: '',
    url: ''
  },
  {
    name: '101',
    homepage: '',
    url: ''
  },
  {
    name: '101',
    homepage: '',
    url: ''
  },
  {
    name: '101',
    homepage: '',
    url: ''
  },
  {
    name: '101',
    homepage: '',
    url: ''
  },
  {
    name: '101',
    homepage: '',
    url: ''
  },
  {
    name: '101',
    homepage: '',
    url: ''
  },
  {
    name: '101',
    homepage: '',
    url: ''
  },
  {
    name: '101',
    homepage: '',
    url: ''
  },
  {
    name: '101',
    homepage: '',
    url: 'https://github.com/qjlxg/proxies-2/raw/refs/heads/master/sub/share/available'
  },
  {
    name: '101',
    homepage: '',
    url: 'https://github.com/qjlxg/V2Hub/raw/refs/heads/main/merged'
  },
  
  {
    name: '102',
    homepage: '',
    url: 'https://github.com/qjlxg/v2ray-worker-sub/raw/refs/heads/master/Eternity.txt'
  },
   {
    name: '103',
    homepage: '',
    url: 'https://github.com/qjlxg/Ray/raw/refs/heads/main/config.txt'
  },
  {
    name: '101',
    homepage: '',
    url: 'https://raw.githubusercontent.com/dongchengjie/airport/main/subs/merged/tested_within.yaml'
  },
 
];

export const privateCollections = [
  {
    name: 'bulink',
    url: `https://bulink.me/${process.env.BULINK_SUB_URL}`
  },
  {
    name: 'getafreenode',
    url: `https://getafreenode.com/subscribe/?uuid=${process.env.GETAFREENODE_UUID}`
  }
];

export const nodeNameFormatter = (raw = '', collection = {}) => {
  const replacements = [
    ['github.com/freefq - ', ''],
    ['二爷翻墙网 https://1808.ga', ''],
    [/-付费推荐(?:.*)$/, ''],
    ['(油管:破解资源君)', ''],
    ['(TG频道@kxswa)', ''],
    ['_油管：全网最强白嫖', ''],
    ['_来源：kkzui.com', ''],
    ['(TG频道@kxswa)', ''],
    ['(youtube阿伟科技)', ''],
    ['v2rayfree.eu.org - ', ''],
    [/^adi\|/, ''],
    [/【付费推荐：(.*?)】/, '']
  ];

  let name = raw;

  for (const [searchValue, replaceValue] of replacements) {
    name = name.replace(searchValue, replaceValue);
  }

  if (!collection?.name) {
    return name.trim();
  }

  return `[${collection.name}]${name.trim()}`;
};
