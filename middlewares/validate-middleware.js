const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 422;
    console.log(err);
    const message = err.errors[0].message;
    const error = {
      status,
      message,
    };
    // res.status(400).json({ message });
    next(error);
  }
};

module.exports = validate;
