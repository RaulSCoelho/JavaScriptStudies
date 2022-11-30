const express = require('express')
const router = express.Router()
const Project = require('../models/project')
const Task = require('../models/task')
const auth = require('../middlewares/verifyToken')

router.use(auth)

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().populate(['user', 'tasks'])

    return res.send(projects)
  } catch (err) {
    return res.status(400).send({ error: 'Could not load projects' })
  }
})

// Get project by id
router.get('/:project_id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.project_id).populate(['user', 'tasks'])

    if (!project)
      return res.status(404).send({ error: `Could not find project ${req.params.project_id}` })

    return res.send(project)
  } catch (err) {
    return res.status(400).send({ error: `Could not find project ${req.params.project_id}` })
  }
})

// Create a project
router.post('/', async (req, res) => {
  try {
    const { title, description, tasks } = req.body

    const project = await Project.create({ title, description, user: req.user_id })

    await Promise.all(
      tasks.map(async task => {
        const projectTask = new Task({ ...task, project: project.id })
        await projectTask.save()
        project.tasks.push(projectTask)
      })
    )

    await project.save()

    return res.send(project)
  } catch (err) {
    return res.status(400).send({ error: 'Could not create a new project' })
  }
})

// Update a project
router.put('/:project_id', async (req, res) => {
  try {
    const { title, description, tasks } = req.body

    const project = await Project.findByIdAndUpdate(
      req.params.project_id,
      {
        title,
        description,
      },
      { new: true }
    )

    project.tasks = []
    await Task.remove({ project: project.id })

    await Promise.all(
      tasks.map(async task => {
        const projectTask = new Task({ ...task, project: project.id })
        await projectTask.save()
        project.tasks.push(projectTask)
      })
    )

    await project.save()

    return res.send(project)
  } catch (err) {
    return res.status(400).send({ error: `Could not update project ${req.params.project_id}` })
  }
})

// Delete a project
router.delete('/:project_id', async (req, res) => {
  try {
    await Project.findByIdAndRemove(req.params.project_id)

    return res.send({
      success: `Project ${req.params.project_id} removed successfully`,
    })
  } catch (err) {
    return res.status(400).send({ error: `Could not remove project ${req.params.project_id}` })
  }
})

module.exports = router
