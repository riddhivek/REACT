const Table = () => {
	return(
		<>
			<div>
			<h1 style="color: green;"> 
        Geekforgeeks!! 
    </h1> 
    <h2>User Data Management</h2> 
  
    <div id="formContainer"> 
        <label for="nameInput"> 
            Name: 
        </label> 
        <input type="text" 
               id="nameInput" 
               placeholder="Enter your name"> 
        <label for="emailInput"> 
            Email I'd: 
        </label> 
        <input type="email" 
               id="emailInput" 
               placeholder="Enter your email"> 
        <label for="numberInput"> 
            Mobile Details: 
        </label> 
        <input type="text" 
               id="numberInput" 
               placeholder="Enter your mobile details"> 
        <label for="addressInput"> 
            Address: 
        </label> 
        <textarea id="addressInput" 
                  placeholder="Enter your address"> 
        </textarea> 
        <button onclick="addData()"> 
              Add 
          </button> 
    </div> 
    <table id="outputTable"> 
        <tr> 
            <th>Name</th> 
            <th>Email</th> 
            <th>Mobile Details</th> 
            <th>Address</th> 
            <th>Action</th> 
        </tr> 
    </table> 
    <script> 
        function addData() { 
            // Get input values 
            let name = 
                document.getElementById("nameInput").value; 
            let email = 
                document.getElementById("emailInput").value; 
            let mobile = 
                document.getElementById("numberInput").value; 
            let address = 
                document.getElementById("addressInput").value; 
            
            // Get the table and insert a new row at the end 
            let table = document.getElementById("outputTable"); 
            let newRow = table.insertRow(table.rows.length); 
            
            // Insert data into cells of the new row 
            newRow.insertCell(0).innerHTML = name; 
            newRow.insertCell(1).innerHTML = email; 
            newRow.insertCell(2).innerHTML = mobile; 
            newRow.insertCell(3).innerHTML = address; 
            newRow.insertCell(4).innerHTML = 
                '<button onclick="editData(this)">Edit</button>'+
                '<button onclick="deleteData(this)">Delete</button>'; 
            
            // Clear input fields 
            clearInputs(); 
        } 
  
        function editData(button) { 
            
            // Get the parent row of the clicked button 
            let row = button.parentNode.parentNode; 
            
            // Get the cells within the row 
            let nameCell = row.cells[0]; 
            let emailCell = row.cells[1]; 
            let mobileCell = row.cells[2]; 
            let addressCell = row.cells[3]; 
            
            // Prompt the user to enter updated values 
            let nameInput = 
                prompt("Enter the updated name:", 
                    nameCell.innerHTML); 
            let emailInput = 
                prompt("Enter the updated email:", 
                    emailCell.innerHTML); 
            let numberInput = 
                prompt("Enter the updated mobile details:", 
                    mobileCell.innerHTML 
                ); 
            let addressInput = 
                prompt("Enter the updated address:", 
                    addressCell.innerHTML 
                ); 
            
            // Update the cell contents with the new values 
            nameCell.innerHTML = nameInput; 
            emailCell.innerHTML = emailInput; 
            mobileCell.innerHTML = numberInput; 
            addressCell.innerHTML = addressInput; 
        } 
        function deleteData(button) { 
            
            // Get the parent row of the clicked button 
            let row = button.parentNode.parentNode; 
  
            // Remove the row from the table 
            row.parentNode.removeChild(row); 
        } 
        function clearInputs() { 
            
            // Clear input fields 
            document.getElementById("nameInput").value = ""; 
            document.getElementById("emailInput").value = ""; 
            document.getElementById("numberInput").value = ""; 
            document.getElementById("addressInput").value = ""; 
        } 
    
			</div>
		</>
	)
}

