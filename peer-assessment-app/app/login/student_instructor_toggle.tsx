import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


export default function StudentInstructorToggle() {
    const [userType, setUserType] = React.useState('student');
    
    const handleAlignment = (event: React.MouseEvent<HTMLElement>, newType: string) => {
        if (newType !== null) {
        setUserType(newType);
        }
    };

    return (
        <>
            <ToggleButtonGroup
                value={userType}
                exclusive
                onChange={handleAlignment}
                aria-label="User type selection"
            >
                <ToggleButton value="student" aria-label="Student" disableRipple={true}>
                    Student
                </ToggleButton>
                <ToggleButton value="instructor" aria-label="Instructor" disableRipple={true}>
                    Instructor
                </ToggleButton>
            </ToggleButtonGroup>
            <input type="hidden" name="userType" value={userType} />
        
        </>
    );
}