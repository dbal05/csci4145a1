/**
 * Bmi889Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    // calculatebmi889:function(req, res) {
    //     res.view('pages/bmi');
    // },
    calculate:function(req, res) {
        var height = parseFloat(req.body.height);
        var weight = parseFloat(req.body.weight);
        var body = req.body.body;

        if (!height) {
            return res.badRequest();
        } else if (!weight) {
            return res.badRequest();
        } else {
            var bmi = weight/(height*height);
            bmi = Math.round(bmi, 2);
            return res.view('pages/bmi', {bmi: bmi})
            // res.redirect('/bmi889/calculatebmi889');
        }

    }
};

