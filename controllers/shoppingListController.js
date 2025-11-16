exports.create = (req, res) => {
  const { title, isArchived = false } = req.body;

  const dtoOut = {
    awid: "mock-awid",
    id: "mock-id",
    title,
    isArchived,
    ownerId: "mock-owner-id",
    createdAt: new Date().toISOString(),
    uuAppErrorMap: {}
  };

  res.status(200).json(dtoOut);
};

exports.delete = (req, res) => {
  const { id } = req.body;

  const dtoOut = {
    id,
    deleted: true,
    uuAppErrorMap: {}
  };

  res.status(200).json(dtoOut);
};

exports.list = (req, res) => {
  const isArchived = req.query.isArchived === "true";

  const dtoOut = {
    shoppingLists: [
      {
        id: "list-456",
        title: "Groceries",
        isArchived,
        ownerId: "mock-owner-id",
        createdAt: "2025-11-01T12:00:00.000Z"
      },
      {
        id: "list-789",
        title: "Weekend Trip",
        isArchived,
        ownerId: "mock-owner-id",
        createdAt: "2025-11-10T12:00:00.000Z"
      }
    ],
    uuAppErrorMap: {}
  };

  res.status(200).json(dtoOut);
};

exports.invite = (req, res) => {
  const { listId, userEmail } = req.body;

  const dtoOut = {
    memberId: "mock-member-id",
    listId,
    userEmail,
    role: "member",
    invitedAt: new Date().toISOString(),
    uuAppErrorMap: {}
  };

  res.status(200).json(dtoOut);
};
