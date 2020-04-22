var str = prompt("Please enter your message", "Here!").toLocaleLowerCase();
var Frequency = (function () {
  function Frequency() {
  }
  Frequency.main = function (args) {
      var freq = (function (s) { var a = []; while (s-- > 0)
          a.push(0); return a; })(str.length);
      var i;
      var j;
      var string = (str).split('');
      for (i = 0; i < str.length; i++) {
          {
              freq[i] = 1;
              for (j = i + 1; j < str.length; j++) {
                  {
                      if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(string[i]) == (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(string[j])) {
                          freq[i]++;
                          string[j] = '0';
                      }
                  }
                  ;
              }
          }
          ;
      }
      console.info("Letters in English:");
      for (i = 0; i < freq.length; i++) {
          {
              if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(string[i]) != ' '.charCodeAt(0) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(string[i]) != '0'.charCodeAt(0))
                  console.info(string[i] + "-" + freq[i]);
          }
          ;
      }
  };
  return Frequency;
}());
Frequency["__class"] = "Frequency";
Frequency.main(null);

function ChangeMsg(msg){
    return msg.replace(/[a-zA-Z]/g, function(smsg){
        return String.fromCharCode(smsg.charCodeAt[0]+1);

    });

}
console.log(ChangeMsg(str));
