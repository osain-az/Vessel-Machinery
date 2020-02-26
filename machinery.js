//Mechineries

function Machineries() {

  // calculating fuel consumption
  this.fuelConsumption = function(
    density,
    LHV,
    SFC,
    power,
    fuelName,
    HHV,
    voyage
  ) {
    this.fuelName = fuelName;
    this.density = density;
    this.LHV = LHV;
    this.HHV = HHV;
    this.SFC = SFC * 0.001;
    this.mass_rate = this.SFC * power;
    this.voyage = voyage * 24;
    this.mass = ((this.mass_rate * this.voyage)/1000).toFixed(2);
    this.mass_kg = (this.mass_rate * this.voyage).toFixed(2);

    // volume of the tank
    this.tank_volume = (this.mass_kg / this.density).toFixed(2)
    this.lng_tank = this.tank_volume
    if (fuelName === "LNG") {
      // Adding extral 10% of the volume if the fuel used is LNG
      this.tank_volume = (this.tank_volume * 0.1 + this.tank_volume).toFixed(2);
    }

    return;
  };

// calculating the power for proplusion

  this.calculatePower = function(speed, resistance, voyage) {
    this.speed = speed * 0.514444; //0.514444 to convert knots to m/s
    this.resistance = resistance;
    this.EHP = this.speed * this.resistance; //Effective power
    console.log(this.EHP);
    this.N_mech = 0.95; // mechnaical efficiency
    this.N_pro = 0.66; //proplsion efficiency
    this.power = (this.EHP / (this.N_mech * this.N_pro)).toFixed(2); // Total required power
    if (voyage) {
      this.voyage = voyage; // maximmum average voyage time
    }

    return this.power;
  };
}


let fuelType = {
  LNG: {
    fuelName: "LNG",
    HHV: 55.2,
    LHV: 48.6,
    density: 435,
    SFC: 205,
  },
  MGO: {
    fuelName:"MGO",
    HHV: 44, //Mj/kg
    LHV: 42.7, //Mj/kg
    density:850,//kg/m3
    SFC: 205,
  },
  HFO: {
    fuelName:"HFO",
    HHV: 42,//Mj/kg
    LHV: 40.5, //Mj/kg
    density: 990, //kg/m3
    SFC: 205,
  },
  MDO: {
    fuelName:"MDO",
    HHV: 44.5,//Mj/kg
    LHV: 43.2, //Mj/kg
    density: 860, //kg/m3
    SFC: 205,
  },
  Hydrogen: {
    fuelName:"Hydrogen",
    HHV: 141.88, //Mj/kg
    LHV: 119.96, //Mj/kg
    density: 42, // at 700bar
    SFC: 205,
  },
};

