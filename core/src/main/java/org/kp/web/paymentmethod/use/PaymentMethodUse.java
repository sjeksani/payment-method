package org.kp.web.paymentmethod.use;


import java.io.StringWriter;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.cq.sightly.WCMUsePojo;
import com.day.cq.commons.TidyJSONWriter;

/**
 * PaymentMethodUse class is responsible to read the authored content for the Payment Method component.
 * 
 * @author Jai Parkash
 *
 */

public class PaymentMethodUse extends WCMUsePojo {
  private static final Logger LOGGER = LoggerFactory.getLogger(PaymentMethodUse.class);
  private boolean debugEnabled = LOGGER.isDebugEnabled();

  private static final String AUTHOR_AEM_VIEW = "authorDisplayAEMView";
  private static final String TITLE = "title";
  private static final String SUB_TITLE = "subtitle";
  private static final String FORM_INSTR = "forminstr";
  private static final String PMT_TYPE_LABEL = "pmttype";
  private static final String PMT_TYPE_CC_LABEL = "pmttype_opt_cc_lbl";
  private static final String PMT_TYPE_SA_LABEL = "pmttype_opt_sa_lbl";
  private static final String PMT_TYPE_CA_LABEL = "pmttype_opt_ca_lbl";
  private static final String FNAME_LABEL = "firstname";
  private static final String MNAME_LABEL = "miname";
  private static final String LNAME_LABEL = "lastname";
  
  private static final String DEFAULT_PAYMENT_TEXT= "default_pmt_text";
  private static final String DEFAULT_PAYMENT_METHOD_LBL= "default_pmt_method_lbl";  
  private static final String SAVE_METHOD_LBL= "save_method_lbl";  
  private static final String PAYMENT_METHOD_NICKNAME_LBL= "account_nickname_lbl";  

  private static final String BUTTON_CANCEL_LBL= "btn_cancel_lbl";  
  private static final String BUTTON_BACK_LBL= "btn_back_lbl";  
  private static final String BUTTON_NEXT_LBL= "btn_next_lbl"; 
  private static final String PMTLIST_EDIT_LINK_LBL= "btn_edit_lbl"; 
  private static final String PMTLIST_DELETE_LINK_LBL= "btn_delete_lbl"; 
  private static final String PMTLIST_DEFAULTPMTMETHOD_TEXT= "default_pmt_method"; 
  private static final String PMTLIST_NEWPMTMETHOD_TEXT= "new_pmt_method_lbl"; 
  private static final String PMTLIST_EXPIRED_TEXT= "expired_lbl"; 
  private static final String DELETEMODAL_TEXT= "deletepmtmodal_text"; 
  private static final String DELETEMODAL_BUTTON_BACK_LBL= "deletepmtmodal_btn_delete_lbl"; 
  private static final String DELETEMODAL_BUTTON_CANCEL_LBL= "deletepmtmodal_btn_cancel_lbl";  
  private static final String EDITMODAL_TEXT= "editpmtmodal_text";
  private static final String NAMEONCARD_LBL= "nameoncard_lbl"; 
  private static final String NA_LBL= "nalabel"; 
  private static final String TIP_ICON_ERR_MSG= "tipiconerrmsg"; 

 	
  private static final String FNAME_ERRMSG = "firstname_errmsg";
  private static final String LNAME_ERRMSG = "lastname_errmsg";
  private static final String NOTIFICATION_ERRMSG_TITLE = "notification_errmsg_title";
  private static final String NOTIFICATION_ERRMSG_TEXT = "notification_errmsg_text";
  private static final String INVALID_EXPIRATION_DATE_ERRMSG_TEXT = "invalidexpirationdate_errmsg";
  private static final String ERR_NOTIFICATION_ERRMSG_TITLE = "errnotification_errmsg_title";
  private static final String ERR_NOTIFICATION_ERRMSG_TEXT = "errnotification_errmsg_text";
 

  private static final String JSON_COMP_NAME="compname";
  private static final String JSON_PAYMENT_TYPES="payment_types";
  private static final String JSON_VALUE_ATTR="value";
  private static final String JSON_TEXT_ATTR="text";
  private static final String JSON_PAYMENT_LIST="payment_list"; 

  
  private static final String PAYMENT_TYPE_CC_KEY="CC";
  private static final String PAYMENT_TYPE_CA_KEY="CA";
  private static final String PAYMENT_TYPE_SA_KEY="SA";

