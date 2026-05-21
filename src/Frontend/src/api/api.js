import axios from "axios";
// https://adminpanelreactnodejs.unialsolutions.com

const baseUrl = "http://localhost:5000";
export const serverImageUrl = "http://localhost:5000/nodeassets/";

// Homepage Static Version Section
export const getStativVersionAPI = () => axios.get(`${baseUrl}/staticversion`);
export const insertStaticVersionAPI = (data) => axios.post(`${baseUrl}/staticversion/insert`, data);
export const updateStaticVerisonAPI = (id, data) => axios.put(`${baseUrl}/staticversion/${id}`, data);
export const deleteStaticVerisonAPI = (id) => axios.delete(`${baseUrl}/staticversion/${id}`);

// Slider Version Section
export const getSliderVersionAPI = () => axios.get(`${baseUrl}/sliderversion`);
export const insertSliderVersionAPI = (data) => axios.post(`${baseUrl}/sliderversion/insert`, data);
export const updateSliderVerisonAPI = (id, data) => axios.put(`${baseUrl}/sliderversion/${id}`, data);
export const deleteSliderVerisonAPI = (id) => axios.delete(`${baseUrl}/sliderversion/${id}`);

// Vedio Version
export const getVideoVersionAPI = () => axios.get(`${baseUrl}/videoversion`);
export const insertVideoVersionAPI = (data) => axios.post(`${baseUrl}/videoversion/insert`, data);
export const updateVideoVerisonAPI = (id, data) => axios.put(`${baseUrl}/videoversion/${id}`, data);
export const deleteVideoVerisonAPI = (id) => axios.delete(`${baseUrl}/videoversion/${id}`);

// Intro Section
export const getIntroSectionAPI = () => axios.get(`${baseUrl}/introsection`);
export const insertIntroSectionApI = (data) => axios.post(`${baseUrl}/introsection/insert`, data);
export const updateIntroSectionApI = (id, data) => axios.put(`${baseUrl}/introsection/${id}`, data);
export const deleteIntroSectionAPI = (id) => axios.delete(`${baseUrl}/introsection/${id}`);

// Service Section
export const getServiceSectionAPI = () => axios.get(`${baseUrl}/servicesection`);
export const insertServiceSectionApI = (data) => axios.post(`${baseUrl}/servicesection/insert`, data);
export const updateServiceSectionApI = (id, data) => axios.put(`${baseUrl}/servicesection/${id}`, data);
export const deleteServiceSectionAPI = (id) => axios.delete(`${baseUrl}/servicesection/${id}`);

// Approach Section
export const getApproachSectionAPI = () => axios.get(`${baseUrl}/approachsection`);
export const insertApproachSectionAPI = (data) => axios.post(`${baseUrl}/approachsection/insert`, data);
export const updateApproachSectionAPI = (id, data) => axios.put(`${baseUrl}/approachsection/${id}`, data);
export const deleteApproachSectionAPI = (id) => axios.delete(`${baseUrl}/approachsection/${id}`);

// Statistics
export const getStatisticsSectionAPI = () => axios.get(`${baseUrl}/statisticssection`);
export const insertStatisticsSectionAPI = (data) => axios.post(`${baseUrl}/statisticssection/insert`, data);
export const updateStatisticsSectionAPI = (id, data) => axios.put(`${baseUrl}/statisticssection/${id}`, data);
export const deleteStatisticsSectionAPI = (id) => axios.delete(`${baseUrl}/statisticssection/${id}`);

// CallToAction API
export const getCallToActionAPI = () => axios.get(`${baseUrl}/calltoaction`);
export const insertCallToActionAPI = (data) => axios.post(`${baseUrl}/calltoaction/insert`, data);
export const updateCallToActionAPI = (id, data) => axios.put(`${baseUrl}/calltoaction/${id}`, data);
export const deleteCallToActionAPI = (id) => axios.delete(`${baseUrl}/calltoaction/${id}`);

//Portfolio Section
export const getPortfolioAPI = () => axios.get(`${baseUrl}/portfolio`);
export const insertPortfolioAPI = (data) => axios.post(`${baseUrl}/portfolio/insert`, data);
export const updatePortfolioAPI = (id, data) => axios.put(`${baseUrl}/portfolio/${id}`, data);
export const deletePortfolioAPI = (id) => axios.delete(`${baseUrl}/portfolio/${id}`);

