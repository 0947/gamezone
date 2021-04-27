/*CMD
  command: Result
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


Api.sendChatAction({
chat_id:chat.chatid,
action:"typing"})




















Bot.sendMessage("✅The Result Is: " +options.result.dice.value)

Bot.runCommand("/after")
