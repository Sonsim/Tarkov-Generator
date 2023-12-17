//Div variables
let prapor = document.getElementById('prapor-Input');
let therapist = document.getElementById('therapist-Input');
let skier = document.getElementById('skier-Input');
let peacekeeper = document.getElementById('peacekeeper-Input');
let mechanic = document.getElementById('mechanic-Input');
let ragman = document.getElementById('ragman-Input');
let jaeger = document.getElementById('jaeger-Input');
let minRoubles = document.getElementById('minroubles');
let maxRoubles  = document.getElementById('maxroubles');
let medinput = document.getElementById('med-Input')

let weapondiv = document.getElementById('weapon');
let head = document.getElementById('head');
let armordiv = document.getElementById('armor');
let rigdiv = document.getElementById('rig');
let backpackdiv = document.getElementById('backpack');
let meddiv = document.getElementById('pockets');

//Item arrays
let rig = [];
let backpack = [];
let meds = [];
let map = model.maps;
let armor = [];
let helmets = [];
let Allguns = [];
let allItems = [];
let totalcost= 0;
let dollarvalue;
let eurovalue;

//Dollar to Roubles converter
function dollarsToRoubles(usd) {
    

    dollarvalue = usd * 145;

    return dollarvalue;

}

//Euro to Roubles converter
function euroToRoubles(euro) {
    

    eurovalue = euro * 159;

    return eurovalue;

}

//Clears input on randomize
function ClearInputs(){
    prapor.value = "";
    therapist.value = "";
    skier.value = "";
    peacekeeper.value = "";
    mechanic.value ="";
    ragman.value = "";
    jaeger.value = "";
}

//Pushes all items to arrays
function PushAllToArrays() {
    
    // Adds guns to array
    if(Allguns.length <1){
    for(i=0; i<gunarray.length; i++){
        if(gunarray[i].buyFor[0] !== undefined && gunarray[i].buyFor !== undefined){
            Allguns.push(gunarray[i]);
        }  
    }
    }
    //Adds helmets
    if(helmets.length <1){
    for(i=0; i<helmetarray.length; i++){
        if(helmetarray[i].buyFor.length > 0 && helmetarray[i].buyFor[0].requirements[0].value < 5 ){
            helmets.push(helmetarray[i]);
        }
    }
    }   
    //Adds armor
    if(armor.length <1){
    for(i=0; i<armorArray.length; i++){
        if(armorArray[i].buyFor.length > 0 && armorArray[i].buyFor[0].requirements[0].value < 6 ){
            armor.push(armorArray[i]);
        }
    }
    armor.splice(4,1)
    armor.splice(8,1)
    armor.splice(9,1)
    armor.splice(13,1)
    armor.splice(13,1)
    }


    //Adds rigs
    if(rig.length <1){
    for(i=0; i<rigarray.length; i++){
        if(rigarray[i].buyFor.length > 0 && rigarray[i].buyFor[0].requirements[0].value < 5 ){
            rig.push(rigarray[i]);
        }
    }
    }
    //Adds backpack
    if(backpack.length <1){
    for (i=0; i<bparray.length; i++){
        if(bparray[i].buyFor.length > 0 && bparray[i].buyFor[0].requirements[0].value < 5){
            backpack.push(bparray[i])
        }
    }
    }
    //Adds meds
    if(meds.length<1){
    for (i=0; i<medarray.length; i++){
        if(medarray[i].buyFor.length > 0 && medarray[i].buyFor[0].requirements[0].value < 5){
            meds.push(medarray[i])
        }
    }
}
} 