  private String authorAEMView="";  
  private String title="";
  private String subTitle="";
  private String formInstruction="";
  private String pmtTypeLabel="";
  private String pmtTypeCCLabel="";
  private String pmtTypeCALabel="";
  private String pmtTypeSALabel="";
  private String fnameLabel="";
  private String minameLabel="";
  private String lnameLabel="";
  
  private String defaultPaymentText="";
  private String defaultPaymentMethodLabel="";  
  private String saveMethodLabel=""; 
  private String paymentMethodNickNameLabel=""; 
  
  private String buttonCancelLabel=""; 
  private String buttonBackLabel= "";  
  private String buttonNextLabel= ""; 
  private String buttonEditLabel=""; 
  private String buttonDeleteLabel= "";  
  private String defaultPaymentMethodText= ""; 
  private String newPaymentMethodText= "";
  private String expiredPaymentMethodText= ""; 
  
  private String deleteModalText=""; 
  private String deleteModalBtnBackLabel= "";  
  private String deleteModalBtnCancelLabel= ""; 
  private String editModalText=""; 
  private String nameOnCardLabel= "";  
  private String naLabel= ""; 
  private String tipIconErrMsg= ""; 
  
  private String fname_errmsg="";
  private String lname_errmsg="";
  private String notification_title_errmsg="";
  private String notification_text_errmsg="";
  private String invalid_expiration_date_text_errmsg="";
  private String err_notification_title_errmsg="";
  private String err_notification_text_errmsg="";
  
  private  String componentText; // to  return the text property value
  private  String compName="";                                            

  
  @Override
  public void activate() throws Exception {
	  	if (debugEnabled)
			LOGGER.debug("Activating");
	    try{
	    	Resource resource = getResource();
	    	compName=resource.getName();
	    	componentText = "";
	    	
	        ValueMap props = resource.getValueMap();
	        title = props.get(TITLE, "");
	        subTitle = props.get(SUB_TITLE, "");
	        formInstruction = props.get(FORM_INSTR, "");
	        authorAEMView = props.get(AUTHOR_AEM_VIEW, "");
	        pmtTypeLabel = props.get(PMT_TYPE_LABEL, "");
	        pmtTypeCCLabel = props.get(PMT_TYPE_CC_LABEL, "");
	        pmtTypeCALabel = props.get(PMT_TYPE_CA_LABEL, "");
	        pmtTypeSALabel =  props.get(PMT_TYPE_SA_LABEL, "");	        
	        fnameLabel = props.get(FNAME_LABEL, "");
	        minameLabel = props.get(MNAME_LABEL, "");
	        lnameLabel = props.get(LNAME_LABEL, "");
	        
	        defaultPaymentText=props.get(DEFAULT_PAYMENT_TEXT, "");
	        defaultPaymentMethodLabel=props.get(DEFAULT_PAYMENT_METHOD_LBL, "");
	        saveMethodLabel=props.get(SAVE_METHOD_LBL, "");
	        paymentMethodNickNameLabel=props.get(PAYMENT_METHOD_NICKNAME_LBL, "");
	        
	        buttonCancelLabel=props.get(BUTTON_CANCEL_LBL, "");
	        buttonBackLabel= props.get(BUTTON_BACK_LBL, "");
	        buttonNextLabel= props.get(BUTTON_NEXT_LBL, "");

	        buttonEditLabel=props.get(PMTLIST_EDIT_LINK_LBL, "");
	        buttonDeleteLabel= props.get(PMTLIST_DELETE_LINK_LBL, "");
	        defaultPaymentMethodText= props.get(PMTLIST_DEFAULTPMTMETHOD_TEXT, "");
	        newPaymentMethodText= props.get(PMTLIST_NEWPMTMETHOD_TEXT, "");
	        expiredPaymentMethodText= props.get(PMTLIST_EXPIRED_TEXT, "");	        

	        deleteModalText=props.get(DELETEMODAL_TEXT, "");
	        deleteModalBtnBackLabel= props.get(DELETEMODAL_BUTTON_BACK_LBL, "");
	        deleteModalBtnCancelLabel= props.get(DELETEMODAL_BUTTON_CANCEL_LBL, "");
	        editModalText= props.get(EDITMODAL_TEXT, "");
	        nameOnCardLabel= props.get(NAMEONCARD_LBL, "");	 
	        naLabel= props.get(NA_LBL, "");	
	        tipIconErrMsg= props.get(TIP_ICON_ERR_MSG, "");	
        
	       	
	        fname_errmsg = props.get(FNAME_ERRMSG, "");
	        lname_errmsg = props.get(LNAME_ERRMSG, "");
	        notification_title_errmsg = props.get(NOTIFICATION_ERRMSG_TITLE, "");
	        notification_text_errmsg = props.get(NOTIFICATION_ERRMSG_TEXT, "");
	        invalid_expiration_date_text_errmsg = props.get(INVALID_EXPIRATION_DATE_ERRMSG_TEXT, "");
	        err_notification_title_errmsg = props.get(ERR_NOTIFICATION_ERRMSG_TITLE, "");
	        err_notification_text_errmsg = props.get(ERR_NOTIFICATION_ERRMSG_TEXT, "");
	        	        
	    } catch (Exception e){
	    	LOGGER.error("Exception while loading PaymentMethodUse:" + e.getMessage());
	    }
		if (debugEnabled)
			LOGGER.debug("Done -- Activating");

  }

