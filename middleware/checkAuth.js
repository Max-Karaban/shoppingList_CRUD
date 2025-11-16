// temporary simulation of profile verification
module.exports = (requiredProfiles) => {
  return (req, res, next) => {
    const userProfile = req.headers["x-profile"]; // 'Owner' 'Member'

    const allowed = Array.isArray(requiredProfiles)
      ? requiredProfiles.includes(userProfile)
      : userProfile === requiredProfiles;

    if (!allowed) {
      return res.status(403).json({
        uuAppErrorMap: {
          "unauthorized": {
            message: `User does not have required profile: ${requiredProfiles}`
          }
        }
      });
    }

    next();
  };
};
