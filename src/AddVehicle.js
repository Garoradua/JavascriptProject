import React from "react";

const AddVehicle = () => {
    return(
        <div>
        <form method="get">
  <h1>Add New Entry</h1>
<div class="row">
	<label for="sel_SelectTollname" id="SelectTollname-ariaLabel">Select Toll name</label>
	<select id="sel_SelectTollname" name="sel_SelectTollname" aria-labelledby="SelectTollname-ariaLabel">
		<option value="Kappalur">Kappalur</option>
		<option value="Chengalpattu">Chengalpattu</option>
		<option value="Krishnagiri">Krishnagiri</option>
	</select>
</div>
<div class="row">
	<label for="sel_SelectVehicleType" id="SelectVehicleType-ariaLabel">Select Vehicle Type</label>
	<select id="sel_SelectVehicleType" name="sel_SelectVehicleType" aria-labelledby="SelectVehicleType-ariaLabel">
		<option value="Car/Jeep/Van">Car/Jeep/Van</option>
		<option value="LCV">LCV</option>
		<option value="Truck/Bus">Truck/Bus</option>
		<option value="Heavy Vehicle">Heavy Vehicle</option>
	</select>
</div>
<div class="row">
	<label for="txt_VehicleNumber" id="VehicleNumber-ariaLabel">Vehicle Number</label>
	<input id="txt_VehicleNumber" name="txt_VehicleNumber" type="text" aria-labelledby="VehicleNumber-ariaLabel"/>
</div>
<div class="row">
	<label for="txt_Tariff" id="Tariff-ariaLabel">Tariff</label>
	<input id="txt_Tariff" name="txt_Tariff" type="text" aria-labelledby="Tariff-ariaLabel"/>
</div>
<div class="row">
<input type="submit" value="Submit"/>
</div>
</form>

        </div>
    );
    
};

export default AddVehicle;