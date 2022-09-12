import joi from "joi";

const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

const signupSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required()
})

const valueSchema = joi.object({
    description: joi.string().required(),
    value: joi.string().regex(/(?<=^| )\d+(\.\d+)?(?=$| )/).required()
})

function loginValidation(req, res, next) {
    const login = req.body;
    const validateLogin = loginSchema.validate(login)

    if (validateLogin.error) {
        res.status(422).send("preencha corretamente os campos");
        return;
    } else {

        res.locals.user = req.body;
    }


    next();
}

function signUpValidation(req, res, next) {
    const signup = req.body;
    const validateSignup = signupSchema.validate(signup)

    if (validateSignup.error) {
        res.status(422).send("preencha corretamente os campos");
        return;
    } else {

        res.locals.user = req.body;
    }


    next();
}

function addValuesValidation(req, res, next) {
    const value = req.body;
    const validateValue = valueSchema.validate(value)

    if (validateValue.error) {
        res.status(422).send("preencha corretamente os campos");
        return;
    } else {

        res.locals.value = req.body;
    }


    next();
}

export { addValuesValidation, signUpValidation, loginValidation };