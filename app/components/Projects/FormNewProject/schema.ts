import * as yup from 'yup';

export const projectDataSchema = yup.object().shape({
	name: yup.string().required("O nome é obrigatório"),
	description: yup.string().required("Descrição é obrigatório"),
	initialDate: yup
		.date()
		.required("Data inicial é obrigatória"),
	endDate: yup
		.date()
		.required("Data final é obrigatória"),
	responsible: yup
		.string()
		.required("Responsável é obrigatório")
});
