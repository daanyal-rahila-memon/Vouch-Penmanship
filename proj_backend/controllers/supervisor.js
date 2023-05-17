const crypto = require("crypto")
const uuidv4 = require("uuid/v4")
const Supervisor = require("../models/supervisor")

// This function will work with 'params', bcz we've the 'id' (parameter) here
exports.getSupervisorById = (req, res, next, id) => {
    // execute the function findById(id) - which is populated/has 'id' & is a function of Supervisor model
    Supervisor.findById(id).exec((error, supervisor) => {
        // whenever database callbacks are called it returns 2 things: error or the object, itself if it was found
        if (error || !supervisor) {
            // First we'll check for the error or if no object was found
            // then
            return res.status(400).json({
                error: "No supervisor found in Database",
            })
        } // if no error & the supervisor was found
        else {
            // then we'll store the supervisor
            req.profile = supervisor // store all the object data - driven from database - in req.profile
            next()
        }
    })
}

// this function will work when someone will call the function without 'params' => gets the supervisor (object) and to show supervisor's stored information over the screen (frontend)
exports.getSupervisor = (req, res) => {
    // As in getSupervisorById, we already have everything in req.profile, now just have to respond it back

    // Following will only change in the data which is being sent to the frontend
    req.profile.salt = undefined // Make the salt undefined so that it should not be displayed over the frontend, as it's a private information
    req.profile.encryPassword =
        req.profile.createdAt =
        req.profile.updatedAt =
            undefined // Make the encryPassword, createdAt, and updatedAt undefined so that it should not be displayed over the frontend, as it's a private information
    // For above lines of code: We are not setting these properties undefined in the database, instead it is just in the profile object (temporarily) over the frontend

    return res.json(req.profile)
}

exports.getAllSupervisors = (req, res) => {
    Supervisor.find().exec((error, supervisors) => {
        if (error || !supervisors) {
            return res.status(400).json({
                error: "No Supervisors found",
            })
        }
        return res.json(supervisors)
    })
}

exports.updateSupervisor = (req, res) => {
    // This can update all the information of the supervisor besides the password
    // Update the supervisor information
    // password will be updated in this function
    Supervisor.findByIdAndUpdate(
        { _id: req.profile._id }, // id will remain the same
        { $set: req.body }, // sets the new supervisor information which is coming - in req.body - from the frontend to the old supervisor information
        { new: true, useFindAndModify: false }, // "new: true", it'll return the new/updated document
        (error, supervisor) => {
            if (error) {
                // we won't be checking !supervisor in this as if no object was to be found then the error has already been come up above, at {_id: req.profile._id}
                return res.status(400).json({
                    error: "You're not authorized to update this supervisor",
                })
            } else {
                // Following will only change in the data which is being sent to the frontend
                supervisor.salt =
                    supervisor.encryPassword =
                    supervisor.createdAt =
                    supervisor.updatedAt =
                        undefined // Make the encryPassword, createdAt, and updatedAt undefined so that it should not be displayed over the frontend, as it's a private information

                res.json(supervisor)
            }
        }
    )
}

// TODO: Correct this functionality
// to update the password for the supervisor
exports.updateSupervisorPassword = (req, res) => {
    let salt = uuidv4()
    let Password = crypto
        .createHmac("sha256", salt)
        .update(req.body.password)
        .digest("hex")

    // Find Supervisor by ID and look if he's entered the password & email to change the password, then check if does the email exist, then change the password
    Supervisor.findByIdAndUpdate(
        { _id: req.profile._id }, // Replace with the _id of the user you want to update
        { password: Password }, // Replace with the new name you want to set
        { new: true }, // Return the updated document
        (err, obj) => {
            if (err) {
                console.log(err)
            } else {
                console.log(obj)
            }
        }
    )
}

exports.deleteSupervisor = (req, res) => {
    Supervisor.findByIdAndDelete(req.profile.id, (error, supervisor) => {
        if (error) {
            return res.status(400).json({
                error: "No Supervisor found in Database",
            })
        } else {
            return res.json({
                supervisor,
                Deleted: "Success",
            })
        }
    })
}
