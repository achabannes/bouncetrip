  		<form name="newMarker">
				<fieldset>
					<legend>New marker</legend>
           <div>
   					<label for="latitude">Latitude<span class="mdt">*</span></label> <input type="text" id="latitude"> Ex: -74.00<br>
   					<label for="longitude">Longitude<span class="mdt">*</span></label> <input type="text" id="longitude"> Ex: 40.71<br>
   					<label for="markerCity">City</label> <input type="text" id="markerCity"> Ex: New York City<br>
   					<label for="markerUrl">URL</label> <input type="text" id="markerUrl"> Ex: <a href="http://en.wikipedia.org/wiki/New_York_City" target="_blank">link</a><br>
   					<label for="markerImage">Picture</label> <input type="text" id="markerImage"> Ex: <a href="http://upload.wikimedia.org/wikipedia/commons/thumb/3/39/NYC_Top_of_the_Rock_Pano.jpg/640px-NYC_Top_of_the_Rock_Pano.jpg" target="_blank">link</a><br>
					</div>
          <input type="button" id="addNewMarker" value="Add" onclick="addMarker()">
				</fieldset>
			</form>