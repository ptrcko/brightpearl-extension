this.i18n = {
    "settings": {
        "en": "Settings",
    },
	"introduction":{
		"en": "Introduction"
	},
	"introductionDesc":{
		"en": "Welcome to the Brightpearl Extension from Tamper Evident<br><br>\
		This modifies some of the functionality of Brightpearl to speed up some processes and prevent human error on others.<br><br>\
		Each section outlines the original functionality and explains what will happen when activating the new functionality<br><br>\
		<strong>All changes are saved as you make them</strong> - there is no 'Save' button to press.  However, once you have made your changes you will need to refresh any open Brightpearl screens to see the changes"
	},
    "search": {
        "en": "Search",
    },
    "nothing-found": {
        "en": "No matches were found.",
    },
    
    "information": {
        "en": "Information",
    },
	"dateFormat":{
		"en":"Date Format"
	},
		"selectDateFormat":{
		"en" :"Please start by setting the date format you use in Brightpearl.  This is set under<br> <strong>Setup > Company > Other Options > Date Format</strong><br><br>If you don't choose the correct format, you may get errors with some of the modifications"
	},
	"salesProcess": {
        "en": "Sales Process"
    },
	"prompts": {
        "en": "Reminder Prompts"
    },
	"salesProcessDesc": {
        "en": "<em><strong>Current Functionality</strong></em>: Orders can be saved, fulfilled and invoiced without email addresses, phone numbers and delivery dates.  There is no way to force a user to enter these fields<br><br>\
		<em><strong>New Functionality</strong></em>: Warning messages are displayed below the save button to encourage a user to enter the following fields:"
    },
	"missingEmail" : {
		"en": "There should be an email under each address field. Warn me if this is missing"
	},
	"missingPhone" : {
		"en": "There should be a phone number for each address field. Warn me if this is missing"
	},
	"changedEmail" : {
		"en": "<strong>Not working</strong> If I change an email address on a sales order, remind me to update the contact too"
	},
	
	"deliveryDate":{
		"en": "There should be a delivery date for every order. Warn me if this is not set"
	},
	"linkShortcuts": {
		"en": "Links and Shortcuts"
	},
	"intro":{
		"en":"Introduction"
	},
	"linkShortcutsDesc":{
		"en": "Brightpearl is a bundle of links which give it it's functionality. <br>\
		These options modify this functionality slightly for reporting and work-flow changes."
	},
	"fastSearch":{
		"en": "Order Search"
	},
	"fastSearchDesc":{
		"en": "<em><strong>Current Functionality</strong></em>: Standard Brightpearl search functionality opens a list of matching records. If the user has searched using a Brightpearl Order Number, one record is shown which the user must then click on to open the record(redundant step)<br><br>\
		<em><strong>New Functionality</strong></em>: If a user knows a valid Brightpearl Order Number (provided by a customers perhaps), this can be entered into the search box.  <br>\
		Clicking the new button below the normal search area, labelled <em>Fast Order Search</em>, will open a valid Brightpearl Order Number in a new tab (note: invalid numbers will still open but the page will be an error)"
	},
	"enableFastSearch":{
		"en": "Turn on Fast Search"
	},
	"reports":{
		"en" :"Quick  Reports"
	},
	"summaryReports":{
		"en" : "Enable sales summary reports"
	},
	"reportsDesc":{
		"en" :"<em><strong>Current Functionality</strong></em>: Brightpearl has a set of report templates for sales which require you to set the filter properties each time.  You cannot save reports using dynamic values such as 'show me today's sales'.<br><br>\
		<em><strong>New Functionality</strong></em>: Three icons are added to the left hand side of the screen which are short-cuts to open three new reports.\
		<ul>\
			<li><strong>D</strong>: Current Day Invoiced Sales Orders</li>\
			<li><strong>W</strong>: Current Week Invoiced Sales Orders</li>\
			<li><strong>D</strong>: Current Month Invoiced Sales Orders</li>\
		</ul> You must have set the correct Date Format for these reports to work properly<br>"
	},

	"ordersList":{
		"en":	"Change Order List Links"
	},
	"ordersListDesc":{
		"en":	"<em><strong>Current Functionality</strong></em>: When viewing a list of Sales Orders, Credit Notes or Purchase Orders, clicking on the company/contact name will open a new screen showing all sales by that company.\
		This takes the user away from the listing screen which is not always desirable.<br><br> \
		<em><strong>New Functionality</strong></em>: The user is no longer taken away from the listing screen when clicking on the company/contact name. Instead the corresponding contact is opened in a new tab."
	},
	"salesDetails":{
		"en":	"Sales Details"
	},
	"salesDetailsDesc":{
		"en":	"<em><strong>Current Functionality</strong></em>: Most screens relating to a customer have a link to view <em>Orders (detail)</em> which shows a history of customers purchases in the past 6 months. If you want to see a longer history you need to filter the report<br><br>\
		<em><strong>New Functionality</strong></em>: The start date for the <em>Orders (detail)</em> report is set to '01/01/2000' by default"
	},	
	"extendSalesDetails":{
		"en":	"Extend Sales Details"
	},
	"modifyDisplay":{
		"en":	"Modify Display"
	},
	"modifyDisplayDesc":{
		"en":	"These options change the default layout on some screens.  They do not change the underlying data but hopefully help stop errors and speed things up"
	},
	"goodsOutNoteDesc":{
		"en":	"<em><strong>Current Functionality</strong></em>: Goods Out Notes can be sent via email.  This is useful if you have a third party warehouse or you use this in your pick process\
		Currently, customers email addresses are available for selection. Goods Out Notes are not generally sent to customers.<br><br>\
		<em><strong>New Functionality</strong></em>: Customer email addresses are hidden so you can't select them by mistake.  If you populate a default email address, it will be added to the Goods Out Note for you"
		
	},
	"goodsOutNote":{
		"en":	"Goods Out Notes"
	},
	"hideEmail":{
		"en":	"Hide all customers email addresses when emailing a <em>Goods Out Notes</em>"
	},
	"goodsOutEmail":{
		"en":	"Default Email"
	},
	"goodsOutEmailDefault":{
		"en":	"Enter a default email for Goods Out Notes"
	},
	"supplierInvoices":{
		"en":	"Supplier Invoices"
	},
	"supplierInvoicesDesc":{
		"en":	"<em><strong>Current Functionality</strong></em>: When entering Supplier Bills/Invoices in Brightpearl, there are aren't many options for payment terms - only 30 days from today.  <br>\
		The default invoice date does not update to today, which can be a problem if not spotted<br>\
		By default, entering a supplier invoice will overwrite any prices and price breaks in the pricelist<br><br>\
		<em><strong>New Functionality</strong></em>: You can add any of the following payment terms to the Supplier Bill/Invoice screen. Clicking on the link will then calculate the payment due date.\
		<br>You can also override the default invoice date to 'today' and stop updates pricelist price breaks by default"
	},
	"add7days":{
		"en":	"Add 7 days payment terms"
	},
	"add10days":{
		"en":	"Add 10 days payment terms"
	},
	"add14days":{
		"en":	"Add 14 days payment terms"
	},
	"add30days":{
		"en":	"Add 30 days payment terms"
	},
	"add30Eom":{
		"en":	"Add 30 days from EOM payment terms"
	},
	"supplierInvoiceDate":{
		"en":	"Set default invoice/bill date to 'Today'"
	},
	"updatePrices":{
		"en":	"Do not update priceslist prices by default"
	},
	"customerDetail":{
		"en":	"Customer Details"
	},
	"formatCustomerDetailDesc":{
		"en": "<strong>Not working</strong> <strong>Warning!</strong> This process will modify data on screen.  This should be used with caution as it may not have the expected results.<br><br>\
		Sometimes customers/users enter details ALL IN CAPS or as a MIXTURE of CAPS and loWercase. <br>\
		Retyping these details is open to errors.  This option adds a 'right-click' function which updates all details to Proper Case (capital first initial, lowercase the rest)"
	},
	"formatCustomerDetail":{
		"en": "Allow right-click context menu to update customer details"
	}
	
};
