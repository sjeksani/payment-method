package org.kp.web.paymentmethod.use;


import java.io.StringWriter;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.cq.sightly.WCMUsePojo;
import com.day.cq.commons.TidyJSONWriter;

/**
 * AccountCCViewUse class is responsible to read the authored content for the Account Credit Card View component.
 * 
 * @author Jai Parkash
 *
 */

public class AccountCCViewUse extends WCMUsePojo {
  private static final Logger LOGGER = LoggerFactory.getLogger(AccountCCViewUse.class);
  private boolean debugEnabled = LOGGER.isDebugEnabled();

  private static final String CARD_NUMBER_LBL = "cardnumberlbl";
  private static final String CARD_NUMBER_ERRMESG = "cardnumber_errmsg";
  private static final String EXPIRATION_DATE_LBL = "expirationdatelbl";
  private static final String EXPIRATION_DATE_ERRMSG = "expirationdate_errmsg";
  private static final String MONTH_LBL = "monthlbl";
  private static final String YEAR_LBL = "yearlbl";
  private static final String CARD_TYPES_LBL = "cardtypeslbl";

  private static final String FNAME_LABEL = "firstname";
  private static final String MNAME_LABEL = "miname";
  private static final String LNAME_LABEL = "lastname";
  private static final String DEFAULT_PAYMENT_TEXT= "default_pmt_text";
  private static final String DEFAULT_PAYMENT_METHOD_LBL= "default_pmt_method_lbl";  
  private static final String SAVE_METHOD_LBL= "save_method_lbl";  
  private static final String PAYMENT_METHOD_NICKNAME_LBL= "account_nickname_lbl";  
 
  private static final String NAMEONCARD_LBL= "nameoncard_lbl"; 
  //private static final String MODAL_NAMEONACCOUNT_LBL = "nameonacct_lbl"; may have to be removed from dialog box...
  private static final String EDITMODAL_TEXT= "editpmtmodal_text";

  private static final String JSON_COMP_NAME="compname";
  
  private String cardNumberLabel="";  
  private String expirationDateLabel="";  
  private String monthLabel="";  
  private String yearLabel="";  
  private String cardTypesLabel="";  
  private String cardNumberErrMsg=""; 
  private String expirationDateErrMsg="";
  
  private String fnameLabel="";
  private String minameLabel="";
  private String lnameLabel="";
  private String defaultPaymentText="";
  private String defaultPaymentMethodLabel="";  
  private String saveMethodLabel=""; 
  private String paymentMethodNickNameLabel=""; 
  
  private String nameOnCardLabel=""; 
  private String modalNameOnAcctLabel="";
  private String editModalText=""; 

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
	        cardNumberLabel = props.get(CARD_NUMBER_LBL, "");
	        expirationDateLabel = props.get(EXPIRATION_DATE_LBL, "");
	        monthLabel = props.get(MONTH_LBL, "");
	        yearLabel = props.get(YEAR_LBL, "");
	        cardTypesLabel = props.get(CARD_TYPES_LBL, "");
	        cardNumberErrMsg = props.get(CARD_NUMBER_ERRMESG, "");
	        expirationDateErrMsg = props.get(EXPIRATION_DATE_ERRMSG, "");
	        
	        fnameLabel = props.get(FNAME_LABEL, "");
	        minameLabel = props.get(MNAME_LABEL, "");
	        lnameLabel = props.get(LNAME_LABEL, "");
	        defaultPaymentText=props.get(DEFAULT_PAYMENT_TEXT, "");
	        defaultPaymentMethodLabel=props.get(DEFAULT_PAYMENT_METHOD_LBL, "");
	        saveMethodLabel=props.get(SAVE_METHOD_LBL, "");
	        paymentMethodNickNameLabel=props.get(PAYMENT_METHOD_NICKNAME_LBL, "");

	        nameOnCardLabel= props.get(NAMEONCARD_LBL, "");
//	        modalNameOnAcctLabel = props.get(MODAL_NAMEONACCOUNT_LBL, "");
	        editModalText = props.get(EDITMODAL_TEXT, "");

	        
	    } catch (Exception e){
	    	LOGGER.error("Exception while loading AccountCCViewUse:" + e.getMessage());
	    }
		if (debugEnabled)
			LOGGER.debug("Done -- Activating");

  }

  /**
   * This method is responsible for to get the card number label  text.
   * 
   * @return String
   */
  public String getCardNumberLabel() {
    return cardNumberLabel;
  }

  /**
   * This method is responsible for to get the expiration date label  text.
   * 
   * @return String
   */
  public String getExpirationDateLabel() {
    return expirationDateLabel;
  }
 
  /**
   * This method is responsible for to get the year label  text.
   * 
   * @return String
   */
  public String getYearLabel() {
    return yearLabel;
  }
  
  /**
   * This method is responsible for to get the month label  text.
   * 
   * @return String
   */
  public String getMonthLabel() {
    return monthLabel;
  }
  
  /**
   * This method is responsible for to get the card types label text.
   * 
   * @return String
   */
  public String getCardTypesLabel() {
    return   cardTypesLabel;
  }
  
  
  /**
   * This method is responsible for to get card number error message text.
   * 
   * @return String
   */
  public String getCardNumberErrMsg() {
    return cardNumberErrMsg;
  }
  
  /**
   * This method is responsible for to get expired error message text.
   * 
   * @return String
   */
  public String getExpirationDateErrMsg() {
    return expirationDateErrMsg;
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
     * This method is responsible to get the name on card label.
     * 
     * @return String
     */
    public String getNameOnCardLabel() {
      return nameOnCardLabel;
    }
    
    /**
     * This method is responsible to get the edit modal text.
     * 
     * @return String
     */
    public String getEditModalText() {
      return editModalText;
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
	      jsonWriter.key(CARD_NUMBER_LBL).value(cardNumberLabel);
	      jsonWriter.key(EXPIRATION_DATE_LBL).value(expirationDateLabel);
	      jsonWriter.key(MONTH_LBL).value(monthLabel);
	      jsonWriter.key(YEAR_LBL).value(yearLabel);
	      jsonWriter.key(CARD_TYPES_LBL).value(cardTypesLabel);
	      jsonWriter.key(CARD_NUMBER_ERRMESG).value(cardNumberErrMsg);
	      jsonWriter.key(EXPIRATION_DATE_ERRMSG).value(expirationDateErrMsg);
	      
//	      jsonWriter.key(MODAL_NAMEONACCOUNT_LBL).value(modalNameOnAcctLabel);

	      jsonWriter.endObject();
      } catch (Exception e){
    	  LOGGER.error("Error in getJSON:"+ e.getMessage());
      }
      return wrt.toString();

  }

}