{/* // 	<h1 style="color: green;"> 
// 		Geekforgeeks!! 
// 	</h1> 
// 	<h2>User Data Management</h2> 

// 	<div id="formContainer"> 
// 		<label for="nameInput"> 
// 			Name: 
// 		</label> 
// 		<input type="text" */}
{/* // 			id="nameInput"
// 			placeholder="Enter your name"> 
// 		<label for="emailInput"> 
// 			Email I'd: 
// 		</label> 
// 		<input type="email"
// 			id="emailInput"
// 			placeholder="Enter your email"> 
// 		<label for="numberInput"> 
// 			Mobile Details: 
// 		</label> 
// 		<input type="text"
// 			id="numberInput"
// 			placeholder="Enter your mobile details"> 
// 		<label for="addressInput"> 
// 			Address: 
// 		</label> 
// 		<textarea id="addressInput"
// 				placeholder="Enter your address"> 
// 		</textarea> 
// 		<button onclick="addData()"> 
// 			Add 
// 		</button> 
// 	</div> 
// 	<table id="outputTable"> 
// 		<tr> 
// 			<th>Name</th> 
// 			<th>Email</th> 
// 			<th>Mobile Details</th> 
// 			<th>Address</th> 
// 			<th>Action</th> 
// 		</tr> 
// 	</table> 
// 	<script> 
// 		function addData() { 
// 			// Get input values 
// 			let name = 
// 				document.getElementById("nameInput").value; 
// 			let email = 
// 				document.getElementById("emailInput").value; 
// 			let mobile = 
// 				document.getElementById("numberInput").value; 
// 			let address = 
// 				document.getElementById("addressInput").value; 
			
// 			// Get the table and insert a new row at the end 
// 			let table = document.getElementById("outputTable"); 
// 			let newRow = table.insertRow(table.rows.length); 
			
// 			// Insert data into cells of the new row 
// 			newRow.insertCell(0).innerHTML = name; 
// 			newRow.insertCell(1).innerHTML = email; 
// 			newRow.insertCell(2).innerHTML = mobile; 
// 			newRow.insertCell(3).innerHTML = address; 
// 			newRow.insertCell(4).innerHTML = 
// 				'<button onclick="editData(this)">Edit</button>'+ 
// 				'<button onclick="deleteData(this)">Delete</button>'; 
			
// 			// Clear input fields 
// 			clearInputs(); 
// 		} 

// 		function editData(button) { 
			
// 			// Get the parent row of the clicked button 
// 			let row = button.parentNode.parentNode; 
			
// 			// Get the cells within the row 
// 			let nameCell = row.cells[0]; 
// 			let emailCell = row.cells[1]; 
// 			let mobileCell = row.cells[2]; 
// 			let addressCell = row.cells[3]; 
			
// 			// Prompt the user to enter updated values 
// 			let nameInput = 
// 				prompt("Enter the updated name:", 
// 					nameCell.innerHTML); 
// 			let emailInput = 
// 				prompt("Enter the updated email:", 
// 					emailCell.innerHTML); 
// 			let numberInput = 
// 				prompt("Enter the updated mobile details:", 
// 					mobileCell.innerHTML 
// 				); 
// 			let addressInput = 
// 				prompt("Enter the updated address:", 
// 					addressCell.innerHTML 
// 				); 
			
// 			// Update the cell contents with the new values 
// 			nameCell.innerHTML = nameInput; 
// 			emailCell.innerHTML = emailInput; 
// 			mobileCell.innerHTML = numberInput; 
// 			addressCell.innerHTML = addressInput; 
// 		} 
// 		function deleteData(button) { 
			
// 			// Get the parent row of the clicked button 
// 			let row = button.parentNode.parentNode; 

// 			// Remove the row from the table 
// 			row.parentNode.removeChild(row); 
// 		} 
// 		function clearInputs() { 
			
// 			// Clear input fields 
// 			document.getElementById("nameInput").value = ""; 
// 			document.getElementById("emailInput").value = ""; 
// 			document.getElementById("numberInput").value = ""; 
// 			document.getElementById("addressInput").value = ""; 
// 		} 
 */}