// Testimonials
export const getTestimonialsAPI = () => axios.get(`${baseUrl}/testimonials`);
export const insertTestimonialsAPI = (data) => axios.post(`${baseUrl}/testimonials/insert`, data);
export const updateTestimonialsAPI = (id, data) => axios.put(`${baseUrl}/testimonials/${id}`, data);
export const deleteTestimonialsAPI = (id) => axios.delete(`${baseUrl}/testimonials/${id}`);

// Team Sections
export const getTeamSectionAPI = () => axios.get(`${baseUrl}/teamsection`);
export const insertTeamSectionAPI = (data) => axios.post(`${baseUrl}/teamsection/insert`, data);
export const updateTeamSectionAPI = (id, data) => axios.put(`${baseUrl}/teamsection/${id}`, data);
export const deleteTeamSectionAPI = (id) => axios.delete(`${baseUrl}/teamsection/${id}`);

// /api/home/blogs
export const getBlogAPI = () => axios.get(`${baseUrl}/blogs`);
export const insertBlogAPI = (data) => axios.post(`${baseUrl}/blogs/insert`, data);
export const updateBlogAPI = (id, data) => axios.put(`${baseUrl}/blogs/${id}`, data);
export const deleteBlogAPI = (id) => axios.delete(`${baseUrl}/blogs/${id}`);

// Partners
export const getPartnersAPI = () => axios.get(`${baseUrl}/partners`);
export const insertPartnersAPI = (data) => axios.post(`${baseUrl}/partners/insert`, data);
export const updatePartnersAPI = (id, data) => axios.put(`${baseUrl}/partners/${id}`, data);
export const deletePartnersAPI = (id) => axios.delete(`${baseUrl}/partners/${id}`);

//=======================Footer Section===================================

export const getLogoandTextList = () => axios.get(`${baseUrl}/footer/logoandtext`);
export const insertLogoAndText = (data) => axios.post(`${baseUrl}/footer/logoandtext/insert`, data);
export const updateLogoAndText = (id, data) => axios.put(`${baseUrl}/footer/logoandtext/${id}`, data);
export const deleteLogoItem = (id) => axios.delete(`${baseUrl}/footer/logoandtext${id}`);

export const getusefulLinksList = () => axios.get(`${baseUrl}/footer/usefullinks`);
export const insertUsefulLinks = (data) => axios.post(`${baseUrl}/footer/usefullinks/insert`, data);
export const updateUsefulLink = (id, data) => axios.put(`${baseUrl}/footer/usefullinks/${id}`, data);
export const deleteUsefulLink = (id) => axios.delete(`${baseUrl}/footer/usefullinks/${id}`);

//=======================Footer Section=================================== //

//=======================Blog Section===================================

export const getBlogCategory = () => axios.get(`${baseUrl}/blog/category`);
export const insertBlogCategory = (data) => axios.post(`${baseUrl}/blog/category/insert`, data);
export const updateBlogCategory = (id, data) => axios.put(`${baseUrl}/blog/category/${id}`, data);
export const deleteBlogCategory = (id) => axios.delete(`${baseUrl}/blog/category/${id}`);

export const getAddBlogSection = () => axios.get(`${baseUrl}/addblogsection`);
export const insertAddBlogSection = (data) => axios.post(`${baseUrl}/addblogsection/insert`, data);
export const updateAddBlogSection = (id, data) => axios.put(`${baseUrl}/addblogsection/${id}`, data);
export const deleteAddBlogSection = (id) => axios.delete(`${baseUrl}/addblogsection/${id}`);

//=======================FAQ SECTION===================================
export const getAllFAQs = () => axios.get(`${baseUrl}/faqs`);
export const insertFAQQuestion = (data) => axios.post(`${baseUrl}/faqs/insert`, data);
export const updateFAQItem = (id, data) => axios.put(`${baseUrl}/faqs/${id}`, data);
export const deleteSelectedFaq = (id) => axios.delete(`${baseUrl}/faqs/${id}`);
//=======================FAQ SECTION=================================== //

