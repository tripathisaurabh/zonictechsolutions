# zonictechsolutions
# zonictechsolutions



void Confirm_Document_upload(int tax_id)
{
	moduleAPI = "Tax_File_Requests";
	recordId = tax_id.toString();
	// 1) GET blueprint (available transitions for this record)
	bp = invokeurl
	[
		url :"https://www.zohoapis.ca/crm/v8/" + moduleAPI + "/" + recordId + "/actions/blueprint"
		type :GET
		connection:"zohocrm_connection"
	];
	info bp;
	if(bp == null || bp.get("blueprint") == null || bp.get("blueprint").isEmpty())
	{
		info "No blueprint found for this record.";
		//return;
	}
	else
	{
		blueprintObj = bp.get("blueprint").get(1);
			//info blueprintObj;
		//currentstage = blueprintObj.get("1").get("process_info").get("field_value");
		info currentstage;
		// 	if (currentstage  ="Upload Link Issued")
		// {
		//  	transitions = blueprintObj.get("transitions");
		// // 	// 2) Find the transition id by button name
		// 	targetName = "All Documents Uploaded";
		// 	transitionId = null;
		// 	nextTransitions = transitions.get("next_transitions");
		// 	for each  t in transitions
		// 	{
		// 		if(t.get("name") == targetName)
		// 		{
		// 			transitionId = t.get("id");
		// 		}
		// 	}
		// 	if(transitionId == null)
		// 	{
		// 		info "Transition not available right now. Check current stage + criteria. Expected: " + targetName;
		// 		info "Available transitions: " + nextTransitions;
		// 		return;
		// 	}
		// // 	// 3) Optional: update fields during transition
		// // 	dataMap = Map();
		// // 	dataMap.put("Substatus","All Documents Uploaded");
		// // 	// make sure field API name is correct
		// // 	// 4) PUT blueprint transition
		// // 	blueprint1 = Map();
		// // 	blueprint1.put("transition_id",transitionId);
		// // 	blueprint1.put("data",dataMap);
		// // 	blueprintList = List();
		// // 	blueprintList.add(blueprint1);
		// // 	param = Map();
		// // 	param.put("blueprint",blueprintList);
		// // 	resp = invokeurl
		// // 	[
		// // 		url :"https://www.zohoapis.com/crm/v8/" + moduleAPI + "/" + recordId + "/actions/blueprint"
		// // 		type :PUT
		// // 		parameters:param.toString()
		// // 		connection:"zohocrm_connection"
		// // 	];
		// // 	info "Blueprint updated: " + resp;
		// }
}
}

## Contact form → Zoho CRM

The contact form posts to `/api/lead`, which creates a Lead in Zoho CRM using OAuth.

Add these to `.env.local` (do **not** commit secrets):

```
ZOHO_REFRESH_TOKEN=your_refresh_token
ZOHO_CLIENT_ID=your_client_id
ZOHO_CLIENT_SECRET=your_client_secret
# India accounts domain (from your link)
ZOHO_ACCOUNTS_DOMAIN=https://accounts.zoho.in
# Optional overrides
ZOHO_API_DOMAIN=https://www.zohoapis.in
ZOHO_CRM_API_VERSION=v2
```
