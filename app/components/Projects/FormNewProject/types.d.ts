
export interface IFormNewProjectProps {
	onCloseModal: () => void;
}

export interface IFormProjectData {
	name: string;
	description: string;
	initialDate: Date;
	endDate: Date;
	responsible: string;
}