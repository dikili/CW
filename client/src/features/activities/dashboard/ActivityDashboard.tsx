import {Grid2} from '@mui/material'; // List, ListItem, ListItemText
import ActivityList from './ActivityList';

export default function ActivityDashboard() {
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
                <ActivityList />
            </Grid2>
            <Grid2 size={5}>Actovity filters go here</Grid2>
        </Grid2>
    );
}