let Machinery = {
    propulsion_type: {
      direct_propulsion: {
      propulsion_name: "Direct propulsion",

      },
      electric_propulsion: {
        propulsion_name: "Electric propulsion"

      },
      hybride: "Hybride propulsion",
      LNG: {
        propulsion_name: "LNG propulsion"

      },

    },

  engineType: {

    // Four_Stroke:{
    //   // TODO: this will fill later

    // },
    // two_Stroke:{
    //   // TODO: this will fill later

    // },
    mainEngines:{
      type:"Propulsion engine",
      ponCAT1:{
        model: "ponCAT 3516C",
        maxPower: "2350 bkW",
        speed: "1800 RPM",
        weight:"19500 kg",
      },
      ponCAT2:{
        model: "ponCAT C32",
        maxPower: "994 bkW",
        speed: "1800 RPM",
        weight:"9000 kg",
      },
      kongsberg:{
        
      kongsberg1:{
        supplier: "Kongsberg",
        type: "DIESEL ENGINE BERGEN B33:45",
        IMO_compliant: " Tier II and Tier III",
        model: "B33:45L6P",
        fuel_type: "MOD",
        LHV:"42.7 MJ/kg",
        SFOC: "177 g/kWh at 100% load",
        cylinders: 6,
        power: "3600 kW",
        Engine_speed:" 750 RPM",
        weight: "40.5 tonnes",
        length: "5622 mm",
        width: "2227 mm",
        heigh: "3892 mm",
      },

      kongsberg2:{
        supplier: "Kongsberg",
        type: "DIESEL ENGINE BERGEN B33:45",
        IMO_compliant: " Tier II and Tier III",
        model: "B33:45V12",
        fuel_type: "MOD",
        LHV:"42.7 MJ/kg",
        SFOC: "177 g/kWh at 100% load",
        cylinders: 12,
        power: "7200 kW",
        Engine_speed:" 750 RPM",
        weight: "74.3 tonnes",
        length: "6867 mm",
        width: "4544 mm",
        heigh: "3138 mm",
      },

      kongsberg3:{
        supplier: "Kongsberg",
        type: "DIESEL ENGINE, BERGEN C25:33",
        IMO_compliant: " Tier II ",
        model: "C25:33L8P",
        fuel_type: "MDO",
        LHV: "42.7 MJ/kg",
        SFOC: "185 g/kWh at 100% load",
        cylinders: 8,
        power: "2665 kW",
        Engine_speed:" 1000 RPM",
        weight: "23.2 tonnes",
        length: "4796 mm",
        width: "1873 mm",
        heigh: "3195 mm",
      },

      },
      wartsila:{
        wartsila1:{
          supplier: "wartsila",
          type: "DIESEL ENGINE, Wärtsilä 31",
          Strokes: "4-Stroke",
          speed_type: "medium speed",
          IMO_compliant: " Tier III ",
          model: "14V31",
          fuel_type: "MDO",
          LHV: "42.7 MJ/kg",
          SFOC: "167.7 g/kWh at 100% load",
          // cylinders: 8,
          cylinder_output: "610 kW/cyl",
          power: "8540 kW",
          Engine_speed:" 750 RPM",
          weight: "84.6 tonnes",
          length: "8540 mm",
          width: "3500 mm",
          heigh: "4633 mm",
        },
        wartsila2:{
          supplier: "wartsila",
          type: "Wärtsilä 46F",
          Strokes: "",
           speed_type: "",
          IMO_compliant: " Tier II ",
          model: "14V46F",
          fuel_type: "MDO or HFO",
          LHV: "42.7 MJ/kg",
          SFOC: "176 g/kWh at 100% load",
          // cylinders: 8,
          cylinder_output: "1200 kW/cyl",
          power: "16800 kW",
          Engine_speed:" 600 RPM",
          weight: "216 tonnes",
          length: "11729 mm",
          width: "4678 mm",
          heigh: "6063 mm",
        },
        wartsila3:{
          supplier: "wartsila",
          type: "Wärtsilä 32",
          Strokes: "",
          speed_type: "",
          IMO_compliant: " Tier II ",
          model: "14V46F",
          fuel_type: "MDO or HFO",
          LHV: "",
          SFOC: "178,8 g/kWh at 100% load",
          // cylinders: 8,
          cylinder_output: "580 kW/cyl",
          power: "6960 kW",
          Engine_speed:" 750 RPM",
          weight: "216 tonnes",
          length: "6875 mm",
          width: "2900 mm",
          heigh: "3940 mm",
        },
        
      },
      // man:{
      //   man1:{
      //     supplier: "MAN",
      //     type: "diesel engine",
      //     Strokes: "4-Stroke",
      //     // speed_type: "medium speed",
      //     IMO_compliant: " Tier II ",
      //     model: "14V46F",
      //     fuel_type: "MDO or HFO",
      //     LHV: "",
      //     SFOC: "178,8 g/kWh at 100% load",
      //     // cylinders: 8,
      //     cylinder_output: "580 kW/cyl",
      //     power: "6960 kW",
      //     Engine_speed:" 750 RPM",
      //     weight: "216 tonnes",
      //     length: "6875 mm",
      //     width: "986 mm",
      //     heigh: "3940 mm",

      //   }
      // }
    },

  },

  propulsor:{
    propellers:{
      ABB:{
        azipod:{
          type:"Azipod highest ice classes",
          supplier: "ABB",
          model: "Azipod VI",
          power: "6000-17000 kW ",
          service_speeds : "up 24 knots",
          propeller_type : "FP",

        },
        azipod1:{
          type:"Azipod DO",
          supplier: "ABB",
          model: "Azipod DO1100A ",
          power: "2775 kW ",
          service_speeds : "up 24 knots",
          propeller_type : "FP",
          weight: "36 tonnes",


        },
        azipod2:{
          type:"Azipod DO",
          supplier: "ABB",
          model: "Azipod DO1600P ",
          power: "7500 kW ",
          service_speeds : "up 24 knots",
          propeller_type : "",
          weight: "47.5 tonnes"


        },
        azipod3:{
          type:"Azipod DO",
          supplier: "ABB",
          model: "Azipod DO1100A ",
          power: "2775 kW ",
          service_speeds : "up 24 knots",
          propeller_type : "",
          weight: "47.5 tonnes"


        },
      },
      kongsberg:{
        eLegance:{
          type:" pod Propulsor",
          supplier: "Kongsberg",
          size:1230,
          model: "ELegance pod",
          power: "4600 kW",
          speed: "250 RPM",
          propeller_type : "FP",
          weight: "58 tonnes",
        },

        mermaid:{
          type:"ELegance pod Propulsor",
          supplier: "Kongsberg",
          size: 277,
          model: "Mermaid pods ",
          power: "16000 kW",
          // PropDia: "5400 mm",
          ShaftSpeed: "90 RPM",
          service_speeds : "up 24 knots",
          propeller_type : "FP",
          weight: "115 tonnes",
        },
        mermaid1:{
          type:"Mermaid ice pod Propulsor",
          size: 210,
          supplier: "Kongsberg",
          model: "Mermaid pods ",
          power: "16000 kW",
          speed: "195 RPM",
          service_speeds : "up 24 knots",
          propeller_type : "FP",
          weight: "115 tonnes",
        },

      }

    },
    thruster:{
      ABB:{
        azipodCZ:{
          type:"Azipod CZ thruster",
          supplier: "ABB",
          model: "Azipod CZ1400XL	",
          power: "4700 kW ",
          service_speeds : "up 15.5 knots",
          propeller_type : "FP",
          weight:"83 tonnes",

        },
        azipodCZ1:{
          type:"Azipod CZ thruster",
          supplier: "ABB",
          model: "Azipod CZ1250L",
          power: "3300 kW ",
          service_speeds : "up 16 knots",
          propeller_type : "FP",
          weight: "70.8 tonnes",
        },
        azipodDZ:{
          type:"Azipod DZ thruster",
          supplier: "ABB",
          model: "Azipod DZ1400A",
          power: "5200 kW ",
          service_speeds : "up 16.5 knots",

        },

      },
      
    kongsberg:{
      FP2000:{
        type:"tunnel thruster",
        supplier: "Kongsberg",
        model: "2000 FP",
        power: "1150 kW",
        speed: "313 RPM",
        propeller_type : "FP",
      },
      azipull:{
        type:"Azipull thrusters",
        supplier: "Kongsberg",
        model: "AZP 150",
        power: "5000 kW",
        speed: "1000 RPM",
        propeller_type : "FP",
        service_speeds : "up 24 knots",
      },

      azipull:{
        type:"Retractable Thrusters",
        supplier: "Kongsberg",
        model: "UL 255",
        power: "2200 kW",
        speed: "1800 RPM",
        propeller_type : "FP",
        service_speeds : "up 24 knots",
      },

    },
    RRM:{
      azipull:{
        supplier: "RRM",
        model: "Azipull 100",
        maxPower: "2200 kW"
      },

      aquamaster:{
        supplier: "RRM",
        model: "Aquamaster",
        maxPower: "880 kW"
      },
      TT2200:{
        supplier: "RRM",
        model: "TT2200",
        maxPower: "880 kW"
      }


    },
    wartsila:{
      WST_28:{
        type : "Wärtsilä Steerable Thruster",
        supplier:"wartsila",
        model: "WST_28",
        speed : "720 RPM",
        Power: "2800 kW",
        weight: "94 tonnes ",
      },
      WST_16:{
        type : "Wärtsilä Steerable Thruster",
        supplier:"wartsila",
        model: "WST_16",
        speed : "1200 RPM",
        Power: "1600 kW",
        weight: "54 tonnes ",
      },
      WST_18:{
        type : "Wärtsilä Steerable Thruster",
        supplier:"wartsila",
        model: "WST_18",
        speed : "720 RPM",
        Power: "1800 kW",
        weight: "94 tonnes "
      },
      WST_18:{
        type : "Wärtsilä Steerable Thruster",
        supplier:"wartsila",
        model: "WST_18",
        speed : "720 RPM",
        Power: "1800 kW",
        weight: "94 tonnes ",
      },

      LMT_CS:{
        type : "Wärtsilä Retractable Thrusters",
        supplier:"wartsila",
        model: "LMT CS/FS175MNR",
         speed: "1200 RPM",
        Power: "1000 kW",
        propeller_type : "FP or CP",
        drive: "L and Z ",
        weight: "	18000 kg ",
      },

      LMT_FS3500MNR:{
        type : "Wärtsilä Retractable Thrusters",
        supplier:"wartsila",
        model: "LMT FS3500MNR",
        spped : "720 RPM",
        Power: "4500 kW",
        propeller_type : "FP",
        drive: "L and Z ",
        weight: "	18000 kg ",
      },
    },

    },

  },


GenSets:{
  diesel_electric:{
     type:"Diesel Electric",
    Wärtsilä:{
      
      GenSet1:{
        supplier:"Wärtsilä ",
        GenSET_type: "Wärtsilä 34DF",
        model: "12V34DF",
        frequency: "60 Hz",
        Cylinder_output : "480 kW/cyl",
        IMO_compliant : " Tier III",
        speed:"720 RPM",
        SFOC:"",
        fuelType: "MDO",
        EnginPower: "5760 kW",
        GenPower: "5530 kW",
        efficiency: 0.95,
        voltage: "13.8 kV",
        weight: "96 tonnes", // kg
        height:"4365 mm",
        length: "10075 mm",
        width: "3060 mm",
      },
      GenSet2:{
        supplier:"Wärtsilä ",
        GenSET_type: "Wärtsilä 31DF",
        model: "8V31DF",
        frequency: "50 Hz",
        Cylinder_output : " 550 kW/cyl",
        IMO_compliant : " Tier III",
        speed:"750 RPM",
        SFOC:"",
        fuelType: "MDO",
        EnginPower: "4400 kW",
        GenPower: "4225 kW",
        efficiency: 0.95,
        voltage: "13.8 kV",
        weight: "90 tonnes",
        height:"4880 mm",
        length: "9100 mm",
        width: "3110 mm",
      },

      GenSet3:{
        supplier:"Wärtsilä ",
        GenSET_type: "Wärtsilä 32",
        model: "16V32",
        frequency: "60 Hz",
        Cylinder_output : " 550 kW/cyl",
        IMO_compliant : " Tier III",
        speed:"750 RPM",
        SFOC:"",
        fuelType: "MDO",
        EnginPower: "8960 kW",
        GenPower: "8600 kW",
        efficiency: 0.95,
        voltage: "13.8 kV",
        weight: "127 tonnes",
        height:"4445 mm",
        length: "11465 mm",
        width: "3360 mm",
      },

    },

    kongsberg:{
      
      GenSet1:{
        supplier:"kongsberg ",
        GenSET_type: "BERGEN B33:45",
        model: "B33:45V12A",
        //frequency: "60 Hz",
        Cylinder_output : " 600 kW/cyl",
        cylinders_number :12,
        fuelType: "MDO",
        IMO_compliant : " Tier II and III",
        speed:"750 RPM",
        SFOC:" 176 g/kWh",
        fuelType: "MDO",
        EnginPower: "7200 kW",
        GenPower: "6950 kW",
        efficiency: 0.97,
        //voltage: "13.8 kV",
        weight: "110 tonnes", // kg
      },

      GenSet2:{
        supplier:"kongsberg ",
        GenSET_type: "BERGEN B33:45",
        model: "B33:45V12A",
        //frequency: "60 Hz",
        Cylinder_output : " 600 kW/cyl",
        cylinders_number :12,
        fuelType: "MDO",
        IMO_compliant : " Tier II and III",
        speed:"750 RPM",
        SFOC:" 176 g/kWh",
        fuelType: "MDO",
        EnginPower: "7200 kW",
        GenPower: "6950 kW",
        efficiency: 0.97,
        //voltage: "13.8 kV",
        weight: "110 tonnes", // kg
      },

      GenSet3:{
        supplier:"kongsberg ",
        GenSET_type: "BERGEN C25:33",
        model: "C25:33L8A",
        //frequency: "60 Hz",
        Cylinder_output : " 330 kW/cyl",
        cylinders_number :8,
        fuelType: "MDO",
        IMO_compliant : " Tier II and III",
        speed:"1000 RPM",
        SFOC:" 185 g/kWh",
        fuelType: "MDO",
        EnginPower: "2665 kW",
        GenPower: "2558 kW",
        efficiency: 0.96,
        //voltage: "13.8 kV",
        weight: "11.3 tonnes", // kg
      },



    },

    Cat:{
      GenSet1:{
        supplier:"CAT ",
        GenSET_type: "M 32 E",
        model: "C25:33L8A",
        //frequency: "60 Hz",
        Cylinder_output : " 330 kW/cyl",
        cylinders_number :8,
        fuelType: "MDO",
        IMO_compliant : " Tier II and III",
        speed:"1000 RPM",
        SFOC:" 185 g/kWh",
        fuelType: "HFO",
        // EnginPower: "2665 kW",
        GenPower: "5747 kW",
        efficiency: 0.96,
        //voltage: "13.8 kV",
        weight: "11.3 tonnes", // kg
      },

    }

    },
//OTHER GenSet t attached to main egine
    GenSet1:{

      model: "AVK",
      maxPower :2250, //unit ekW
      weight: 5950, // kg

    },
    GenSet2:{

      model: "AVK",
      maxPower :940, //unit ekW
      weight: 3150, // kg

    },
    kongsberg:{

    },
      Wärtsilä :{
        GenSet1:{
          supplier:"Wärtsilä ",
          GenSET_type: "Wärtsilä Auxpac 20",
          model: "1040W6L20",
          voltage: "450 V",
          frequency:"60 Hz",
          IMO_compliant: " Tier II",
          maxPower: "1040 kW",
          engergy: " 1040 kWe",
          weight: "18.7 tonnes", // kg
          lenght:"5783 mm",
          height: "2275 mm",
          width: "1860 mm",

        },
        GenSet2:{
          supplier:"Wärtsilä ",
          GenSET_type: "Wärtsilä Auxpac 20",
          model: "1880W9L20",
          voltage: "450 V",
          frequency: "60 Hz",
          IMO_compliant : " Tier II",
          maxPower: "1880 kW",
          engergy: " 1880 kWe",
          weight: "23.3 tonnes", // kg
          lenght:"6784 mm",
          height: "2457 mm",
          width: "2010 mm",
        },

        GenSet3:{
          supplier:"Wärtsilä ",
          GenSET_type: "Wärtsilä Auxpac 20",
          model: "1700W9L20",
          voltage: "400 V",
          frequency: "50 Hz",
          IMO_compliant : " Tier II",
          maxPower: "1700 kW",
          engergy: " 1700 kWe",
          weight: "23.3 tonnes", // kg
          lenght:"6784 mm",
          height: "2457 mm",
          width: "2010 mm",
        },

      },


    // kongsberg1:{
    //   supplier: "Kongsberg",
    //   type: "DIESEL ENGINE BERGEN B33:45",
    //   IMO_compliant: " Tier II and Tier III",
    //   model: "B33:45L6P",
    //   fuel_type: "MOD",
    //   LHV:"42.7 MJ/kg",
    //   SFOC: "175 g/kWh at 100% load",
    //   cylinders: 6,
    //   power: "3600 kW",
    //   Engine_speed:" 750 RPM",
    //   weight: "40.5 tonnes",
    // },

  },


  frequencyConverter:{

  },

  Transformer:{

  },


  batterySystem:{
    supplier:{
      corvus1:{
        supplier: "corvus",
         model: "Orca Power",
         batteryType:"Lithoum-ion",
         c_Rate: `15 C`,
         lifeCycle:800, // number of complete charge/dischage before it goes belwo 80%
         DOD: "80 %", // Depth of dischargeis 80%
         voltage:"", // range 100 to 1200v
         chargeState:"",
        // example
        capacity: `39 kwh`,
        norminalVoltage: `890 VDC`,
        weight: `680 kg`,
        heigh: `2200 mm`,
        width:   `645  mm`,
        depth: `705  mm`,

      },
      corvus3:{
        supplier: "corvus",
         model: "Corvus Blue Whale",
         batteryType:"Lithoum-ion",
         c_Rate: `0.5 C`,
          c_Rate_peak : "1 C", // peak
         chargeState:"",
        // example
        capacity: `2400 kWh`,
        norminalVoltage: "1075 VDC",
        voltage: " 1142 VDC",
        weight: "23300 kg",
        heigh: `2000 mm`,
        width:   `1200  mm`,
        length: `8600  mm`,


      },

      corvus2:{
        supplier: "corvus",
         model: "Orca Energy",
         batteryType:"Lithoum-ion",
         c_Rate_peak : `6 C`, // peak
          c_Rate_continous: `3 C`,
         lifeCycle:800, // number of complete charge/dischage before it goes belwo 80%
         DOD: "80 %", // Depth of dischargeis 80%
         voltage:"1100 VDC ", // range 100 to 1200v
         chargeState:"",
        // example
        capacity: "125 kwh",
        norminalVoltage: "980 VDC",
        source:`https://corvusenergy.com/products/corvus-orca-energy/`,
        weight: "1620 kg",
        heigh: "2200 mm",
        width: "645 mm",
        depth: "705 mm",


      },

      PBES:{
        supplier: "PBES",
         model: "PB1",
         batteryType:"Lithoum-ion",
         c_RateRMS: "3 C",
         c_RateDischarge: "6 C",
         c_RateCharge: 3, //peak
         chargeState: "",
         lifeCycle1 : "7000 cycles; @ 100 %",
          DOD1: "100 %",
         lifeCycle2 : "15000 cycles;  @ 80 %",
          DOD2: "80 %",

         voltage:"", // range 100 to 1200v
        // example
        capacity: "65 kwh",
        norminalVoltage: "888 VDC",
        weight: "1190 kg", //kg
        height: "2560 mm",
        lenght: "895 mm", //mm
        width: "630 mm",//mm
      },

    }

  },


  SwitchBoards:{
    MainSwitcbBoar:{
      type:"Main SwitchBoards ", // this control teh main power source
      on:false,
    },
    otherSwitchBoard: {
      type:" minor SwitchBoards", // this is used for  individual components
      on:false,
    },
  },

  ShipMod:{
    dp:{
      requiredPower: "", // varible input
    },

    lightDP:{
      requiredPower: "", // varible input

    },

    transist:{
      requiredPower: "", // varible input
    },

    harbour: {
      requiredPower: "", // varible input

    },

    standBy:{
      requiredPower: "",  // varible input

    },

    emergency:{
      requiredPower: "", // varible input
    },

  },
// this is to use for testing.

  testing:{
  requiredPower: "", // varible input
  }

}

