module.exports = (title, tech, desc, contact_email) => {
    const errors = [];
    //Check
    if(!title) errors.push({ text: 'please enter title for the job' });
    if(!tech) errors.push({ text: 'please enter technoliges for the job' });
    if(!desc) errors.push({ text: 'please enter description for the job' });
    if(!contact_email) errors.push({ text: 'please enter contact email for the job' });
    return errors;
}