//=======================TERMS & CONDITIONS SECTION===================================
export const getTermsAndConditions = () => axios.get(`${baseUrl}/termsandconditions`);
export const insertTermsAndConditions = (data) => axios.post(`${baseUrl}/termsandconditions/insert`, data);
export const updateTermsAndConditions = (id, data) => axios.put(`${baseUrl}/termsandconditions/${id}`, data);
export const deleteTermsAndConditions = (id) => axios.delete(`${baseUrl}/termsandconditions/${id}`);
//=======================TERMS & CONDITIONS SECTION=================================== //

//=======================SERVICES SECTION===================================
export const insertServiceCategory = (data) => axios.post(`${baseUrl}/service/category/insert`, data);
export const updateServiceCategory = (id, data) => axios.put(`${baseUrl}/service/category/${id}`, data);
export const getServiceCategory = () => axios.get(`${baseUrl}/service/category`);
export const deleteServiceCategory = (id) => axios.delete(`${baseUrl}/service/category/${id}`);

export const getServices = () => axios.get(`${baseUrl}/services`);
export const insertServices = (data) => axios.post(`${baseUrl}/services/insert`, data);
export const updateServices = (id, data) => axios.put(`${baseUrl}/services/${id}`, data);
export const deleteServices = (id) => axios.delete(`${baseUrl}/services/${id}`);

//=======================SERVICES SECTION=================================== //
//=======================Portfolio SECTION=================================== //
export const getAddPortfolios = () => axios.get(`${baseUrl}/addportfolios`);
export const insertAddPortfolios = (data) => axios.post(`${baseUrl}/addportfolios/insert`, data);
export const updateAddPortfolios = (id, data) => axios.put(`${baseUrl}/addportfolios/${id}`, data);
export const deleteAddPortfolios = (id) => axios.delete(`${baseUrl}/addportfolios/${id}`);
//=======================Portfolio SECTION=================================== //

//=======================Gallery SECTION=================================== //
export const getGalleryCategories = () => axios.get(`${baseUrl}/gallery/category`);
export const insertGalleryCategories = (data) => axios.post(`${baseUrl}/gallery/category/insert`, data);
export const updateGalleryCategories = (id, data) => axios.put(`${baseUrl}/gallery/category/${id}`, data);
export const deleteGalleryCategories = (id) => axios.delete(`${baseUrl}/gallery/category/${id}`);

export const getGallerySection = () => axios.get(`${baseUrl}/gallerysection`);
export const insertGallerySection = (data) => axios.post(`${baseUrl}/gallerysection/insert`, data);
export const updateGallerySection = (id, data) => axios.put(`${baseUrl}/gallerysection/${id}`, data);
export const deleteGallerySection = (id) => axios.delete(`${baseUrl}/gallerysection/${id}`);
//=======================Gallery SECTION=================================== //

//=======================CAREER SECTION===================================
export const getAllCareerList = () => axios.get(`${baseUrl}/career/category`);
export const insertCareerCategory = (data) => axios.post(`${baseUrl}/career/category/insert`, data);
export const updateCareerLinkItem = (id, data) => axios.put(`${baseUrl}/career/category/${id}`, data);
export const deleteCareerListItem = (id) => axios.delete(`${baseUrl}/career/category/${id}`);

export const insertPostJobData = (data) => axios.post(`${baseUrl}/api/career/insert-job-post`, data);
export const updateJobPostData = (data) => axios.post(`${baseUrl}/api/career/update-job-post-data`, data);
export const getAllJobPostsList = () => axios.get(`${baseUrl}/api/career/get-all-job-posts`);
export const deleteJobPostItem = (id) => axios.get(`${baseUrl}/api/career/delete-single-job-post-item?id=${id}`);

//=======================CAREER SECTION=================================== //

//=======================CONTACT SECTION===================================
export const getContactsList = () => axios.get(`${baseUrl}/contactus`);
export const insertContactInfo = (data) => axios.post(`${baseUrl}/contactus/insert`, data);
export const updateContactInfo = (id, data) => axios.put(`${baseUrl}/contactus/${id}`, data);
export const deleteContactInfoItem = (id) => axios.delete(`${baseUrl}/contactus/${id}`);
//=======================CONTACT SECTION=================================== //

//=======================KNOWLEDGE BASE SECTION===================================
export const getKnowledgeCategoryList = () => axios.get(`${baseUrl}/knowledge/category`);
export const insertKnowledgeCategory = (data) => axios.post(`${baseUrl}/knowledge/category/insert`, data);
export const updateKnowledgeCategory = (id, data) => axios.put(`${baseUrl}/knowledge/category/${id}`, data);
export const deleteKnowledgeCategory = (id) => axios.delete(`${baseUrl}/knowledge/category/${id}`);

