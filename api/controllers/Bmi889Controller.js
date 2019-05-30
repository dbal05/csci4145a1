/**
 * Bmi889Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    calculateBMI889:function(req, res) {
        var height = parseFloat(req.body.height);
        var weight = parseFloat(req.body.weight);

        if (!height) {
            return res.badRequest('Please enter Height');
        } else if (!weight) {
            return res.badRequest('Please enter Weight');
        } else {
            var bmi = weight/(height*height);
            bmi = Math.round(bmi, 2);
            // res.view('pages/bmi', {bmi: bmi});
            return res.json({bmi: bmi});
        }
    }
};

/* Useful docker commands:
docker build -t back-end .
docker run -it --rm -p 1337:1337 back-end

docker login
docker tag back-end dahnbalan/back-end
docker push dahnbalan/back-end

docker images
*/

