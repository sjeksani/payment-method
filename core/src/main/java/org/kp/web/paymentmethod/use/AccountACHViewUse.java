package org.kp.web.paymentmethod.use;


import java.io.StringWriter;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.cq.sightly.WCMUsePojo;
import com.day.cq.commons.TidyJSONWriter;

/**
 * AccountACHViewUse class is responsible to read the authored content for the Account ACH View component.
 * 
 * @author Jai Parkash
 *
 */

public class AccountACHViewUse extends WCMUsePojo {
  private static final Logger LOGGER = LoggerFactory.getLogger(AccountACHViewUse.class);
  private boolean debugEnabled = LOGGER.isDebugEnabled();

  private static final String ROUTING_NUMBER_LBL = "routingnumberlbl";
  private static final String ACCOUNT_NUMBER_LBL = "accountnumberlbl";
  private static final String CONFIRM_ACCOUNT_NUMBER_LBL = "confirmaccountnumberlbl";
  private static final String TOOLTIP_ICON_NAME = "tooltipiconname";
  private static final String TOOLTIP_ASSET = "tooltipasset";
  private static final String ACH_MODAL_TEXT = "editpmtmodal_ach_text";
  private static final String MODAL_NAMEONACCOUNT_LBL = "nameonacct_lbl";
  private static final String MODAL_ACCTNUMBER_LBL = "acctnumberlbl";
  private static final String TOOLTIP_BOX_TITLE = "tooltip_title"; 
  private static final String SAVINGS_ACCT_DISMSG = "savigsacct_dismsg";   
  private static final String ACCOUNT_NUMBER_ERRMSG = "accountnumber_errmsg";

  private static final String FNAME_LABEL = "firstname";
  private static final String MNAME_LABEL = "miname";
  private static final String LNAME_LABEL = "lastname";
  private static final String DEFAULT_PAYMENT_TEXT= "default_pmt_text";
  private static final String DEFAULT_PAYMENT_METHOD_LBL= "default_pmt_method_lbl";  
  private static final String SAVE_METHOD_LBL= "save_method_lbl";  
  private static final String PAYMENT_METHOD_NICKNAME_LBL= "account_nickname_lbl";  

  private String fnameLabel="";
  private String minameLabel="";
  private String lnameLabel="";
  private String defaultPaymentText="";
  private String defaultPaymentMethodLabel="";  
  private String saveMethodLabel=""; 
  private String paymentMethodNickNameLabel=""; 
  
  private static final String JSON_COMP_NAME="compname";
  
  private String routingNumberLabel="";  
  private String accountNumberLabel="";  
  private String confirmAccountNumberLabel="";  
  private String toolTipIconName="";  
  private String accountNumberErrMsg=""; 
  
  private String tooltipAsset="";  
  private String achModalText="";  
  private String modalNameOnAcctLabel="";  
  private String modalAcctNumberLabel="";  
  private String tooltipBoxTitle="";
  private String savingsAcctDisMsg="";
   
  private  String componentText; // to  return the text property value
  private  String compName="";                                            

  
  @Override
  public void activate() throws Exception {
	  	if (debugEnabled)
			LOGGER.debug("Activating");
	    try{
	    	// Special Processing in CC comp and ACH comp to get properties from parent.
	    	Resource resource = getResource().getParent();
	    	compName=getResource().getName();
	    	componentText = "";
	    	
	        ValueMap props = resource.getValueMap();
	        routingNumberLabel = props.get(ROUTING_NUMBER_LBL, "");
	        accountNumberLabel = props.get(ACCOUNT_NUMBER_LBL, "");
	        confirmAccountNumberLabel = props.get(CONFIRM_ACCOUNT_NUMBER_LBL, "");
	        toolTipIconName = props.get(TOOLTIP_ICON_NAME, "");
	        accountNumberErrMsg = props.get(ACCOUNT_NUMBER_ERRMSG, "");
	        
	        tooltipAsset = props.get(TOOLTIP_ASSET, "");
	        achModalText = props.get(ACH_MODAL_TEXT, "");
	        modalNameOnAcctLabel = props.get(MODAL_NAMEONACCOUNT_LBL, "");
	        modalAcctNumberLabel = props.get(MODAL_ACCTNUMBER_LBL, "");
	        tooltipBoxTitle = props.get(TOOLTIP_BOX_TITLE, "");
	        savingsAcctDisMsg = props.get(SAVINGS_ACCT_DISMSG, "");

	        
	        fnameLabel = props.get(FNAME_LABEL, "");
	        minameLabel = props.get(MNAME_LABEL, "");
	        lnameLabel = props.get(LNAME_LABEL, "");
	        defaultPaymentText=props.get(DEFAULT_PAYMENT_TEXT, "");
	        defaultPaymentMethodLabel=props.get(DEFAULT_PAYMENT_METHOD_LBL, "");
	        saveMethodLabel=props.get(SAVE_METHOD_LBL, "");
	        paymentMethodNickNameLabel=props.get(PAYMENT_METHOD_NICKNAME_LBL, "");

	        
	    } catch (Exception e){
	    	LOGGER.error("Exception while loading AccountACHViewUse:" + e.getMessage());
	    }
		if (debugEnabled)
			LOGGER.debug("Done -- Activating");

  }