let operationProfile = {
  // properties for t
  period:5, // this is the time it takes stopping the opeartion.
  stop:{
    //this is the time it take
  }


}

const LNG = fuelType.LNG;
const MGO = fuelType.MGO;
const MDO = fuelType.MDO;
const H2 = fuelType.Hydrogen;
const HFO = fuelType.HFO;

const operation = operationProfile
const engineType = Machinery.engineType.mainEngines.type
//Main engine 
const kongsbergEngine = Machinery.engineType.mainEngines.kongsberg
const wartsilaEngine = Machinery.engineType.mainEngines.wartsila

//Generator SET 
const kongsbergGensetDE = Machinery.GenSets.diesel_electric.kongsberg // for direct electric propulsion
const wartsilaGensetDE = Machinery.GenSets.diesel_electric.Wärtsilä  // for direct electric propulsion

// Propulsor 
const kongsbergProp =  Machinery.propulsor.propellers.kongsberg
const ABBProp =  Machinery.propulsor.propellers.ABB

//Thrusters 
const kongsbergThruster =  Machinery.propulsor.thruster.kongsberg
const ABBthruster =  Machinery.propulsor.thruster.ABB
const RRMthruster =  Machinery.propulsor.thruster.RRM
const wartsilaThruster =  Machinery.propulsor.thruster.wartsila

console.log(engineType);
console.log(Machinery);

// function batteryManagementSystem (){
//   this.BMS = function{

//          this.model = model,
//          this.batteryType = batteryType,
//          this.c_RateRMS = c_RateRMS,
//          this.c_RateDischarge = c_RateDischarge,
//          this.c_RateCharge: 3, //peak
//          this.chargeState: "",
//          this.lifeCycle1 : "7000 cycles; @ 100 %",
//           this.DOD1: "100 %",
//          this.lifeCycle2 : "15000 cycles;  @ 80 %",
//           this.DOD2: "80 %",

//   }
// }



const counting = Object.keys(ABBthruster).length
console.log(Object.keys(ABBthruster).length);
console.log(Object.keys(kongsbergThruster).length);
console.log(Object.keys(wartsilaThruster).length);
console.log(Object.keys(ABBProp).length);
console.log(Object.keys(kongsbergProp).length);

console.log(Object.keys(wartsilaGensetDE).length)
console.log(Object.keys(kongsbergGensetDE).length)

console.log(ABBProp);
console.log(ABBProp);
console.log(ABBProp);
// const battery = Machinery.batterySystem
