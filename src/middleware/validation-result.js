import { validationResult } from 'express-validator';

export default function CheackValidation(req, res, next) {
  const error = validationResult(req).formatWith(({ msg }) => msg);

  const hasError = !error.isEmpty();

  if (hasError) {
    const messages = error.errors.map(({ msg, param }) => ({ msg, param }));

    res.status(422).json({ errors: messages, status: 422, ok: false });
  } else {
    next();
  }
}
