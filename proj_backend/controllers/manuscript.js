const Manuscript = require("../models/manuscript")
const formidable = require("formidable")
const _ = require("lodash")
const fs = require("fs") // we need to require File System which contains the directory/location of the file (Manuscript, image files, etc...)

exports.getManuscriptById = (req, res, next, id) => {
    Manuscript.findById(id)
        .populate("category") // bringing the manuscripts on the basis of category
        .exec((error, manuscript) => {
            if (error || !manuscript) {
                return res.status(400).json({
                    error: "Manuscript not found",
                })
            }
            req.manuscript = manuscript
            next()
        })
}

exports.createManuscript = (req, res) => {
    // let form = new formidable.IncomingForm(); // instantiation of form object -- 'form' takes 3 parameters; 1) error, 2) fields/names, 3) files
    // form.keepExtensions = true; // we want keep the extensions of the incoming file (.mp3, .pdf, etc...)

    // form.parse(req, (error, fields, file) => {
    //   if (error) {
    //     return res.status(400).json({
    //       error: "Problem with the file",
    //     });
    //   }
    //   console.log("in parse");
    //   {
    //     // Testing
    //     // console.log(fields);
    //     // console.log(file);
    //   }

    //   // restrictions on the fields
    //   const { title, category } = fields; // destructure the fields

    //   if (!title || !category) {
    //     return res.status(400).json({
    //       errorMessage: "Please include all the fields",
    //     });
    //   }

    //   const { document } = file;
    //   if (!document) {
    //     return res.status(400).json({
    //       errorMessage: "Please upload the file",
    //     });
    //   }
    //   console.log(document);

    //   let uploadedManuscript = new Manuscript(fields);

    //   // handle the file here
    //   if (file.document) {
    //     if (file.document.size > 5242880) {
    //       // Max Size: 5MB
    //       return res.status(400).json({
    //         error: "File size exceeds",
    //       });
    //     }
    //     uploadedManuscript.document.data = fs.readFileSync(file.document.path); // In 'Manuscript' model, there's a field of data which stores the direcory/location of the document
    //     uploadedManuscript.document.contentType = file.document.type;
    //   }

    //   uploadedManuscript.student = req.profile._id;
    //   // save the document to the database
    //   uploadedManuscript.save((error, obj) => {
    //     if (error || !obj) {
    //       return res.status(400).json({
    //         error: "Saving Manuscript in database failed",
    //       });
    //     }
    //     return res.json(obj);
    //   });
    // });
    console.log("hello")
    console.log(req.profile._id)
    req.body.student = req.profile._id
    const manuscriptObj = new Manuscript(req.body)
    // manuscriptObj.student = request.profile._id;
    manuscriptObj.save((error, obj) => {
        if (error || !obj) {
            return res.status(400).json({
                error: "Saving Manuscript in database failed",
            })
        }
        return res.json(obj)
    })
}

exports.getManuscript = (req, res) => {
    req.manuscript.document = undefined // as document is large in size so we'd be getting it in the middleware just for 'performance optimization'
    return res.json(req.manuscript)
}

exports.getStudentManuscripts = (req, res) => {
    console.log("in getStudentManuscripts")
    Manuscript.find({ student: req.profile._id }).exec((error, manuscripts) => {
        if (error) {
            return res.status(400).json({
                error: "No Manuscripts found for this student",
            })
        }
        console.log(manuscripts)
        return res.json(manuscripts)
    })
}

exports.getAllManuscripts_NFT = (req, res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 12
    let sortBy = req.query.sort ? req.query.sort : "_id"

    Manuscript.find({ nft: true }) // only bring those manuscripts which are minted to NFT
        .select("-document") // it tells teh request to bring everything of this object from the database except document
        .populate("category")
        .sort([[sortBy, "asc"]]) // sort on these properties
        .limit(limit) // limit tells how many documents to return for each request
        .exec((error, manuscript) => {
            if (error) {
                return res.status(400).json({
                    error: "No NFT Found",
                })
            }
            return res.json(manuscript)
        })
}

// TODO: update thsi function according to the once done in 10.10 video
// setDocument
exports.setDocument = (req, res) => {
    Student.findByIdAndUpdate(
        { _id: req.profile._id }, // Search this student
        { manucript: req.body }, // sets the new student information which is coming - in req.body - from the frontend to the old student information
        { new: true, useFindAndModify: false }, // "new: true", it'll return the new/updated document
        (error, student) => {
            if (error) {
                // we won't be checking !student in this as if no object was to be found then the error has already been come up above, at {_id: req.profile._id}
                return res.status(400).json({
                    error: "You're not authorized to update this student",
                })
            } else {
                // Following will only change in the data which is being sent to the frontend
                student.salt =
                    student.encryPassword =
                    student.createdAt =
                    student.updatedAt =
                        undefined // Make the encryPassword, createdAt, and updatedAt undefined so that it should not be displayed over the frontend, as it's a private information

                res.json(student)
            }
        }
    )
}

// middleware to get the document
exports.getDocument = (req, res, next) => {
    if (req.manuscript.document.data) {
        res.set("Content-Type", req.manuscript.document.contentType)
        return res.send(req.manuscript.document.data)
    }
    next()
}

exports.updateManuscript = (req, res) => {
    let form = new formidable.IncomingForm() // instantiation of form object -- 'form' takes 3 parameters; 1) error, 2) fields/names, 3) files
    form.keepExtensions = true // we want keep the extensions of the incoming file (.mp3, .pdf, etc...)

    form.parse(req, (error, fields, file) => {
        if (error) {
            return res.status(400).json({
                error: "Problem with the file",
            })
        }

        {
            // Testing
            // console.log(fields);
            // console.log(file);
        }

        let updateManuscript = req.manuscript
        updateManuscript = _.extend(updateManuscript, fields) // 2 parameters; 1) to be updated fields (taken by the object), 2) updated values of the fields (passed from the frontend)

        // handle the file here
        if (file.document) {
            if (file.document.size > 5242880) {
                // Max Size: 5MB
                return res.status(400).json({
                    error: "File size exceeds",
                })
            }
            updateManuscript.document.data = fs.readFileSync(file.document.path) // In 'Manuscript' model, there's a field of data which stores the direcory/location of the document
            updateManuscript.document.contentType = file.document.type
        }

        // save the document to the database
        updateManuscript.save((error, obj) => {
            if (error || !obj) {
                return res.status(400).json({
                    error: "Updation of the manuscript failed",
                })
            }
            return res.json(obj)
        })
    })
}

exports.deleteManuscript = (req, res) => {
    let manuscript = req.manuscript
    manuscript.remove((error, deletedManuscript) => {
        if (error) {
            return res.status(400).json({
                error: "Failed to delete the manuscript",
            })
        }
        return res.json(`${deletedManuscript} deleted succesfully`)
    })
}
