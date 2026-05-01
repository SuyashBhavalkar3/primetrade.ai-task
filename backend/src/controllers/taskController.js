const { prisma } = require('../config/db');

// @desc    Get all tasks
// @route   GET /api/v1/tasks
// @access  Private
exports.getTasks = async (req, res, next) => {
  try {
    let tasks;

    // If admin, can see all tasks, otherwise only their own
    if (req.user.role === 'admin') {
      tasks = await prisma.task.findMany({
        include: {
          user: {
            select: {
              name: true,
              email: true,
            },
          },
        },
      });
    } else {
      tasks = await prisma.task.findMany({
        where: { userId: req.user.id },
      });
    }

    res.status(200).json({
      success: true,
      count: tasks.length,
      data: tasks,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single task
// @route   GET /api/v1/tasks/:id
// @access  Private
exports.getTask = async (req, res, next) => {
  try {
    const task = await prisma.task.findUnique({
      where: { id: req.params.id },
    });

    if (!task) {
      return res.status(404).json({ success: false, message: 'Task not found' });
    }

    // Make sure user is task owner or admin
    if (task.userId !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({ success: false, message: 'Not authorized to access this task' });
    }

    res.status(200).json({
      success: true,
      data: task,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create new task
// @route   POST /api/v1/tasks
// @access  Private
exports.createTask = async (req, res, next) => {
  try {
    const { title, description, status, priority } = req.body;

    const task = await prisma.task.create({
      data: {
        title,
        description,
        status,
        priority,
        userId: req.user.id,
      },
    });

    res.status(201).json({
      success: true,
      data: task,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update task
// @route   PUT /api/v1/tasks/:id
// @access  Private
exports.updateTask = async (req, res, next) => {
  try {
    let task = await prisma.task.findUnique({
      where: { id: req.params.id },
    });

    if (!task) {
      return res.status(404).json({ success: false, message: 'Task not found' });
    }

    // Make sure user is task owner or admin
    if (task.userId !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({ success: false, message: 'Not authorized to update this task' });
    }

    task = await prisma.task.update({
      where: { id: req.params.id },
      data: req.body,
    });

    res.status(200).json({
      success: true,
      data: task,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete task
// @route   DELETE /api/v1/tasks/:id
// @access  Private
exports.deleteTask = async (req, res, next) => {
  try {
    const task = await prisma.task.findUnique({
      where: { id: req.params.id },
    });

    if (!task) {
      return res.status(404).json({ success: false, message: 'Task not found' });
    }

    // Make sure user is task owner or admin
    if (task.userId !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({ success: false, message: 'Not authorized to delete this task' });
    }

    await prisma.task.delete({
      where: { id: req.params.id },
    });

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    next(err);
  }
};
