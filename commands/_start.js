/*CMD
  command: /start
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















let msg=User.getProperty("msgid")

var b =[
[{ title: "π°", command: "/1" },{ title: "π²", command: "/2" },{title:"β½οΈ",command:"/7"}],
[{title:"π―",command:"/3"},{title:"π",command:"/4"},{title:"π³",command:"/6"}]]

var th="["+user.first_name+"]("+"tg://user?id="+user.telegramid+")"

if(params=="M") 
{
Bot.editMessage(th+"  α₯αα³α αα°αα α¦α΅ α α°αα αα‘α‘α‘ α αα α¦α΅ α₯α αα¨α αααα΅ α­α½ααα‘α‘ α¨α³α½ α«ααα button α­α αα",msg)&Bot.editInlineKeyboard(b,msg)
}else{
Bot.sendInlineKeyboard(b,  th+"  WELCOMEπ\n\nIn this bot you can play different games. and select a game using the buttons belowββ",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}


Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})

