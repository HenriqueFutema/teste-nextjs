import * as yup from 'yup';

export const taskDataSchema = yup.object().shape({
	title: yup.string().required("O nome é obrigatório"),
});
