import { qaService } from '../../services/qaService';

export const handleEdit = (index, editableRows, setEditableRows) => {
    if (editableRows.includes(index)) {
        setEditableRows(editableRows.filter((rowIndex) => rowIndex !== index));
    } else {
        setEditableRows([...editableRows, index]);
    }
};

export const handleSave = async (index, customersGlobal, setEditableRows) => {
    await qaService.putQa(customersGlobal[index]);
    setEditableRows(editableRows.filter((rowIndex) => rowIndex !== index));
};

export const handleDelete = async (index, customersGlobal, setUpdatePage) => {
    await qaService.DeleteQa(customersGlobal[index]);
    setUpdatePage((prevState) => !prevState);
};

