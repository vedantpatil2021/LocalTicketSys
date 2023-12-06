function fare() {
    // Variable declaration
    document.getElementById("from").options[0].value = "0";
    document.getElementById("from").options[1].value = "2";
    document.getElementById("from").options[2].value = "3";
    document.getElementById("from").options[3].value = "5";
    document.getElementById("from").options[4].value = "6";
    document.getElementById("from").options[5].value = "7";
    document.getElementById("from").options[6].value = "8";
    document.getElementById("from").options[7].value = "9";
    document.getElementById("from").options[8].value = "11";
    document.getElementById("from").options[9].value = "13";
    document.getElementById("from").options[10].value = "16";
    document.getElementById("from").options[11].value = "18";
    document.getElementById("from").options[12].value = "20";
    document.getElementById("from").options[13].value = "23";
    document.getElementById("from").options[14].value = "25";
    document.getElementById("from").options[15].value = "26";
    document.getElementById("from").options[16].value = "28";
    document.getElementById("from").options[17].value = "31";
    document.getElementById("from").options[18].value = "34";
    document.getElementById("from").options[19].value = "36";
    document.getElementById("from").options[20].value = "40";
    document.getElementById("from").options[21].value = "43";
    document.getElementById("from").options[22].value = "47";
    document.getElementById("from").options[23].value = "49";
    document.getElementById("from").options[24].value = "50";
    document.getElementById("from").options[25].value = "54";
    document.getElementById("from").options[26].value = "55";
    document.getElementById("from").options[27].value = "56";
    document.getElementById("from").options[28].value = "58";
    document.getElementById("from").options[29].value = "60";
    document.getElementById("from").options[30].value = "62";
    document.getElementById("from").options[31].value = "64";
    document.getElementById("from").options[32].value = "66";
    document.getElementById("from").options[33].value = "68";
    document.getElementById("from").options[34].value = "70";
    document.getElementById("from").options[35].value = "71";
    document.getElementById("from").options[36].value = "73";
    document.getElementById("from").options[37].value = "74";
    document.getElementById("from").options[38].value = "75";
    document.getElementById("from").options[39].value = "56";
    document.getElementById("from").options[40].value = "58";
    document.getElementById("from").options[41].value = "70";
    document.getElementById("from").options[42].value = "72";
    document.getElementById("from").options[43].value = "76";
    document.getElementById("from").options[44].value = "77";
    document.getElementById("from").options[45].value = "79";
    document.getElementById("from").options[46].value = "81";
    //document.getElementById("from").options[47].value= '83';

    document.getElementById("to").options[0].value = "0";
    document.getElementById("to").options[1].value = "2";
    document.getElementById("to").options[2].value = "3";
    document.getElementById("to").options[3].value = "5";
    document.getElementById("to").options[4].value = "6";
    document.getElementById("to").options[5].value = "7";
    document.getElementById("to").options[6].value = "8";
    document.getElementById("to").options[7].value = "9";
    document.getElementById("to").options[8].value = "11";
    document.getElementById("to").options[9].value = "13";
    document.getElementById("to").options[10].value = "16";
    document.getElementById("to").options[11].value = "18";
    document.getElementById("to").options[12].value = "20";
    document.getElementById("to").options[13].value = "23";
    document.getElementById("to").options[14].value = "25";
    document.getElementById("to").options[15].value = "26";
    document.getElementById("to").options[16].value = "28";
    document.getElementById("to").options[17].value = "31";
    document.getElementById("to").options[18].value = "34";
    document.getElementById("to").options[19].value = "36";
    document.getElementById("to").options[20].value = "40";
    document.getElementById("to").options[21].value = "43";
    document.getElementById("to").options[22].value = "47";
    document.getElementById("to").options[23].value = "49";
    document.getElementById("to").options[24].value = "50";
    document.getElementById("to").options[25].value = "54";
    document.getElementById("to").options[26].value = "55";
    document.getElementById("to").options[27].value = "56";
    document.getElementById("to").options[28].value = "58";
    document.getElementById("to").options[29].value = "60";
    document.getElementById("to").options[30].value = "62";
    document.getElementById("to").options[31].value = "64";
    document.getElementById("to").options[32].value = "66";
    document.getElementById("to").options[33].value = "68";
    document.getElementById("to").options[34].value = "70";
    document.getElementById("to").options[35].value = "71";
    document.getElementById("to").options[36].value = "73";
    document.getElementById("to").options[37].value = "74";
    document.getElementById("to").options[38].value = "75";
    document.getElementById("to").options[39].value = "56";
    document.getElementById("to").options[40].value = "58";
    document.getElementById("to").options[41].value = "70";
    document.getElementById("to").options[42].value = "72";
    document.getElementById("to").options[43].value = "76";
    document.getElementById("to").options[44].value = "77";
    document.getElementById("to").options[45].value = "79";
    document.getElementById("to").options[46].value = "81";
    //document.getElementById("to").options[47].value= '83';

    // Calculation Part
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var result = document.getElementById("result").value;
    var single = document.getElementById("single").value;
    var retun = document.getElementById("retun").value;
    var adult = document.getElementById("adult").value;

    console.log(to)


    if (document.getElementById("single").checked == true) {
      if (from - to == 0) {
        alert("Same Stations Not Allowed");
      }
      if (from - to >= 1 && from - to <= 8) {
        document.getElementById("result").value = adult * "5";
      }

      if (from - to >= 9 && from - to <= 29) {
        document.getElementById("result").value = adult *"10";
      }

      if (from - to >= 30 && from - to <= 42) {
        document.getElementById("result").value = adult *"15";
      }
      if (from - to >= 43 && from - to <= 55) {
        document.getElementById("result").value = adult *"20";
      }

      if (from - to <= -1 && from - to >= -8) {
        document.getElementById("result").value = adult *"5";
      }

      if (from - to <= -9 && from - to >= -29) {
        document.getElementById("result").value = adult *"10";
      }

      if (from - to <= -30 && from - to >= -42) {
        document.getElementById("result").value = adult *"15";
      }
      if (from - to <= -43 && from - to >= -55) {
        document.getElementById("result").value = adult *"20";
      }
    }

    if (document.getElementById("retun").checked == true) {
        if (from - to == 0) {
        alert("Same Stations Not Allowed");
      }

      if (from - to >= 1 && from - to <= 8) {
        document.getElementById("result").value = adult *"10";
      }

      if (from - to >= 9 && from - to <= 29) {
        document.getElementById("result").value = adult *"20";
      }

      if (from - to >= 30 && from - to <= 42) {
        document.getElementById("result").value = adult *"30";
      }
      if (from - to >= 43 && from - to <= 55) {
        document.getElementById("result").value = adult *"40";
      }

      if (from - to <= -1 && from - to >= -8) {
        document.getElementById("result").value = adult *"10";
      }

      if (from - to <= -9 && from - to >= -29) {
        document.getElementById("result").value = adult *"20";
      }

      if (from - to <= -30 && from - to >= -42) {
        document.getElementById("result").value = adult *"30";
      }
      if (from - to <= -43 && from - to >= -55) {
        document.getElementById("result").value = adult *"40";
      }
    }
  }