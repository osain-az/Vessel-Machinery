//Mechineries

function Mechineries() {

  // calculating fuel consumption
  this.fuelConsumption = function(
    density,
    LHV,
    HHV,
    SFC,
    power,
    fuelName,
    voyage
  ) {
    this.fuelName = fuelName;
    this.density = density;
    this.LHV = LHV;
    this.HHV = HHV;
    this.SFC = SFC * 0.001;
    this.mass_rate = this.SFC * power;
    this.voyage = voyage * 24;
    this.mass = Math.round((this.mass_rate * this.voyage)/1000);
    this.mass_kg = Math.round(this.mass_rate * this.voyage);

    // volume of the tank
    this.tank_volume = Math.round(this.mass_kg / this.density)
    this.lng_tank = this.tank_volume
    if (fuelName === "LNG") {
      // Adding extral 10% of the volume if the fuel used is LNG
      this.tank_volume = this.tank_volume * 0.1 + this.tank_volume;
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
    this.power = Math.round(this.EHP / (this.N_mech * this.N_pro)); // Total required power
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
    density: 426,
    SFC: 205
  },
  MGO: {
    fuelName: "MGO",
    HHV: 55.2,
    LHV: 48.6,
    density: 426
  },
  HFO: {
    HHV: 55.2,
    LHV: 48.6,
    density: 426
  },
  Hydrogen: {
    HHV: 55.2,
    LHV: 48.6,
    density: 426
  }
};

let Mechinery = {
    propulsion_type: {
      direct_propulsion: {
      propulsion_name: "Direct propulsion"

      },
      electric_propulsion: {
        propulsion_name: "Electric propulsion"

      },
      hybride: "Hybride propulsion",
      LNG: {
        propulsion_name: "LNG propulsion"

      }
    },

  engineType: {

  },
  propellers: {

  }


}


const LNG = fuelType.LNG;
