//Global Variables
var rptLocHTML = "ul#dcontrols_notifications"; // This is the point we insert the reports on every page (after the
var quickInvDateHTML = 'form#quick-invoice fieldset.row-style dl dd a:eq(3)'; // Point to insert payment options on quick invoices
var invDateHTML = 'div.field_fw a:eq(1)'; // Point to insert payment options on invoices
var settings ="";
var orderSearch ="/patt-op.php?scode=invoice&oID="
var bpReportURLPart ={};
var orderSearchHTML='input#search_type'
var ordersDetail = "div.contact-orders-info.widget-info p.links a:nth-child(5)"

	
var reportURLPart= "report.php?export-limit=500"  //The URL variables which have values. Others are available
	 +"&output=screen" 
	 +"&output-old=screen" 
	 +"&report_zone=sales" 
	 +"&report_type=orders" 
	 +"&report_submit=1" 
	 +"&prev_report_zone=sales" 
	 +"&prev_report_type=orders" 
	 +"&type=1" 
	 +"&date_type=orders_tax_date" 
	 +"&createdBy=0" 
	 +"&ship_method=0" 
	 +"&limit=500" 
 	 +"&allocation_status=0" 
	 +"&provisional_amt=0" 
	 +"&invoiced=1" 
	 +"&owner_id=0" 
	 +"&shipping_status=0" 
	 +"&submit2=Filter+report";

var dateFrom = "&date_from="; //Parameter for start date
var dateTo = "&date_to="; //Parameter for end date
//Set Base URL so that upgrades don't break it
var url = document.URL;

// regex to match data centre and version
var urlParts = url.match(/https:\/\/(\w*).brightpearl.com\/(\d.\d*.\d)/);

//Generage the bpReportURL 
bpReportURLPart ="https://" + urlParts[1] + ".brightpearl.com/" + urlParts[2] + "/";
ordersSearch = bpReportURLPart + orderSearch;


//Initialise
function init(){
	
	//Insert some scripts to use
	var script = document.createElement('script');
	script.src = chrome.extension.getURL('src/inject/scripts.js');
	document.head.appendChild(script);
	
	//Insert date script to use on invoice pages
	var script2 = document.createElement('script');
	script2.src = chrome.extension.getURL('src/inject/date-en-AU.js');
	document.head.appendChild(script2);
	
	
	if (window.cs_injected) return;
	
	rptLocHTML2=".hgroup";

	// Get the settings and start amending the content
	
	//Send a message to the background script asking for the settings
	   chrome.extension.sendRequest({action: 'settings'}, function(theOptions) {
	   settings = theOptions;
		console.log(settings);
		if(!settings){
			alert("Please go to the settings page to set your preferences");
			return null;
		}	
			
		
	//});
			
		//Call to function carrying out steps to insert reports
		if (settings.summaryReports){
			addReports();
		}
		// Check if any of the amended payment date options are set
		if(settings.invoice7days||settings.invoice10days||settings.invoice14days||settings.invoice30days||settings.invoice30Eom){

			addPaymentDays();  //Call to function to add the payment days to invoice and bill screens
		}
		
		// Check if we need to set the supplier invoice date to today by default.
		if (settings.supplierInvoiceDate){
			if (supplierPaymentPage()){
				document.getElementById("date").setAttribute("value",getToday());	
			}
			
		}
		// Check if we need to change the order list links
		if (settings.ordersList){
			changeSalesOrderLinks();
		
		}
		// Check if we need to set the Update pricelist flag to false
		if(settings.updatePrices){
			if (supplierPaymentPage()){

					document.getElementsByName("update_products_prices")[0].checked = false;	

					document.getElementsByName("update_base_prices")[0].checked = false;	

			}
		}
		//Check if we need to insert a fast search for the sales
		if(settings.enableFastSearch){
			addOrderNumberSearch();
		}
		
		//Check if we should extend the 'Orders(detail()' to start at the beginning of time
		if(settings.extendSalesDetails){
			var ordersDetailLink = jQuery(ordersDetail);
			if(ordersDetailLink){
				var newStartDate = new Date("01/01/2000")
				ordersDetailLink.attr('href',ordersDetailLink.attr('href')+'&date_type=orders_tax_date&date_from='+bpDateOutput(newStartDate));
			}
		}
		//Check if we need to hide email address on Goods Out Notes
		//Or add a default one
		var isGoodsNote = getUrlVars()['goodsnote-id'];
		if(isGoodsNote){
			if(settings.hideEmail){
				jQuery('#template-form-field-send-to').hide();
			}
			if(settings.goodsOutEmail){
				jQuery('#template-email-address-addition-1').val(settings.goodsOutEmail);
			}
		}
		
		//Check if we need to warn about sales
		if(settings.missingPhone||settings.missingEmail||settings.deliveryDate){
			checkMissingDetails();
		}
	//};
	});
			
	window.cs_injected = true;
	console.log("Script Injected [" + document.location + "]!");

	}


