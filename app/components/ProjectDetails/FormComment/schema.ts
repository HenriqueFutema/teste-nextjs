import * as yup from 'yup';

export const commentDataSchema = yup.object().shape({
	content: yup.string().required("O nome é obrigatório"),
});
