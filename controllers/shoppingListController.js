const ShoppingList = require("../models/ShoppingList");

exports.create = async (req, res) => {
  const { title } = req.body;
  const userId = req.user.id; // берётся из checkAuth middleware

  try {
    const newList = new ShoppingList({
      title,
      ownerId: userId,
      items: [],
      members: [userId],
    });

    await newList.save();

    res.json({
      id: newList._id,
      name: newList.name,
      ownerId: newList.ownerId,
      members: newList.members,
      items: newList.items,
      uuAppErrorMap: {},
    });
  } catch (err) {
    res.status(500).json({
      error: "shoppingList/create failed",
      uuAppErrorMap: { "shoppingList/create/error": { message: err.message } },
    });
  }
};


exports.delete = async (req, res) => {
  const { id } = req.body;
  const userId = req.user.id;

  try {
    const list = await ShoppingList.findById(id);

    if (!list) {
      return res.status(404).json({
        uuAppErrorMap: {
          "shoppingList/delete/notFound": {
            message: "Shopping list not found.",
          },
        },
      });
    }

    if (list.ownerId !== userId) {
      return res.status(403).json({
        uuAppErrorMap: {
          "shoppingList/delete/forbidden": {
            message: "Only the owner can delete the list.",
          },
        },
      });
    }

    await ShoppingList.findByIdAndDelete(id);

    res.status(200).json({
      id,
      deleted: true,
      uuAppErrorMap: {},
    });
  } catch (err) {
    res.status(500).json({
      uuAppErrorMap: {
        "shoppingList/delete/error": {
          message: err.message,
        },
      },
    });
  }
};

exports.get = async (req, res) => {
  const { id } = req.body;

  try {
    const list = await ShoppingList.findById(id);

    if (!list) {
      return res.status(404).json({
        uuAppErrorMap: {
          "shoppingList/get/notFound": {
            message: "Shopping list not found"
          }
        }
      });
    }

    res.json({
      id: list._id,
      title: list.title,
      ownerId: list.ownerId,
      members: list.members,
      items: list.items,
      uuAppErrorMap: {}
    });

  } catch (err) {
    res.status(500).json({
      error: "shoppingList/get failed",
      uuAppErrorMap: {
        "shoppingList/get/error": { message: err.message }
      }
    });
  }
};



exports.list = async (req, res) => {
  const userId = req.user.id; // из checkAuth

  try {
    const lists = await ShoppingList.find({ members: userId });

    const dtoOut = {
      shoppingLists: lists.map((list) => ({
        id: list._id,
        title: list.title,
        ownerId: list.ownerId,
        members: list.members,
        items: list.items,
        createdAt: list.createdAt,
      })),
      uuAppErrorMap: {}
    };

    res.json(dtoOut);
  } catch (err) {
    res.status(500).json({
      uuAppErrorMap: {
        "shoppingList/list/error": { message: err.message }
      }
    });
  }
};

exports.update = async (req, res) => {
  const { id, title } = req.body;

  try {
    const list = await ShoppingList.findById(id);

    if (!list) {
      return res.status(404).json({
        uuAppErrorMap: {
          "shoppingList/update/notFound": {
            message: "Shopping list not found"
          }
        }
      });
    }

    list.title = title || list.title;
    await list.save();

    res.json({
      id: list._id,
      title: list.title,
      ownerId: list.ownerId,
      members: list.members,
      items: list.items,
      uuAppErrorMap: {}
    });
  } catch (err) {
    res.status(500).json({
      error: "shoppingList/update failed",
      uuAppErrorMap: {
        "shoppingList/update/error": { message: err.message }
      }
    });
  }
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
//