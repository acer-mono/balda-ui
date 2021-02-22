import React, {ChangeEvent, useEffect} from 'react';
import {
    InputLabel,
    FormControl,
    InputAdornment,
    IconButton,
    OutlinedInput,
    Button,
    Paper
} from "@material-ui/core";
import {Visibility, VisibilityOff, SupervisedUserCircle} from "@material-ui/icons";
import './RegistrationView.css'

const styles = {
    width: 500
}

const RegistrationView = () => {
    const [values, setValues] = React.useState({
        name: '',
        password: '',
        showPassword: false,
        image: ''
    });

    const handleClickShowPassword = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
    };

    const handleChange = (prop: string) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    useEffect(() => {
        fetch(`https://source.unsplash.com/random/${styles.width}x${styles.width/2}`).then((response) => {
            setValues({...values, image: response.url});
        })
    }, []);

    return (
        <Paper className="Card" style={{width: `${styles.width}px`}} variant="outlined">
            <img alt="Random" src={values.image} />
            <form noValidate autoComplete="off">
                <FormControl margin="normal" fullWidth variant="outlined">
                    <InputLabel htmlFor="login">Login</InputLabel>
                    <OutlinedInput
                        id="login"
                        type='text'
                        value={values.name}
                        onChange={handleChange('name')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end">
                                    <SupervisedUserCircle />
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
                <FormControl margin="normal" fullWidth variant="outlined">
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <OutlinedInput
                        id="password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end">
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <Button fullWidth type='submit' size="large" variant="contained" color="primary">
                        Register
                    </Button>
                </FormControl>
            </form>
        </Paper>
    );
}

export default RegistrationView;
