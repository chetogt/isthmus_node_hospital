import { body } from 'express-validator';

const validations = [
    body('name').exists().withMessage('Name is required.'),
    body('name').if(body('name').exists()).isLength({min: 8}).withMessage('Min length of name is 8 characters'),
    body('maxPatients').exists().withMessage('Max patients is required'),
    body('staff').exists().withMessage('Staff is required'),
];

export default validations;