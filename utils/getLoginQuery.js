export default (req) => {
  const username = req.body.username || "";
  const email = req.body.email || "";
  if (email) return { email };
  else if (username) return { username };
  return null;
};
