module.exports = (requiredProfiles) => {
  return (req, res, next) => {
    const userProfile = req.headers["x-profile"]; // должен быть: "Owner"

    req.user = {
      id: "mock-user-id",
      role: userProfile || "Guest"
    };

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
