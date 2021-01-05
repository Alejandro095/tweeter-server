const { validationResult } = require("express-validator");


module.exports = (req, res, next) => {
    const error = validationResult(req).formatWith(({ msg }) => msg);

    const hasError = !error.isEmpty();

    console.log()
    
    if (hasError) {

        const messages = error.errors.map(({ msg, param }) => {
            return {msg, param}
        });

        res.status(422).json({ errors: messages, status:422, ok:false });
    } else {
        next();
    }
}