const { validationResult } = require("express-validator");


module.exports = (req, res, next) => {
    const error = validationResult(req).formatWith(({ msg }) => msg);

    console.log(req.body)

    const hasError = !error.isEmpty();
    
    if (hasError) {
        res.status(422).json({ error: error.array() });
    } else {
        next();
    }
      
}