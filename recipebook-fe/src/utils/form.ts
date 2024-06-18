export const createHandleChange = <T extends Record<string, unknown>> (setForm: React.Dispatch<React.SetStateAction<T>>) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) =>
{
    const { id, value } = event.target;
    setForm((prevForm) => ({
        ...prevForm,
        [id]: value,
    }));
};
