const Manuscript = require("../models/manuscript");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs"); // we need to require File System which contains the directory/location of the file (Manuscript, image files, etc...)

exports.getManuscriptById = (req, res, next, id) => {
  Manuscript.findById(id)
    .populate("category") // bringing the manuscripts on the basis of category
    .exec((error, manuscript) => {
      if (error || !manuscript) {
        return res.status(400).json({
          error: "Manuscript not found",
        });
      }
      req.manuscript = manuscript;
      next();
    });
};

exports.createManuscript = (req, res) => {
  let form = new formidable.IncomingForm(); // instantiation of form object -- 'form' takes 3 parameters; 1) error, 2) fields/names, 3) files
  form.keepExtensions = true; // we want keep the extensions of the incoming file (.mp3, .pdf, etc...)

  form.parse(req, (error, fields, file) => {
    if (error) {
      return res.status(400).json({
        error: "Problem with the file",
      });
    }

    {     // Testing
      // console.log(fields);
      // console.log(file);
    }

    // restrictions on the fields
    const { title, category } = fields; // destructure the fields

    if (!title || !category) {
      return res.status(400).json({
        errorMessage: "Please include all the fields",
      });
    }

    const { document } = file;
    if (!document) {
      return res.status(400).json({
        errorMessage: "Please upload the file",
      });
    }

    let uploadedManuscript = new Manuscript(fields);

    // handle the file here
    if (file.document) {
      if (file.document.size > 5242880) {
        // Max Size: 5MB
        return res.status(400).json({
          error: "File size exceeds",
        });
      }
      uploadedManuscript.document.data = fs.readFileSync(file.document.path); // In 'Manuscript' model, there's a field of data which stores the direcory/location of the document
      uploadedManuscript.document.contentType = file.document.type;
    }

    // save the document to the database
    uploadedManuscript.save((error, obj) => {
      if (error || !obj) {
        return res.status(400).json({
          error: "Saving Manuscript in database failed",
        });
      }
      return res.json(obj);
    });
  });
};

exports.getManuscript = (req, res) => {
  req.manuscript.document = undefined;    // as document is large in size so we'd be getting it in the middleware just for 'performance optimization'
  return res.json(req.manuscript);
}

// middleware to get the document
exports.getDocument = (req, res, next) => {
  if(req.manuscript.document.data) {
    res.set("Content-Type", req.manuscript.document.contentType);
    return res.send(req.manuscript.document.data);
  }
  next();
}