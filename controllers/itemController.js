exports.add = (req, res) => {
  const { listId, name } = req.body;

  const dtoOut = {
    itemId: "mock-item-id",
    listId,
    name,
    isCompleted: false,
    createdAt: new Date().toISOString(),
    uuAppErrorMap: {}
  };

  res.status(200).json(dtoOut);
};

exports.delete = (req, res) => {
  const { itemId } = req.body;

  const dtoOut = {
    itemId,
    deleted: true,
    uuAppErrorMap: {}
  };

  res.status(200).json(dtoOut);
};

exports.markCompleted = (req, res) => {
  const { itemId } = req.body;

  const dtoOut = {
    itemId,
    isCompleted: true,
    uuAppErrorMap: {}
  };

  res.status(200).json(dtoOut);
};

exports.unmark = (req, res) => {
  const { itemId } = req.body;

  const dtoOut = {
    itemId,
    isCompleted: false,
    uuAppErrorMap: {}
  };

  res.status(200).json(dtoOut);
};