//Function to carry out reporting steps
function addReports(){
	var lastItem =jQuery(rptLocHTML).last();
	console.log(lastItem);
	//Set today's values
	var endDate = makeEnddate();
	var startDate = endDate;
	var dateString = dateFrom + startDate + dateTo + endDate;
	lastItem.append("<li><a href=\"" + bpReportURLPart + reportURLPart + dateString + "\" class=\"rpts\">D</a></li>") ;
	
	//Set this weeks values
	var startDate = makeWeekStart();
	var dateString = dateFrom + startDate + dateTo + endDate;
	lastItem.append("<li><a href=\"" + bpReportURLPart + reportURLPart + dateString + "\" class=\"rpts\">W</a></li>") ;
	
	//Set this Months values
	var startDate = makeMonthStart()
	var dateString = dateFrom + startDate + dateTo + endDate;
	lastItem.append("<li><a href=\"" + bpReportURLPart + reportURLPart + dateString + "\" class=\"rpts\">M</a></li>") ;

}


//Function to add addition payment day options
function addPaymentDays(){

	if(supplierPaymentPage()){

		//Insert alternative payment options
		var paymentHtml = new Array();
		
		//Check the settings to see which payment options are active
		if (settings.invoice7days){
			paymentHtml.push('<br /><a href="#" id="pmt7days" onclick="updateDue(7);return false;">+7 days</a>');
		}
		if (settings.invoice10days){
			paymentHtml.push('<br /><a href="#" id="pmt10days" onclick="updateDue(10);return false;">+10 days</a>');
		}
		if (settings.invoice14days){
			paymentHtml.push('<br /><a href="#" id="pmt14days" onclick="updateDue(14);return false;">+14 days</a>');
		}
		if (settings.invoice30days){
			paymentHtml.push('<br /><a href="#" id="pmt10days" onclick="updateDue(30);return false;">+30 days</a>');
		}
		if (settings.invoice30Eom){
			paymentHtml.push('<br /><a href="#" id="pmtEom" onclick="updateDue(endOfNextMonth());return false;">+30 EOM</a>');
		}
			
		for (var i = 0; i < paymentHtml.length; i++){
			addContent(quickInvDateHTML,paymentHtml[i]);
		}
		for (var i = 0; i < paymentHtml.length; i++){
			addContent(invDateHTML,paymentHtml[i]);
		}
	}
}

//Check if this is a page to add the supplier invoice and bill content
function supplierPaymentPage(){

	// Check if we are on a page that needs the payment functions
	var pagePath = location.pathname;
	pagePath = pagePath.replace("//","/");  //Fixes a bug in Brightpeal - when receiving stock, it doesn't redirect to a proper URL
	var scode = getUrlVars()['scode'];
	var type = getUrlVars()['type'];
	var j = getUrlVars()['j'];

	var billPage = (scode=="accounts-invoice"&&type=="supplier"&&j=="2");
	if (pagePath=="/"+urlParts[2]+"/invoice_receive.php"||billPage==true){
		return true;
	}
	return null
}


function getURLVar(){
	var pagePath = location.pathname;
	var scode = getUrlVars(['scode']);
	return scode;
}
//Function to append content after a specified HTML Point. 
function addContent(startpoint,appendcontent){
	jQuery(startpoint).after(appendcontent);
		}



/* This is the start of functions for getting and setting dates
 * used generating the reports on the left hand side of the screen
 */


//Calculate the start of the week and return it in BP friendly format
function makeWeekStart(){
	var d = new Date();
	d.setDate(d.getDate() - (d.getDay()));
	return bpDateOutput(d);
}

