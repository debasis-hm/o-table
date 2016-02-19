export default function dynamic_tabledata_bind(options) {

		let db = this;

	    db.init = function(options){

	    	db.plot_Table();
			db.plot_Thead();
			db.plot_Tbody();			
			db.bind_Thead(options);

	    };
	     db.plot_Table = function(){

	    	 let table_struct = document.createElement("table"); 
    		 table_struct.setAttribute("id", "parentid"); 
     		 table_struct.setAttribute("class","o-pure-table o-pure-table-bordered");  
             document.getElementById("o-Table").appendChild(table_struct);            

	    };

	     db.plot_Thead = function(){

	    	let thead = document.createElement("thead"); 
     		thead.setAttribute("id", "theadid");  
     		document.getElementById("parentid").appendChild(thead);

	    };
	     db.plot_Tbody = function(){

	    	let tbody = document.createElement("tbody"); 
     		tbody.setAttribute("id", "tbodyid");  
     		document.getElementById("parentid").appendChild(tbody);


	    };
	     db.bind_Thead = function(options){

	    	 let tr1 = document.createElement("tr");  
    		 tr1.setAttribute("id","headerid");    
   			 document.getElementById("theadid").appendChild(tr1);  
    		 let th = "";    
		     let frstobj = options[0];
		     let proparray = Object.getOwnPropertyNames(frstobj);
		     let thead_Length = proparray.length;

		     th += "<th>Sl.No</th>"
		     for (let i = 0; i < thead_Length; i++) {
			    th += "<th>"+ proparray[i] +"</th>";
			  };		
    		 document.getElementById("headerid").innerHTML = th;   
    		 db.bind_Tbody(options,thead_Length,proparray);

	    };
	     db.bind_Tbody = function(options,thead_Length,proparray){

			  let tbody_Length = options.length; 
			  let table_row = "";

		      for (let j = 0; j < tbody_Length; j++) {
		       
		     	let tr2 = "<tr><td>"+ (j+1) +"</td>";     	
		     	for (let k = 0; k < thead_Length ; k++ ) {		     			
		     		 let obj =  options[j] ;
		     		 let  propname = proparray[k];	  
		     		 if(typeof obj[propname] === "object"){
		     		 	tr2 += "<td></td>";
		     		 }else{

		     		 	if (obj[propname] === null || obj[propname] === "NULL") {
		     		 	   tr2 += "<td>"+ "No Data" +"</td>" ;     
		     		 	}else{
		     		 		tr2 += "<td>"+ obj[propname] +"</td>" ; 
		     		 	}
		     		 	    	
		     		 } 		   		
		     		 	   		
		     	  	
		     	  };   
		     	  
		     	  tr2 += "</tr>";	     	
		     	 table_row += tr2;

			  };	
			 document.getElementById("tbodyid").innerHTML = table_row;  
		
	    };
	    db.init();
}

let drawOtable = new dynamic_tabledata_bind();

export default function (options) {       
        drawOtable.init(options);		
}