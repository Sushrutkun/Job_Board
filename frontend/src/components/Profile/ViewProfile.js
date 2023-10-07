import { makeStyles } from '@material-ui/styles';
import { Avatar, Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, FilledInput, Grid, IconButton, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import theme from "../../theme/theme"
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';

const useStyles = makeStyles(() => ({
    skillChip: {
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "15.5px",
        borderRadius: "5px",
        transition: ".2s",
        cursor: "pointer",
        fontWeight: 600,
        border: `1px solid ${theme.palette.dark.main}`,
        color: theme.palette.dark.main,

        "&.selected": {
            backgroundColor: theme.palette.dark.main,
            color: "#fff",
        },
    },
}));

const ViewProfile = ({ setShowProfile, themePage }) => {
    const skill = [
        "Javascript",
        "React",
        "Node",
        "Vue",
        "Firebase",
        "MongoDB",
        "SQL",
    ];
    const [selectedSkills, setSelectedSkills] = useState([]);
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const toggleSkill = (skill) => {
        if (selectedSkills.includes(skill)) {
            setSelectedSkills(selectedSkills.filter((s) => s !== skill));
            // Remove the skill from formData.skills
            setFormData({ ...formData, skills: formData.skills.filter((s) => s !== skill) });
        } else {
            setSelectedSkills([...selectedSkills, skill]);
            // Add the skill to formData.skills
            setFormData({ ...formData, skills: [...formData.skills, skill] });
        }
    };

    const handleSubmitForm = (formData) => {
        console.log(formData)
        axios.post(`${BASE_URL}api`, formData)
            .then((response) => {
                console.log(formData)
                // Handle success, e.g., show a success message
                console.log('Data successfully sent:', response.data);
            })
            .catch((error) => {
                // Handle error, e.g., show an error message
                console.error('Error:', error);
            });
    };

    const [formData, setFormData] = useState({
        job_title: '',
        company_commitment: 'Full-time',
        job_type: 'Remote',
        company_name: '',
        company_url: '',
        company_joblink: '',
        job_description: '',
        skills: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        handleSubmitForm(formData);
        // console.log(formData)
        setFormData({
            job_title: '',
            company_commitment: 'Full-time',
            job_type: 'Remote',
            company_name: '',
            company_url: '',
            company_joblink: '',
            job_description: '',
            skills: ''
        });
        setSelectedSkills([]);
    };
    const classes = useStyles();
    const username = localStorage.getItem("username");
    // console.log(username);
    const email = localStorage.getItem("email");
    // console.log(email);
    const password = localStorage.getItem("token");
    // console.log(password);


    return (
        <Dialog open={true} onSubmit={handleSubmit} style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center' }} >
            <DialogTitle style={{marginBottom:'-10px',marginTop:'-10px'}}>
                <Box style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Box>
                        Your Profile
                    </Box>
                    <Box>
                        <IconButton>
                            <CloseIcon onClick={() => {
                                setShowProfile(false);
                            }} />
                        </IconButton>
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent style={{ backgroundColor: themePage ? theme.palette.dark.main : theme.palette.light.main }}>
                <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Typography style={{ color: themePage ? theme.palette.light.main : theme.palette.dark.main }}>
                        Your Profile
                    </Typography>
                    <IconButton
                        className="imgcontainer"
                        style={{ marginBottom: '20px', color: themePage ? theme.palette.light.main : theme.palette.dark.main }}
                    >
                        <Avatar
                            src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                            alt="Avatar"
                            className="avatar"
                            sx={{
                                width: '90px', // Set the avatar width
                                height: '90px', // Set the avatar height
                            }}
                        />
                    </IconButton>
                </Container>
                <Container>
                    <Container>
                        <Typography style={{ color: themePage ? theme.palette.light.main : theme.palette.dark.main }}>
                            Username : {username}
                        </Typography>
                        <Typography style={{ color: themePage ? theme.palette.light.main : theme.palette.dark.main }}>
                            Email : {email}
                        </Typography>
                        {/* <Typography style={{ color: themePage ? theme.palette.light.main : theme.palette.dark.main }}>
                            Password : {password}
                        </Typography> */}

                    </Container>
                </Container>
            </DialogContent>
            {/* <DialogContent >
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput placeholder='Job title *' name='job_title' disableunderline fullWidth value={formData.job_title} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            fullWidth
                            disableunderline="true"
                            variant='filled'
                            defaultValue={"Full-time"}
                            name='company_commitment'
                            value={formData.company_commitment}
                            onChange={handleChange}
                        >
                            <MenuItem value="Full-time">Full-time</MenuItem>
                            <MenuItem value="Part-time">Part-time</MenuItem>
                            <MenuItem value="Intern">Intern</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder='Company name *' disableunderline="true" name='company_name' fullWidth value={formData.company_name} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder='Company URL *' disableunderline="true" name='company_url' fullWidth value={formData.company_url} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            fullWidth
                            disableunderline="true"
                            variant='filled'
                            defaultValue={"Remote"}
                            name='job_type'
                            value={formData.job_type}
                            onChange={handleChange}
                        >
                            <MenuItem value="Remote">Remote</MenuItem>
                            <MenuItem value="In office">In office</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput placeholder='Job Link *' disableunderline="true" fullWidth name='company_joblink' value={formData.company_joblink} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput
                            placeholder='Job description *'
                            disableunderline="true"
                            fullWidth
                            multiline
                            rows={4}
                            name='job_description'
                            value={formData.job_description}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <Box>
                    <Typography>Skills</Typography>
                    <Box display={"flex"} name='skills' value={formData.skills} onChange={handleChange}>
                        {skill.map((skill) => (
                            <Box
                                key={skill}
                                className={`${classes.skillChip} ${selectedSkills.includes(skill) ? 'selected' : ''
                                    }`}
                                onClick={() => toggleSkill(skill)}
                            >
                                {skill}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </DialogContent> */}
            {/* <DialogActions>
                <Box
                    color={"red"}
                    width={"100%"}
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={'center'}
                >
                    <Typography>*Required fields</Typography>
                    <Button variant="contained" disableElevation color='primary' onClick={() => {
                        handleSubmit()
                    }}>Post job</Button>
                </Box>
            </DialogActions> */}
        </Dialog>
    )
}

export default ViewProfile
