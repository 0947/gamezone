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
[{ title: "๐ฐ", command: "/1" },{ title: "๐ฒ", command: "/2" },{title:"โฝ๏ธ",command:"/7"}],
[{title:"๐ฏ",command:"/3"},{title:"๐",command:"/4"},{title:"๐ณ",command:"/6"}]]

var th="["+user.first_name+"]("+"tg://user?id="+user.telegramid+")"

if(params=="M") 
{
Bot.editMessage(th+"  แฅแแณแ แแฐแแ แฆแต แ แฐแแ แแกแกแก แ แแ แฆแต แฅแ แแจแ แแแแต แญแฝแแแกแก แจแณแฝ แซแแแ button แญแ แแ",msg)&Bot.editInlineKeyboard(b,msg)
}else{
Bot.sendInlineKeyboard(b,  "๐Oh Great Player!\nNow Continue the game by clicking the buttons under this text",{on_result:"/msgid"})

Api.deleteMessage({chat_id:chat.chatid,message_id:msg})
}
