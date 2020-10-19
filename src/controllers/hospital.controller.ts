import { Request, Response, Router} from 'express';
import config from 'config';
import Hospital from '../models/hospital';
import { ErrorHandler, handleError } from '../error';
import hospitalValidations from '../middlewares/hospital/hospital.validator';
import validator from '../middlewares/validator';

const router = Router();

router.post('/', hospitalValidations, validator, async (req: Request, res: Response) => {
    const { name, maxPatients, staff } = req.body;
    try {
        let hospital = await Hospital.findOne({ name });
        if (hospital) {
            const custom = new ErrorHandler(400, 'Hospital already exists');
            handleError(custom, req, res);
        }
        hospital = new Hospital({
            name,
            maxPatients,
            staff
        });
        //user.password = await bcrypt.hash(password, salt);

        await hospital.save();

        res.status(200).json({
            data: { hospital },
            msj: 'Hospital created'
        });
    } catch (err) {
        console.log(err);
        const custom = new ErrorHandler(500, 'Server error');
        handleError(custom, req, res);
    }
});

export default router;