  /**
   * This method is responsible for to get the title text.
   * 
   * @return String
   */
  public String getTitle() {
    return title;
  }

  /**
   * This method is responsible to get the sub title text.
   * 
   * @return String
   */
  public String getSubTitle() {
    return subTitle;
  }
 
  /**
   * This method is responsible to get the form instruction text.
   * 
   * @return String
   */
  public String getFormInstruction() {
    return formInstruction;
  }

//  /**
//   * This method is responsible to get the author view to display.
//   * 
//   * @return String
//   */
//  public String getAuthorAEMView() {
//    return authorAEMView;
//  }  
   
  /**
   * This method is responsible to get payment type label.
   * 
   * @return String
   */
  public String getPMTTypeLabel() {
    return pmtTypeLabel;
  }
  
/**
 * This method is responsible to get payment type credit card option label.
 * 
 * @return String
 */
public String getPMTTypeCCLabel() {
  return pmtTypeCCLabel;
}

/**
 * This method is responsible to get payment type checking account option label.
 * 
 * @return String
 */
public String getPMTTypeCALabel() {
  return pmtTypeCALabel;
}

/**
 * This method is responsible to get payment type savings account option label.
 * 
 * @return String
 */
public String getPMTTypeSALabel() {
  return pmtTypeSALabel;
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
   * This method is responsible to get the cancel button label.
   * 
   * @return String
   */
  public String getButtonCancelLabel() {
    return buttonCancelLabel;
  }
  
  /**
   * This method is responsible to get the back button label.
   * 
   * @return String
   */
  public String getButtonBackLabel() {
    return buttonBackLabel;
  }
  
  /**
   * This method is responsible to get the next button label.
   * 
   * @return String
   */
  public String getButtonNextLabel() {
    return buttonNextLabel;
  }

  /**
   * This method is responsible to get the payment type credit card key value.
   * 
   * @return String
   */
  public String getPaymentTypeCCKey() {
    return PAYMENT_TYPE_CC_KEY;
  }
  /**
   * This method is responsible to get the payment type credit card key value.
   * 
   * @return String
   */
  public String getPaymentTypeCAKey() {
    return PAYMENT_TYPE_CA_KEY;
  }
  /**
   * This method is responsible to get the payment type credit card key value.
   * 
   * @return String
   */
  public String getPaymentTypeSAKey() {
    return PAYMENT_TYPE_SA_KEY;
  }

  /**
   * This method is responsible to get the new payment method text.
   * 
   * @return String
   */
  public String getNewPaymentMethodText() {
    return newPaymentMethodText;
  }
	
  /**
   * This method is responsible to get the name of icon that is used for error message.
   * 
   * @return String
   */
  public String getTipIconErrMsg() {
    return tipIconErrMsg;
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
	      jsonWriter.key(TITLE).value(title); 
	      jsonWriter.key(SUB_TITLE).value(subTitle); 	
	      
	      // PAYMENT TYPES LABELS AND KEYS 
	      jsonWriter.key(JSON_PAYMENT_TYPES).array();
	      	jsonWriter.object();
	      	jsonWriter.key(JSON_VALUE_ATTR).value(PAYMENT_TYPE_CC_KEY);
	      	jsonWriter.key(JSON_TEXT_ATTR).value(pmtTypeCCLabel);
	      	jsonWriter.endObject();
	      	jsonWriter.object();
	      	jsonWriter.key(JSON_VALUE_ATTR).value(PAYMENT_TYPE_CA_KEY);
	      	jsonWriter.key(JSON_TEXT_ATTR).value(pmtTypeCALabel);
	      	jsonWriter.endObject();	      	
	      	jsonWriter.object();
	      	jsonWriter.key(JSON_VALUE_ATTR).value(PAYMENT_TYPE_SA_KEY);
	      	jsonWriter.key(JSON_TEXT_ATTR).value(pmtTypeSALabel);
	      	jsonWriter.endObject();
		  jsonWriter.endArray();		  

		  // Error messages 
	      jsonWriter.key(FNAME_ERRMSG).value(fname_errmsg); 
	      jsonWriter.key(LNAME_ERRMSG).value(lname_errmsg);
	      jsonWriter.key(NOTIFICATION_ERRMSG_TITLE).value(notification_title_errmsg); 
	      jsonWriter.key(NOTIFICATION_ERRMSG_TEXT).value(notification_text_errmsg);
	      jsonWriter.key(INVALID_EXPIRATION_DATE_ERRMSG_TEXT).value(invalid_expiration_date_text_errmsg); 
	      jsonWriter.key(ERR_NOTIFICATION_ERRMSG_TITLE).value(err_notification_title_errmsg);
	      jsonWriter.key(ERR_NOTIFICATION_ERRMSG_TEXT).value(err_notification_text_errmsg); 
	      jsonWriter.key(TIP_ICON_ERR_MSG).value(tipIconErrMsg); 
	
	      // Payment List Text/Labels/Messgaes
	      jsonWriter.key(JSON_PAYMENT_LIST).array();
	      	jsonWriter.object();
	    	jsonWriter.key(PMTLIST_EDIT_LINK_LBL).value(buttonEditLabel);
	    	jsonWriter.key(PMTLIST_DELETE_LINK_LBL).value(buttonDeleteLabel);
	    	jsonWriter.key(PMTLIST_DEFAULTPMTMETHOD_TEXT).value(defaultPaymentMethodText);
	    	jsonWriter.key(PMTLIST_NEWPMTMETHOD_TEXT).value(newPaymentMethodText);
	    	jsonWriter.key(PMTLIST_EXPIRED_TEXT).value(expiredPaymentMethodText);
	    	jsonWriter.key(NA_LBL).value(naLabel);
	    	jsonWriter.endObject();
		  jsonWriter.endArray();

		  // Button labels
	      jsonWriter.key(BUTTON_CANCEL_LBL).value(buttonCancelLabel); 
	      jsonWriter.key(BUTTON_BACK_LBL).value(buttonBackLabel); 
	      jsonWriter.key(BUTTON_NEXT_LBL).value(buttonNextLabel); 
	      
	      jsonWriter.key(DELETEMODAL_TEXT).value(deleteModalText); 
	      jsonWriter.key(DELETEMODAL_BUTTON_BACK_LBL).value(deleteModalBtnBackLabel); 
	      jsonWriter.key(DELETEMODAL_BUTTON_CANCEL_LBL).value(deleteModalBtnCancelLabel); 
	      jsonWriter.key(EDITMODAL_TEXT).value(editModalText); 
	      jsonWriter.key(NAMEONCARD_LBL).value(nameOnCardLabel);  	        


	      // array of conditional texts
//	      jsonWriter.key(DYNAMIC_LIST_LINKS).array();
//	      for (LinkModel dynamicLists : dynamicListList) {
//	          jsonWriter.object();
//	          //jsonWriter.key(JSON_ATT_LINK_LABEL).value(dynamicLists.getDisplayText());
//	          jsonWriter.endObject();
//	
//	      }

	      jsonWriter.endObject();
      } catch (Exception e){
    	  LOGGER.error("Error in getJSON:"+ e.getMessage());
      }
      return wrt.toString();

  }

}
