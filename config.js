//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/7f694dd970253afc33321.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "2412384252";
global.owner = process.env.OWNER_NUMBER || "2412384252";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/77cadce263a8909018ae3.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-39mi.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkl5cC9Db1lRU1krOWhuRkdPbzFVS1Z4L2FDNGhxZlcvMFg2Tzc3OC8yTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3Nyalpsam9oOFE0bXVEZWoyOTZCOWtYckQzK2RDTmJZeHo5U0RNN2YyRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrTm9KSU4vQjBBOTgwbFA4Z0t3RDAwUEl3elhsemZTMTd1V25XQUxqcjBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwOWFNcTk5MGRQYkMwR3Rzcjd1NDVzTkRyaHJ5V2x2YzhsQnpoaXVwZTBjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktHZlhtWkI5S2RyZG5Rd1ZRQzRtSzRQaE5uRVNQMVU1ZGp1dkhVUXNFMkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNmRyt6TllhZFM3bkZzYXVhdGQ0ald0RDJGRDRTdnVOcFlnVlhFeURsbGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic01LQTMrMWdmOTc1eGZ0OUFxK0hidGZVcDBaQTFTdVQ5Zm9MQnZBczVrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEVKYnhWNnM1cm80b2RscVh3WjlsNEl1aVlPcTJVYUtkTmlGZktyT0JrVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ims5RXFnd25zMFZYNkovS2lKYmg4SVdUL2dyL3JhRTdvMHFjeXZ1U2txY0x1RWhmeDR6T0lwbTBzYlpENFd4amVwclVoRHBPemJqbGt6TzR4b0FhMERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQxLCJhZHZTZWNyZXRLZXkiOiJkeE5IUWFucVJ6aWhaTzJmVEQyeU80L0phRW8xT0lkTDZmRDdVMDE1eXlRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1djdkSFRLaVF4YUdzeUVpWExOWmt3IiwicGhvbmVJZCI6ImEzMjUzZWQ0LTUzYTQtNGNmNS1hNzIwLWExMzMxZWQwNTU1OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiYnRrYkdxVGlXZFVBSWNvM0hJYVVBMHZsOTA9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZRdWYvTnd2bWhBdnFLeUQyeUJNcStpak45VT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0s2RW5Lb1BFTERWNTdVR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFBbCsyUVpDU0FUZlN0eXU3SkJHNXVQUlFqdUpWSjRtUko5aER4RVZjSDg9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImJraDJIaFNHN0MyQ3EwUWdxbFhYbVUraFdCK0RKWVpPdlBYR1E2ZGU2UklqMW5IREs3YUg4OGRsT210RWsyVnlOWWwrUHJDYTZGc3pTQmNCekxOWGhBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI5Sm5wSEpqR2FIQXNLWWlTWVhUWjJpUC9qWS9SSGVSeDZrUjhtK0NjS1htVXVMN0k5Nkc5S2FwRjlFL0R0Wk5ycG9oWTE3T00rZVJTZ1B1UHNCYlJDUT09In0sIm1lIjp7ImlkIjoiMjQxMDIzODQyNTI6MjBAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMjI4NzkxMjM3OTYwNTY6MjBAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MTAyMzg0MjUyOjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVBSmZ0a0dRa2dFMzByY3J1eVFSdWJqMFVJN2lWU2VKa1NmWVE4UkZYQi8ifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzNDYwMjg1LCJsYXN0UHJvcEhhc2giOiIxdjRBNmMiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURNKyJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "OREKI",
  ownername: process.env.OWNER_NAME || "OREKI,
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Kerm-md-v2").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
