function getUserInfo(user) {
  return {
    username: user.username,
    name: user.name,
    id: user._id || user._id,
  };
}

module.exports = getUserInfo;