//Calculate the start of the month and return it in BP friendly format
function makeMonthStart(){
	var d= new Date();
	d.setDate(d.getDate() - d.getDate()+1);
	return bpDateOutput(d);
}

//Calculate today and return it in BP friendly format
function makeEnddate(){
	var d = new Date();
	return  bpDateOutput(d);

}

//Format BP Date so that it can be used in the URL
function bpDateOutput(d){
	var sMonth = ('0'+(d.getMonth()+1)).slice(-2);
	var sDay   = ('0'+d.getDate()).slice(-2)
	var dateSep = "%2F"; //is a hyphen symbol '
	if (settings.dateFormat=="dd/mm/yyyy"){
		var strD = sDay + dateSep + sMonth + dateSep + d.getFullYear();	
		return	strD;
	} else{
		var strD = sMonth + dateSep + sDay  + dateSep + d.getFullYear();	
		return	strD;
	}

}
function getToday(){
    var currentTime = new Date()
    var month = ('0'+(currentTime.getMonth() + 1)).slice(-2)
    var day = ('0'+currentTime.getDate()).slice(-2)
    var year = currentTime.getFullYear()
	if (settings.dateformat="dd/mm/yyyy"){
		return (day + "/" + month + "/" + year)
		
	}else{
		return (month + "/" + day + "/" + year)
	}

    
}

function addOrderNumberSearch(){
	

	//searchValue=searchValue.trim
	var html	 =	'<div  onClick="getSearchGetOrder();" id="fastorder"'
				    +'<a href="#" alt="Enter an order number and click here to go straight to that number">Fast Order Search</a></div>';
				    addContent(orderSearchHTML,html);
}

function getOrderInfo(){
//Intended for context menu...might delete
	var value = {};
	var delivery= ["delivery_name",
	           "delivery_company",
	           "delivery_street_address",
	           "delivery_suburb",
	           "delivery_city",
	           "delivery_state",
	           "delivery_postcode",
	           "delivery_country",
	           "delivery_telephone",
	           "delivery_mobile",
	           "delivery_email_address","gross"];
	
	for (var i =0; i<delivery.length; i++){
		var contexts = delivery[i];

		
		//if(chrome.contextMenus(contexts)){
			//chrome.contextMenus.remove(contexts);
		//}
		value += ","+ document.getElementById(contexts).value;
	}
	return value;
}

function changeSalesOrderLinks() {
	jQuery('[title="Filter report by this value"]').each(function(){
	var contact = getURLParameter('customers_id','?'+this.href.split("?")[1]);
	this.href='patt-op.php?scode=contact&cID='+contact;
	$(this).attr('target','_blank')
	});
}

function checkMissingDetails(){
	var scode = getUrlVars()['scode'];
	
	jQuery('<div id="salesWarnings"></div>').insertAfter('#sub-head');
	if(scode=='invoice'){
		if(settings.missingEmail){
			var emails = jQuery('#customer_email_address,#billing_email_address,#delivery_email_address');
				emails.each(function(i){

					if(jQuery(this).val()==""){
					
						jQuery('<p>There is at least one missing email address</p>').appendTo(jQuery('#salesWarnings'));
						return false;
					}
		
				})
		}
		if(settings.missingPhone){
			var checks=["customer","delivery","billing"];
			for(var i in checks){

				if(jQuery('#'+checks[i]+'_mobile').val()==""&&jQuery('#'+checks[i]+'_telephone').val()==""){
					jQuery('<p>No phone number for '+checks[i]+' address</p>').appendTo(jQuery('#salesWarnings'));
				}
			}
				
		}
		if(settings.deliveryDate){
			if(jQuery('#date_delivery_due').val()=="00/00/0000"){
				jQuery('<p>Delivery Date is not set</p>').appendTo(jQuery('#salesWarnings'));	
			}
		}
	}
}

//Get URL variables and return as an array
//Thanks to http://papermashup.com/read-url-get-variables-withjavascript/
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getURLParameter(name,path) {
 return decodeURI(
 (RegExp(name + '=' + '(.+?)(&|$)').exec(path)||[,null])[1]
 );
}

//Initilise
init();