// User (composto por partes menores do endpoint de token)
const UserModel = data => ({
  auth: userAuth(data),
  profile: userProfile(data),
  card: userCard(data),
  distributor: userDistributor(data)
});

const userProfile = data => ({
  firstName: data.firstName,
  lastName: data.lastName,
  userType: data.userType,
  email: data.email,
  inviteCode: data.inviteCode
});

const userCard = data => ({
  paymentCcBrand: data.paymentCcBrand,
  paymentCcName: data.paymentCcName,
  paymentExpYear: data.paymentExpYear,
  paymentExpMonth: data.paymentExpMonth
});

const userDistributor = data => ({
  ucNumber: data.ucNumber,
  netPhase: data.netPhase,
  quotaSignupDates: data.quotaSignupDates,
  distributorName: data.distributorName
});

const userAuth = data => ({
  token: data.token,
  profileCompletion: data.profileCompletion,
  completeSignup: data.completeSignup,
  signupCost: data.signupCost
});
