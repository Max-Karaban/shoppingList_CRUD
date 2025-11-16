exports.remove = (req, res) => {
  const { listId, userId } = req.body;

  const dtoOut = {
    listId,
    userId,
    removed: true,
    uuAppErrorMap: {}
  };

  res.status(200).json(dtoOut);
};