//Randomizes gun based on inputs
function randomizeGun() {
    const showngun = Allguns.filter(function(gun)
    {return gun.buyFor[0].vendor.name == "Prapor" && gun.buyFor[0].requirements[0].value <= prapor.value ||
       gun.buyFor[0].vendor.name == "Peacekeeper" &&  gun.buyFor[0].requirements[0].value <= peacekeeper.value ||
       gun.buyFor[0].vendor.name == "Mechanic" &&  gun.buyFor[0].requirements[0].value <= mechanic.value ||
       gun.buyFor[0].vendor.name == "Skier" && gun.buyFor[0].requirements[0].value<= skier.value ||
       gun.buyFor[0].vendor.name == "Jaeger" && gun.buyFor[0].requirements[0].value <= jaeger.value}
    )
    
    let rndgun = showngun[Math.floor(Math.random() *showngun.length)]
    if(rndgun.buyFor[0].currency == "USD"){
        dollarsToRoubles(rndgun.buyFor[0].price);
        rndgun.buyFor[0].price = dollarvalue;
        rndgun.buyFor[0].currency = "RUB"
        
    }
    if (rndgun.buyFor[0].currency == "EUR"){
        euroToRoubles(rndgun.buyFor[0].price);
        rndgun.buyFor[0].currency == "RUB";
      
    }
    
    totalcost += rndgun.buyFor[0].price;

    weapondiv.innerHTML = /*HTML*/ `
    
    <div id="onsling">
    <img id="slingweapon-img" src=${rndgun.gridImageLink}>
    ${rndgun.buyFor[0].price} ${rndgun.buyFor[0].currency}
    </div>
    `
    
}
//Randomizes helmets and headphones based on inputs
function RandomizeHelmet(){
    const shownhelmet = helmets.filter(function(helmet)
    {return helmet.buyFor[0].vendor.name  == "Prapor" && helmet.buyFor[0].requirements[0].value <= prapor.value ||
    helmet.buyFor[0].vendor.name == "Peacekeeper" &&  helmet.buyFor[0].requirements[0].value <= peacekeeper.value ||
    helmet.buyFor[0].vendor.name == "Mechanic" &&  helmet.buyFor[0].requirements[0].value <= mechanic.value ||
    helmet.buyFor[0].vendor.name == "Skier" && helmet.buyFor[0].requirements[0].value<= skier.value ||
    helmet.buyFor[0].vendor.name == "Jaeger" && helmet.buyFor[0].requirements[0].value <= jaeger.value}
    )
    let rndHelmet = shownhelmet[Math.floor(Math.random() *shownhelmet.length)]
    
    if(rndHelmet.buyFor[0].currency == "USD"){
        dollarsToRoubles(rndHelmet.buyFor[0].price);
        rndHelmet.buyFor[0].price = dollarvalue;
        rndHelmet.buyFor[0].currency = "RUB"
       
    }
    if (rndHelmet.buyFor[0].currency == "EUR"){
        euroToRoubles(rndHelmet.buyFor[0].price);
        rndHelmet.buyFor[0].currency == "RUB";
        
    }
    totalcost += rndHelmet.buyFor[0].price;


    head.innerHTML = /*HTML*/ `
    <div id="headwear">
    <img id="headware-img" src=${rndHelmet.gridImageLink}>
    ${rndHelmet.buyFor[0].price} ${rndHelmet.buyFor[0].currency}
    </div>
    `
    
  
    if(rndHelmet.blocksHeadphones == false){
        const shownheadset = hparray.filter(function(hp)
        {return hp.buyFor[0].vendor.name  == "Prapor" && hp.buyFor[0].requirements[0].value <= prapor.value ||
        hp.buyFor[0].vendor.name == "Peacekeeper" &&  hp.buyFor[0].requirements[0].value <= peacekeeper.value ||
        hp.buyFor[0].vendor.name == "Mechanic" &&  hp.buyFor[0].requirements[0].value <= mechanic.value ||
        hp.buyFor[0].vendor.name == "Skier" && hp.buyFor[0].requirements[0].value<= skier.value ||
        hp.buyFor[0].vendor.name == "Jaeger" && hp.buyFor[0].requirements[0].value <= jaeger.value
        })
        let rndHp = shownheadset[Math.floor(Math.random() *shownheadset.length)]

        if(rndHp.buyFor[0].currency == "USD"){
            dollarsToRoubles(rndHp.buyFor[0].price);
            rndHp.buyFor[0].price = dollarvalue;
            rndHp.buyFor[0].currency = "RUB"
           
        }
        if (rndHp.buyFor[0].currency == "EUR"){
            euroToRoubles(rndHp.buyFor[0].price);
            rndHp.buyFor[0].currency == "RUB";
            
        }

        totalcost += rndHp.buyFor[0].price;
        
        head.innerHTML += /*HTML*/ `
        <div id="ears">
        <img id="ears-img" src=${rndHp.gridImageLink}>
        ${rndHp.buyFor[0].price} ${rndHp.buyFor[0].currency}
        </div>
        
        `
        
        }
}
//Randomizes rig and armor based on inputs
function RandomizeRigAndArmor() {
    const shownrig = rig.filter(function(rig)
        {return rig.buyFor[0].vendor.name  == "Prapor" && rig.buyFor[0].requirements[0].value <= prapor.value ||
        rig.buyFor[0].vendor.name == "Peacekeeper" &&  rig.buyFor[0].requirements[0].value <= peacekeeper.value ||
        rig.buyFor[0].vendor.name == "Mechanic" &&  rig.buyFor[0].requirements[0].value <= mechanic.value ||
        rig.buyFor[0].vendor.name == "Skier" && rig.buyFor[0].requirements[0].value<= skier.value ||
        rig.buyFor[0].vendor.name == "Jaeger" && rig.buyFor[0].requirements[0].value <= jaeger.value ||
        rig.buyFor[0].vendor.name == "Ragman" && rig.buyFor[0].requirements[0].value <= ragman.value
        })
        let rndRig= shownrig[Math.floor(Math.random() *shownrig.length)];

        if(rndRig.buyFor[0].currency == "USD"){
            dollarsToRoubles(rndRig.buyFor[0].price);
            rndRig.buyFor[0].price = dollarvalue;
            rndRig.buyFor[0].currency = "RUB"
           
        }
        if (rndRig.buyFor[0].currency == "EUR"){
            euroToRoubles(rndRig.buyFor[0].price);
            rndRig.buyFor[0].currency == "RUB";
            
        }
        totalcost += rndRig.buyFor[0].price;
        
        
        
        rigdiv.innerHTML = /*HTML*/ `
        
         <img id="rig-png" src=${rndRig.gridImageLink}>
        ${rndRig.buyFor[0].price} ${rndRig.buyFor[0].currency}
        
        `

        if(rndRig.weight < 4){
            const shownarmor = armor.filter(function(armor)
            {return armor.buyFor[0].vendor.name  == "Prapor" && armor.buyFor[0].requirements[0].value <= prapor.value ||
            armor.buyFor[0].vendor.name == "Peacekeeper" &&  armor.buyFor[0].requirements[0].value <= peacekeeper.value ||
            armor.buyFor[0].vendor.name == "Mechanic" &&  armor.buyFor[0].requirements[0].value <= mechanic.value ||
            armor.buyFor[0].vendor.name == "Skier" && armor.buyFor[0].requirements[0].value<= skier.value ||
            armor.buyFor[0].vendor.name == "Jaeger" && armor.buyFor[0].requirements[0].value <= jaeger.value ||
            armor.buyFor[0].vendor.name == "Ragman" && armor.buyFor[0].requirements[0].value <= ragman.value
            })
         
            let rndArmor = shownarmor[Math.floor(Math.random() *shownarmor.length)]

            if(rndArmor.buyFor[0].currency == "USD"){
                dollarsToRoubles(rndArmor.buyFor[0].price);
                rndArmor.buyFor[0].price = dollarvalue;
                rndArmor.buyFor[0].currency = "RUB"
               
            }
            if (rndArmor.buyFor[0].currency == "EUR"){
                euroToRoubles(rndArmor.buyFor[0].price);
                rndArmor.buyFor[0].currency == "RUB";
                
            }

            totalcost += rndArmor.buyFor[0].price;
           
            
            armordiv.innerHTML = /*HTML*/ `
            <img id="armor-png" src=${rndArmor.gridImageLink}>
            ${rndArmor.buyFor[0].price} ${rndArmor.buyFor[0].currency}

            `
            
            }
        else {
            armordiv.innerHTML = /*HTML*/ ``
        }

}
//Randomizes backpack based on inputs
function RandomizeBackpack() {
    const shownbackpack = backpack.filter(function(backpack)
    {return backpack.buyFor[0].vendor.name  == "Prapor" && backpack.buyFor[0].requirements[0].value <= prapor.value ||
    backpack.buyFor[0].vendor.name == "Peacekeeper" &&  backpack.buyFor[0].requirements[0].value <= peacekeeper.value ||
    backpack.buyFor[0].vendor.name == "Mechanic" &&  backpack.buyFor[0].requirements[0].value <= mechanic.value ||
    backpack.buyFor[0].vendor.name == "Skier" && backpack.buyFor[0].requirements[0].value<= skier.value ||
    backpack.buyFor[0].vendor.name == "Jaeger" && backpack.buyFor[0].requirements[0].value <= jaeger.value ||
    backpack.buyFor[0].vendor.name == "Ragman" && backpack.buyFor[0].requirements[0].value <= ragman.value
    })
    let rndbackpack= shownbackpack[Math.floor(Math.random() *shownbackpack.length)];

    if(rndbackpack.buyFor[0].currency == "USD"){
        dollarsToRoubles(rndbackpack.buyFor[0].price);
        rndbackpack.buyFor[0].price = dollarvalue;
        rndbackpack.buyFor[0].currency = "RUB"
       
    }
    if (rndbackpack.buyFor[0].currency == "EUR"){
        euroToRoubles(rndbackpack.buyFor[0].price);
        rndbackpack.buyFor[0].currency == "RUB";
        
    }

    totalcost += rndbackpack.buyFor[0].price;


    backpackdiv.innerHTML = /*HTML*/ `
    
    <img id="backpack-img" src=${rndbackpack.gridImageLink}>
    ${rndbackpack.buyFor[0].price} ${rndbackpack.buyFor[0].currency}

    `
}
//Randomizes meds based on inputs
function RandomizeMeds(){
    const shownmeds = meds.filter(function(meds)
    {return meds.buyFor[0].vendor.name  == "Prapor" && meds.buyFor[0].requirements[0].value <= prapor.value ||
    meds.buyFor[0].vendor.name == "Peacekeeper" &&  meds.buyFor[0].requirements[0].value <= peacekeeper.value ||
    meds.buyFor[0].vendor.name == "Mechanic" &&  meds.buyFor[0].requirements[0].value <= mechanic.value ||
    meds.buyFor[0].vendor.name == "Skier" && meds.buyFor[0].requirements[0].value<= skier.value ||
    meds.buyFor[0].vendor.name == "Jaeger" && meds.buyFor[0].requirements[0].value <= jaeger.value ||
    meds.buyFor[0].vendor.name == "Ragman" && meds.buyFor[0].requirements[0].value <= ragman.value ||
    meds.buyFor[0].vendor.name == "Therapist" && meds.buyFor[0].requirements[0].value <= therapist.value 
    })
    let rndmeds= shownmeds[Math.floor(Math.random() *shownmeds.length)];
    let rndmeds2= shownmeds[Math.floor(Math.random() *shownmeds.length)];
    let rndmeds3= shownmeds[Math.floor(Math.random() *shownmeds.length)];
    let rndmeds4= shownmeds[Math.floor(Math.random() *shownmeds.length)];

    
    totalcost += rndmeds.buyFor[0].price;
    totalcost += rndmeds2.buyFor[0].price;
    totalcost += rndmeds3.buyFor[0].price;
    totalcost += rndmeds4.buyFor[0].price;

    meddiv.innerHTML = /*HTML*/ `
    
    <div id="pocket1">
        <img src=${rndmeds.gridImageLink}>
    </div>
    <div id="pocket2">
        <img src=${rndmeds2.gridImageLink}>
    </div>
    <div id="pocket3">
        <img src=${rndmeds3.gridImageLink}>
    </div>
    <div id="pocket4">
        <img src=${rndmeds4.gridImageLink}>
    </div>
    

    `


    
}
//Mainfunction used to randomize loadout based on roubles inputs
function RandomizeAll() {
    totalcost = 0;
    randomizeGun();
    RandomizeHelmet();
    RandomizeRigAndArmor();
    RandomizeBackpack();
    if(medinput.checked){
    RandomizeMeds();
    randomizeMap();
    }
    else {
        randomizeMap();
        meddiv.innerHTML = /*HTML*/ `
        `
    }

    if(totalcost < minRoubles.value || totalcost > maxRoubles.value){
        RandomizeAll();
        
    }
}
//Randomizes maps based on inputs
function randomizeMap() {
    let map = document.getElementById('map');
    const maparray = model.maps;
    let shownmaps = [];

    let customsvalue = document.getElementById('customs');
    let interchangevalue = document.getElementById('interchange');
    let woodsvalue = document.getElementById('woods');
    let streetsvalue = document.getElementById('streets');
    let labsvalue = document.getElementById('labs');
    let reservevalue = document.getElementById('reserve');
    let shorelinevalue = document.getElementById('shoreline');
    let factoryvalue = document.getElementById('factory');
    let lighthousevalue = document.getElementById('lighthouse');


    
    if(customsvalue.checked) {
        shownmaps.push(maparray[1])
    }
    if (woodsvalue.checked){
        shownmaps.push(maparray[0])
    }
    if(factoryvalue.checked){
        shownmaps.push(maparray[2])
    }
    if(lighthousevalue.checked){
        shownmaps.push(maparray[3])
    }
    if(reservevalue.checked){
        shownmaps.push(maparray[4])
    }
    if(shorelinevalue.checked) {
        shownmaps.push(maparray[5])
    }
    if(streetsvalue.checked){
        shownmaps.push(maparray[6])
    }
    if(labsvalue.checked){
        shownmaps.push(maparray[7])
    }
    if(interchangevalue.checked){
        shownmaps.push(maparray[8])
    }
    let rndmap = shownmaps[Math.floor(Math.random() *shownmaps.length)]

    map.innerHTML = /*HTML*/ `
    
    <div id="maplink">
                Map: <a href="${rndmap.link}">${rndmap.name}</a>
            </div>

    <div id="totalpricetext">
            Total cost in roubles: ${totalcost} 
    </div>
    `

}
