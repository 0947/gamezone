/*CMD
  command: /msgid
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!options){ return }
let msg_id = options.result.message_id;
User.setProperty("msgid" , msg_id,  "integer");
