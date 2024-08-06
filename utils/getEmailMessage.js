export default (token, user) => {
  const email = user.email;
  const subject = "Verify user email Songspro";
  const url = `https://songspro.vercel.app/api/v1/verify/${token}`;
  const message = `<a href=${url}>Click here to verify</a>`;
  return { email, subject, message };
};
