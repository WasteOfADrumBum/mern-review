const express = require('express')
const router = express.Router()

// load Model
const reviewModel = require('../models/reviewModel')

// @Route   GET api/review/
// @Desc    Read All Reviews
// @Action  readAllReviews()
// @Access  Private
router.get('/', async (req, res) => {
  try {
    /* Sort Entries by Last Name */
    const review = await reviewModel.find().sort('lastName')
    if (review.length <= 0) {
      return res.status(400).json({
        errors: [{ msg: 'No review was found' }],
      })
    }

    return res.json(review)
  } catch (err) {
    console.error(err.message)
    return res.status(500).send('Server Error')
  }
})

// @Route   GET api/review/:id
// @Desc    Read Reviews by ID
// @Action  readReviews()
// @Access  Private
router.get('/:id', async (req, res) => {
  try {
    const review = await reviewModel.findOne({ _id: req.params.id })
    if (!review) {
      return res.status(400).json({
        errors: [{ msg: 'No review was found' }],
      })
    }

    return res.json(review)
  } catch (err) {
    console.error(err.message)
    return res.status(500).send('Server Error')
  }
})

// @Route   POST api/review/create-review
// @Desc    Create Reviews
// @Action  createReviews()
// @Access  Private
router.post('/create-review', async (req, res) => {
  console.log('@Route POST api/review/create-review')
  const { userName, email, comment, review, approved } = req.body

  console.log('@Route req.body', req.body)

  const newEntry = {
    user: {
      userName: userName || '',
      email: email || '',
    },
    review: {
      comment: comment || '',
      rating: review || '',
    },
    approved: approved || false,
  }

  try {
    let review = new reviewModel(newEntry)
    await review.save()
    res.status(200).send('Success')
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @Route   PUT api/review/update-review/:id
// @Desc    Update Reviews
// @Action  updateReviews()
// @Access  Private
router.post('/update-review/:id', async (req, res) => {
  const { userName, email, comment, rating, approved } = req.body

  const newEntry = {
    user: {
      userName: userName || '',
      email: email || '',
    },
    review: {
      comment: comment || '',
      rating: rating || '',
    },
    approved: approved || false,
  }

  try {
    let review = await reviewModel.findById(req.params.id)
    // Check if it exsists
    if (!review) {
      return res.status(400).json({
        errors: [{ msg: 'Reviews does not exist' }],
      })
    }

    review = await reviewModel.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: newEntry },
      { new: true },
    )
    res.json(review)
  } catch (err) {
    console.error('updateReviews Route: ', err.message)
    res.status(500).send('Server Error')
  }
})

// @Route   PUT api/review/update-review-status/:id
// @Desc    Update Review Status Only
// @Action  updateReviewStatus()
// @Access  Private
router.post('/update-review-status/:id', async (req, res) => {
  try {
    let review = await reviewModel.findById(req.params.id)
    // Check if it exsists
    if (!review) {
      return res.status(400).json({
        errors: [{ msg: 'Reviews does not exist' }],
      })
    }

    review = await reviewModel.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: { approved: true } },
      { new: true },
    )
    res.json(review)
  } catch (err) {
    console.error('updateReviews Route: ', err.message)
    res.status(500).send('Server Error')
  }
})

// @Route   PUT api/review/update-review-comment/:id
// @Desc    Update Review Status and Comment
// @Action  updateReviewComment()
// @Access  Private
router.post('/update-review-comment/:id', async (req, res) => {
  try {
    let review = await reviewModel.findById(req.params.id)
    // Check if it exsists
    if (!review) {
      return res.status(400).json({
        errors: [{ msg: 'Reviews does not exist' }],
      })
    }

    review = await reviewModel.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: { approved: true, 'review.comment': '' } },
      { new: true },
    )
    res.json(review)
  } catch (err) {
    console.error('updateReviews Route: ', err.message)
    res.status(500).send('Server Error')
  }
})

// @Route   DELTE api/review/delete-review/:id
// @Desc    Delete Reviews
// @Action  deleteReviews()
// @Access  Private
router.delete('/delete-review/:id', async (req, res) => {
  try {
    const review = await reviewModel.findOneAndRemove({
      _id: req.params.id,
    })
    if (!review) {
      return res.status(400).json({
        errors: [{ msg: 'Reviews was not found' }],
      })
    }
    const allReviews = await reviewModel.find()
    if (allReviews.length <= 0) {
      return res.status(400).json({
        errors: [{ msg: 'No review was found' }],
      })
    }
    res.json(allReviews)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
