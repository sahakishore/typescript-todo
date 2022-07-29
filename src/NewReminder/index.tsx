import React, {useState} from 'react';

interface NewReminderProps {
    onAddReminder: (title: string)=> void;
}

function NewReminder(props: NewReminderProps) : JSX.Element {


    const {onAddReminder} = props

    const [title, setTitle] = useState('')

    const submitForm = (e: React.FormEvent)=> {
        e.preventDefault()

        console.log(title)

        if(!title) return
        onAddReminder(title)
        setTitle('')
    }

    return (
        <form
        onSubmit={submitForm}
        >
            <label htmlFor="title"></label>
                
                <input 
                onChange={e=> setTitle(e.target.value)}
                id="title"
                value={title}
                type="text"
                className="form-control"
                 />
               
                <button type='submit' className="my-3 btn btn-primary rounded-pill">
                    Add Reminder
                </button>
        </form>
    );
}

export default NewReminder;