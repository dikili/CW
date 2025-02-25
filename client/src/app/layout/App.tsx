import {Box, Container, CssBaseline, Typography} from '@mui/material';
import {useState} from 'react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import {useActivities} from '../../lib/hooks/useActivities';

function App() {
    // RQ  const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<
        Activity | undefined
    >(undefined);
    const [editMode, setEditMode] = useState(false);
    const {activities, isPending, updateActivity} = useActivities();

    // RQ useEffect(() => {
    //     axios
    //         .get<Activity[]>('https://localhost:5001/api/activities')
    //         .then((response) => setActivities(response.data));
    // }, []);

    const handleSelectActivity = (id: string) => {
        setSelectedActivity(activities!.find((x) => x.id === id));
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
        console.log(updateActivity);
    };

    return (
        <Box sx={{bgColor: '#eeeeee', minHeight: '100vh'}}>
            <CssBaseline />
            <NavBar openForm={handleOpenForm} />
            <Container maxWidth='xl' sx={{mt: 3}}>
                {!activities || isPending ? (
                    <Typography>Loading...</Typography>
                ) : (
                    <ActivityDashboard
                        activities={activities}
                        selectActivity={handleSelectActivity}
                        cancelSelectActivity={handleCancelSelectActivity}
                        selectedActivity={selectedActivity}
                        openForm={handleOpenForm}
                        closeForm={handleCloseForm}
                        editMode={editMode}
                        // submitForm={handleSubmitForm}
                    />
                )}
            </Container>
        </Box>
    );
}

export default App;
