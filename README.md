  # Vessel-mechinery
                     
# Note: This flowchat does not represent the code flow anymore since the code has been updated, new flowchat will be updated accordingly after major update.
Preliminary background for the vessel.machinery  implimentation
<div class="Flowchat">
  <h1>Preliminary flow chat</h1>
   <p> This is page will explain the steps  that were built into the website  and also the process which is represented in a flow chat as shown below.<br>
       The flowchat only represent the Preliminary setup of the final code which will be implimentated, which means that flowchat will be updated accoordingly.<br>
       As shown on the image, each step in the process is numbered starting from 1 to 18 and they will be used to refere to each step when explaining the process.<br>
       The process mostly consist of automatic process except the steps which are labelled "web front page" as shown in the process, <br>
        it also consist of two methomds which are colored yellow.
   </p>

</div>
<div class="Flowchat_image">
  <img src="./image/flowchat.jpg" alt="The flow chat image "  >

</div>
<h2 class="Flowchat"> process explanation</h2>

<ul >
   <p><li><strong>Step 1:</strong>  this is the starting of the  process, it is then divided into step 2 and 7 respectively, but the recommended next step is step 2 </li></p>

  <p><li> <strong>Step 2:</strong> This step involve manually inputting 3 parmaters on the webpage which include the ship resistance kN, ship speed Knots and  voyage in days.<br>
    you eith type the value or used the range button. This step is a required step since this parameters are used in the other steps.  </li></p>

  <p><li> <strong>Step 3:</strong> This is executed automatically, the step is a signal called “Event listener “ that listen or monitor to the input field and each an input is made it execute/call, <br>
     the a method and also pass the value of the input to the method.
  </li></p>

  <p><li> <strong>Step 4:</strong> In this step, when step 3 is executed step 4 check if all necessary is input are completed, if they not completed the process to back to step 2,<br>
 but they  are completed then all input values are then send to step 5.
</li></p>

  <p><li> <strong>Step 5:</strong>This step is executing a method to calculate the required propulsion  power of the ship , it will only be executed if step 4 is  true, <br>
    the method accept three parameters from the input filed ( ship resistance , ship speed  and voyage ), using the resistance and the speed the power is calculated as follows <br>
     effective power/efficiencies ( (resistnace  × speed)/(η_mec  × η_pro ))   where  the  η_mec mechanical efficiency is 0.95 and propulsion efficiency is    0.66.
  </li></p>

  <p><li> <strong>Step 6:</strong>After step 5 is complete, it check if the type of fuel has already been choose, if it is True then it send the result from step 5 <br>
     along with voyage to step 14 but if is False then it move to steps 7, at the first time of the process it will always be false.

</li></p>
  <p><li> <strong>Step 7:</strong>This step involve choosing the type of fuel you ship will be using, it has a dropdown of fuels which include LNG, MGO, HFO  and Hydrogen .</li></p>

  <p><li> <strong>Step 8:</strong>This step is sending of signal (“Event listener”)  each time a fuel type is choose ,  the signal contain the fuel type that was chose. </li></p>

  <p><li> <strong>Step 9:</strong>This step check if the “power “ has already been calculated in step 5, if  there is no power then you are back to step 2  but there is power then move to step 10.</li></p>

  <p><li> <strong>Step 10:</strong>In this step the type of fuel is checked if it is LNG that was choosen or not , the reason for this is that only LNG data is currently available and this step will be remove <br>
    when other fuel data are available. If the fuel type  is not LNG then move to step 11 but if it is LNG then move to step 12.</li></p>

  <p><li> <strong>Step 11:</strong>This step send of warning “alert” to the window on screen stating that “Only LNG data is available for analysis “  then back to step 7 to choose LNG fuel.</li></p>

  <p><li> <strong>Step 12:</strong>
   This step is sending the fuel type  to the database  where all the fuel types and their there properties  are stored then move to step 13.
</li></p>

  <p><li> <strong>Step 13:</strong>In this step, the properties of the fuel type that are choosen are retrieve from the database and send it to method in step 14.</li></p>

  <p><li> <strong>Step 14:</strong>This step is a method which accept power and voyage  value from the method in step  6 <br>
    and also accept the fuel properties that was retrieved from the database. With these values it calculate volume of the tank and mass of fuel. <br>
    The result are based on the voyage that was input .  The mass is calculated as follows  SFC × power × voyage  while volume of tank  is calculated  as  (SFC ×power ×voyage)/fueldensity. Then move to step 15.</li></p>

  <p><li> <strong>Step 15:</strong>The step is the final steps, it involve displaying the results on the webpage, the results displayed include required power based on the input (resistance and speed) , the tank volume and mass based on the power and the fuel type.</li></p>

  <p><li> <strong>Step 16:</strong>In this step you decide if you want to change any variable, if no then the process end in step 18  but if it yes then move to step 17.</li></p>

  <p><li> <strong>Step 17:</strong>In this step you decide what variable you will like to change, if it is input (resistance , speed or voyage) then go step 2 but if it’s  the fuel type  then go to step 7.<br>
Since all the other inputs and fuel type has already been chose any input that is change it will automatically update the result in step 15.
</li></p>
  <!-- <p><li> <strong>Step 18:</strong>Tea</li></p> -->


</ul>
