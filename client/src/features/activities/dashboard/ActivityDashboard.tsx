import {Grid2} from '@mui/material'; // List, ListItem, ListItemText
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';

type Props = {
    activities: Activity[];
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    selectedActivity?: Activity;
};

export default function ActivityDashboard({
    activities,
    cancelSelectActivity,
    selectActivity,
    selectedActivity,
}: Props) {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                {/* <List>
                    {activities.map((activity) => (
                        <ListItem key={activity.id}>
                            <ListItemText>{activity.title}</ListItemText>
                        </ListItem>
                    ))}
                </List> */}
                <ActivityList
                    activities={activities}
                    selectActivity={selectActivity}
                />
            </Grid2>
            <Grid2 size={5}>
                {selectedActivity && (
                    <ActivityDetails
                        activity={selectedActivity}
                        cancelSelectActivity={cancelSelectActivity}
                    />
                )}
            </Grid2>
        </Grid2>
    );
}
