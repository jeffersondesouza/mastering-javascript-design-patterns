const authMapper = {
  toLogin: data => {
    return {
      user_name: data.userName,
      email: data.email,
      password: data.password
    };
  },
  fromValidate: res => {
    return {
      paymentCcNumber: res.payment__cc_number,
      firstName: res.first_name,
      signupCost: res.signup_cost,
      userType: res.user_type,
      ucNumber: res.uc_number,
      netPhase: res.net_phase,
      quotaSignupDates: res.quota_signup_dates,
      inviteCode: res.invite_code,
      paymentCcBrand: res.payment__cc_brand,
      response: res.response,
      token: res.token,
      email: res.email,
      profileCompletion: res.profile_completion,
      paymentCcName: res.payment__cc_name,
      paymentExpYear: res.payment__exp_year,
      paymentExpMonth: res.payment__exp_month,
      lastName: res.last_name,
      completeSignup: res.complete_signup,
      status: res.status,
      distributorName: res.distributor_name
    };
  }
};
