import React from "react";

const AddToll = () => {
    return(
		<div>
			<form method="get">
  <h1> Add New Toll </h1>
<div class="row">
	<label for="txt_TollName" id="TollName-ariaLabel">Toll Name</label>
	<input id="txt_TollName" name="txt_TollName" type="text" aria-labelledby="TollName-ariaLabel"/>
</div>
  <h3>Vehicle Fare Details</h3>
<div class="row">
	<label for="sel_SelectVehicleType" id="SelectVehicleType-ariaLabel">Select Vehicle Type </label>
	<select id="sel_SelectVehicleType" name="sel_SelectVehicleType" aria-labelledby="SelectVehicleType-ariaLabel">
		<option value="Car/Jeep/Van">Car/Jeep/Van</option>
		<option value="LCV">LCV</option>
		<option value="Truck/Bus">Truck/Bus</option>
		<option value="Heavy Vehicle">Heavy Vehicle</option>
	</select>
</div>
<div class="row">
	<label for="txt_SingleJourney" id="SingleJourney-ariaLabel">Single Journey</label>
	<input id="txt_SingleJourney" name="txt_SingleJourney" type="text" aria-labelledby="SingleJourney-ariaLabel"/>
</div>
<div class="row">
	<label for="txt_ReturnJourney" id="ReturnJourney-ariaLabel">Return Journey</label>
	<input id="txt_ReturnJourney" name="txt_ReturnJourney" type="text" aria-labelledby="ReturnJourney-ariaLabel"/>
</div>
<div class="row">
	<label for="sel_SelectVehicleType" id="SelectVehicleType-ariaLabel">Select Vehicle Type </label>
	<select id="sel_SelectVehicleType" name="sel_SelectVehicleType" aria-labelledby="SelectVehicleType-ariaLabel">
		<option value="Car/Jeep/Van">Car/Jeep/Van</option>
		<option value="LCV">LCV</option>
		<option value="Truck/Bus">Truck/Bus</option>
		<option value="Heavy Vehicle">Heavy Vehicle</option>
	</select>
</div>
<div class="row">
	<label for="txt_SingleJourney" id="SingleJourney-ariaLabel">Single Journey</label>
	<input id="txt_SingleJourney" name="txt_SingleJourney" type="text" aria-labelledby="SingleJourney-ariaLabel"/>
</div>
<div class="row">
	<label for="txt_ReturnJourney" id="ReturnJourney-ariaLabel">Return Journey</label>
	<input id="txt_ReturnJourney" name="txt_ReturnJourney" type="text" aria-labelledby="ReturnJourney-ariaLabel"/>
</div>
<div class="row">
<input type="submit" value="Submit"/>
</div>
</form>

		</div>
	);
};

export default AddToll;