  /**
   * This method is responsible for to get the routing number label text.
   * 
   * @return String
   */
  public String getRoutingNumberLabel() {
    return routingNumberLabel;
  }
  
  /**
   * This method is responsible for to get the account number label text.
   * 
   * @return String
   */
  public String getAccountNumberLabel() {
    return accountNumberLabel;
  }
  
  /**
   * This method is responsible for to get the confirm account number label text.
   * 
   * @return String
   */
  public String getConfirmAccountNumberLabel() {
    return confirmAccountNumberLabel;
  }
  
  /**
   * This method is responsible for to get the confirm tool tip icon name.
   * 
   * @return String
   */
  public String getToolTipIconName() {
    return toolTipIconName;
  }
  
  /**
   * This method is responsible for to get the confirm tool tip icon name.
   * 
   * @return String
   */
  public String getAccountNumberErrMsg() {
    return accountNumberErrMsg;
  }
  

  /**
   * This method is responsible to get the first name label.
   * 
   * @return String
   */
  public String getFNameLabel() {
    return fnameLabel;
  }

    /**
     * This method is responsible to get the middle initial name label.
     * 
     * @return String
     */
    public String getMINameLabel() {
      return minameLabel;
    }
   
    /**
     * This method is responsible to get the last name label.
     * 
     * @return String
     */
    public String getLNameLabel() {
      return lnameLabel;
    }
    /**
     * This method is responsible to get the default payment text.
     * 
     * @return String
     */
    public String getDefaultPaymentText() {
      return defaultPaymentText;
    }
    
    /**
     * This method is responsible to get the default payment method label.
     * 
     * @return String
     */
    public String getDefaultPaymentMethodLabel() {
      return defaultPaymentMethodLabel;
    }
    
    /**
     * This method is responsible to get the save method label.
     * 
     * @return String
     */
    public String getSaveMethodLabel() {
      return saveMethodLabel;
    }
    
    /**
     * This method is responsible to get the payment method nickname label.
     * 
     * @return String
     */
    public String getPaymentMethodNickNameLabel() {
      return paymentMethodNickNameLabel;
    }
    
    /**
     * This method is responsible to get the modal account number label.
     * 
     * @return String
     */
    public String getModalAcctNumberLabel() {
      return modalAcctNumberLabel;
    }

    /**
     * This method is responsible to get the savings account disclaimer message.
     * 
     * @return String
     */
    public String getSavingsAcctDisMsg() {
      return savingsAcctDisMsg;
    }
    
  /**
   * Return the JSON representation of content authored data
   * 
   * @return String
   */
  public String getJSON() {
	    // write JSON string o/p iterating over the list
	  StringWriter wrt = new StringWriter();
      TidyJSONWriter jsonWriter = new TidyJSONWriter(wrt);
      jsonWriter.setTidy(true);
      try {      
	      jsonWriter.object();
	      jsonWriter.key(JSON_COMP_NAME).value(compName);
	      jsonWriter.key(ROUTING_NUMBER_LBL).value(routingNumberLabel);
	      jsonWriter.key(ACCOUNT_NUMBER_LBL).value(accountNumberLabel);
	      jsonWriter.key(CONFIRM_ACCOUNT_NUMBER_LBL).value(confirmAccountNumberLabel);
	      jsonWriter.key(TOOLTIP_ICON_NAME).value(toolTipIconName);
	      jsonWriter.key(ACCOUNT_NUMBER_ERRMSG).value(accountNumberErrMsg);

	      jsonWriter.key(TOOLTIP_ASSET).value(tooltipAsset);
	      jsonWriter.key(ACH_MODAL_TEXT).value(achModalText);
	      jsonWriter.key(MODAL_NAMEONACCOUNT_LBL).value(modalNameOnAcctLabel);
	      jsonWriter.key(MODAL_ACCTNUMBER_LBL).value(modalAcctNumberLabel);      
	      jsonWriter.key(TOOLTIP_BOX_TITLE).value(tooltipBoxTitle);
	      jsonWriter.key(SAVINGS_ACCT_DISMSG).value(savingsAcctDisMsg);

	      jsonWriter.endObject();
      } catch (Exception e){
    	  LOGGER.error("Error in getJSON:"+ e.getMessage());
      }
      return wrt.toString();

  }

}
