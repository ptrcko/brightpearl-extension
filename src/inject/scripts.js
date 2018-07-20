
//Calculate the end of next month (30 days EOM)
function endOfNextMonth(){
	var tax_date = $('#date').val();
	console.log(tax_date);
	tax_date =Date.parseExact(tax_date, "d/M/yyyy");
	console.log(tax_date);

	var nm = new Date(tax_date)
	nm.addMonths(1);
	console.log("nm" +nm);
	var daysNm = Date.getDaysInMonth(nm.getFullYear(),nm.getMonth());
	console.log(daysNm);
	console.log("D Month " +tax_date.getMonth());
	var daysD = Date.getDaysInMonth(tax_date.getFullYear(),tax_date.getMonth());
	console.log(daysD);
	var days = daysNm + daysD;
	console.log(days);
	console.log(tax_date.getDate());
	return (days - tax_date.getDate());	
	
};

function getSearchGetOrder(){
	//Set Base URL so that upgrades don't break it
	var url = document.URL;

	// regex to match data centre and version
	var urlParts = url.match(/https:\/\/(\w*).brightpearlapp.com\//);

	//Generage the bpBaseURLPart 
	bpBaseURLPart ="https://" + urlParts[1] + ".brightpearlapp.com/";
	
	var orderSearch ="patt-op.php?scode=invoice&oID=";
	var searchValue = document.getElementById("global-search-term").value;
	console.log(searchValue);
	searchValue=searchValue.trim();
	console.log(searchValue);
	if(isNaN(searchValue)||searchValue.length<1){
		alert ('Please enter an order or purchase order number');
		return false;
		
	}else {
		window.open(bpBaseURLPart+orderSearch+searchValue);
	}
	
	
	
}
