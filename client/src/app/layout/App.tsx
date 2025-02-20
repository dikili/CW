import {Box, Container, CssBaseline} from '@mui/material';
import axios from 'axios';
import {useEffect, useState} from 'react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<
        Activity | undefined
    >(undefined);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        axios
            .get<Activity[]>('https://localhost:5001/api/activities')
            .then((response) => setActivities(response.data));
    }, []);

    const handleSelectActivity = (id: string) => {
        setSelectedActivity(activities.find((x) => x.id === id));
    };

    const handleCancelSelectActivity = () => {
        setSelectedActivity(undefined);
    };

    const handleOpenForm = (id?: string) => {
        if (id) handleSelectActivity(id);
        else setSelectedActivity(undefined);
        setEditMode(true);
    };

    const handleCloseForm = () => {
        setEditMode(false);
    };

    const handleSubmitForm = (activity: Activity) => {
        setEditMode(false);
        if (activity.id) {
            setActivities(
                activities.map((x) => (x.id === activity.id ? activity : x)),
            );
            setSelectedActivity(undefined);
        } else {
            const newActivity = {...activity, id: activities.length.toString()};
            setSelectedActivity(newActivity);
            setActivities([...activities, newActivity]);
        }
    };

    const handleDeleteActivity = (id: string) => {
        setActivities(activities.filter((x) => x.id !== id));
    };

    return (
        <Box sx={{bgColor: '#eeeeee'}}>
            <CssBaseline />
            <NavBar openForm={handleOpenForm} />
            <Container maxWidth='xl' sx={{mt: 3}}>
                <ActivityDashboard
                    activities={activities}
                    selectActivity={handleSelectActivity}
                    cancelSelectActivity={handleCancelSelectActivity}
                    selectedActivity={selectedActivity}
                    openForm={handleOpenForm}
                    closeForm={handleCloseForm}
                    editMode={editMode}
                    submitForm={handleSubmitForm}
                    deleteActivity={handleDeleteActivity}
                />
            </Container>
        </Box>
    );
}

export default App;