export const getArticlesDataList = () => axios.get(`${baseUrl}/articles`);
export const insertArticles = (data) => axios.post(`${baseUrl}/articles/insert`, data);
export const updateArticles = (id, data) => axios.put(`${baseUrl}/articles/${id}`, data);
export const deleteArticle = (id) => axios.delete(`${baseUrl}/articles/${id}`);
//=======================Kowlegde SECTION=================================== //

//=======================Admins MANAGEMENT SECTION===================================
export const getRoleListData = () => axios.get(`${baseUrl}/admin/roles`);
export const insertRoleInDb = (data) => axios.post(`${baseUrl}/admin/roles/insert`, data);
export const updateRoleInfo = (id, data) => axios.put(`${baseUrl}/admin/roles/${id}`, data);
export const deleteRoleData = (id) => axios.delete(`${baseUrl}/admin/roles/${id}`);

export const getAdminInfoInDb = () => axios.get(`${baseUrl}/admin`);
export const insertAdminInfoInDb = (data) => axios.post(`${baseUrl}/admin/insert`, data);
export const updateAdminInfoInDb = (id, data) => axios.put(`${baseUrl}/admin/${id}`, data);
export const deleteAdminInfoInDb = (id) => axios.delete(`${baseUrl}/admin/${id}`);
//=======================Admins MANAGEMENT SECTION===================================

//=======================ADD POPUP SECTION===================================
export const getPopupInfoInDb = () => axios.get(`${baseUrl}/announcement/popup`);
export const insertPopupInfoInDb = (data) => axios.post(`${baseUrl}/announcement/popup/insert`, data);
export const updatePopupInfoInDb = (id, data) => axios.put(`${baseUrl}/announcement/popup/${id}`, data);
export const deletePopupInfoInDb = (id) => axios.delete(`${baseUrl}/announcement/popup/${id}`);
//=======================ADD POPUP SECTION=================================== //


//=======================SETTINGS SECTION===================================
export const getGeneralSettings = () =>
  axios.get(`${baseUrl}/api/settings/get_general_setting`);
export const updateGeneralSettings = (data) =>
  axios.post(`${baseUrl}/api/settings/update_general_settings_data`, data);
export const getMailFromAdmin = () =>
  axios.get(`${baseUrl}/api/settings/get_mail_from_admin`);
export const updateMailFromAdmin = (data) =>
  axios.post(`${baseUrl}/api/settings/update_mail_from_admin`, data);
export const getMailToAdmin = () =>
  axios.get(`${baseUrl}/api/settings/get_mail_to_admin`);
export const updateMailToAdmin = (data) =>
  axios.post(`${baseUrl}/api/settings/update_mail_to_admin`, data);
export const getPreloaderDetails = () =>
  axios.get(`${baseUrl}/api/settings/get_preloader_details`);
export const updatePreloaderdetails = (data) =>
  axios.post(`${baseUrl}/api/settings/update_preloader_details`, data);
export const getSupportInfo = () =>
  axios.get(`${baseUrl}/api/settings/get_support_info`);
export const updateSupportInfo = (data) =>
  axios.post(`${baseUrl}/api/settings/update_support_info`, data);
export const insertSocialLinks = (data) =>
  axios.post(`${baseUrl}/api/settings/insert_social_links`, data);
export const updateSocialLinks = (data) =>
  axios.post(`${baseUrl}/api/settings/update_social_links`, data);
export const getSocialLinksDataFromDb = () =>
  axios.get(`${baseUrl}/api/settings/get_social_links`);
export const deleteSocialLinkItemFromDB = (id) =>
  axios.get(`${baseUrl}/api/settings/delete_social_link_item?id=${id}`);
export const getPageHeadingDataFromDb = () =>
  axios.get(`${baseUrl}/api/settings/get_page_heading`);
export const updatePageHeadingInfo = (data) =>
  axios.post(`${baseUrl}/api/settings/update_page_heading`, data);
export const getPaypalData = () =>
  axios.get(
    `${baseUrl}/api/settings/payment_gateway/online_payment/get_paypal_info`
  );
