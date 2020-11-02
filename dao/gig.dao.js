const Gig = require('../models/Gig');
var gigDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateGig: updateGig
}

function findAll() {
    return Gig.findAll();
}

function findById(id) {
    return Gig.findByPk(id);
}

function deleteById(id) {
    return Gig.destroy({ where: { id: id } });
}

function create(gig) {
    var newGig = new Gig(gig);
    return newGig.save();
}

function updateGig(gig, id) {
    var updateGig = {
        title: gig.title,
        technologies: gig.technologies,
        description: gig.description,
        budget: gig.budget,
        contact_email: gig.contact_email
    };
    return Gig.update(updateGig, { where: { id: id } });
}
module.exports = gigDao;