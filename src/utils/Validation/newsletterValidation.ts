import * as yup from 'yup';

interface TestValidationSchema {
  email: string;
}

const validationSchema: yup.ObjectSchema<TestValidationSchema> = yup.object({
  email: yup
    .string()
    .email('components.createAccount.invalidEmailAddress')
    .required('components.createAccount.requiredFieldError'),
});

export default validationSchema;
