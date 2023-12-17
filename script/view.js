let app = document.getElementById('app');

updateView();


function updateView(){

    app.innerHTML = /*HTMl*/ `
    
    <header>
            <h1>
                Tarkov Generator
            </h1>
        </header>
        <nav>
            <h3>Set filters</h3>
            <div id="inputs" >
                 <button onclick="playerdropdown()">Player filters</button >
                    <hr>
                <div id="player" class="player">
                    <div ><input id="prapor-Input" type="number" placeholder="Prapor Level" min="0" max="4"></div>
                    <hr>
                    <div><input id="therapist-Input" type="number" placeholder="Therapist Level" min="0" max="4"></div>
                    <hr>
                    <div><input id="skier-Input" type="number" placeholder="Skier Level" min="0" max="4"></div>
                    <hr>
                    <div><input id="peacekeeper-Input" type="number" placeholder="Peacekeeper Level" min="0" max="4"></div>
                    <hr>
                    <div><input id="mechanic-Input" type="number" placeholder="Mechanic Level" min="0" max="4"></div>
                    <hr>
                    <div><input id="ragman-Input" type="number" placeholder="Ragman Level" min="0" max="4"></div>
                    <hr>
                    <div><input id="jaeger-Input" type="number" placeholder="Jaeger Level" min="0" max="4"></div>
                    <hr>
                    <div><input id="minroubles" type="number" placeholder="Min roubles" min="10000" max="100 000 000"></div>
                    <hr>
                    <div><input id="maxroubles" type="number" placeholder="Max roubles" min="10000" max="100 000 000"></div>
                    <hr>
                    <div class="mapinput">Include meds: <input id="med-Input" type="checkbox"></div>
                    <hr>
                </div>

                
            <button onclick="mapsdropdown()">Map filters</button>
            <hr>
            <div id="maps" class="maps">
                <div  class="mapinput">Include Customs <input id="customs" type="checkbox"></div>
                <hr>
                <div  class="mapinput">Include Woods <input id="woods" type="checkbox"></div>
                <hr>
                <div  class="mapinput">Include Interchange <input  id="interchange" type="checkbox"></div>
                <hr>
                <div  class="mapinput">Include Streets <input id="streets" type="checkbox"></div>
                <hr>
                <div class="mapinput">Include Labs <input id="labs" type="checkbox"></div>
                <hr>
                <div  class="mapinput">Include Reserve <input id="reserve" type="checkbox"></div>
                <hr>
                <div  class="mapinput">Include Shoreline <input id="shoreline" type="checkbox"></div>
                <hr>
                <div  class="mapinput">Include Factory <input id="factory" type="checkbox"></div>
                <hr>
                <div  class="mapinput">Include Lighthouse <input id="lighthouse" type="checkbox"></div>
                <hr>
            </div>
            
            <div><button onclick=" PushAllToArrays(); RandomizeAll(); ClearInputs()">Randomize</button></div>
        </div>
    
    </nav>
    <main >
        <div id="loadout">
            <div id="head">
                
                </div>
            <div id="bodygear">
                <div id="armor">
                    
            
                </div>
                <div id="rig">
                    
                </div>
                <div id="backpack">
                    
                </div>
            </div>
            <div id="weapon" >
                
                </div>
            <div id="pockets">
                
                
            </div>
            

        
        <div id="map">
            
        
            
    </div>
    </div>
    </main>

    `
}