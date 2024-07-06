export const Validate = (email, Password) => {
  const isemailvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  // const ispasswordvalid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
  //   Password
  // );

  if (!isemailvalid) return "Email is not valid ";
  // if (!ispasswordvalid) return "Password is not valid ";

  return null;
};