export const updatePaypalInfo = (data) =>
  axios.post(
    `${baseUrl}/api/settings/payment_gateway/online_payment/update_paypal_info`,
    data
  );
export const getStripeData = () =>
  axios.get(
    `${baseUrl}/api/settings/payment_gateway/online_payment/get_stripe_info`
  );
export const updateStripeInfo = (data) =>
  axios.post(
    `${baseUrl}/api/settings/payment_gateway/online_payment/update_stripe_info`,
    data
  );
export const getPaytmData = () =>
  axios.get(
    `${baseUrl}/api/settings/payment_gateway/online_payment/get_paytm_info`
  );
export const updatePaytmInfo = (data) =>
  axios.post(
    `${baseUrl}/api/settings/payment_gateway/online_payment/update_paytm_info`,
    data
  );
export const getInstamojoData = () =>
  axios.get(
    `${baseUrl}/api/settings/payment_gateway/online_payment/get_instamojo_info`
  );
export const updateInstamojoInfo = (data) =>
  axios.post(
    `${baseUrl}/api/settings/payment_gateway/online_payment/update_instamojo_info`,
    data
  );
export const getPaystackData = () =>
  axios.get(
    `${baseUrl}/api/settings/payment_gateway/online_payment/get_paystack_info`
  );
export const updatePaystackInfo = (data) =>
  axios.post(
    `${baseUrl}/api/settings/payment_gateway/online_payment/update_paystack_info`,
    data
  );
export const getFlutterwaveData = () =>
  axios.get(
    `${baseUrl}/api/settings/payment_gateway/online_payment/get_flutterwave_info`
  );
export const updateFlutterwaveInfo = (data) =>
  axios.post(
    `${baseUrl}/api/settings/payment_gateway/online_payment/update_flutterwave_info`,
    data
  );
export const getMolliePaymentData = () =>
  axios.get(
    `${baseUrl}/api/settings/payment_gateway/online_payment/get_molliepayment_info`
  );
export const updateMolliePaymentInfo = (data) =>
  axios.post(
    `${baseUrl}/api/settings/payment_gateway/online_payment/update_molliepayment_info`,
    data
  );
export const getRazorpayData = () =>
  axios.get(
    `${baseUrl}/api/settings/payment_gateway/online_payment/get_razorpay_info`
  );
export const updateRazorpayInfo = (data) =>
  axios.post(
    `${baseUrl}/api/settings/payment_gateway/online_payment/update_razorpay_info`,
    data
  );
export const getPayUmoneyData = () =>
  axios.get(
    `${baseUrl}/api/settings/payment_gateway/online_payment/get_payumoney_info`
  );
export const updatePayUmoneyInfo = (data) =>
  axios.post(
    `${baseUrl}/api/settings/payment_gateway/online_payment/update_payumoney_info`,
    data
  );
export const getMercadopagoData = () =>
  axios.get(
    `${baseUrl}/api/settings/payment_gateway/online_payment/get_mercadopago_info`
  );
export const updateMercadopagoInfo = (data) =>
  axios.post(
    `${baseUrl}/api/settings/payment_gateway/online_payment/update_mercadopago_info`,
    data
  );
export const getOfflinePaymentGatewayData = () =>
  axios.get(`${baseUrl}/api/settings/payment_gateway/offline_payment/get`);
export const updateOfflinePaymentGatewayInfo = (data) =>
  axios.post(
    `${baseUrl}/api/settings/payment_gateway/offline_payment/update`,
    data
  );
export const getSeoInfoData = () =>
  axios.get(`${baseUrl}/api/settings/seo_info/get_seo_info`);
export const updateSeoInfo = (data) =>
  axios.post(`${baseUrl}/api/settings/seo_info/update_seo_info`, data);
export const getMaintenenceInfoData = () =>
  axios.get(`${baseUrl}/api/settings/maintenance_mode/get_data`);
export const updateMaintenenceInfo = (data) =>
  axios.post(`${baseUrl}/api/settings/maintenance_mode/update_data`, data);
export const getCookieAlertData = () =>
  axios.get(`${baseUrl}/api/settings/cookie_alert/get_data`);
export const updateCookieAlertInfo = (data) =>
  axios.post(`${baseUrl}/api/settings/cookie_alert/update_data`, data);

