/*CMD
  command: /after
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
[{ title: "🎰", command: "/1" },{ title: "🎲", command: "/2" },{title:"⚽️",command:"/7"}],
[{title:"🎯",command:"/3"},{title:"🏀",command:"/4"},{title:"🎳",command:"/6"}]]

var th="["+user.first_name+"]("+"tg://user?id="+user.telegramid+")"

if(params=="M") 
{
Bot.editMessage(th+"  እንኳን ወደዚህ ቦት በደህና መጡ፡፡ በዚህ ቦት ብዙ መረጃ ማግኘት ይችላሉ፡፡ ከታች ያለውን button ይጠቀሙ",msg)&Bot.editInlineKeyboard(b,msg)
}else{
Bot.sendInlineKeyboard(b,  "🙀Oh Great Player!\nNow Continue the game by clicking the buttons under this text",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}
