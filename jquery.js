var str = "CT KTEASS MIAM DGFGASHIAZTMOE LWZLMOMWMOGF OL A LBLMTD GY TFEKBHMOGF CITKT TXTKB GEEWKKTFET GY A HAKMOEWSAK HSAOFMTVM STMMTK OL KTHSAETR ZB A EBHITKMTVM STMMTK. YGK OFLMAFET, EATLAK LWZLMOMWMOGF OL DGFGASHIAZTMOE CIOST XOUTFTKT OL FGM. A 2V2 IOSS TFEKBHMOGF OL A DGFGASHIAZTMOE LWZLMOMWMOGF AEMOFU GF HAOKL GY STMMTKL. QTTH OF DOFR MIAM MIT RTYOFOMOGF GY A DGFGASHIAZTMOE LWZLMOMWMOGF ASSGCL YGK MIT HGLLOZOSOMB MIAM MCG ROLMOFEM HSAOFMTVM STMMTKL AKT KTHSAETR ZB MIT LADT EBHITKMTVM STMMTK. IGCTXTK, MG ZKTAQ MIOL LBLMTD WLOFU A QFGCF HSAOFMTVM AMMAEQ, CT COSS KTJWOKT MIAM AFB MCG ROLMOFEM HSAOFMTVM STMMTKL AKT KTHSAETR ZB MCG ROLMOFEM EBHITKMTVM STMMTKL.";

str = str.toLowerCase();

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

function decrypt(str) {
  var show = "";
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == "a") {
      str.replace(/a/g, "a");
    } else if (str.charAt(i) == "b") {
      str.replace(/b/g, "y");
    } else if (str.charAt(i) == "c") {
      str.replace(/c/g, "w");
    } else if (str.charAt(i) == "d") {
      str.replace(/d/g, "m");
    } else if (str.charAt(i) == "e") {
      str.replace(/e/g, "c");
    } else if (str.charAt(i) == "f") {
      str.replace(/f/g, "n");
    } else if (str.charAt(i) == "g") {
      str.replace(/g/g, "o");
    } else if (str.charAt(i) == "h") {
      str.replace(/h/g, "p");
    } else if (str.charAt(i) == "i") {
      str.replace(/i/g, "h");
    } else if (str.charAt(i) == "j") {
      str.replace(/j/g, "q");
    } else if (str.charAt(i) == "k") {
      str.replace(/k/g, "r");
    } else if (str.charAt(i) == "l") {
      str.replace(/l/g, "s");
    } else if (str.charAt(i) == "m") {
      str.replace(/m/g, "t");
    } else if (str.charAt(i) == "o") {
      str.replace(/o/g, "i");
    } else if (str.charAt(i) == "q") {
      str.replace(/q/g, "k");
    } else if (str.charAt(i) == "r") {
      str.replace(/r/g, "g");
    } else if (str.charAt(i) == "s") {
      str.replace(/s/g, "l");
    } else if (str.charAt(i) == "t") {
      str.replace(/t/g, "e");
    } else if (str.charAt(i) == "u") {
      str.replace(/u/g, "j");
    } else if (str.charAt(i) == "v") {
      str.replace(/v/g, "d");
    } else if (str.charAt(i) == "w") {
      str.replace(/w/g, "v");
    } else if (str.charAt(i) == "x") {
      str.replace(/x/g, "v");
    } else if (str.charAt(i) == "y") {
      str.replace(/y/g, "f");
    } else if (str.charAt(i) == "z") {
      str.replace(/z/g, "b");
    }
  }
 return str;
 console.log(str);
}

