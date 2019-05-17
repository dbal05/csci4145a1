/**
 * Bmi889Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    calculatebmi889:function(req, res) {
        res.view('pages/bmi');
    },
    calculate:function(req, res) {
        var height = req.body.title;
        var weight = req.body.weight;
        var body = req.body.body;

        var bmi = weight/(height*height);
        bmi = Math.round(bmi, 2);
        res.redirect('/bmi889/calculatebmi889');
    }
};

