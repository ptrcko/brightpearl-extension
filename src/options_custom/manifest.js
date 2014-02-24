this.manifest = {
    "name": "Extension Settings",
    "icon": "icon.png",
    "settings": [
	
			{
            "tab": i18n.get("introduction"),
            "group": i18n.get("introduction"),
            "name": "introductionDesc",
            "type": "description",
            "text": i18n.get("introductionDesc")
        },
		{
		    "tab": i18n.get("Introduction"),
            "group": i18n.get("dateFormat"),
            "name": "dateFormat",
            "type": "radioButtons",
            "label": i18n.get("selectDateFormat"),
            "options": [
                {
				"text":"AUS/UK - DD/MM/YYYY",
				"value":"dd/mm/yyyy"
				},
				{
				"text":"US - MM/DD/YYYY",
				"value":"mm/dd/yyyy"
				}
			]
            
		},
		
		{
            "tab": i18n.get("salesProcess"),
            "group": i18n.get("prompts"),
            "name": "salesProcessDesc",
            "type": "description",
            "text": i18n.get("salesProcessDesc")
        },
		{	
			"tab": i18n.get("salesProcess"),
            "group": i18n.get("prompts"),
			"name": "missingEmail",
            "type": "checkbox",
            "label": i18n.get("missingEmail")
		},
		{	
			"tab": i18n.get("salesProcess"),
            "group": i18n.get("prompts"),
			"name": "missingPhone",
            "type": "checkbox",
            "label": i18n.get("missingPhone")
		},
		{	
			"tab": i18n.get("salesProcess"),
            "group": i18n.get("prompts"),
			"name": "deliveryDate",
            "type": "checkbox",
            "label": i18n.get("deliveryDate")
		},
		{
            "tab": i18n.get("linkShortcuts"),
            "group": i18n.get("intro"),
            "name": "linkShortcutsDesc",
            "type": "description",
            "text": i18n.get("linkShortcutsDesc")		
		},
		{
		    "tab": i18n.get("linkShortcuts"),
            "group": i18n.get("fastSearch"),
            "name": "fastSearchDesc",
            "type": "description",
            "text": i18n.get("fastSearchDesc")	
		},
		{
		    "tab": i18n.get("linkShortcuts"),
            "group": i18n.get("fastSearch"),
            "name": "enableFastSearch",
            "type": "checkbox",
            "label": i18n.get("enableFastSearch")	
		},
		{
            "tab": i18n.get("linkShortcuts"),
            "group": i18n.get("reports"),
            "name": "reportsDesc",
            "type": "description",
            "text": i18n.get("reportsDesc")		
		},
		{
			"tab": i18n.get("linkShortcuts"),
            "group": i18n.get("reports"),
			"name": "summaryReports",
            "type": "checkbox",
            "label": i18n.get("summaryReports")
		},

		{
            "tab": i18n.get("linkShortcuts"),
            "group": i18n.get("ordersList"),
            "name": "ordersListDesc",
            "type": "description",
            "text": i18n.get("ordersListDesc")		
		},
		{
			"tab": i18n.get("linkShortcuts"),
            "group": i18n.get("ordersList"),
			"name": "ordersList",
            "type": "checkbox",
            "label": i18n.get("ordersList")
		},
		{
            "tab": i18n.get("linkShortcuts"),
            "group": i18n.get("salesDetails"),
            "name": "salesDetailsDesc",
            "type": "description",
            "text": i18n.get("salesDetailsDesc")		
		},
		{
			"tab": i18n.get("linkShortcuts"),
            "group": i18n.get("salesDetails"),
			"name": "extendSalesDetails",
            "type": "checkbox",
            "label": i18n.get("extendSalesDetails")
		},

		{
            "tab": i18n.get("modifyDisplay"),
            "group": i18n.get("intro"),
            "name": "modifyDisplayDesc",
            "type": "description",
            "text": i18n.get("modifyDisplayDesc")		
		},
		{
            "tab": i18n.get("modifyDisplay"),
            "group": i18n.get("goodsOutNote"),
            "name": "goodsOutNoteDesc",
            "type": "description",
            "text": i18n.get("goodsOutNoteDesc")		
		},
		{
			"tab": i18n.get("modifyDisplay"),
            "group": i18n.get("goodsOutNote"),
			"name": "hideEmail",
            "type": "checkbox",
            "label": i18n.get("hideEmail")
		},
		{
			"tab": i18n.get("modifyDisplay"),
            "group": i18n.get("goodsOutNote"),
			"name": "goodsOutEmail",
            "type": "text",
			"text": i18n.get("goodsOutEmailDefault"),
            "label": i18n.get("goodsOutEmail")
		},
		{
            "tab": i18n.get("modifyDisplay"),
            "group": i18n.get("supplierInvoices"),
            "name": "supplierInvoicesDesc",
            "type": "description",
            "text": i18n.get("supplierInvoicesDesc")		
		},
		{
			"tab": i18n.get("modifyDisplay"),
            "group": i18n.get("supplierInvoices"),
			"name": "invoice7days",
            "type": "checkbox",
            "label": i18n.get("add7days")
		},

		{
			"tab": i18n.get("modifyDisplay"),
            "group": i18n.get("supplierInvoices"),
			"name": "invoice10days",
            "type": "checkbox",
            "label": i18n.get("add10days")
		},
		{
			"tab": i18n.get("modifyDisplay"),
            "group": i18n.get("supplierInvoices"),
			"name": "invoice14days",
            "type": "checkbox",
            "label": i18n.get("add14days")
		},
		{
			"tab": i18n.get("modifyDisplay"),
            "group": i18n.get("supplierInvoices"),
			"name": "invoice30days",
            "type": "checkbox",
            "label": i18n.get("add30days")
		},
		{
			"tab": i18n.get("modifyDisplay"),
            "group": i18n.get("supplierInvoices"),
			"name": "invoice30Eom",
            "type": "checkbox",
            "label": i18n.get("add30Eom")
		},
		{
			"tab": i18n.get("modifyDisplay"),
            "group": i18n.get("supplierInvoices"),
			"name": "supplierInvoiceDate",
            "type": "checkbox",
            "label": i18n.get("supplierInvoiceDate")
		},		
		{
			"tab": i18n.get("modifyDisplay"),
            "group": i18n.get("supplierInvoices"),
			"name": "updatePrices",
            "type": "checkbox",
            "label": i18n.get("updatePrices")
		}
	]
};