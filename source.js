exports.logMinion = logMinion;

if (!console.minion) {
  console.minion = logMinion;
}

function logMinion(numberOfEyes) {
  const white = 'background: black; color: white; white-space: pre; word-break: keep-all; line-height: 1.5';
  const yellow = 'background: black; color: #efef1a; white-space: pre; word-break: keep-all; line-height: 1.5';
  const gray = 'background: black; color: gray; white-space: pre; word-break: keep-all; line-height: 1.5';
  const black = 'background: black; color: #333; white-space: pre; word-break: keep-all; line-height: 1.5';
  const blue = 'background: black; color: #3a40be; white-space: pre; word-break: keep-all; line-height: 1.5';

  if (numberOfEyes !== 1 && numberOfEyes !== 2) {
    throw new Error("I'm sorry, a minion can only have one or two eyes.");
  }

  if (numberOfEyes === 1) {
    console.log(`
%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@@@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@@@@&@(@@@@@@@@@@@@(@@@@@@@@/@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%c&&$$$$$$$$$$$$$$$$&&%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@$%c@@&&$$$$$$$$$$$$%c#$$$$$$$/(%c$$##$$&%c@@@@@@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@%c&$%c,%c$$$$$$$$%c#&$$%c&&&&&%c$$$%c&&&&%c$$#$%c,%c#$$$$%c@/&@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@&%c&&$$$$$$$$$$$%c&@@@&%c/%c....,,,,...,%c#$$#(#%c,%c(#$$&@&$%c@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@%c&&&$$$$$$$$%c$%c@@@&%c.,*%c#$$$%c&&&&&&%c$$#/%c,.%c($#(((%c#$$$&%c@@@&@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@&%c&$$$$$$$$$$%c&@@&%c.*%c#$&&%c@@@@@@@@@@@@&%c$$(%c*%c#$#(%c*%c##$$$%c@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@%c&#*%c....... %c/&%c@@&%c,%c($&&%c@@@@@%c//////%c@@@@@&%c$#//#/#$%c##$$$%c@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@%c/,%c.      .. %c($&&//$&&%c@@@@%c/(%c@%c(*,*%c#%c*,%c@@@@&%c$#/$//*%c###$$&%c@@@@@@@@@@@@
%c@@@@@@@@@@@@@@%c$%c*,,,.......%c((##$(($&&%c@@@%c***%c,.. .,%c*,%c&@@@&%c$#/#%c***/ %c(#$$%c@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@%c&$$$$$$$##%c/ $((#/#$&%c@@@@%c*/(////(*$%c@@@@&%c$#//*/$#%c...,**%c@@@@@@@@@@@
%c@@@@@@@@@@@@@@@%c&&$$$$$$$$$$#%c#$#((%c,%c#$&&%c@@@@@@&@@@@@@@&&%c$#(/(($/%c ..,,.,%c&%c@@@@@@@@@@
%c@@@@@@@@@@@@@@@%c&$$$$$$$$$$$$#%c($$$(#%c,%c/$&&%c@@@@@@@@@&&&%c$$((##$$%c#(((((( %c/%c@@@@@@@@@@@
%c@@@@@@@@@@@@@@@%c&$$$$$$$$$$$$$##%c#$$$$#$%c**%c((#######(/(%c(#$$$$%c(######$$&%c@@@@@@@@@@@@
%c@@@@@@@@@@@@@@%c&&$$$$$$$$$$$$$$##(%c*%c$$$$$$$#((((###$$$$$$#%c(########$$%c@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@%c&&$$$$$$$$$$$$$$$$###((%c/*%c$$$$$$$$$$$$%c,%c/((#########$$$%c@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@%c&&$$$$$$$$$$$$$$$$$$#####(((/////(((((#############$$%c@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@%c&$$$$$$$$$$$$$$###$$$$$###################/#######$$&%c@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@%c&$$$$$$$$$$$$$$$$$$$####(//(#####(//((############$$&%c@@@@@@@@@@@@@
%c@@@@@@@@@@@@@%c#(*%c$$$%c..%c##$$$$$$$$$$$$$$$$#########################$$&%c@@@@@@@@@@@@@
%c@@@@@@@@@@@@%c$#(#(%c/,,.  *,,,.. %c####$$$$$$$$#######################%c**(%c@@@@@@@@@@@@
%c@@@@@@@@@@@@%c$$#%c//*,,,,,,,....,%c/(############################(/%c*****(%c@@@@@@@@@@@@
%c@@@@@@@@@%c&$$$###%c/,,,,.       ..,/%c((///*//(////**,***///,*********%c##$%c@@@@@@@@@@@@
%c@@@@@@@%c&$$##%c.,,,,,,,,,,,.. ..,*%c(/(////*//*/////*****,,,**,*./*%c######$%c@@@@@@@@@@@
%c@@@@@@%c$$$$$$%c,,,,,,,,,,......,**%c/,*/**********,,***//*,,*,*,,%c####$####$%c@@@@@@@@@@
%c@@@@%c$$$$$$$$#%c*...*%c(((%c,..,,*,*%c//(*////*    ///*//,*///*//*,*/%c####$/(###%c@@@@@@@@@@
%c@@@%c&$$$$$#$%c@@%c$######(%c*//((*///(((((  *///**  ///,******,,*/%c#######/(##&%c@@@@@@@@@
%c@@@@@@@@@@@@@%c$######(%c(/(((//(((//// ((  ,//(,/(/,/*///**/**%c######(/(###%c@@@@@@@@@
%c@@@@@@@@@@@@%c/,///(//*////((#((/(/(((  .//   ///,//////*****%c((((((,*/(##%c@@@@@@@@@
%c@@@@@@@@@@@@%c(#(((((/((/##(((((/(/(//**/*/(***/////**/**(/,/**,**,,*%c/(#$%c@@@@@@@@@
%c@@@@@@@@@@@@$%c#//(/*(((/((/(((((/(/((//////*/////*///*/****/,******,%c/(#$%c@@@@@@@@@
%c@@@@@@@@@@@@@$%c**/(((((/(((((((//*////////*//*/**///////**//,,,,***,%c/(#$%c@@@@@@@@@
%c@@@@@@@@@@@@@@@%c((((////////**//(***/(///*****/////*/**//********%c.  ....%c(%c@@@@@@@@
%c@@@@@@@@@@@@@@@@@&%c(////***/*********************************,,%c&@@%c ....,%c@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@%c(//*****,,************,,**,*****,,,,%c&@@@@%c   .....,%c@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@@@@%c*,,..      %c$%c&@%c$%c          .%c@@@@@@@@@%c.   ......,*%c@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@@@@@%c**,.....  %c@@@%c   ......  %c&@@@@@@@@@%c      ..,.%c(%c@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@%c.      ,%c@@@@@%c.          ,%c@@@@@@@@@@@%c    .%c@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@@@@%c(,,..%c     %c@@@@@%c        .,%c,...%c@@@@@@@@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@@@@%c/.%c.    %c&@@@@@@@@@@@@@@@@%c$/#(%c@@@@@@@@@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`,
      white,
      white,
      white,
      white,
      white,
      white,
      white,
      white,
      white, yellow, white,
      white, yellow, gray, yellow, white,
      white, yellow, black, yellow, gray, white, gray, white, gray, black, yellow, white,
      white, yellow, white, gray, black, white, black, yellow, white,
      white, yellow, gray, white, black, gray, white, gray, black, gray, yellow, white,
      white, yellow, white, black, gray, white, gray, black, gray, black, yellow, white,
      white, gray, black, gray, white, black, gray, white, black, white, gray, yellow, white,
      white, gray, black, gray, white, gray, white, black, gray, black, white, gray, yellow, white,
      white, gray, black, gray, white, gray, black, gray, white, gray, black, yellow, white,
      white, yellow, gray, white, gray, white, gray, black, white,
      white, yellow, gray, black, gray, white, gray, black, gray, white,
      white, yellow, gray, black, gray, white, gray, yellow, gray, white,
      white, yellow, gray, black, white, gray, yellow, white,
      white, yellow, black, gray, yellow, white,
      white, yellow, black, gray, black, yellow, white,
      white, yellow, white,
      white, yellow, white,
      white, yellow, white,
      white, blue, yellow, black, yellow, white,
      white, blue, black, yellow, blue, white,
      white, yellow, black, yellow, blue, white,
      white, yellow, black, blue, yellow, white,
      white, yellow, black, blue, yellow, white,
      white, yellow, black, blue, yellow, white,
      white, yellow, black, yellow, black, blue, yellow, white,
      white, yellow, white, yellow, blue, yellow, white,
      white, yellow, blue, yellow, white,
      white, blue, yellow, white,
      white, blue, yellow, white,
      white, blue, yellow, white,
      white, blue, yellow, white,
      white, blue, black, gray, white,
      white, blue, white, black, white,
      white, blue, white, black, white,
      white, black, gray, white, gray, black, white, black, white,
      white, black, white, black, white, black, gray, white,
      white, black, white, black, white, black, white,
      white, gray, black, white, black, gray, white,
      white, gray, black, white, gray, white,
      white,
      white,
      white,
      white,
    );
  } else {
    console.log(`
%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
%c@@@@@@%c.*.%c(%c@@@%c**%c$%c@@@@@@@@@@@@@@@%c$$$$$$$$$$$$$$$$$%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
%c@@%c,*,,%c&%c,*,**...,%c@@@@@@@&@@&&&%c$$$&$#$%c$$$$$$$$$$&%c@@@%c&$$%c@@@@@@@@@@@@@@@@@@@@@@@@@@@
%c@@@@%c(%c.,**,,.,,%c@@@@@@@@@&%c#%c,%c/((####(%c*%c$$#(%c##%c&@%c$##(#(#(#####%c$%c@@@@@@@@@@@@@@@@%c**.%c@@@@
%c@@@@@@@@%c/,**..%c(%c@@@@%c#%c@&%c(%c*%c(#%c&@@@@@@@@&%c$$#$$#(%c*%c((#$%c&&&%c$#/(###%c$%c@@@@@@@%c,,.%c#%c@%c$%c*, *%c@@@@
%c@@@@@@@@@@%c,,%c//#%c@@@@@&%c#%c,%c#%c&@@@@@%c(%c/**%c@@&%c$###%c,%c(#%c@@@@@@@@@%c&&$###%c#%c@@@@@@@%c  .,,*,*,.,.%c$
%c@@@@@@@@@@@@%c$$(%c@@@%c#%c&&%c#%c*%c#%c@@@@@%c**,,%c(%c*%c@&&%c##%c.%c($%c@/%c#%c**%c(%c*%c@@@@&&%c$#(%c*%c(%c@@@@@@@%c.. ....%c#%c@@@@
%c@@@@@@@@@@@@%c$$#(%c@@&%c$$$#%c*%c&@@@@@&%c.,%c@@&&%c###//%c&@%c,%c///#*%c@@@&&&%c$#(*(%c.%c$%c@@@%c*.....%c@@@@@@@@
%c@@@@@@@@@@@@@%c$$#(%c@%c##$%c$#$##%c&@@@@&&&&%c#(/#(##(%c&@@@@@@@@&&&%c#(/.*%c...%c@@@%c((((%c@@@@@@@@@@
%c@@@@@@@@@@@@@@%c$#(#$$$$$%c&%c$((####(((#%c$%c,,,,%c&%c((##$%c&&&&&%c$%c&%c#(/%c&%c((((//%c@@%c/(((%c@@@@@@@@@@@
%c@@@@@@@@@@@@@@%c$$##$$$$$$###(((((///////////%c&&%c((((((($$/%c(((((#(/*//(#%c@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@%c$#(##$$$$$%c.%c$%c#%c(####((##########(((((((((((((((##**/(%c@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@&%c$%c#(((%c$$$$$%c         .** *%c$$$$#$$#(%c.%c((##(((((%c/////%c(%c@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@%c$$%c#((#%c#$$$$#                    #####((((%c***//%c/(%c@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@%c$$$$%c#(((%c#$$$$$$#(%c///******,%c##########(%c*//**%c(####%c@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@%c$$$$$%c#((#*((((#$##(((((%c#########((((%c/*///%c((####%c@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@%c$$$$$$%c(,,(,((((((((/(//////////*(/..*//%c((((####%c@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@%c$$$$$$%c((/((((//((/((///((//*////(*//*%c(((((((##%c@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@%c$$$$$%c#((((((//((((((#((((//////////%c((((((((##%c@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@%c#$##%c##%c(((#(((((((((((///(//*(((////(#%c(((((///%c/%c@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@%c(#((/(((((((((//(////////(//////(/*/*/////,/#%c@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@%c((*(((((((/(((/(///(((/(///(/*/(////.**///%c@@@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@%c$((/////////////////////////////////**/%c@@@@@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@%c/////***///***/////*************%c@@@@@@@@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%c$%c,.......  ........%c$%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%c/,%c,.... ...,..,%c$$$$$$$$$$&&&&&&&&&&&&&&&&@@@@@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@@@@@@%c#%c...            ..,%c######$$$$$$$$$$&&&&&&&&&&&&&@@@@
%c@@@@@@@@@@@@@@@@@@@@@@@@@&&%c$(%c,,,%c/(%c##$$$##(%c*....%c/%c#$$$&&&&&&@@@@@@@@@@@@@@@@@@@@@@`,
      white,
      white,
      white, black, gray, white, black, gray, white, yellow, white,
      white, black, white, black, white, gray, yellow, white, yellow, white,
      white, gray, black, white, gray, black, gray, black, gray, yellow, white, gray, yellow, white, black, white,
      white, black, gray, white, gray, white, gray, black, gray, white, gray, black, gray, white, gray, yellow, white, black, gray, white, gray, black, white,
      white, black, yellow, white, gray, black, gray, white, gray, black, white, gray, black, gray, white, gray, yellow, white, black, gray,
      white, yellow, white, gray, white, gray, black, gray, white, black, gray, black, white, gray, black, gray, white, gray, black, gray, black, white, gray, black, gray, white, black, gray, white,
      white, yellow, white, gray, black, white, black, white, gray, white, black, gray, white, gray, black, gray, white, black, white,
      white, yellow, white, yellow, gray, white, gray, white, gray, black, white, yellow, white,
      white, yellow, white, gray, white, black, white, gray, white, gray, white, gray, white, yellow, white, yellow, white,
      white, yellow, white, gray, yellow, white,
      white, yellow, black, white, gray, yellow, white,
      white, yellow, blue, yellow, black, white, black, yellow, blue, yellow, white,
      white, yellow, blue, yellow, blue, yellow, white,
      white, yellow, blue, yellow, black, yellow, blue, yellow, white,
      white, yellow, blue, yellow, blue, yellow, white,
      white, yellow, blue, yellow, white,
      white, yellow, blue, yellow, white,
      white, yellow, blue, yellow, white,
      white, blue, yellow, blue, yellow, blue, white,
      white, blue, white,
      white, blue, white,
      white, blue, white,
      white, blue, white,
      white, gray, black, gray, white,
      white, gray, black, white,
      white, gray, black, white,
      white, gray, black, gray, white, black, gray, white,
    );
  }
}
