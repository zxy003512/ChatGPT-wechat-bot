export default {
  // 填入你的OPENAI_API_KEY
  OPENAI_API_KEY: "sb-af680fc2dd9b9b1606ffaf7686ec8222c64deabf39b0bd96",
  // 反向代理地址，简单说就是你的在国外服务器地址，如何获取看README
  // 可换成你自己的，白嫖代理地址 https://api.openai.com/v1/chat/completions
  reverseProxyUrl: "https://api.openai-sb.com/v1/chat/completions",
  // 在群组中设置唤醒微信机器人的关键词
  groupKey: "",
  // 在私聊中设置唤醒微信机器人的关键词
  privateKey: "",
  // 重置上下文的关键词，如可设置为reset
  resetKey: "重置",
  // 是否在群聊中带上提问的问题
  groupReplyMode: false,
  // 是否在私聊中带上提问的问题
  privateReplyMode: false,
};
