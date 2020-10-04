module.exports = (client,member) => {
  console.log(`[event:guildMemberAdd.js] ${member.user.username}#${member.user.discriminator} joined ${member.guild.name}`);

  // Vérification si le serveur est celui de JDIS pour
  // envoyer un message générique si c'est pas le cas.
  let message;
  if(member.guild.id === 755049912969723985) {
    message= ":jdis:Hello world "+ member.toString()+"!:jdis:\n"+
    "Bienvenue sur le serveur Discord de JDIS. Ici, tu pourra échanger sur différent sujet en rapport avec la programmation, la sécurité et tout autre"+
    "sujet liée à l'informatique ou l'électronique.\n"+
    "Il te sera annoncé dans le channel " + member.guild.channels.cache.find(channel=>channel.name==="announcements").toString() + " différents événement organisé tout au long de l'année.\n"+
    "Nous te suggérons fortement de prendre connaissance de nos "+ member.guild.channels.cache.find(channel=>channel.name==="rules").toString()+".\n"+
    "Que l'apprentissage soit la force.";
  }
  else {
    message = `Bienvenue sur le serveur discord "${member.guild.name}"!`;
  }
  member.user.send(message)
    .catch(console.error);
};
