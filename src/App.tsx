import { useEffect, useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';
import NewReminder from './NewReminder';
import reminderService from './services/reminder';
// const reminders: Reminder[] = [
//   {id: 0, title: "Drink water"},
//   {id: 1, title: "Complete Login design"},
//   {id: 2, title: "Eat dinner"},
//   {id: 3, title: "Morning Walk"},
//   {id: 4, title: "Sleep early"}
// ]

function App() {

  const loadReminders = async ()=> {
    const remindersFromApi = await reminderService.getReminders()

    setReminders(remindersFromApi)
  }

  const removeReminder = async (id: number)=> {
  //  const removedItemResp = await reminderService.removeReminder(id)

setReminders(reminders.filter(reminder => reminder.id !== id))

  }

  const addReminder = async (title: string)=> {

    const newReminder = await reminderService.addReminder(title)

    setReminders([newReminder, ...reminders])

  }

  useEffect(()=> {
    loadReminders()
  },[])

  const [reminders, setReminders] = useState<Reminder[]>([
      
  ])


  return (
    <div className="App">
      
      <NewReminder onAddReminder={addReminder}/>

      <ReminderList 
      items={reminders}
      onRemoveReminder={removeReminder}
      />
      {/* <button className="btn btn-primary">Click Me</button> */}
    </div>
  );
}

export default App;
